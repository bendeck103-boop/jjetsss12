// Variable global
let countdownInterval;
let countdownErrorCount = 0;
const MAX_COUNTDOWN_ERRORS = 10;

// Función utilitaria para manejar transiciones de clases Tailwind
function addTransition(element, duration = 300, easing = 'rttw-ease-out') {
    const durationClass = `rttw-duration-[${duration}ms]`;

    element.classList.add('rttw-transition-all', durationClass, easing);

    return () => {
        element.classList.remove('rttw-transition-all', durationClass, easing);
    };
}

// Función utilitaria para cerrar completamente el contador mobile minimizado
function hideMobileContador() {
    const contador = document.getElementById('contador-promo-mobile');
    if (!contador) return;

    // Determinar la dirección de la animación según la posición actual del contador
    const isDown = contador.classList.contains('contador-down');
    const targetContainer = document.getElementById('contador-target-container-mobile');
    const isInHeader = targetContainer && targetContainer.contains(contador);

    // Obtener la posición actual del contador
    const currentRect = contador.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const isInBottomHalf = currentRect.top > windowHeight / 2;

    // Agregar transición suave
    contador.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-in-out');
    contador.classList.add('rttw-opacity-0');

    // Determinar dirección de animación basada en posición actual o clase
    if (isDown || isInBottomHalf) {
        // Si está en posición down o en la mitad inferior, animarlo hacia abajo
        contador.style.transform = 'translateX(-50%) translateY(200px)';
    } else {
        // Si está en posición up (header) o en la mitad superior, animarlo hacia arriba
        contador.style.transform = 'translateX(-50%) translateY(-200px)';
    }

    // Después de la animación, ocultar completamente
    setTimeout(() => {
        contador.classList.add('rttw-hidden');
        contador.classList.remove('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-in-out', 'rttw-opacity-0');
        contador.style.transform = '';

        // Si el contador tenía la clase contador-up, quitar el margen del carrusel
        if (contador.classList.contains('contador-up')) {
            const mainContainer = document.querySelector('main.site-content');
            if (mainContainer) {
                mainContainer.style.marginTop = '';
                // console.log('Margen removido del carrusel');
            }
        }

        // Si estaba en el header, remover del contenedor target
        if (isInHeader) {
            targetContainer.removeChild(contador);
        }

        // Limpiar interval del countdown
        if (countdownInterval) {
            clearInterval(countdownInterval);
            countdownInterval = null;
        }

        // console.log('Mobile contador cerrado completamente');
    }, 500);
}

// Función utilitaria para animar botón de oferta
function animateOfertaBtn(ofertaBtn, show = true) {
    if (show) {
        // Mostrar botón con animación
        ofertaBtn.classList.remove('rttw-hidden');
        ofertaBtn.classList.add('rttw-flex', 'rttw-py-2', 'rttw-px-4');
        ofertaBtn.classList.add('rttw-max-w-0', 'rttw-max-h-0', 'rttw-p-0', 'rttw-opacity-0', 'rttw-overflow-hidden');

        setTimeout(() => {
            const cleanupTransition = addTransition(ofertaBtn, 300, 'ease-out');
            ofertaBtn.classList.remove('rttw-max-w-0', 'rttw-max-h-0', 'rttw-p-0', 'rttw-opacity-0', 'rttw-overflow-hidden');
            ofertaBtn.classList.add('rttw-opacity-100');

            setTimeout(() => {
                cleanupTransition();
            }, 300);
        }, 300);
    } else {
        // Ocultar botón con animación
        const cleanupTransition = addTransition(ofertaBtn, 300, 'ease-out');
        ofertaBtn.classList.add('rttw-max-w-0', 'rttw-max-h-0', 'rttw-p-0', 'rttw-opacity-0', 'rttw-overflow-hidden');

        setTimeout(() => {
            ofertaBtn.classList.remove('rttw-py-2', 'rttw-px-4', 'rttw-flex');
            ofertaBtn.classList.add('rttw-hidden');
            ofertaBtn.classList.remove('rttw-max-w-0', 'rttw-max-h-0', 'rttw-p-0', 'rttw-opacity-0', 'rttw-overflow-hidden');
            cleanupTransition();
        }, 300);
    }
}

// Función utilitaria para verificar si el contador desktop está minimizado
function isContadorMinimized() {
    const contador = document.getElementById('contador-promo');
    return contador && contador.classList.contains('contador-minimized');
}

// Función utilitaria para actualizar los listeners de interacción según el estado del contador
function updateInteractionListeners(contadorElement, deviceType) {
    // Remover todos los listeners existentes
    const listeners = contadorElement._interactionListeners || [];
    listeners.forEach(({ type, listener }) => {
        if (type === 'click') {
            document.removeEventListener('click', listener);
        } else if (type === 'scroll') {
            window.removeEventListener('scroll', listener);
        }
    });

    // Limpiar referencias anteriores
    contadorElement._interactionListeners = [];

    // Determinar si debe incluir scroll
    let includeScroll = true; // Por defecto incluir scroll

    if (deviceType === 'desktop') {
        // En desktop, solo incluir scroll si NO está minimizado (expandido)
        includeScroll = !isContadorMinimized();
    }
    // En mobile siempre incluir scroll

    // Aplicar nuevos listeners
    closeOnInteraction(contadorElement, includeScroll);
}

// Función para inicializar el contador
function initContador() {
    // Verificar si el loader está oculto antes de mostrar el contador
    const loader = document.getElementById('loader');
    if (loader && loader.style.display !== 'none' || document.readyState !== "complete") {
        // Si el loader aún está visible, esperar 100ms y volver a intentar
        setTimeout(initContador, 100);
        return;
    }

    // Iniciar countdown
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);

    // Configurar según el tamaño de pantalla
    const deviceType = window.innerWidth >= 1024 ? 'desktop' : 'mobile';

    if (deviceType === 'desktop') {
        const carouselContainer = document.querySelector('#rt-carousel .multiple-carousel-container');

        if (carouselContainer) {
            // Crear contenedor target dentro del carousel si no existe (pero vacío)
            let targetContainer = document.getElementById('contador-target-container');
            if (!targetContainer) {
                targetContainer = document.createElement('div');
                targetContainer.id = 'contador-target-container';
                targetContainer.className = 'rttw-absolute rttw-top-[25px] rttw-left-[30px] rttw-w-fit rttw-h-fit';
                carouselContainer.appendChild(targetContainer);
            }
        }

        // Mostrar el contador con animación
        showContador();
    } else if (deviceType === 'mobile') {
        // Mobile: crear contenedor target en el header
        const headerContainer = document.querySelector('header > div');

        if (headerContainer) {
            // Crear contenedor target dentro del header si no existe (pero vacío)
            let targetContainer = document.getElementById('contador-target-container-mobile');
            if (!targetContainer) {
                targetContainer = document.createElement('div');
                targetContainer.id = 'contador-target-container-mobile';
                targetContainer.className = 'rttw-w-full rttw-h-fit';
                headerContainer.insertBefore(targetContainer, headerContainer.firstChild);
            }
        }

        // Mostrar el contador con animación
        showContador();
    }
}

// Función para actualizar el countdown
function updateCountdown() {
    // Verificar si se alcanzó el límite de errores
    if (countdownErrorCount >= MAX_COUNTDOWN_ERRORS) {
        console.error('Límite de errores alcanzado. Deteniendo countdown.');
        if (countdownInterval) {
            clearInterval(countdownInterval);
            countdownInterval = null;
        }
        return;
    }

    // Verificar si el elemento endDate existe
    const endDateElement = document.getElementById('countdown-endDate');
    if (!endDateElement) {
        console.error('Elemento countdown-endDate no encontrado');
        countdownErrorCount++;
        return;
    }

    // Verificar si tiene valor
    if (!endDateElement.value) {
        console.error('countdown-endDate no tiene valor');
        countdownErrorCount++;
        return;
    }

    const nowSantiago = new Date().toLocaleString("en-US", { timeZone: "America/Santiago" });
    const nowDate = new Date(nowSantiago);
    const endDate = new Date(endDateElement.value);

    // Verificar si la fecha es válida
    if (isNaN(endDate.getTime())) {
        console.error('Fecha de fin inválida:', endDateElement.value);
        countdownErrorCount++;
        return;
    }

    // Si llegamos aquí sin errores, resetear el contador
    countdownErrorCount = 0;

    var diff = endDate.getTime() - nowDate.getTime();
    if (diff < 0) diff = 0;

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    var mins = Math.floor((diff / (1000 * 60)) % 60);
    var secs = Math.floor((diff / 1000) % 60);

    if (days === 0 && hours === 0 && mins === 0 && secs === 0) {
        console.log(`${days}:${hours}:${mins}:${secs} - Countdown finalizado.`);
        /* Detener el interval global y ocultar contadores (desktop + mobile) */
        if (countdownInterval) {
            clearInterval(countdownInterval);
            countdownInterval = null;
        }

        /* Ocultar contador desktop con animación */
        const contador = document.getElementById('contador-promo');
        if (contador) {
            contador.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-in-out', 'rttw-opacity-0');
            contador.style.transform = 'scale(0.95) translateY(10px)';

            // Remover listeners guardados si existen
            if (contador._interactionListeners) {
                contador._interactionListeners.forEach(({ type, listener }) => {
                    if (type === 'click') document.removeEventListener('click', listener);
                    if (type === 'scroll') window.removeEventListener('scroll', listener);
                });
                contador._interactionListeners = [];
            }

            setTimeout(() => {
                contador.classList.add('rttw-hidden');
                contador.classList.remove('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-in-out', 'rttw-opacity-0');
                contador.style.transform = '';
            }, 300);
        }

        /* Ocultar contador mobile usando la utilidad existente */
        const contadorMobile = document.getElementById('contador-promo-mobile');
        if (contadorMobile) hideMobileContador();

        return null;
    }
    const daysElem = document.getElementById('countdown-days');
    const hoursElem = document.getElementById('countdown-hours');
    const minsElem = document.getElementById('countdown-minutes');
    const secsElem = document.getElementById('countdown-seconds');

    // También actualizar elementos mobile si existen
    const daysElemMobile = document.getElementById('countdown-days-mobile');
    const hoursElemMobile = document.getElementById('countdown-hours-mobile');
    const minsElemMobile = document.getElementById('countdown-minutes-mobile');
    const secsElemMobile = document.getElementById('countdown-seconds-mobile');

    // Verificar si los elementos desktop existen antes de actualizarlos
    if (!daysElem || !hoursElem || !minsElem || !secsElem) {
        /* console.error('Algunos elementos del countdown desktop no se encontraron:', {
            days: !!daysElem,
            hours: !!hoursElem,
            mins: !!minsElem,
            secs: !!secsElem
        }); */
        countdownErrorCount++;
        return;
    }

    // Actualizar elementos desktop
    daysElem.textContent = days.toString().padStart(2, '0');
    hoursElem.textContent = hours.toString().padStart(2, '0');
    minsElem.textContent = mins.toString().padStart(2, '0');
    secsElem.textContent = secs.toString().padStart(2, '0');

    // Actualizar elementos mobile si existen
    if (daysElemMobile && hoursElemMobile && minsElemMobile && secsElemMobile) {
        daysElemMobile.textContent = days.toString().padStart(2, '0');
        hoursElemMobile.textContent = hours.toString().padStart(2, '0');
        minsElemMobile.textContent = mins.toString().padStart(2, '0');
        secsElemMobile.textContent = secs.toString().padStart(2, '0');
    }
}

