// Indicadores desktop
function addIndicatorsDestinosDesktop(carrusel) {
  const items = carrusel.querySelectorAll('.carrusel-item');
  const indicatorId = carrusel.id.replace('desktop', 'carrusel-indicators') + "-desktop";
  const indicatorsDiv = document.getElementById(indicatorId);

  if (!indicatorsDiv) return;

  indicatorsDiv.innerHTML = ''; // limpiar indicadores anteriores

  items.forEach((_, i) => {
    const dot = document.createElement('a');
    dot.href = "#";
    dot.classList.add('destinos-indicator');
    dot.setAttribute('aria-label', `Carousel Page ${i + 1}`);
    dot.dataset.slideTo = i;

    // CLICK EN INDICADOR: ir al slide correspondiente
    dot.addEventListener('click', e => {
      e.preventDefault();
      carrusel.currentIndex = i; // actualizar índice
      updateSlide(carrusel);     // mover carrusel-inner al slide
    });

    if (i === 0) {
      dot.classList.add('active');
      dot.setAttribute('aria-current', 'true');
    }

    indicatorsDiv.appendChild(dot);
  });
}

// updateSlide para desktop
function updateSlide(carrusel) {
  const items = carrusel.querySelectorAll('.carrusel-item');
  const inner = carrusel.querySelector('.carrusel-inner');
  const width = items[0].offsetWidth;

  inner.style.transform = `translateX(-${carrusel.currentIndex * width}px)`;
  inner.style.transition = 'transform 0.4s ease';

  // Actualizar indicadores
  const indicatorId = carrusel.id.replace('desktop', 'carrusel-indicators') + "-desktop";
  const indicatorsDiv = document.getElementById(indicatorId);
  if (indicatorsDiv) {
    indicatorsDiv.querySelectorAll('.destinos-indicator').forEach((dot, i) => {
      dot.classList.toggle('active', i === carrusel.currentIndex);
      if (i === carrusel.currentIndex) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
  }
}

// Indicadores mobile
function addIndicatorsDestinosMobile(carrusel) {
  const scrollContainer = carrusel.querySelector('.mobile-scroll');
  const items = Array.from(scrollContainer.querySelectorAll('.card'));
  const indicatorId = carrusel.id.replace('mobile', 'carrusel-indicators') + "-mobile";
  const indicatorsDiv = document.getElementById(indicatorId);
  if (!indicatorsDiv) return;

  indicatorsDiv.innerHTML = '';

  items.forEach((_, i) => {
    const dot = document.createElement('a');
    dot.href = "#";
    dot.classList.add('destinos-indicator');
    dot.setAttribute('aria-label', `Carousel Page ${i + 1}`);
    dot.dataset.slideTo = i;

    dot.addEventListener('click', e => {
      e.preventDefault();
      // Actualiza el scroll al item correspondiente
      scrollContainer.scroll({
        left: items[i].offsetLeft,
        behavior: 'smooth'
      });
      updateMobileIndicators(carrusel, i);
    });

    if (i === 0) {
      dot.classList.add('active');
      dot.setAttribute('aria-current', 'true');
    }

    indicatorsDiv.appendChild(dot);
  });
}

function updateMobileIndicators(carrusel, index) {
  let carruselId = carrusel.id || '';
  let indicatorId = carruselId.replace('mobile', 'carrusel-indicators');
  let indicatorsDiv = document.getElementById(indicatorId + "-mobile");
  if (!indicatorsDiv) return;

  let indicators = indicatorsDiv.querySelectorAll('.destinos-indicator');
  indicators.forEach((ind, i) => {
    if (i === index) {
      ind.classList.add('active');
      ind.setAttribute('aria-current', 'true');
    } else {
      ind.classList.remove('active');
      ind.removeAttribute('aria-current');
    }
  });
}

// Función para actualizar precios y enlaces según origen seleccionado
var list_dep = [];
function actualizar_valores(dep) {
  // Evitar recargar si ya se cargó este dep
  if (list_dep.includes(dep)) {
    console.log('Ya se cargó este dep:', dep);
    return;
  } else {
    // Marcar precios como difuminados para todas las variantes (sin-desk, sin, con-desk, con)
    ['-sin-desk', '-sin', '-con-desk', '-con'].forEach(suffix => {
      const esc = s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const re = new RegExp('^' + esc(dep) + '-.*' + esc(suffix) + '$');
      document.querySelectorAll('[class]').forEach(el => {
        if (Array.from(el.classList).some(cls => re.test(cls))) {
          el.querySelectorAll('.price-amount').forEach(elem => {
            elem.classList.add('blurred-price');
          });
        }
      });
    });
  }

  // Realizar petición AJAX a la API de disponibilidad
  console.log('Actualizando valores para dep:', dep);

  let queryString = $('#params_flights').val() || '';
  let currency = $('#currency').val() || 'clp';
  console.log('dep:', dep);
  console.log('queryString:', queryString);
  const cfgMap = {
  clp: { locale: 'es-CL', opts: { minimumFractionDigits: 0, maximumFractionDigits: 0 } },
  usd: { locale: 'en-US', opts: { minimumFractionDigits: 0, maximumFractionDigits: 2 } },
  eur: { locale: 'de-DE', opts: { minimumFractionDigits: 0, maximumFractionDigits: 2 } },
  ars: { locale: 'es-AR', opts: { minimumFractionDigits: 0, maximumFractionDigits: 2 } },
  brl: { locale: 'pt-BR', opts: { minimumFractionDigits: 0, maximumFractionDigits: 2 } },
  pen: { locale: 'es-PE', opts: { minimumFractionDigits: 0, maximumFractionDigits: 2 } },
  cop: { locale: 'es-CO', opts: { minimumFractionDigits: 0, maximumFractionDigits: 2 } },
  mxn: { locale: 'es-MX', opts: { minimumFractionDigits: 0, maximumFractionDigits: 2 } },
  };

  $.ajax({
    url: queryString + "&dep=" + dep,
    method: "GET",
    dataType: "json",
    success: function(data) {
      list_dep.push(dep);
      console.log("Respuesta de la API de disponibilidad:", data);
      if (Array.isArray(data.availability)) {
        // Crear un mapa para guardar el vuelo más barato por cada dep-arr
        const cheapestByMarket = {};

        data.availability.forEach(flight => {
          const market = `${flight.dep}-${flight.arr}`;
          // Usa la variable currency en vez de 'usd'
          const price = flight.p && typeof flight.p[currency] === 'number' ? flight.p[currency] : Infinity;

          if (!cheapestByMarket[market] || price < cheapestByMarket[market].p[currency]) {
            cheapestByMarket[market] = flight;
          }
        });

        // Convertir el mapa a una lista de vuelos más baratos por dep-arr
        const cheapestList = Object.values(cheapestByMarket);
        console.log('Vuelos más baratos por dep-arr:', cheapestByMarket);
        cheapestList.forEach(flight => {
          const key = `${flight.dep}-${flight.arr}`;
          // seleccionar todos los elementos con la clase correspondiente y actualizarlos
          let elems = document.querySelectorAll('.' + key + '-sin-desk');
          if (elems && elems.length) {
            elems.forEach(elem => {

              let priceElem = elem.querySelector('.price-amount');
              if (priceElem && flight.p && typeof flight.p[currency] === 'number') {
                // formatear precio según currency
                (function() {
                  let amount = flight.p[currency];
                  if (typeof amount !== 'number') {
                  priceElem.innerHTML = amount;
                  return;
                  }
                  
                  let key = (currency || '').toLowerCase();
                  let cfg = cfgMap[key] || { locale: 'en-US', opts: { minimumFractionDigits: 0, maximumFractionDigits: 0 } };
                  // Formatear sin el símbolo de la moneda (sólo número con separadores y decimales)
                  priceElem.innerHTML = new Intl.NumberFormat(cfg.locale, cfg.opts).format(amount);
                })();
                priceElem.classList.remove('blurred-price');
              }
            });
          }
          let elem4s = document.querySelectorAll('.' + key + '-sin');
          if (elem4s && elem4s.length) {
            elem4s.forEach(elem4 => {

              let priceElem = elem4.querySelector('.price-amount');
              if (priceElem && flight.p && typeof flight.p[currency] === 'number') {
                // formatear precio según currency
                (function() {
                  let amount = flight.p[currency];
                  if (typeof amount !== 'number') {
                  priceElem.innerHTML = amount;
                  return;
                  }
                  let key = (currency || '').toLowerCase();
                  let cfg = cfgMap[key] || { locale: 'en-US', opts: { minimumFractionDigits: 0, maximumFractionDigits: 0 } };
                  // Formatear sin el símbolo de la moneda (sólo número con separadores y decimales)
                  priceElem.innerHTML = new Intl.NumberFormat(cfg.locale, cfg.opts).format(amount);
                })();
                priceElem.classList.remove('blurred-price');
              }
            });
          }
          let elem2s = document.querySelectorAll('.' + key + '-con-desk');
          if (elem2s && elem2s.length) {
            elem2s.forEach(elem2 => {              

              let priceElem = elem2.querySelector('.price-amount');
              if (priceElem && flight.pi && typeof flight.pi[currency] === 'number') {
                // formatear precio según currency
                (function() {
                  let amount = flight.pi[currency];
                  if (typeof amount !== 'number') {
                  priceElem.innerHTML = amount;
                  return;
                  }
                  let key = (currency || '').toLowerCase();
                  let cfg = cfgMap[key] || { locale: 'en-US', opts: { minimumFractionDigits: 0, maximumFractionDigits: 0 } };
                  // Formatear sin el símbolo de la moneda (sólo número con separadores y decimales)
                  priceElem.innerHTML = new Intl.NumberFormat(cfg.locale, cfg.opts).format(amount);
                })();
                priceElem.classList.remove('blurred-price');
              }
            });
          }
          let elem3s = document.querySelectorAll('.' + key + '-con');
          if (elem3s && elem3s.length) {
            elem3s.forEach(elem3 => {

              let priceElem = elem3.querySelector('.price-amount');
              if (priceElem && flight.pi && typeof flight.pi[currency] === 'number') {
                // formatear precio según currency
                (function() {
                  let amount = flight.pi[currency];
                  if (typeof amount !== 'number') {
                  priceElem.innerHTML = amount;
                  return;
                  }
                  let key = (currency || '').toLowerCase();
                  let cfg = cfgMap[key] || { locale: 'en-US', opts: { minimumFractionDigits: 0, maximumFractionDigits: 0 } };
                  // Formatear sin el símbolo de la moneda (sólo número con separadores y decimales)
                  priceElem.innerHTML = new Intl.NumberFormat(cfg.locale, cfg.opts).format(amount);
                })();
                priceElem.classList.remove('blurred-price');
              }
            });
          }
          // Actualizar enlaces para mantener parámetros de búsqueda
          (function(){
            const opts = window.opts || {};
            const params = {};
            if (flight && flight.date) params.dd1 = String(flight.date).split(' ')[0];
            params.o1 = flight && flight.dep;
            params.d1 = flight && flight.arr;
            if (flight && flight.fb && (typeof opts.roundtrip === 'undefined' || String(opts.roundtrip) === '1')) {
              params.r = 'true';
              if (flight.rfb && flight.rfb.date) params.dd2 = String(flight.rfb.date).split(' ')[0];
            }

            // Buscar todos los elementos relacionados con esta ruta y actualizar el <a> padre
            const selector = ['-sin-desk','-sin','-con-desk','-con'].map(suf => '.' + key + suf).join(',');
            const anchors = new Set();
            document.querySelectorAll(selector).forEach(el => {
              const a = el.closest('a');
              if (a) anchors.add(a);
            });

            anchors.forEach(a => {
              try {
                // Forzar host booking.jetsmart.com en todos los enlaces
                //BORRAR CUANDO ESTÉ EN PRODUCCIÓN
                const desiredHost = 'booking.jetsmart.com';
                try {
                  // Normalize current href (so relative URLs work) and force host + https
                  const tmp = new URL(a.getAttribute('href') || a.href || window.location.href, window.location.href);
                  tmp.hostname = desiredHost;
                  tmp.protocol = 'https:';
                  tmp.port = '';
                  a.href = tmp.toString();
                } catch (e) {
                  // Fallback: string replace for common cases
                  try {
                    const href = a.getAttribute('href') || a.href || '';
                    if (href.startsWith('/') || href.startsWith('#')) {
                      a.href = 'https://' + desiredHost + href;
                    } else if (/^https?:\/\//i.test(href)) {
                      a.href = href.replace(/^https?:\/\/[^/]+/i, 'https://' + desiredHost);
                    }
                  } catch (_) {}
                }
                
                // Actualizar parámetros en el href
                const url = new URL(a.href || window.location.href, window.location.href);
                // eliminar params previos que vamos a sobrescribir
                ['dd1','o1','d1','r','dd2'].forEach(k => url.searchParams.delete(k));
                Object.keys(params).forEach(k => {
                  if (typeof params[k] !== 'undefined' && params[k] !== null) url.searchParams.set(k, params[k]);
                });
                a.href = url.toString();
              } catch (e) {
                console.error('Error actualizando href del anchor:', e);
              }
            });
          })();
        });
        // Reordenar elementos actualizados dentro de cada .tab-container
        (function reorderUpdatedElements() {
          console.log("reordenar");
          
          document.querySelectorAll('.tab-container').forEach(tab => {
            // comprobar si el padre tiene display: block
            if (!tab.parentElement || window.getComputedStyle(tab.parentElement).display !== 'block') return;
            // ---- MOBILE: reordenar .card dentro de .mobile-scroll ----
            
            const mobileScroll = tab.querySelector('.mobile-scroll');
            const mobileCarrusel = tab.querySelector('.destinos-mobile');
            if (mobileScroll) {              
              const cards = Array.from(mobileScroll.querySelectorAll('a'));
              if (cards.length) {
                
                
                const updated = cards
                  .filter(c => {
                  const pa = c.querySelector('.price-amount');
                  return pa && !pa.classList.contains('blurred-price') && /\d/.test(pa.textContent || '');
                  })
                  .sort((a, b) => {
                  const parseAmount = el => {
                    const pa = el.querySelector('.price-amount');
                    if (!pa) return Infinity;
                    let s = (pa.textContent || '').replace(/[^\d\.,\-]/g, '').trim();
                    if (!s) return Infinity;
                    // eliminar separadores de miles cuando hay ambos . y ,
                    if (s.indexOf(',') !== -1 && s.indexOf('.') !== -1) {
                    s = s.replace(/,/g, '');
                    } else {
                    // eliminar comas residuales (tratarlas como separador de miles)
                    s = s.replace(/,/g, '');
                    }
                    s = s.replace(/,/g, '.');
                    const n = parseFloat(s);
                    return isNaN(n) ? Infinity : n;
                  };
                  return parseAmount(a) - parseAmount(b);
                  });
                
                const others = cards.filter(c => !updated.includes(c));
                const ordered = updated.concat(others);
                ordered.forEach(c => mobileScroll.appendChild(c)); // move nodes in new order
                // reiniciar scroll al inicio
                mobileScroll.scrollTo({ left: 0, behavior: 'smooth' });
              }
            }

            // ---- DESKTOP: reordenar tarjetas dentro de .carrusel-inner, manteniendo grupos de hasta 4 por .carrusel-item ----
            const desktop = tab.querySelector('.destinos-desktop');
            if (desktop) {
              const inner = desktop.querySelector('.carrusel-inner');
              if (inner) {
                // extraer todas las "tarjetas" dentro de los wrappers .carrusel-item
                const wrappers = Array.from(inner.querySelectorAll('.carrusel-item'));
                let cards = [];
                wrappers.forEach(w => Array.from(w.children).forEach(ch => cards.push(ch)));

                if (cards.length) {
                  
                  const updated = cards
                  .filter(c => {
                  const pa = c.querySelector('.price-amount');
                  return pa && !pa.classList.contains('blurred-price') && /\d/.test(pa.textContent || '');
                  })
                  .sort((a, b) => {
                  const parseAmount = el => {
                    const pa = el.querySelector('.price-amount');
                    if (!pa) return Infinity;
                    let s = (pa.textContent || '').replace(/[^\d\.,\-]/g, '').trim();
                    if (!s) return Infinity;
                    // eliminar separadores de miles cuando hay ambos . y ,
                    if (s.indexOf(',') !== -1 && s.indexOf('.') !== -1) {
                    s = s.replace(/,/g, '');
                    } else {
                    // eliminar comas residuales (tratarlas como separador de miles)
                    s = s.replace(/,/g, '');
                    }
                    s = s.replace(/,/g, '.');
                    const n = parseFloat(s);
                    return isNaN(n) ? Infinity : n;
                  };
                  return parseAmount(a) - parseAmount(b);
                  });
                  const others = cards.filter(c => !updated.includes(c));
                  const ordered = updated.concat(others);

                  // limpiar y volver a crear wrappers de a 4
                  inner.innerHTML = '';
                  for (let i = 0; i < ordered.length; i += 4) {
                    const wrap = document.createElement('div');
                    wrap.className = 'carrusel-item rttw-flex rttw-flex-row rttw-justify-center rttw-shrink-0 active';
                    /* if (i === 0) wrap.classList.add('active'); */
                    for (let j = 0; j < 4 && i + j < ordered.length; j++) {
                      wrap.appendChild(ordered[i + j]);
                    }
                    inner.appendChild(wrap);
                  }

                  // reiniciar índice y actualizar indicadores/posición
                  // Selecciona todos los carruseles con clase que empiece por 'destinos-desktop'
                    // Inicializar solo el desktop actual y limpiar listeners previos
                    let currentDesktop = desktop;
                    if (currentDesktop) {
                      // reset índice
                      currentDesktop.currentIndex = 0;

                      // obtener botones para este desktop
                      const leftBtn = currentDesktop.querySelector('.desktop-left');
                      const rightBtn = currentDesktop.querySelector('.desktop-right');

                      // remover listeners previos si existen (los guardamos en propiedades del elemento)
                      if (leftBtn && currentDesktop._leftHandler) {
                        leftBtn.removeEventListener('click', currentDesktop._leftHandler);
                        delete currentDesktop._leftHandler;
                      }
                      if (rightBtn && currentDesktop._rightHandler) {
                        rightBtn.removeEventListener('click', currentDesktop._rightHandler);
                        delete currentDesktop._rightHandler;
                      }

                      // crear handlers nuevos y guardarlos para poder limpiarlos en futuras reordenaciones
                      const leftHandler = () => {
                        const items = currentDesktop.querySelectorAll('.carrusel-item');
                        if (!items.length) return;
                        currentDesktop.currentIndex = (currentDesktop.currentIndex - 1 + items.length) % items.length;
                        try { updateSlide(currentDesktop); } catch (e) { console.error(e); }
                      };
                      const rightHandler = () => {
                        const items = currentDesktop.querySelectorAll('.carrusel-item');
                        if (!items.length) return;
                        currentDesktop.currentIndex = (currentDesktop.currentIndex + 1) % items.length;
                        try { updateSlide(currentDesktop); } catch (e) { console.error(e); }
                      };

                      if (leftBtn) {
                        currentDesktop._leftHandler = leftHandler;
                        leftBtn.addEventListener('click', leftHandler);
                      }
                      if (rightBtn) {
                        currentDesktop._rightHandler = rightHandler;
                        rightBtn.addEventListener('click', rightHandler);
                      }

                      // actualizar indicadores y posición del carrusel actual
                      addIndicatorsDestinosDesktop(currentDesktop);
                      try { updateSlide(currentDesktop); } catch (e) { console.error(e); }
                    }
                  /* desktop.currentIndex = 0;
                  addIndicatorsDestinosDesktop(desktop);
                  // usar la función global para mover el carrusel (acepta el elemento)
                  try { updateSlide(desktop); } catch (e) {
                    // defensivo
                    console.error("Error al actualizar el carrusel:", e);
                  } */
                }
              }
            }
          });
        })();
      }
      // Aquí puedes procesar la respuesta según sea necesario
    },
    error: function(xhr, status, error) {
      // En caso de error quitar difuminado de todos los elementos afectados
      document.querySelectorAll('.blurred-price, .price-amount').forEach(el => el.classList.remove('blurred-price'));
      console.error("Error en la petición AJAX:", error);
    }
  });
}

let dep = $('#origin-select').data('iata');
console.log("revisando si existe dep en el select");
console.log(dep);
if (dep) {
  actualizar_valores(dep);
}

$(document).ready(function () {
  //// Desktop
  document.querySelectorAll('.con-tasas').forEach(function(el) {
    el.style.display = 'none';
  });
  // Selecciona todos los carruseles con clase que empiece por 'destinos-desktop'
  let carruselesDesktop = document.querySelectorAll('.destinos-desktop');
  carruselesDesktop.forEach(function(carrusel) {
    carrusel.currentIndex = 0; // índice inicial
    const items = carrusel.querySelectorAll('.carrusel-item');
    
    const leftBtn = carrusel.querySelector('.desktop-left');
    const rightBtn = carrusel.querySelector('.desktop-right');

    function updateSlide() {
      if (items.length === 0) {
        console.warn("No items found in carrusel:", carrusel);
        return;
      }
      const inner = carrusel.querySelector('.carrusel-inner');
      const width = items[0].offsetWidth;

      inner.style.transform = `translateX(-${carrusel.currentIndex * width}px)`;

      // actualizar indicadores
      const indicatorId = carrusel.id.replace('desktop', 'carrusel-indicators') + "-desktop";
      const indicatorsDiv = document.getElementById(indicatorId);
      if (indicatorsDiv) {
        indicatorsDiv.querySelectorAll('.destinos-indicator').forEach((dot, i) => {
          dot.classList.toggle('active', i === carrusel.currentIndex);
          if (i === carrusel.currentIndex) dot.setAttribute('aria-current', 'true');
          else dot.removeAttribute('aria-current');
        });
      }
    }

    /* leftBtn?.addEventListener('click', () => {
      carrusel.currentIndex = (carrusel.currentIndex - 1 + items.length) % items.length;
      updateSlide();
    });

    rightBtn?.addEventListener('click', () => {
      carrusel.currentIndex = (carrusel.currentIndex + 1) % items.length;
      updateSlide();
    }); */

    addIndicatorsDestinosDesktop(carrusel);
    updateSlide(); // mostrar primer slide
  });

  let carruselesMobile = document.querySelectorAll('.destinos-mobile');
  carruselesMobile.forEach(function (carrusel) {
    const scrollContainer = carrusel.querySelector('.mobile-scroll');
    const items = Array.from(scrollContainer.querySelectorAll('.card'));

    // Actualiza el indicador según la card más cercana al borde izquierdo
    function updateActiveIndicatorOnScroll() {
      const containerLeft = scrollContainer.getBoundingClientRect().left;

      // Encuentra la card más cercana al borde izquierdo
      let closestIdx = 0;
      let minDistance = Infinity;
      items.forEach((item, i) => {
        const distance = Math.abs(item.getBoundingClientRect().left - containerLeft);
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = i;
        }
      });

      updateMobileIndicators(carrusel, closestIdx);
    }

    // Detectar scroll y actualizar indicadores
    scrollContainer.addEventListener('scroll', updateActiveIndicatorOnScroll);

    let current = 0;
    const leftBtn = carrusel.querySelector('.mobile-left');
    const rightBtn = carrusel.querySelector('.mobile-right');

    function updateScroll() {
      scrollContainer.scroll({ left: items[current].offsetLeft });
      updateMobileIndicators(carrusel, current);
    }

    leftBtn?.addEventListener('click', () => {
      current = Math.max(0, current - 1);
      updateScroll();
    });

    rightBtn?.addEventListener('click', () => {
      current = Math.min(items.length - 1, current + 1);
      updateScroll();
    });

    addIndicatorsDestinosMobile(carrusel);
  });

  // Toggle precios con/sin tasas
  $('#toggle-precios').on('click', function () {
    var toggle = this.classList.toggle('active');
    document.querySelectorAll('.sin-tasas').forEach(function(el) {
      el.style.display = toggle ? 'none' : '';
    });
    document.querySelectorAll('.con-tasas').forEach(function(el) {
      el.style.display = toggle ? '' : 'none';
    });
  });

  function createOriginSelect() {
    // Selector destinos
    const selectOrigin = document.getElementById('origin-select');
    if (!selectOrigin) return; // Check if the select element exists
    // Attach a change event listener to the select element
    // selectOrigin.addEventListener('change', function() {
    //     const selectedOptionValue = this.value;
    //     // Hide all carousel elements except for the one corresponding to the selected value
    //     document.querySelectorAll('.carouseles').forEach(function(element) {
    //         if (element.classList.contains(selectedOptionValue)) {
    //             element.style.display = 'block'; // Show the selected element
    //         } else {
    //             element.style.display = 'none'; // Hide the non-selected elements
    //         }
    //     });
    //     $("."+selectedOptionValue).find('.tag-btn')['0'].click(); // Click the first tag button of the selected carousel
    // });

    const originDropdown = document.getElementById('origin-dropdown');
    const items = originDropdown.querySelectorAll('li');
    selectOrigin.addEventListener('click', function (e) {
        originDropdown.classList.toggle('rt-hidden');
        e.stopPropagation();
    });

    items.forEach(item => {
      if (!item.dataset.value) return;
      item.addEventListener('click', function () {
        selectOrigin.innerHTML = item.textContent;
        originDropdown.classList.add('rt-hidden');

        const selectedOptionValue = this.dataset.value;
        console.log(selectedOptionValue);
        actualizar_valores(this.dataset.iata || 'null');
        // Hide all carousel elements except for the one corresponding to the selected value
        document.querySelectorAll('.carouseles').forEach(function(element) {
            if (element.classList.contains(selectedOptionValue)) {
                element.style.display = 'block'; // Show the selected element
            } else {
                element.style.display = 'none'; // Hide the non-selected elements
            }
        });
        $("."+selectedOptionValue).find('.tag-btn')['0'].click(); // Click the first tag button of the selected carousel
      });
    });

    // Cerrar dropdown si se hace click afuera
    document.addEventListener('click', function (e) {
      if (!originDropdown.contains(e.target) && !selectOrigin.contains(e.target) && !originDropdown.classList.contains("rt-hidden")) {
        originDropdown.classList.add("rt-hidden");
      }
    });

    let selectedOptionValue = selectOrigin.dataset.value;
    // Hide all carousel elements except for the one corresponding to the selected value
    document.querySelectorAll('.carouseles').forEach(function(element) {
        if (element.classList.contains(selectedOptionValue)) {
            element.style.display = 'block'; // Show the selected element
        } else {
            element.style.display = 'none'; // Hide the non-selected elements
        }
    });
  }

  // Crear selector de origen
  createOriginSelect();
});

// Inicializar después de que todo cargue (para que offsetWidth sea correcto)
window.addEventListener('load', function () {
  console.log("load");
  // Toggle precios con/sin tasas
  var destinationActiveTaxes = $('#destinationActiveTaxes').val();
  console.log("destinationActiveTaxes");
  console.log(destinationActiveTaxes);

  if (destinationActiveTaxes === 'on') {
    // esperar a que exista el elemento #toggle-precios (polling con timeout)
    const applyToggleState = (active) => {
      document.querySelectorAll('.sin-tasas').forEach(el => { el.style.display = active ? 'none' : ''; });
      document.querySelectorAll('.con-tasas').forEach(el => { el.style.display = active ? '' : 'none'; });
      const toggleEl = document.getElementById('toggle-precios');
      if (toggleEl) toggleEl.classList.toggle('active', active);
    };

    const waitForToggle = (timeout = 5000, interval = 100) => {
      const start = Date.now();
      const t = setInterval(() => {
        const el = document.getElementById('toggle-precios');
        if (el) {
          clearInterval(t);
          applyToggleState(true);
        } else if (Date.now() - start > timeout) {
          clearInterval(t);
          // Si no aparece en el timeout, aplicar el estado igualmente
          applyToggleState(true);
        }
      }, interval);
    };

    waitForToggle();
  }
});