async function handleScriptError() {
  const errorSpan = document.createElement('span');
  errorSpan.classList.add('error-span');

  const errorText = document.createElement('p');

  // First check if cookies are enabled, returns general error message if true.
  // If false, returns cookie-specific error message.
  if (areCookiesEnabled()) {
    errorSpan.textContent = 'Oops, something went wrong.';
    errorText.textContent =
      'Please check your connection, disable any ad blockers, or try using a different browser.';
  } else {
    errorSpan.textContent =
      'It looks like cookies are disabled in your browser.';
    errorText.textContent = 'Please enable cookies to continue.';
  }

  const errorTextContainer = document.createElement('div');
  errorTextContainer.classList.add('error-text-container');
  errorTextContainer.setAttribute('role', 'alert');
  errorTextContainer.setAttribute('aria-live', 'polite');

  const errorScriptPage = document.createElement('div');
  errorScriptPage.classList.add('error-page');

  const errorScriptContainer = document.createElement('div');
  errorScriptContainer.classList.add('error-container');

  const fastlyLogo = await fetchAndCreateLogo();

  const errorIcon = document.createElement('img');
  errorIcon.src = '/_fs-ch-1T1wmsGaOgGaSxcX/assets/errorIcon.svg';
  errorIcon.alt = '';
  errorIcon.setAttribute('role', 'presentation');
  errorIcon.classList.add('errorIcon');

  errorTextContainer.appendChild(errorIcon);
  errorTextContainer.appendChild(errorSpan);

  errorScriptContainer.appendChild(fastlyLogo);
  errorScriptContainer.appendChild(errorTextContainer);
  errorScriptContainer.appendChild(errorText);

  errorScriptPage.appendChild(errorScriptContainer);
  document.body.appendChild(errorScriptPage);
}

// Tests if cookies are enabled, returns a bool.
function areCookiesEnabled() {
  document.cookie = 'testcookie=1; max-age=1; SameSite=Strict';

  const cookiesEnabled = document.cookie.indexOf('testcookie') !== -1;

  return cookiesEnabled;
}

async function fetchAndCreateLogo() {
  const logoUrl = `${window.location.origin}/fastly/logo`;
  let fastlysvg = '_fs-ch-1T1wmsGaOgGaSxcX/assets/fastlyLogoError.svg';
  let logoSrc = fastlysvg;
  let isFetchSuccessful = false;

  try {
    const response = await fetch(logoUrl);
    const contentType = response.headers.get('content-type');
    if (response.ok && contentType.startsWith('image/')) {
      logoSrc = logoUrl;
      isFetchSuccessful = true;
    } else {
      logoSrc = fastlysvg;
    }
  } catch {
    logoSrc = fastlysvg;
  }

  const fastlyLogo = document.createElement('img');
  fastlyLogo.src = logoSrc;
  fastlyLogo.id = 'fastlyLogo';
  fastlyLogo.alt = isFetchSuccessful ? 'Company Logo' : 'Fastly Logo';

  if (isFetchSuccessful) {
    fastlyLogo.style.display = 'block';
    fastlyLogo.style.width = 'auto';
    fastlyLogo.style.height = '75px';
    fastlyLogo.style.margin = '0 auto';
  } else {
    fastlyLogo.style.display = 'block';
    fastlyLogo.style.height = '40px';
  }

  return fastlyLogo;
}