// Función para agregar listeners de interacción externa para desktop
function closeOnInteraction(contadorElement, includeScroll = false) {
    const handleOutsideClick = (e) => {
        // Solo cerrar si el click no es dentro del contador
        if (!contadorElement.contains(e.target)) {
            // Para desktop, verificar que no esté minimizado ON antes de cerrar
            const deviceType = window.innerWidth >= 1024 ? 'desktop' : 'mobile';
            if (deviceType === 'desktop') {
                const isMinimized = contadorElement.classList.contains('contador-minimized');
                // Solo cerrar si NO está minimizado (expandido o sin minimizar)
                if (!isMinimized) {
                    closeContador();
                    // Remover listeners después de cerrar
                    document.removeEventListener('click', handleOutsideClick);
                    if (includeScroll) {
                        window.removeEventListener('scroll', handleScroll);
                    }
                }
                // Si está minimizado, no hacer nada (no cerrar)
            } else {
                // Para mobile, mantener comportamiento original
                closeContador();
                // Remover listeners después de cerrar
                document.removeEventListener('click', handleOutsideClick);
                if (includeScroll) {
                    window.removeEventListener('scroll', handleScroll);
                }
            }
        }
    };

    const handleScroll = () => {
        // Para desktop, verificar que no esté minimizado ON antes de cerrar
        const deviceType = window.innerWidth >= 1024 ? 'desktop' : 'mobile';
        if (deviceType === 'desktop') {
            const isMinimized = contadorElement.classList.contains('contador-minimized');
            // Solo cerrar si NO está minimizado (expandido o sin minimizar)
            if (!isMinimized) {
                closeContador();
                // Remover listeners después de cerrar
                document.removeEventListener('click', handleOutsideClick);
                window.removeEventListener('scroll', handleScroll);
            }
            // Si está minimizado, no hacer nada (no cerrar)
        } else {
            // Para mobile, mantener comportamiento original
            closeContador();
            // Remover listeners después de cerrar
            document.removeEventListener('click', handleOutsideClick);
            window.removeEventListener('scroll', handleScroll);
        }
    };

    // Agregar listeners con un pequeño delay para evitar cierre inmediato
    setTimeout(() => {
        document.addEventListener('click', handleOutsideClick);

        // Guardar referencia al listener de click
        if (!contadorElement._interactionListeners) {
            contadorElement._interactionListeners = [];
        }
        contadorElement._interactionListeners.push({ type: 'click', listener: handleOutsideClick });

        if (includeScroll) {
            window.addEventListener('scroll', handleScroll);
            // Guardar referencia al listener de scroll
            contadorElement._interactionListeners.push({ type: 'scroll', listener: handleScroll });
        }
    }, 100);
}

// Función para mostrar el contador
function showContador() {
    console.log('show contador');

    const deviceType = window.innerWidth >= 1024 ? 'desktop' : 'mobile';

    if (deviceType === 'desktop') {
        const contador = document.getElementById('contador-promo');
        if (contador) {
            const closeBtn = contador.querySelector('.promo-close-btn');
            closeBtn.onclick = closeContador;

            // Agregar listeners para cerrar al hacer click fuera
            closeOnInteraction(contador, false);

            // Asegurar que empiece desde abajo (-150px)
            contador.style.bottom = '-150px';
            contador.classList.remove('rttw-hidden');

            // Pequeño delay para asegurar que el elemento esté visible antes de animar
            setTimeout(() => {
                contador.style.transition = 'bottom 0.4s ease-out';
                contador.style.bottom = '50px';
            }, 50);

            // Limpiar transición después de la animación
            setTimeout(() => {
                contador.style.transition = '';
                contador.style.bottom = '';

                // Aplicar fitText después de que el contador esté visible
                fitTextBySelectorToSingleLine('.rutas-viajes p');
            }, 500);
        }
    } else {
        const contadorMobile = document.getElementById('contador-promo-mobile');
        if (contadorMobile) {
            const closeBtn = contadorMobile.querySelector('.promo-close-btn');
            closeBtn.onclick = closeContador;

            // Agregar listeners para cerrar al hacer click fuera o scroll - mobile siempre incluye scroll
            closeOnInteraction(contadorMobile, true);

            // Asegurar que empiece desde arriba (-100px para una entrada más suave)
            contadorMobile.style.top = '-400px';
            contadorMobile.classList.remove('rttw-hidden');

            // Pequeño delay para asegurar que el elemento esté visible antes de animar
            setTimeout(() => {
                contadorMobile.style.transition = 'top 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                contadorMobile.style.top = '10px'; // Posición final
            }, 50);

            // Limpiar transición después de la animación
            setTimeout(() => {
                contadorMobile.style.transition = '';

                // Aplicar fitText después de que el contador esté visible
                fitTextBySelectorToSingleLine('.rutas-viajes p');
            }, 900);
        }
    }
}

// Función para mover el contador al carousel
function moveContadorToCarousel() {
    const contador = document.getElementById('contador-promo');
    const carouselContainer = document.getElementById('rt-carousel');

    if (!contador || !carouselContainer) return;

    // Solo en desktop
    if (window.innerWidth <= 1023) return;

    // Obtener posiciones iniciales
    const contadorRect = contador.getBoundingClientRect();
    const containerRect = carouselContainer.getBoundingClientRect();

    // Calcular la distancia que debe moverse
    const deltaX = containerRect.left + (containerRect.width / 2) - (contadorRect.left + (contadorRect.width / 2));
    const deltaY = containerRect.bottom - 100 - contadorRect.top; // 100px desde el bottom del carousel

    // Preparar el carousel para recibir el contador
    const carouselStyle = window.getComputedStyle(carouselContainer);
    if (carouselStyle.position === 'static') {
        carouselContainer.style.position = 'relative';
    }

    // Aplicar transform para mover sin cambiar el layout inicialmente
    contador.style.transition = 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    contador.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

    // Después de la animación, cambiar a position absolute y mover al DOM
    setTimeout(() => {
        // Cambiar posicionamiento
        contador.classList.remove('rttw-fixed', 'rttw-bottom-[50px]', 'rttw-left-1/2', '-rttw-translate-x-1/2');
        contador.classList.add('rttw-absolute');
        contador.style.bottom = '50px';
        contador.style.left = '50%';
        contador.style.transform = 'translateX(-50%)';
        contador.style.transition = '';

        // Mover el elemento al contenedor carousel
        carouselContainer.appendChild(contador);

        // Agregar clase para indicar que está en su posición final
        contador.classList.add('contador-positioned');

        // Cambiar onclick de botón cerrar para que minimice el contador
        const closeBtn = contador.querySelector('.promo-close-btn');
        closeBtn.onclick = closeContador;

    }, 1200); // Mismo tiempo que la transición
}

// Función para agregar efecto glow
function addGlowEffect() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes glow {
            0% { text-shadow: 0 0 2px #00AEC7, 0 0 4px #00AEC7; }
            50% { text-shadow: 0 0 8px #00AEC7, 0 0 16px #00AEC7; }
            100% { text-shadow: 0 0 2px #00AEC7, 0 0 4px #00AEC7; }
        }
        .smartdays-glow {
            animation: glow 2s cubic-bezier(0.4,0,0.2,1) alternate infinite;
        }
    `;
    document.head.appendChild(style);

    const title = document.getElementById('promo-bold-text');
    const icon = document.getElementById('promo-icon');

    function toggleGlow(on) {
        if (on) {
            title.classList.add('smartdays-glow');
            icon.classList.add('smartdays-glow');
        } else {
            title.classList.remove('smartdays-glow');
            icon.classList.remove('smartdays-glow');
        }
    }

    // Ciclo: cada 8s, activa 4s, luego desactiva 4s
    toggleGlow(false);
    setInterval(() => {
        toggleGlow(true);
        setTimeout(() => toggleGlow(false), 4000);
    }, 8000);
}

function fitTextToSingleLine(element) {
    if (!element) return;

    const computedStyle = window.getComputedStyle(element);
    let fontSize = parseFloat(computedStyle.fontSize);
    const minFontSize = 8;

    // Obtener el ancho del contenedor padre
    const parentMaxWidth = element.parentElement.getBoundingClientRect().width;

    // console.log('=== INICIO ===');
    // console.log('Elemento:', element);
    // console.log('Texto:', element.textContent.trim());
    // console.log('Parent Max Width:', parentMaxWidth);
    // console.log('Font Size inicial:', fontSize);

    // Si el parent width es 0, salir (elemento no visible aún)
    if (parentMaxWidth === 0) {
        // console.log('Parent width es 0, saliendo');
        return;
    }

    // Asegurar que el texto no haga wrap
    element.style.whiteSpace = 'nowrap';

    // Crear elemento temporal para medir el ancho real del texto
    const measureElement = document.createElement('span');
    measureElement.style.cssText = `
        position: absolute;
        visibility: hidden;
        white-space: nowrap;
        font-family: ${computedStyle.fontFamily};
        font-weight: ${computedStyle.fontWeight};
        font-style: ${computedStyle.fontStyle};
        letter-spacing: ${computedStyle.letterSpacing};
    `;
    measureElement.textContent = element.textContent;
    document.body.appendChild(measureElement);

    // Reducir el font-size hasta que quepa en una línea
    let iterations = 0;
    const maxIterations = 50;

    while (fontSize > minFontSize && iterations < maxIterations) {
        // Aplicar el tamaño actual al elemento de medición
        measureElement.style.fontSize = fontSize + 'px';
        const textWidth = measureElement.getBoundingClientRect().width

        // Si ya cabe, salir
        if (textWidth <= parentMaxWidth) {
            // console.log('Ya cabe, saliendo');
            break;
        }

        // Reducir tamaño
        fontSize -= 0.5;
        element.style.fontSize = fontSize + 'px';
        iterations++;
    }

    // Limpiar elemento temporal
    document.body.removeChild(measureElement);

    // console.log('Font Size final:', fontSize);
    // console.log('Iteraciones totales:', iterations);
    // console.log('=== FIN ===\n');
}

// Función helper para usar con selectores
function fitTextBySelectorToSingleLine(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => fitTextToSingleLine(element));
}

function minimizarContador() {
    const deviceType = window.innerWidth <= 1023 ? 'mobile' : 'desktop';

    if (deviceType === 'desktop') {
        const contador = document.getElementById('contador-promo');
        if (!contador) return;

        const promoInner = contador.querySelector('.contador-inner');
        const ofertaBtn = document.getElementById('promo-cta');
        const promoTitle = document.getElementById('promo-title');
        const porcentajeContainer = contador.querySelector('.porcentaje-container');
        const precioContainer = contador.querySelector('.precio-container');
        const tiempoContainer = contador.querySelector('.tiempo-container');

        // Verificar si está en estado minimizado ON
        const isMinimized = contador.classList.contains('contador-minimized');

        if (isMinimized) {
            // TOGGLE OFF - Restaurar a minimizado abierto con animación
            // Agregar transiciones suaves
            contador.classList.add('rttw-transition-all', 'rttw-duration-300');
            const promoInner = contador.querySelector('.contador-inner');
            const ofertaBtn = document.getElementById('promo-cta');
            const porcentajeContainer = contador.querySelector('.porcentaje-container');
            const precioContainer = contador.querySelector('.precio-container');
            const tiempoContainer = contador.querySelector('.tiempo-container');

            if (promoInner) promoInner.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
            if (ofertaBtn) ofertaBtn.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
            if (porcentajeContainer) porcentajeContainer.classList.add('rttw-transition-transform', 'rttw-duration-300', 'rttw-ease-out');
            if (precioContainer) precioContainer.classList.add('rttw-transition-transform', 'rttw-duration-300', 'rttw-ease-out');
            if (tiempoContainer) tiempoContainer.classList.add('rttw-transition-transform', 'rttw-duration-300', 'rttw-ease-out');

            contador.classList.remove('contador-minimized', 'rttw-max-w-fit', 'rttw-py-[7.5px]', 'rttw-px-[18.5px]', 'rttw-cursor-pointer', 'hover:rttw-scale-[1.05]', 'rttw-transition', 'rttw-duration-300', 'rttw-ease-in-out');

            // Determinar si está en el carousel para aplicar las clases de ancho correctas
            const isInCarousel = contador.classList.contains('contador-positioned');
            if (isInCarousel) {
                // Si está en el carousel, agregar w-full sin max-w
                contador.classList.add('rttw-w-full', 'rttw-py-4', 'rttw-px-8');
            } else {
                // Si no está en el carousel, solo padding
                contador.classList.add('rttw-py-4', 'rttw-px-8');
            }
            promoInner.classList.remove('rttw-gap-[24px]');
            promoInner.classList.add('rttw-gap-[36px]');

            // Animar título suavemente desde pequeño a grande
            promoTitle.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-[cubic-bezier(0.25,0.46,0.45,0.94)]');
            promoTitle.classList.remove('rttw-max-w-[140px]', 'rttw-text-[12px]');
            promoTitle.classList.add('rttw-max-w-[250px]', 'rttw-text-2xl');

            // Caso especial promo genérica
            if (promoTitle.classList.contains('flash-generica')) {
                promoTitle.classList.remove('-rttw-mt-[24px]', '-rttw-mt-[33px]', 'rttw-text-2xl', 'rttw-text-[12px]');
                promoTitle.classList.add('-rttw-mt-[36px]', 'rttw-text-xl');
            }

            // Caso especial evento solo texto
            if (promoTitle.classList.contains('evento-texto')) {
                promoTitle.classList.remove('rttw-max-w-[170px]', 'rttw-text-2xl', 'rttw-text-[12px]');
                promoTitle.classList.add('rttw-max-w-[290px]', 'rttw-text-xl');
            }

            if (ofertaBtn) { 
                // Mostrar botón de oferta sin animación
                const ofertaBtnContainer = ofertaBtn.closest('.generico-button-container');
                if (ofertaBtnContainer) {
                    ofertaBtnContainer.classList.remove('rttw-hidden');
                }
                ofertaBtn.classList.remove('rttw-hidden');
                ofertaBtn.classList.add('rttw-flex', 'rttw-py-2', 'rttw-px-4', 'rttw-opacity-100');
            }

            // Restaurar tamaños nativos del porcentaje container con animación
            const porcentajeInner = porcentajeContainer ? porcentajeContainer.querySelector('div') : null;
            if (porcentajeInner) {
                // Animar desde el tamaño pequeño al grande
                porcentajeInner.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');

                // Restaurar texto de rutas con animación
                const rutasViajes = porcentajeContainer.querySelector('.rutas-viajes');
                if (rutasViajes) {
                    const paragraphs = rutasViajes.querySelectorAll('p');
                    if (paragraphs.length >= 2) {
                        paragraphs.forEach(p => {
                            p.classList.add('rttw-transition-[font-size]', 'rttw-duration-300', 'rttw-ease-out');
                            // Desde estado minimizado: rttw-text-[8px] → rttw-text-xs
                            if (p.classList.contains('rttw-text-[8px]')) {
                                p.classList.remove('rttw-text-[8px]');
                                p.classList.add('rttw-text-xs');
                            }
                            // Desde estado minimizado: rttw-text-[10px] → rttw-text-sm
                            if (p.classList.contains('rttw-text-[10px]')) {
                                p.classList.remove('rttw-text-[10px]');
                                p.classList.add('rttw-text-sm');
                            }
                        });
                    }
                }

                // Restaurar texto desde/hasta con animación (porcentajeContainer)
                const desdeHasta = porcentajeContainer.querySelector('.texto-desde-hasta p');
                if (desdeHasta) {
                    // Restaurar a tamaño original con leading-3
                    desdeHasta.classList.add('rttw-transition-[font-size]', 'rttw-duration-300', 'rttw-ease-out');
                    desdeHasta.classList.remove('rttw-text-[8px]', 'rttw-leading-[.5rem]', 'rttw-text-[10px]');
                    desdeHasta.classList.add('rttw-text-xs', 'rttw-leading-3');
                }

                // Restaurar porcentaje principal con animación
                const porcentaje = porcentajeContainer.querySelector('.porcentaje');
                if (porcentaje) {
                    porcentaje.classList.add('rttw-transition-[font-size]', 'rttw-duration-300', 'rttw-ease-out');
                    porcentaje.classList.remove('rttw-text-[30px]', 'rttw-text-white');
                    porcentaje.classList.add('rttw-text-[50px]', 'rttw-text-[#00AEC7]');
                    porcentaje.style.textShadow = '2px 1px white;';
                }

                // Restaurar subtexto con animación
                const subtexto = porcentajeContainer.querySelector('.rttw-bg-blue-950 div');
                if (subtexto) {
                    subtexto.classList.add('rttw-transition-[font-size]', 'rttw-duration-300', 'rttw-ease-out');
                    subtexto.classList.remove('rttw-text-[8px]');
                    subtexto.classList.add('rttw-text-sm');
                }

                // Restaurar subtexto container con animación
                const subtextoContainer = porcentajeContainer.querySelector('.rttw-bg-blue-950');
                if (subtextoContainer) {
                    subtextoContainer.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
                    subtextoContainer.classList.remove('-rttw-mt-0', 'rttw-px-1.5', 'rttw-py-0.5');
                    subtextoContainer.classList.add('-rttw-mt-2.5', 'rttw-px-2.5', 'rttw-py-0.5');
                }

                // Restaurar contenedor del porcentaje
                const porcentajeContainerInner = porcentajeContainer.querySelector('.porcentaje-inner');
                if (porcentajeContainerInner) {
                    porcentajeContainerInner.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
                }

                // Restaurar leading de elementos con rttw-leading-[.5rem] a rttw-leading-3
                const leadingElements = porcentajeContainer.querySelectorAll('.rttw-leading-\\[\\.5rem\\]');
                leadingElements.forEach(elem => {
                    elem.classList.remove('rttw-leading-[.5rem]');
                    elem.classList.add('rttw-leading-3');
                });

                // Limpiar transiciones después de la animación
                setTimeout(() => {
                    porcentajeInner.classList.remove('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');

                    // Buscar rutasViajes dentro del timeout para asegurar scope correcto
                    const rutasViajesInTimeout = porcentajeContainer.querySelector('.rutas-viajes');
                    const paragraphs = rutasViajesInTimeout?.querySelectorAll('p') || [];
                    paragraphs.forEach((p, index) => {
                        p.classList.remove('rttw-transition-[font-size]', 'rttw-duration-300', 'rttw-ease-out');

                        // Estado final minimizado OFF - Usar tamaños del template original
                        // Primer p debe ser rttw-text-sm (template original)
                        if (index === 0) {
                            p.classList.remove('rttw-text-[8px]', 'rttw-text-xs', 'rttw-text-base');
                            p.classList.add('rttw-text-sm');
                        }
                        // Segundo p debe ser rttw-text-base (template original)
                        if (index === 1) {
                            p.classList.remove('rttw-text-[10px]', 'rttw-text-xs', 'rttw-text-sm');
                            p.classList.add('rttw-text-base');
                        }

                        // Ambos p debe tener rttw-leading-none
                        p.classList.remove('rttw-leading-[.5rem]');
                        p.classList.add('rttw-leading-none');
                    });

                    if (porcentaje) {
                        porcentaje.classList.remove('rttw-transition-[font-size]', 'rttw-duration-300', 'rttw-ease-out');
                        porcentaje.classList.remove('rttw-text-[30px]', 'rttw-text-white');
                        porcentaje.classList.add('rttw-text-[50px]', 'rttw-text-[#00AEC7]');
                        // Asegurar text-shadow azul oscuro
                        porcentaje.style.textShadow = '2px 1px white;';
                    }

                    if (subtexto) {
                        subtexto.classList.remove('rttw-transition-[font-size]', 'rttw-duration-300', 'rttw-ease-out');
                        subtexto.classList.remove('rttw-text-[8px]');
                        subtexto.classList.add('rttw-text-sm');
                    }

                    // Limpiar transiciones de desdeHasta
                    const desdeHasta = porcentajeContainer.querySelector('.texto-desde-hasta p');
                    if (desdeHasta) {
                        desdeHasta.classList.remove('rttw-transition-[font-size]', 'rttw-duration-300', 'rttw-ease-out');
                        // Asegurar que tenga las clases finales del template
                        desdeHasta.classList.remove('rttw-text-[8px]');
                        desdeHasta.classList.add('rttw-text-xs', 'rttw-leading-none');
                    }

                    // Limpiar y aplicar clases del subtexto container
                    const subtextoContainer = porcentajeContainer.querySelector('.rttw-bg-blue-950');
                    if (subtextoContainer) {
                        subtextoContainer.classList.remove('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
                        // Restaurar clases originales
                        subtextoContainer.classList.remove('rttw-px-1.5', 'rttw-py-0.5', '-rttw-mt-0');
                        subtextoContainer.classList.add('-rttw-mt-2.5', 'rttw-px-2.5', 'rttw-py-0.5');
                    }

                    // Limpiar y restaurar contenedor del porcentaje
                    let porcentajeContainerInner = porcentajeContainer.querySelector('.porcentaje-inner');
                    if (porcentajeContainerInner) {
                        porcentajeContainerInner.classList.remove('-rttw-mb-2', '-rttw-mb-4', '-rttw-mt-1', 'rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
                    }

                    // Limpiar clases leading - Mantener leading diferenciado en rutas-viajes
                    const rutasViajes = porcentajeContainer.querySelector('.rutas-viajes');
                    if (rutasViajes) {
                        const paragraphs = rutasViajes.querySelectorAll('p');
                        paragraphs.forEach((p, index) => {
                            if (index === 0) {
                                // Primer p: debe tener rttw-leading-3 en estado minimizado OFF (template original)
                                p.classList.remove('rttw-leading-[.5rem]', 'rttw-leading-4', 'rttw-leading-none');
                                p.classList.add('rttw-leading-3');
                            } else if (index === 1) {
                                // Segundo p: debe tener rttw-leading-5 en estado minimizado OFF (template original)
                                p.classList.remove('rttw-leading-[.5rem]', 'rttw-leading-3', 'rttw-leading-none');
                                p.classList.add('rttw-leading-5');
                            }
                        });
                    }

                    // Limpiar otros elementos leading (no p de rutas-viajes)
                    const otherLeadingElements = porcentajeContainer.querySelectorAll('.rttw-leading-\\[\\.5rem\\]:not(.rutas-viajes p)');
                    otherLeadingElements.forEach(elem => {
                        elem.classList.remove('rttw-leading-[.5rem]');
                        elem.classList.add('rttw-leading-3');
                    });
                }, 1);
            }
            const precioInner = precioContainer ? precioContainer.querySelector('div') : null;
            if (precioInner) {
                // Animar desde el tamaño pequeño al grande
                precioInner.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');

                // Restaurar texto de rutas con animación
                const rutasViajes = precioContainer.querySelector('.rutas-viajes');
                if (rutasViajes) {
                    console.log('rutasViajes');
                    const paragraphs = rutasViajes.querySelectorAll('p');
                    if (paragraphs.length >= 2) {
                        paragraphs.forEach(p => {
                            p.classList.add('rttw-transition-[font-size]', 'rttw-duration-300', 'rttw-ease-out');
                            // Desde estado minimizado: rttw-text-[8px] → rttw-text-xs
                            if (p.classList.contains('rttw-text-[8px]')) {
                                p.classList.remove('rttw-text-[8px]');
                                p.classList.add('rttw-text-xs');
                            }
                            // Desde estado minimizado: rttw-text-[10px] → rttw-text-sm
                            if (p.classList.contains('rttw-text-[10px]')) {
                                p.classList.remove('rttw-text-[10px]');
                                p.classList.add('rttw-text-sm');
                            }
                        });
                    }
                }

                // Restaurar texto desde/hasta con animación
                const desdeHasta = precioContainer.querySelector('.texto-desde-hasta p');
                if (desdeHasta) {
                    // Restaurar a tamaño original del template: rttw-text-xs y rttw-leading-none
                    desdeHasta.classList.remove('rttw-leading-4', 'rttw-leading-[0.7rem]', 'rttw-text-[10px]');
                    desdeHasta.classList.add('rttw-text-xs', 'rttw-leading-none');
                }

                // Restaurar porcentaje principal con animación
                const precio = precioContainer.querySelector('.precio');
                if (precio) {
                    precio.classList.remove('rttw-text-[1.2em]', 'rttw-leading-6');
                    precio.classList.add('rttw-text-[1.7em]', 'rttw-leading-9', 'rttw-transition-[font-size]', 'rttw-duration-300', 'rttw-ease-out');
                }

                // Restaurar subtexto container con animación
                const subtextoContainer = precioContainer.querySelector('.rttw-bg-blue-950');
                if (subtextoContainer) {
                    subtextoContainer.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
                    /* subtextoContainer.classList.remove('-rttw-mt-0', 'rttw-px-1.5', 'rttw-py-0.5');
                    subtextoContainer.classList.add('-rttw-mt-2.5', 'rttw-px-2.5', 'rttw-py-0.5'); */
                }

                // Restaurar leading de elementos con rttw-leading-[.5rem] a rttw-leading-3
                const leadingElements = precioContainer.querySelectorAll('.rttw-leading-3');
                leadingElements.forEach(elem => {
                    elem.classList.remove('rttw-leading-3');
                    elem.classList.add('rttw-leading-5');
                });

                // Limpiar transiciones después de la animación
                setTimeout(() => {
                    precioInner.classList.remove('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');

                    // Buscar rutasViajes dentro del timeout para asegurar scope correcto
                    const rutasViajesInTimeout = precioContainer.querySelector('.rutas-viajes');
                    const paragraphs = rutasViajesInTimeout?.querySelectorAll('p') || [];
                    paragraphs.forEach((p, index) => {
                        p.classList.remove('rttw-transition-[font-size]', 'rttw-duration-300', 'rttw-ease-out');

                        // Estado final minimizado OFF - Usar tamaños del template original
                        // Primer p debe ser rttw-text-sm (template original)
                        if (index === 0) {
                            p.classList.remove('rttw-text-[8px]', 'rttw-text-xs', 'rttw-text-[10px]', 'rttw-text-base');
                            p.classList.add('rttw-text-sm');
                            // Ambos textos deben tener leading-5
                            p.classList.remove('rttw-leading-3', 'rttw-leading-none');
                            p.classList.add('rttw-leading-5');
                        }
                        // Segundo p debe ser rttw-text-base (template original)
                        if (index === 1) {
                            p.classList.remove('rttw-text-[8px]', 'rttw-text-xs', 'rttw-text-[10px]', 'rttw-text-sm');
                            p.classList.add('rttw-text-base');
                            // Ambos textos deben tener leading-5
                            p.classList.remove('rttw-leading-3', 'rttw-leading-none');
                            p.classList.add('rttw-leading-5');
                        }
                    });

                    if (precio) {
                        precio.classList.remove('rttw-transition-[font-size]', 'rttw-duration-300', 'rttw-ease-out');
                        precio.classList.remove('rttw-text-[1.2em]', 'rttw-leading-7');
                        precio.classList.add('rttw-text-[1.7em]', 'rttw-leading-9');
                    }

                    // Limpiar y aplicar clases del subtexto container
                    const subtextoContainer = precioContainer.querySelector('.rttw-bg-blue-950');
                    if (subtextoContainer) {
                        subtextoContainer.classList.remove('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
                        // Restaurar clases originales
                        /* subtextoContainer.classList.remove('rttw-px-1.5', 'rttw-py-0.5', '-rttw-mt-0');
                        subtextoContainer.classList.add('-rttw-mt-2.5', 'rttw-px-2.5', 'rttw-py-0.5'); */
                    }

                    // Limpiar otros elementos leading (no p de rutas-viajes)
                    const otherLeadingElements = precioContainer.querySelectorAll('.rttw-leading-\\[\\.5rem\\]:not(.rutas-viajes p)');
                    otherLeadingElements.forEach(elem => {
                        elem.classList.remove('rttw-leading-[.5rem]');
                        elem.classList.add('rttw-leading-3');
                    });
                }, 1);
            }

            // Restaurar tiempo container con animación
            const tiempoInner = tiempoContainer.querySelector('div');
            if (tiempoInner) {
                // Animar padding y gap
                tiempoInner.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
                tiempoInner.classList.remove('rttw-px-2', 'rttw-py-1', 'rttw-gap-1.5');
                tiempoInner.classList.add('rttw-px-3', 'rttw-py-2', 'rttw-gap-2.5');

                // Animar grupo principal de números
                const numbersGroup = tiempoContainer.querySelector('.rttw-flex.rttw-justify-end.rttw-items-start.rttw-gap-5');
                if (numbersGroup) {
                    numbersGroup.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
                    numbersGroup.classList.remove('rttw-gap-3');
                    numbersGroup.classList.add('rttw-gap-5');
                }

                // Restaurar números del countdown con animación
                const countdownNumbers = tiempoContainer.querySelectorAll('[id*="countdown-"]:not([id*="mobile"])');
                countdownNumbers.forEach(num => {
                    if (num.className.includes('rttw-text-sm')) {
                        num.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
                        num.classList.remove('rttw-text-sm');
                        num.classList.add('rttw-text-2xl');
                    }
                });

                // Restaurar contenedores de columnas del countdown
                const countdownColumns = tiempoContainer.querySelectorAll('.rttw-inline-flex.rttw-flex-col');
                countdownColumns.forEach(col => {
                    if (col) {
                        col.classList.remove('rttw-w-[22px]');
                        col.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out', 'rttw-w-[35px]');
                    }
                });

                // Restaurar labels con animación
                const labels = tiempoContainer.querySelectorAll('.rttw-text-\\[8px\\]');
                labels.forEach(label => {
                    label.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
                    label.classList.remove('rttw-text-[8px]');
                    label.classList.add('rttw-text-xs');
                });

                // Restaurar separadores ":" con animación
                const separators = tiempoContainer.querySelectorAll('.rttw-text-sm');
                separators.forEach(sep => {
                    if (sep.textContent.trim() === ':') {
                        sep.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
                        sep.classList.remove('rttw-text-sm', 'rttw-w-1.5', 'rttw-h-8');
                        sep.classList.add('rttw-text-xl', 'rttw-w-2', 'rttw-h-8');
                    }
                });
            }

            const closeBtn = contador.querySelector('.promo-close-btn');

            // Mostrar y cambiar color del botón cerrar            
            closeBtn.classList.remove('rttw-hidden', 'rttw-text-white');
            closeBtn.classList.add('rttw-text-[#1B365D]');

            // Ocultar ícono de chevrones
            const expandIcon = promoInner.querySelector('.expand-icon');
            if (expandIcon) {
                expandIcon.classList.add('rttw-hidden');
            }

            // Mantener color del texto mas-tasas en #1B365D
            const masTasas = contador.querySelector('.mas-tasas');
            if (masTasas) {
                masTasas.classList.remove('rttw-text-white');
                masTasas.classList.add('rttw-text-[#1B365D]');
            }

            // Remover click en toda el área del contador
            contador.onclick = null;

            // Restaurar el onclick del botón cerrar para closeContador (no minimizarContador)
            closeBtn.onclick = closeContador;

            // Actualizar listeners para incluir scroll (estado expandido)
            updateInteractionListeners(contador, 'desktop');

            // Limpiar transiciones después de la animación
            setTimeout(() => {
                // Aplicar clases finales
                promoTitle.classList.remove('rttw-max-w-[140px]', 'rttw-text-[12px]');
                promoTitle.classList.add('rttw-max-w-[250px]', 'rttw-text-2xl');
                
                // Caso especial evento solo texto - asegurar max-w-[290px] en expandido
                if (promoTitle.classList.contains('evento-texto')) {
                    promoTitle.classList.remove('rttw-max-w-[250px]', 'rttw-max-w-[170px]');
                    promoTitle.classList.add('rttw-max-w-[290px]');
                }
            }, 300); // Aumentado para acomodar la animación del título (0.5s)
        } else {
            // TOGGLE ON - Aplicar minimizado
            contador.classList.add('contador-minimized', 'rttw-max-w-fit', 'rttw-py-[7.5px]', 'rttw-px-[18.5px]', 'rttw-relative', 'rttw-cursor-pointer', 'hover:rttw-scale-[1.05]', 'rttw-transition', 'rttw-duration-300', 'rttw-ease-in-out');
            contador.classList.remove('rttw-w-full', 'rttw-py-4', 'rttw-px-8', 'rttw-absolute');

            // Achicar gap
            promoInner.classList.remove('rttw-gap-[36px]');
            promoInner.classList.add('rttw-gap-[24px]');

            // Animar título suavemente desde grande a pequeño
            promoTitle.classList.add('rttw-transition-all', 'rttw-duration-0', 'rttw-ease-out');
            promoTitle.classList.remove('rttw-max-w-[250px]', 'rttw-text-2xl', 'rttw-text-xl');
            promoTitle.classList.add('rttw-max-w-[140px]', 'rttw-text-[12px]');

            // Caso especial promo genérica
            if (promoTitle.classList.contains('flash-generica')) {
                promoTitle.classList.remove('-rttw-mt-[33px]', '-rttw-mt-[36px]');
                promoTitle.classList.add('-rttw-mt-[24px]');
            }

            // Caso especial evento solo texto
            if (promoTitle.classList.contains('evento-texto')) {
                promoTitle.classList.remove('rttw-max-w-[290px]', 'rttw-text-xl');
                promoTitle.classList.add('rttw-max-w-[170px]', 'rttw-text-[12px]');
            }

            if (ofertaBtn) {
                // Ocultar botón de oferta con animación
                const ofertaBtnContainer = ofertaBtn.closest('.generico-button-container');
                if (ofertaBtnContainer) {
                    ofertaBtnContainer.classList.add('rttw-hidden');
                }
                ofertaBtn.classList.add('rttw-hidden');
            }

            // Cambiar tamaño del porcentaje y tiempo del contador nativamente
            // Reducir porcentaje container con animación
            const porcentajeInner = porcentajeContainer ? porcentajeContainer.querySelector('div') : null;
            if (porcentajeInner) {
                // Animar hacia el tamaño pequeño
                porcentajeInner.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
                porcentajeInner.classList.remove('rttw-w-auto');

                //texto desde/hasta
                const textoDesdeHasta = porcentajeContainer.querySelectorAll('.texto-desde-hasta p')[0];
                // Reducir texto de rutas con animación
                const rutasViajes = porcentajeContainer.querySelector('.rutas-viajes');
                if (rutasViajes) {
                    const paragraphs = rutasViajes.querySelectorAll('p');
                    if (paragraphs.length >= 2) {
                        paragraphs.forEach((p, index) => {
                            p.classList.add('rttw-transition-[font-size]', 'rttw-duration-300', 'rttw-ease-out');

                            // Primer párrafo
                            if (index === 0) {
                                p.classList.remove('rttw-text-xs', 'rttw-text-sm', 'rttw-text-base', 'rttw-leading-3', 'rttw-leading-none');
                                p.classList.add('rttw-text-[8px]', 'rttw-leading-[.5rem]');
                            }
                            // Segundo párrafo
                            else if (index === 1) {
                                p.classList.remove('rttw-text-xs', 'rttw-text-sm', 'rttw-text-base', 'rttw-leading-3', 'rttw-leading-none', 'rttw-leading-5');
                                p.classList.add('rttw-text-[10px]', 'rttw-leading-3');
                            }
                        });

                        if (textoDesdeHasta) {
                            // Configurar textoDesdeHasta manualmente para evitar clases duplicadas
                            textoDesdeHasta.classList.remove('rttw-text-xs', 'rttw-text-sm', 'rttw-text-base', 'rttw-leading-none', 'rttw-leading-3', 'rttw-leading-5', 'rttw-leading-[.5rem]');
                            textoDesdeHasta.classList.add('rttw-text-[10px]', 'rttw-leading-3');
                        }
                    }
                }

                // Reducir texto desde/hasta con animación
                const desdeHasta = porcentajeContainer.querySelectorAll('.texto-desde-hasta p')[0];
                if (desdeHasta) {
                    desdeHasta.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
                    desdeHasta.classList.remove('rttw-text-xs');
                    desdeHasta.classList.add('rttw-text-[8px]');
                }

                // Reducir porcentaje principal con animación
                const porcentaje = porcentajeContainer.querySelector('.porcentaje');
                if (porcentaje) {
                    porcentaje.classList.remove('rttw-text-[50px]', 'rttw-text-white');
                    porcentaje.classList.add('rttw-text-[30px]', 'rttw-text-[#00AEC7]', 'rttw-transition-[font-size]', 'rttw-duration-300', 'rttw-ease-out');
                    // Cambiar text-shadow a color blanco
                    porcentaje.style.textShadow = '2px 1px white';
                }

                // Reducir subtexto con animación
                const subtexto = porcentajeContainer.querySelector('.rttw-bg-blue-950 div');
                if (subtexto) {
                    subtexto.classList.add('rttw-transition-[font-size]', 'rttw-duration-300', 'rttw-ease-out');
                    subtexto.classList.remove('rttw-text-sm');
                    subtexto.classList.add('rttw-text-[8px]');
                }

                // Reducir subtexto container con animación
                const subtextoContainer = porcentajeContainer.querySelector('.rttw-bg-blue-950');
                if (subtextoContainer) {
                    subtextoContainer.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
                    subtextoContainer.classList.remove('-rttw-mt-2.5', 'rttw-px-2.5', 'rttw-py-0.5');
                    subtextoContainer.classList.add('-rttw-mt-0', 'rttw-px-1.5', 'rttw-py-0.5');
                }

                // Ajustar contenedor del porcentaje
                const porcentajeContainerInner = porcentajeContainer.querySelector('.porcentaje-inner');
                if (porcentajeContainerInner) {
                    porcentajeContainerInner.classList.remove('-rttw-mb-4', '-rttw-mt-1');
                    porcentajeContainerInner.classList.add('-rttw-mb-2', 'rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
                }

                // Cambiar leading de elementos con rttw-leading-3 a rttw-leading-[.5rem]
                // EXCEPTO los párrafos de rutas-viajes que ya tienen su leading configurado
                const leadingElements = porcentajeContainer.querySelectorAll('.rttw-leading-3:not(.rutas-viajes p)');
                leadingElements.forEach(elem => {
                    elem.classList.remove('rttw-leading-3');
                    elem.classList.add('rttw-leading-[.5rem]');
                });

                // Limpiar transiciones y aplicar clases finales
                setTimeout(() => {
                    porcentajeInner.classList.remove('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');

                    // Buscar rutasViajes dentro del timeout para asegurar scope correcto
                    const rutasViajesInTimeout = porcentajeContainer.querySelector('.rutas-viajes');
                    const paragraphs = rutasViajesInTimeout?.querySelectorAll('p') || [];
                    paragraphs.forEach((p, index) => {
                        p.classList.remove('rttw-transition-[font-size]', 'rttw-duration-300', 'rttw-ease-out');

                        // Cambiar de rttw-text-base (del estado OFF) a tamaños pequeños
                        if (p.classList.contains('rttw-text-base')) {
                            p.classList.remove('rttw-text-base');
                            // Aplicar tamaños específicos según el índice
                            if (index === 0) {
                                p.classList.add('rttw-text-[8px]');
                            } else if (index === 1) {
                                p.classList.add('rttw-text-[10px]');
                            }
                        }

                        // Manejar cambios desde tamaños originales (para compatibilidad)
                        if (p.classList.contains('rttw-text-xs')) {
                            p.classList.remove('rttw-text-xs');
                            p.classList.add('rttw-text-[8px]');
                        }
                        if (p.classList.contains('rttw-text-sm')) {
                            p.classList.remove('rttw-text-sm');
                            p.classList.add('rttw-text-[10px]');
                        }

                        // El primer p: cambiar de rttw-leading-4 a rttw-leading-[.5rem]
                        if (index === 0) {
                            p.classList.remove('rttw-leading-4');
                            p.classList.add('rttw-leading-[.5rem]');
                        }
                    });

                    if (desdeHasta) {
                        desdeHasta.classList.remove('rttw-transition-[font-size]', 'rttw-duration-300', 'rttw-ease-out');
                        desdeHasta.classList.remove('rttw-text-base');
                        desdeHasta.classList.add('rttw-text-[8px]');
                    }

                    const porcentaje = porcentajeContainer.querySelector('.porcentaje');
                    if (porcentaje) {
                        porcentaje.classList.remove('rttw-transition-[font-size]', 'rttw-duration-300', 'rttw-ease-out');
                        porcentaje.classList.remove('rttw-text-[50px]', 'rttw-text-white');
                        porcentaje.classList.add('rttw-text-[30px]', 'rttw-text-[#00AEC7]');
                        // Asegurar text-shadow blanco
                        porcentaje.style.textShadow = '2px 1px white;';
                    }

                    if (subtexto) {
                        subtexto.classList.remove('rttw-transition-[font-size]', 'rttw-duration-300', 'rttw-ease-out');
                        subtexto.classList.remove('rttw-text-sm');
                        subtexto.classList.add('rttw-text-[8px]');
                    }

                    // Aplicar ajustes adicionales del container
                    const subtextoContainer = porcentajeContainer.querySelector('.rttw-bg-blue-950');
                    if (subtextoContainer) {
                        subtextoContainer.classList.remove('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
                        // Aplicar clases finales
                        subtextoContainer.classList.remove('-rttw-mt-2.5', 'rttw-px-2.5');
                        subtextoContainer.classList.add('-rttw-mt-0', 'rttw-px-1.5', 'rttw-py-0.5');
                    }

                    // Aplicar ajustes del contenedor del porcentaje
                    const porcentajeContainerInner = porcentajeContainer.querySelector('.porcentaje-inner');
                    if (porcentajeContainerInner) {
                        porcentajeContainerInner.classList.remove('-rttw-mb-4', 'rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
                        porcentajeContainerInner.classList.add('-rttw-mb-2');
                    }

                    // Limpiar clases leading - Aplicar diferentes leading a p de rutas-viajes
                    const rutasViajes = porcentajeContainer.querySelector('.rutas-viajes');
                    if (rutasViajes) {
                        const paragraphs = rutasViajes.querySelectorAll('p');
                        paragraphs.forEach((p, index) => {
                            // Remover leading anteriores
                            p.classList.remove('rttw-leading-3');

                            if (index === 0) {
                                // Primer p: rttw-leading-[.5rem]
                                p.classList.add('rttw-leading-[.5rem]');
                            } else if (index === 1) {
                                // Segundo p: rttw-leading-3
                                p.classList.add('rttw-leading-3');
                            }
                        });
                    }

                    // Aplicar rttw-leading-[.5rem] a otros elementos (no p de rutas-viajes)
                    const otherLeadingElements = porcentajeContainer.querySelectorAll('.rttw-leading-3:not(.rutas-viajes p)');
                    otherLeadingElements.forEach(elem => {
                        elem.classList.remove('rttw-leading-3');
                        elem.classList.add('rttw-leading-[.5rem]');
                    });
                }, 1);
            }
            const precioInner = precioContainer ? precioContainer.querySelector('div') : null;
            if (precioInner) {
                // Animar hacia el tamaño pequeño
                precioInner.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
                precioInner.classList.remove('rttw-w-auto');

                // Reducir texto de rutas con animación
                const rutasViajes = precioContainer.querySelector('.rutas-viajes');
                if (rutasViajes) {
                    console.log('rutasViajes 2');

                    const paragraphs = rutasViajes.querySelectorAll('p');
                    if (paragraphs.length >= 2) {
                        paragraphs.forEach(p => {
                            p.classList.add('rttw-transition-[font-size]', 'rttw-duration-300', 'rttw-ease-out');
                            if (p.classList.contains('rttw-text-xs')) {
                                p.classList.remove('rttw-text-xs', 'rttw-text-base');
                                p.classList.add('rttw-text-base');
                            }
                            if (p.classList.contains('rttw-text-sm')) {
                                p.classList.remove('rttw-text-sm', 'rttw-text-base');
                                p.classList.add('rttw-text-base');
                            }
                            if (p.classList.contains('rttw-text-2xl')) {
                                p.classList.remove('rttw-text-2xl');
                                p.classList.add('rttw-text-base');
                            }
                        });
                    }
                }

                // Reducir texto desde/hasta con animación
                const desdeHasta = precioContainer.querySelector('.texto-desde-hasta p');
                if (desdeHasta) {
                    desdeHasta.classList.remove('rttw-text-[8px]', 'rttw-text-xs', 'rttw-leading-[1.5rem]', 'rttw-leading-[0.7rem]');
                    desdeHasta.classList.add('rttw-text-[10px]', 'rttw-leading-[0.5rem]');
                }

                // Reducir precio principal con animación
                const precio = precioContainer.querySelector('.precio');
                if (precio) {
                    precio.classList.remove('rttw-text-[1.7em]', 'rttw-leading-9');
                    precio.classList.add('rttw-text-[1.2em]', 'rttw-leading-6', 'rttw-transition-[font-size]', 'rttw-duration-300', 'rttw-ease-out');
                }

                // Reducir subtexto con animación
                const subtexto = precioContainer.querySelector('.rttw-bg-blue-950 div');
                if (subtexto) {
                    subtexto.classList.remove('rttw-text-[1.7em]', 'rttw-leading-9');
                    subtexto.classList.add('rttw-text-[1.2em]', 'rttw-leading-7', 'rttw-transition-[font-size]', 'rttw-duration-300', 'rttw-ease-out');
                }

                // Reducir subtexto container con animación
                const subtextoContainer = precioContainer.querySelector('.rttw-bg-blue-950');
                if (subtextoContainer) {
                    subtextoContainer.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
                    /* subtextoContainer.classList.remove('-rttw-mt-2.5', 'rttw-px-2.5', 'rttw-py-0.5');
                    subtextoContainer.classList.add('-rttw-mt-0', 'rttw-px-1.5', 'rttw-py-0.5'); */
                }

                // Cambiar leading de elementos con rttw-leading-3 a rttw-leading-[.5rem]
                const leadingElements = precioContainer.querySelectorAll('.rttw-leading-5');
                leadingElements.forEach(elem => {
                    elem.classList.remove('rttw-leading-5');
                    elem.classList.add('rttw-leading-3');
                });

                // Limpiar transiciones y aplicar clases finales
                setTimeout(() => {
                    precioInner.classList.remove('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');

                    // Buscar rutasViajes dentro del timeout para asegurar scope correcto
                    const rutasViajesInTimeout = precioContainer.querySelector('.rutas-viajes');
                    const paragraphs = rutasViajesInTimeout?.querySelectorAll('p') || [];
                    paragraphs.forEach((p, index) => {
                        p.classList.remove('rttw-transition-[font-size]', 'rttw-duration-300', 'rttw-ease-out');

                        // Cambiar todos los tamaños a text-[10px] en estado minimizado
                        p.classList.remove('rttw-text-base', 'rttw-text-xs', 'rttw-text-sm');
                        p.classList.add('rttw-text-[10px]');

                        if (index === 0) {
                            p.classList.remove('rttw-leading-5');
                            p.classList.add('rttw-leading-3');
                        }
                    });

                    if (desdeHasta) {
                        desdeHasta.classList.remove('rttw-transition-[font-size]', 'rttw-duration-300', 'rttw-ease-out');
                        desdeHasta.classList.remove('rttw-text-base');
                    }

                    const porcentaje = precioContainer.querySelector('.porcentaje');
                    if (porcentaje) {
                        porcentaje.classList.remove('rttw-text-[50px]', 'rttw-transition-[font-size]', 'rttw-duration-300', 'rttw-ease-out');
                        porcentaje.classList.add('rttw-text-[30px]');
                    }

                    if (subtexto) {
                        subtexto.classList.remove('rttw-transition-[font-size]', 'rttw-duration-300', 'rttw-ease-out');
                        /* subtexto.classList.remove('rttw-text-sm');
                        subtexto.classList.add('rttw-text-[8px]'); */
                    }

                    // Aplicar ajustes adicionales del container
                    const subtextoContainer = precioContainer.querySelector('.rttw-bg-blue-950');
                    if (subtextoContainer) {
                        subtextoContainer.classList.remove('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
                        // Aplicar clases finales
                        /* subtextoContainer.classList.remove('-rttw-mt-2.5', 'rttw-px-2.5');
                        subtextoContainer.classList.add('-rttw-mt-0', 'rttw-px-1.5', 'rttw-py-0.5'); */
                    }

                    // Limpiar clases leading - Aplicar diferentes leading a p de rutas-viajes
                    const rutasViajes = precioContainer.querySelector('.rutas-viajes');
                    if (rutasViajes) {
                        const paragraphs = rutasViajes.querySelectorAll('p');
                        paragraphs.forEach((p, index) => {
                            // Remover leading anteriores
                            p.classList.remove('rttw-leading-5');
                            p.classList.add('rttw-leading-3');
                        });
                    }

                    // Aplicar rttw-leading-[.5rem] a otros elementos (no p de rutas-viajes)
                    const otherLeadingElements = precioContainer.querySelectorAll('.rttw-leading-3:not(.rutas-viajes p)');
                    otherLeadingElements.forEach(elem => {
                        elem.classList.remove('rttw-leading-3');
                        /* elem.classList.add('rttw-leading-[.5rem]'); */
                    });
                }, 1);
            }

            // Reducir tiempo container con animación
            const tiempoInner = tiempoContainer.querySelector('div');
            if (tiempoInner) {
                // Animar padding y gap hacia tamaños pequeños
                tiempoInner.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
                tiempoInner.classList.remove('rttw-px-3', 'rttw-py-2', 'rttw-gap-2.5');
                tiempoInner.classList.add('rttw-px-2', 'rttw-py-1', 'rttw-gap-1.5');

                // Reducir grupo principal de números
                const numbersGroup = tiempoContainer.querySelector('.rttw-flex.rttw-justify-start.rttw-items-center.rttw-gap-5');
                if (numbersGroup) {
                    numbersGroup.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
                    numbersGroup.classList.remove('rttw-gap-5');
                    numbersGroup.classList.add('rttw-gap-3');
                }

                // Reducir números del countdown con animación
                const countdownNumbers = tiempoContainer.querySelectorAll('[id*="countdown-"]:not([id*="mobile"])');
                countdownNumbers.forEach(num => {
                    if (num.className.includes('rttw-text-2xl')) {
                        num.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
                        num.classList.remove('rttw-text-2xl');
                        num.classList.add('rttw-text-sm');
                    }
                });

                // Reducir contenedores de columnas del countdown
                const countdownColumns = tiempoContainer.querySelectorAll('.rttw-inline-flex.rttw-flex-col');
                countdownColumns.forEach(col => {
                    if (col) {
                        col.classList.remove('rttw-w-[35px]');
                        col.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out', 'rttw-w-[22px]');
                    }
                });

                // Reducir labels con animación
                const labels = tiempoContainer.querySelectorAll('.rttw-text-xs');
                labels.forEach(label => {
                    label.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
                    label.classList.remove('rttw-text-xs');
                    label.classList.add('rttw-text-[8px]');
                });

                // Reducir separadores ":" con animación
                const separators = tiempoContainer.querySelectorAll('.rttw-text-xl');
                separators.forEach(sep => {
                    sep.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
                    sep.classList.remove('rttw-text-xl', 'rttw-w-2', 'rttw-h-8');
                    sep.classList.add('rttw-text-sm', 'rttw-w-1', 'rttw-h-4');
                });
            }

            const closeBtn = contador.querySelector('.promo-close-btn');

            // Ocultar botón cerrar (X)
            closeBtn.classList.add('rttw-hidden');

            // Crear y mostrar ícono de chevrones para indicar expandir
            let expandIcon = promoInner.querySelector('.expand-icon');
            if (!expandIcon) {
                expandIcon = document.createElement('div');
                expandIcon.className = 'expand-icon rttw-relative rttw-flex rttw-items-center rttw-text-[#1B365D] rttw-cursor-pointer';
                expandIcon.innerHTML = '<i class="fa-solid fa-chevrons-right"></i>';
                setTimeout(() => {
                    promoInner.appendChild(expandIcon);
                }, 300);
            } else {
                setTimeout(() => {
                    expandIcon.classList.remove('rttw-hidden');
                }, 300);
            }

            // Cambiar color del texto mas-tasas a azul
            const masTasas = contador.querySelector('.mas-tasas');
            if (masTasas) {
                masTasas.classList.remove('rttw-text-white');
                masTasas.classList.add('rttw-text-[#1B365D]');
            }

            // Limpiar transición del título y aplicar clases finales después de la animación
            setTimeout(() => {
                promoTitle.classList.remove('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
                promoTitle.classList.remove('rttw-max-w-[250px]', 'rttw-text-2xl');
                promoTitle.classList.add('rttw-max-w-[140px]', 'rttw-text-[12px]');
                
                // Caso especial evento solo texto - asegurar max-w-[170px] en minimizado
                if (promoTitle.classList.contains('evento-texto')) {
                    promoTitle.classList.remove('rttw-max-w-[140px]', 'rttw-max-w-[290px]');
                    promoTitle.classList.add('rttw-max-w-[170px]');
                }
            }, 300); // Tiempo de la animación del título

            // Al hacer click en cualquier parte del contador minimizado, hacer toggle OFF
            contador.onclick = minimizarContador;

            // Actualizar listeners para quitar scroll (estado minimizado)
            updateInteractionListeners(contador, 'desktop');
        }
    }

    if (deviceType === 'mobile') {
        const contador = document.getElementById('contador-promo-mobile');
        if (!contador) return;

        const contenedor1 = contador.querySelector('.contenedor-1');
        const contenedor2 = contador.querySelector('.contenedor-2');
        const promoCta = document.getElementById('promo-cta-mobile');
        const porcentajeContainer = contador.querySelector('.porcentaje-container');
        const precioContainer = contador.querySelector('.precio-container');
        const tiempoContainer = contador.querySelector('.tiempo-container');

        // Verificar si está en estado minimizado ON
        const isMinimized = contador.classList.contains('contador-minimized-mobile');

        if (isMinimized) {
            // Mobile ya está minimizado, no hacer nada
            // console.log('Mobile contador ya está minimizado');
            return;
        } else {
            // SOLO APLICAR MINIMIZADO - Sin toggle OFF
            contador.classList.add('contador-minimized-mobile');

            // Extraer title-container si es evento-texto antes de ocultar contenedor1
            let titleContainerMobile = null;
            const promoTitleMobile = document.getElementById('promo-title-mobile');
            if (promoTitleMobile && promoTitleMobile.parentElement && promoTitleMobile.parentElement.classList.contains('title-container')) {
                titleContainerMobile = promoTitleMobile.parentElement;
            }

            // En lugar de ocultar, mover los contenedores originales
            if (contenedor1) {
                contenedor1.style.display = 'none';
            }
            if (contenedor2) {
                // No ocultar contenedor2 (tiempo), solo reposicionarlo
                contenedor2.className = 'contenedor-2 rttw-relative rttw-w-[125px]';

                // Reducir el tiempo container directamente (sin clonar)
                const tiempoInner = tiempoContainer.querySelector('div');
                if (tiempoInner) {
                    tiempoInner.className = 'rttw-w-full rttw-h-fit rttw-px-2 rttw-rounded-md rttw-inline-flex rttw-justify-center rttw-items-center rttw-gap-1 rttw-text-white';
                }

                // Reducir números del countdown manteniendo sus IDs originales y cambiando a fit
                const countdownNumbers = tiempoContainer.querySelectorAll('[id*="countdown-"][id*="mobile"]');
                countdownNumbers.forEach(num => {
                    num.className = 'rttw-w-6 rttw-h-fit rttw-text-center rttw-justify-start rttw-text-md rttw-font-extrabold rttw-font-[\'Encode_Sans\']';
                });

                // Reducir labels del countdown
                const labels = tiempoContainer.querySelectorAll('.rttw-text-xs');
                labels.forEach(label => {
                    label.className = 'rttw-self-stretch rttw-text-center rttw-justify-start rttw-text-[8px] rttw-leading-3';
                });

                // Reducir separadores ":"
                const separators = tiempoContainer.querySelectorAll('.rttw-text-xl');
                separators.forEach(sep => {
                    sep.className = 'rttw-w-1 rttw-h-5 rttw-justify-center rttw-text-sm rttw-font-medium rttw-font-[\'Encode_Sans\']';
                });

                // Reducir columnas de números
                const columns = tiempoContainer.querySelectorAll('.rttw-inline-flex.rttw-flex-col');
                columns.forEach(col => {
                    col.className = 'rttw-inline-flex rttw-flex-col rttw-justify-start rttw-items-start';
                });

                // Reducir grupo principal de números
                const numbersGroup = tiempoContainer.querySelector('.rttw-flex.rttw-justify-start.rttw-items-center.rttw-gap-5');
                if (numbersGroup) {
                    numbersGroup.classList.remove('rttw-gap-5');
                    numbersGroup.classList.add('rttw-gap-2');
                }
            }

            // Ocultar botón CTA original y mostrar el minimizado
            if (promoCta) {
                promoCta.style.display = 'none';
                const ctaMinimized = document.getElementById('promo-cta-mobile-minimized');
                if (ctaMinimized) {
                    ctaMinimized.classList.remove('rttw-hidden');
                    ctaMinimized.classList.add('rttw-flex');

                    // Ajustar tamaños del botón minimizado
                    ctaMinimized.classList.remove('rttw-py-[10px]', 'rttw-px-[14px]', 'fttw-text-sm');
                    ctaMinimized.classList.add('rttw-py-2', 'rttw-px-[10px]', 'rttw-text-[11px]');

                    // Cambiar texto del CTA minimizado
                    /* const ctaText = ctaMinimized.querySelector('span');
                    if (ctaText) {
                        ctaText.textContent = 'Ver oferta';
                    } */
                }
            }

            // Crear contenedor minimizado
            let minimizedContainer = contador.querySelector('.minimized-container');
            if (!minimizedContainer) {
                minimizedContainer = document.createElement('div');
                minimizedContainer.className = 'minimized-container rttw-flex rttw-flex-row rttw-items-center rttw-justify-center rttw-w-full rttw-gap-3';
                contador.querySelector('.contador-inner').appendChild(minimizedContainer);
            }

            // Limpiar contenedor minimizado
            minimizedContainer.innerHTML = '';

            // 0. Agregar title-container si es evento-texto (primero)
            if (titleContainerMobile) {
                // Reducir el tamaño del título para el estado minimizado
                if (promoTitleMobile) {
                    promoTitleMobile.classList.remove('rttw-w-[138px]', 'rttw-text-base');
                    promoTitleMobile.classList.add('rttw-text-[12px]', 'rttw-max-w-[170px]');
                    promoTitleMobile.style.whiteSpace = 'nowrap';
                }
                /* minimizedContainer.appendChild(titleContainerMobile); */
                contenedor2.insertBefore(promoTitleMobile, contenedor2.firstChild);
            }

            // 1. Porcentaje/Precio (segundo)
            const activeDiscountContainer = porcentajeContainer && !porcentajeContainer.classList.contains('rttw-hidden')
                ? porcentajeContainer
                : precioContainer;

            if (activeDiscountContainer) {

                // Contenedor principal - modificar clases sin sobrescribir
                activeDiscountContainer.classList.remove('rttw-hidden');
                activeDiscountContainer.classList.add('rttw-flex', 'rttw-justify-center');

                // Reducir tamaños nativamente en lugar de escalar
                if (activeDiscountContainer.classList.contains('porcentaje-container')) {
                    const discountInner = activeDiscountContainer.querySelector('.porcentaje');
                    if (discountInner) {
                        // Limpiar estilo existente
                        discountInner.style.textShadow = '';
                    }
                }

                // Reducir texto de rutas/viajes
                const rutasViajes = activeDiscountContainer.querySelector('.rutas-viajes');
                if (rutasViajes) {
                    // Ajustar elemento padre de rutasViajes
                    const rutasViajesParent = activeDiscountContainer.querySelector('.rttw-relative.rttw-flex.rttw-flex-row');
                    if (rutasViajesParent && rutasViajesParent.classList.contains('-rttw-mb-4')) {
                        rutasViajesParent.classList.remove('-rttw-mb-4');
                    }

                    if (precioContainer) {
                        // Agregar flex-wrap y gap horizontal para el modo minimizado en mobile
                        rutasViajes.classList.remove('rttw-flex-col', 'rttw-flex-row');
                        rutasViajes.classList.add('rttw-flex', 'rttw-flex-wrap', 'rttw-justify-center', 'rttw-gap-x-0.5');

                        const paragraphs = rutasViajes.querySelectorAll('p');
                        paragraphs.forEach((p, index) => {
                            // Cambiar de text-xs (12px) a text-[10px]
                            p.classList.remove('rttw-text-xs', 'rttw-text-sm', 'rttw-text-base', 'rttw-inline-block');
                            p.classList.add('rttw-text-[10px]');

                            // Primer p: font-bold, Segundo p: font-extrabold con leading-3
                            if (index === 0) {
                                p.classList.remove('rttw-font-medium', 'rttw-font-extrabold', 'rttw-leading-none', 'rttw-leading-5');
                                p.classList.add('rttw-font-bold');
                            } else if (index === 1) {
                                p.classList.remove('rttw-font-medium', 'rttw-font-bold', 'rttw-leading-none', 'rttw-leading-5');
                                p.classList.add('rttw-font-extrabold', 'rttw-leading-3');
                            }
                        });

                        const desdeHasta = activeDiscountContainer.querySelector('.texto-desde-hasta');
                        if (desdeHasta) {
                            const desdeHastaP = desdeHasta.querySelector('p');
                            if (desdeHastaP) {
                                // Cambiar de text-xs (12px) a text-[8px]
                                desdeHastaP.classList.remove('rttw-text-xs');
                                desdeHastaP.classList.add('rttw-text-[8px]');
                            }
                        }
                    } else {
                        // Agregar flex-wrap y gap horizontal para el modo minimizado en mobile (porcentaje)
                        rutasViajes.classList.remove('rttw-flex-col', 'rttw-flex-row');
                        rutasViajes.classList.add('rttw-flex', 'rttw-flex-wrap', 'rttw-justify-center', 'rttw-gap-x-0.5', 'rttw-gap-0.5', 'rttw-max-w-[100px]');

                        const paragraphs = rutasViajes.querySelectorAll('p');
                        paragraphs.forEach((p, index) => {
                            // Cambiar de text-xs (12px) a text-[10px]
                            p.classList.remove('rttw-text-xs', 'rttw-text-sm', 'rttw-text-base', 'rttw-inline-block');
                            p.classList.add('rttw-text-[10px]');

                            // Primer p: font-bold, Segundo p: font-extrabold con leading-3
                            if (index === 0) {
                                p.classList.remove('rttw-font-medium', 'rttw-font-extrabold', 'rttw-leading-none', 'rttw-leading-5');
                                p.classList.add('rttw-font-bold');
                            } else if (index === 1) {
                                p.classList.remove('rttw-font-medium', 'rttw-font-bold', 'rttw-leading-none', 'rttw-leading-5', 'rttw-flex-wrap');
                                p.classList.add('rttw-font-extrabold', 'rttw-leading-3');
                            }
                        });

                        const desdeHasta = activeDiscountContainer.querySelector('.texto-desde-hasta');
                        if (desdeHasta) {
                            const desdeHastaP = desdeHasta.querySelector('p');
                            if (desdeHastaP) {
                                // Cambiar de text-xs (12px) a text-[8px]
                                desdeHastaP.classList.remove('rttw-text-xs');
                                desdeHastaP.classList.add('rttw-text-[8px]');
                            }
                        }
                    }
                }

                // Ajustar contenedor del porcentaje
                const porcentajeContainer = activeDiscountContainer.querySelector('.porcentaje-inner, .precio-inner');
                if (porcentajeContainer) porcentajeContainer.classList.add('-rttw-mb-0.5');

                // Reducir porcentaje o precio según el tipo
                const porcentaje = activeDiscountContainer.querySelector('.porcentaje');
                const precio = activeDiscountContainer.querySelector('.precio');

                if (porcentaje) {
                    porcentaje.className = 'porcentaje rttw-relative rttw-text-[20px] rttw-text-white rttw-font-extrabold';
                }

                if (precio) {
                    precio.className = 'precio rttw-justify-start rttw-text-[1em] rttw-leading-5 rttw-text-white rttw-font-extrabold rttw-font-[\'Encode_Sans\'] rttw-uppercase rttw-px-2.5 rttw-py-0.5 rttw-bg-blue-950';
                }

                // Ajustar subtexto
                if (precioContainer) {
                    // No hay subtexto separado en precio, el precio mismo es el elemento bg-blue-950
                    // Por lo tanto, no hacer nada aquí para evitar sobrescribir el precio
                } else {
                    const subtextoContainer = activeDiscountContainer.querySelector('.rttw-bg-blue-950');
                    if (subtextoContainer) {
                        subtextoContainer.className = 'rttw-w-fit rttw-h-fit rttw-px-2.5 rttw-py-0.5 -rttw-mt-[7px] rttw-bg-blue-950 rttw-inline-flex rttw-justify-center rttw-items-center rttw-z-[3]';
                        const subtextoSpan = subtextoContainer.querySelector('div');
                        if (subtextoSpan) {
                            subtextoSpan.className = 'rttw-justify-start rttw-text-[7px] rttw-text-white rttw-font-extrabold rttw-font-[\'Encode_Sans\'] rttw-uppercase';
                        }
                    }
                }

                // Cambiar elementos con rttw-leading-3 a rttw-leading-[.5rem], excepto p de rutas-viajes
                const leadingElements = activeDiscountContainer.querySelectorAll('.rttw-leading-3:not(.rutas-viajes p)');
                leadingElements.forEach(elem => {
                    elem.classList.remove('rttw-leading-3');
                    elem.classList.add('rttw-leading-[.5rem]');
                });

                // También cambiar elementos con rttw-leading-4 que no sean p de rutas-viajes
                const leading4Elements = activeDiscountContainer.querySelectorAll('.rttw-leading-4:not(.rutas-viajes p)');
                leading4Elements.forEach(elem => {
                    elem.classList.remove('rttw-leading-4');
                    elem.classList.add('rttw-leading-[.5rem]');
                });

                // Cambiar color del texto mas-tasas a azul en mobile
                const masTasasMobile = activeDiscountContainer.querySelector('.mas-tasas');
                if (masTasasMobile) {
                    masTasasMobile.classList.remove('rttw-text-white');
                    masTasasMobile.classList.add('rttw-text-[#1B365D]');
                }

                // Buscar el wrapper padre que contiene el container y mas-tasas
                const wrapperParent = activeDiscountContainer.parentElement;

                // Verificar si el wrapper tiene la estructura flex-col esperada
                if (wrapperParent && wrapperParent.classList.contains('rttw-flex') && wrapperParent.classList.contains('rttw-flex-col')) {
                    // Si existe el wrapper correcto, mover el wrapper completo (incluye container + mas-tasas)
                    minimizedContainer.appendChild(wrapperParent);
                } else {
                    // Si no existe el wrapper, solo mover el container (caso fallback)
                    minimizedContainer.appendChild(activeDiscountContainer);
                }
            } else {
                console.error('Mobile minimizado - No se encontró activeDiscountContainer');
            }

            // 2. Tiempo/Countdown (tercero) - Mover el elemento original
            if (contenedor2) {
                minimizedContainer.appendChild(contenedor2);
            }

            // 3. Agregar el botón CTA minimizado al contenedor (cuarto)
            const ctaMinimized = document.getElementById('promo-cta-mobile-minimized');
            if (ctaMinimized) {
                minimizedContainer.appendChild(ctaMinimized);
            }

            const closeBtn = contador.querySelector('.promo-close-btn');

            // Mantener el botón cerrar visible en estado minimizado mobile
            if (closeBtn) {
                closeBtn.classList.remove('rttw-hidden');
                // Asegurar que esté en la esquina superior derecha
                closeBtn.classList.add('rttw-absolute', 'rttw-top-1', 'rttw-right-1', 'rttw-z-[99999]');

                // Cambiar comportamiento para ocultar el contador minimizado
                closeBtn.onclick = function () {
                    // Si el contador tiene la clase contador-up, quitar el margen del carrusel
                    if (contador.classList.contains('contador-up')) {
                        const mainContainer = document.querySelector('main.site-content');
                        if (mainContainer) {
                            mainContainer.style.marginTop = '';
                        }
                    }
                    contador.classList.add('rttw-hidden');
                };
            }

            // Si el contador tiene la clase contador-up, agregar margen al carrusel
            setTimeout(() => {
                if (contador.classList.contains('contador-up')) {
                    let mainContainer = document.querySelector('main.site-content');
                    if (mainContainer) {
                        // Obtener la altura del contador minimizado
                        const contadorHeight = contador.getBoundingClientRect().height;
                        // Agregar margen superior al carrusel
                        mainContainer.style.marginTop = `${contadorHeight}px`;
                        // console.log(`Margen agregado: ${contadorHeight}px`);
                    }
                }
            }, 100);

            // console.log('Mobile contador minimizado');
        }
    }
}

function closeContador() {
    const deviceType = window.innerWidth <= 1023 ? 'mobile' : 'desktop';

    // Interacción Mobile
    if (deviceType === 'mobile') {
        const contador = document.getElementById('contador-promo-mobile');
        const headerContainer = document.querySelector('header.fixed > div');

        if (!headerContainer) {
            // Si no hay header, verificar si debe posicionarse en bottom por la clase contador-down
            if (contador.classList.contains('contador-down')) {
                // Posicionar como minimizado en la parte inferior
                contador.classList.remove('rttw-fixed', 'rttw-top-[10px]', 'rttw-left-1/2', '-rttw-translate-x-1/2', 'rttw-rounded-lg', 'rttw-max-w-[400px]', 'rttw-z-[99999]');
                contador.classList.add('rttw-fixed', 'rttw-bottom-0', 'rttw-left-1/2', '-rttw-translate-x-1/2', 'rttw-max-w-full', 'rttw-z-[99999]');
                contador.style.top = '';

                // Ajustar clases de tamaño para bottom
                contador.classList.remove('rttw-max-w-[680px]', 'rttw-px-[26px]', 'rttw-py-[12px]');
                contador.classList.add('rttw-px-3', 'rttw-py-[10px]');

                // Agregar clase para indicar posición final
                contador.classList.add('contador-positioned-mobile-bottom');
                console.log('Contador posicionado en la parte inferior en mobile (sin header)');

                // Aplicar minimizado después de un pequeño delay
                setTimeout(() => {
                    minimizarContador();
                }, 100);

                return;
            } else {
                // Si no hay header y no tiene contador-down, colocar en top fijo
                contador.classList.remove('rttw-bottom-0', 'rttw-top-[10px]', 'rttw-left-1/2', '-rttw-translate-x-1/2', 'rttw-rounded-lg', 'rttw-max-w-[400px]', 'rttw-px-2');
                contador.classList.add('rttw-fixed', 'rttw-top-0', 'rttw-left-1/2', '-rttw-translate-x-1/2', 'rttw-max-w-full', 'rttw-z-[99999]');

                // Limpiar estilos inline
                contador.style.position = '';
                contador.style.transform = '';
                contador.style.transition = '';
                contador.style.bottom = '';
                contador.style.left = '';
                contador.style.right = '';
                contador.style.top = '';

                // Ajustar clases de tamaño
                contador.classList.remove('rttw-max-w-[360px]', 'rttw-px-[26px]', 'rttw-py-[12px]');
                contador.classList.add('rttw-px-2', 'rttw-py-[10px]');

                // Agregar clase para indicar posición final
                contador.classList.add('contador-positioned-mobile-top');
                console.log('Contador posicionado en top fijo en mobile (sin header)');

                // Aplicar minimizado después de un pequeño delay
                setTimeout(() => {
                    minimizarContador();
                }, 100);

                return;
            }
        }

        // Determinar dónde colocar el contador según las clases
        let targetContainer;
        let targetPosition;

        if (contador.classList.contains('contador-down')) {
            // Si tiene contador-down, colocar en la parte inferior con fixed
            targetContainer = null; // No usar header
            targetPosition = 'bottom';
        } else {
            // Por defecto (contador-up o sin clase), colocar en el header
            targetContainer = document.getElementById('contador-target-container-mobile');
            if (!targetContainer) {
                targetContainer = document.createElement('div');
                targetContainer.id = 'contador-target-container-mobile';
                targetContainer.className = 'rttw-w-full rttw-h-fit';
                headerContainer.insertBefore(targetContainer, headerContainer.firstChild);
            }
            targetPosition = 'header';
        }

        // Solo aplicar transform si el contador está en su estado inicial (fixed)
        const isInitialState = contador.classList.contains('rttw-fixed');

        if (isInitialState) {
            if (targetPosition === 'bottom') {
                // Animar hacia la parte inferior de la pantalla
                contador.style.position = 'fixed';
                contador.style.left = '50%';
                contador.style.transform = 'translateX(-50%)';
                contador.style.transition = 'bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                contador.style.bottom = '20px';
                contador.style.top = 'auto';
            } else {
                // Animar hacia el header (comportamiento original)
                const targetRect = targetContainer.getBoundingClientRect();
                contador.style.position = 'fixed';
                contador.style.left = '50%';
                contador.style.transform = 'translateX(-50%)';
                contador.style.transition = 'top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                contador.style.top = (targetRect.top + 10) + 'px';
            }
        }

        // Después de la animación, cambiar posicionamiento final
        const animationDelay = isInitialState ? 350 : 0;

        setTimeout(() => {
            if (targetPosition === 'bottom') {
                // Mantener fixed en la parte inferior
                contador.classList.remove('rttw-top-[10px]', 'rttw-left-1/2', '-rttw-translate-x-1/2', 'rttw-rounded-lg', 'rttw-max-w-[95%]', 'rttw-z-[99999]');
                contador.classList.add('rttw-fixed', 'rttw-bottom-0', 'rttw-left-1/2', '-rttw-translate-x-1/2', 'rttw-max-w-full', 'rttw-max-w-[400px]', 'rttw-z-[99999]');
                contador.style.transform = 'translateX(-50%)';
                contador.style.transition = '';
                contador.style.bottom = '20px';
                contador.style.left = '50%';
                contador.style.right = 'auto';
                contador.style.top = 'auto';
            } else {
                // Colocar en el header (comportamiento original)
                contador.classList.remove('rttw-fixed', 'rttw-top-[10px]', 'rttw-left-1/2', '-rttw-translate-x-1/2', 'rttw-rounded-lg', 'rttw-max-w-[95%]', 'rttw-z-[99999]');
                contador.classList.add('rttw-relative', 'rttw-w-full');

                // Limpiar todos los estilos inline de posicionamiento fixed
                contador.style.position = '';
                contador.style.transform = '';
                contador.style.transition = '';
                contador.style.bottom = '';
                contador.style.left = '';
                contador.style.right = '';
                contador.style.top = '';
            }

            // Ajustar clases de tamaño para mobile
            if (targetPosition === 'header') {
                contador.classList.remove('rttw-max-w-[360px]', 'rttw-px-[26px]', 'rttw-py-[12px]', 'rttw-z-[99999]');
                contador.classList.add('rttw-px-2', 'rttw-py-[10px]', 'rttw-max-w-full');
            } else {
                // Para bottom, mantener tamaños más compactos
                contador.classList.remove('rttw-max-w-[360px]', 'rttw-px-[26px]', 'rttw-py-[12px]');
                contador.classList.add('rttw-p-1');
            }

            const porcentajePromo = document.querySelector('#contador-promo-mobile .porcentaje-container > div');
            const precioPromo = document.querySelector('#contador-promo-mobile .precio-container > div');
            const promoTitle = document.querySelector('#contador-promo-mobile #promo-title');

            // Cambiar colores solo si va al header
            if (targetPosition === 'header') {
                if (porcentajePromo) {
                    porcentajePromo.classList.remove('rttw-text-white');
                    porcentajePromo.classList.add('rttw-text-[#1B365D]');
                }

                if (precioPromo) {
                    precioPromo.classList.remove('rttw-text-white');
                    precioPromo.classList.add('rttw-text-[#1B365D]');
                }

                if (promoTitle) {
                    promoTitle.classList.remove('rttw-text-[#1B365D]');
                    promoTitle.classList.add('rttw-text-[#1B365D]');
                }

                // Mover el elemento al contenedor target solo si va al header
                targetContainer.appendChild(contador);
            }

            // Agregar clase para indicar que está en su posición final
            if (targetPosition === 'header') {
                contador.classList.add('contador-positioned-mobile');
                console.log('Contador movido al header en mobile');
            } else {
                contador.classList.add('contador-positioned-mobile-bottom');
                console.log('Contador posicionado en la parte inferior en mobile');
            }

            // Aplicar minimizado después de un pequeño delay
            setTimeout(() => {
                minimizarContador();
            }, 100);

        }, animationDelay); // Usar delay condicional

        return;
    }

    // Interacción Desktop - Animación hacia el carousel
    if (deviceType === 'desktop') {
        const contador = document.getElementById('contador-promo');
        const carouselContainer = document.getElementById('rt-carousel');

        if (!carouselContainer) {
            // Si no hay carousel, hacer fade out normal
            contador.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-in-out');
            contador.classList.add('rttw-opacity-0');
            contador.style.transform = 'scale(0.8) translateY(20px)';

            setTimeout(() => {
                contador.classList.add('rttw-hidden');
                contador.classList.remove('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-in-out', 'rttw-opacity-0');
            }, 300);
            return;
        }

        // Crear contenedor target dentro del carousel si no existe
        let targetContainer = document.getElementById('contador-target-container');
        if (!targetContainer) {
            targetContainer = document.createElement('div');
            targetContainer.id = 'contador-target-container';
            targetContainer.className = 'rttw-absolute rttw-top-[25px] rttw-left-[30px] rttw-w-fit rttw-h-fit';

            // Preparar el carousel para positioning
            const carouselStyle = window.getComputedStyle(carouselContainer);
            if (carouselStyle.position === 'static') {
                carouselContainer.classList.add('rttw-relative');
            }

            carouselContainer.appendChild(targetContainer);
        }

        // Obtener posiciones para la animación
        const contadorRect = contador.getBoundingClientRect();
        const targetRect = targetContainer.getBoundingClientRect();

        // Calcular la distancia que debe moverse
        const deltaX = targetRect.left - (contadorRect.left + (contadorRect.width / 2));
        const deltaY = targetRect.top + 60 - (contadorRect.top + (contadorRect.height / 2));

        // Solo aplicar transform si el contador está en su estado inicial (fixed)
        const isInitialState = contador.classList.contains('rttw-fixed');

        if (isInitialState) {
            // Aplicar transform para mover sin cambiar el layout inicialmente
            contador.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            contador.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        }

        // Después de la animación, cambiar a position absolute y mover al DOM
        const animationDelay = isInitialState ? 350 : 0; // Solo delay si viene del estado inicial

        setTimeout(() => {
            // Cambiar posicionamiento (mantener estilos de minimizado abierto)
            contador.classList.remove('rttw-fixed', 'rttw-bottom-[50px]', 'rttw-left-1/2', '-rttw-translate-x-1/2', 'rttw-z-10');
            contador.classList.add('rttw-absolute', 'rttw-backdrop-blur-sm');
            contador.style.transform = '';
            contador.style.transition = '';
            contador.style.backgroundImage = '';
            contador.style.background = 'rgba(255,255,255,0.5)';

            // Determinar si está minimizado para aplicar las clases de ancho correctas
            const isMinimized = contador.classList.contains('contador-minimized');

            if (isMinimized) {
                // Si está minimizado, usar max-w-fit
                contador.classList.add('rttw-max-w-fit');
            } else {
                // Si está expandido, agregar w-full
                contador.classList.add('rttw-w-full');
            }

            // Tiempo contador
            const tiempoContadorInner = document.querySelector('#contador-promo .tiempo-container > div');
            // Porcentaje promo
            const porcentajePromo = document.querySelector('#contador-promo .porcentaje-container > div');
            const precioPromo = document.querySelector('#contador-promo .precio-container > div');

            // Cambiar texto de contador a azul y todos sus hijos reemplazando clases de tailwind, y el fondo a blanco
            if (tiempoContadorInner) {
                tiempoContadorInner.classList.remove('rttw-bg-white/20', 'rttw-text-white');
                tiempoContadorInner.classList.add('rttw-bg-white', 'rttw-text-[#1B365D]');
            }

            if (porcentajePromo) {
                porcentajePromo.classList.remove('rttw-text-white');
                porcentajePromo.classList.add('rttw-text-[#1B365D]');
            }

            if (precioPromo) {
                precioPromo.classList.remove('rttw-text-white');
                precioPromo.classList.add('rttw-text-[#1B365D]');
            }

            // Cambiar color del botón cerrar para que sea visible en el carousel
            const closeBtn = contador.querySelector('.promo-close-btn');
            if (closeBtn) {
                closeBtn.classList.remove('rttw-text-white');
                closeBtn.classList.add('rttw-text-[#1B365D]');
            }

            // Mover el elemento al contenedor target
            targetContainer.appendChild(contador);

            // Agregar clase para indicar que está en su posición final
            contador.classList.add('contador-positioned');

            // Agregar transiciones suaves antes de aplicar minimizado
            contador.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
            const promoInner = contador.querySelector('.contador-inner');
            const ofertaBtn = document.getElementById('promo-cta');
            const porcentajeContainer = contador.querySelector('.porcentaje-container');
            const precioContainer = contador.querySelector('.precio-container');
            const tiempoContainer = contador.querySelector('.tiempo-container');

            if (promoInner) promoInner.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
            if (ofertaBtn) ofertaBtn.classList.add('rttw-transition-all', 'rttw-duration-300', 'rttw-ease-out');
            if (porcentajeContainer) porcentajeContainer.classList.add('rttw-transition-transform', 'rttw-duration-300', 'rttw-ease-out');
            if (precioContainer) precioContainer.classList.add('rttw-transition-transform', 'rttw-duration-300', 'rttw-ease-out');
            if (tiempoContainer) tiempoContainer.classList.add('rttw-transition-transform', 'rttw-duration-300', 'rttw-ease-out');

            // Aplicar el toggle ON del minimizado después de un pequeño delay
            setTimeout(() => {
                minimizarContador();
            }, 50);

        }, animationDelay); // Usar delay condicional
    }
}

$(window).on('resize', function () {
    // Si el tamaño de pantalla es menor a 1024px, ocultar contador desktop.
    const deviceType = window.innerWidth <= 1023 ? 'mobile' : 'desktop';

    if (deviceType === 'mobile') {
        const contadorDesktop = document.getElementById('contador-promo');
        if (contadorDesktop) {
            contadorDesktop.classList.add('rttw-hidden');
        }
    } else {
        const contadorMobile = document.getElementById('contador-promo');
        if (contadorMobile) {
            contadorMobile.classList.remove('rttw-hidden');
        }
    }
});

$(document).ready(function () {
    // Inicializar el contador
    initContador();
});
