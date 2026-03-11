// Indicadores
// function agregarIndicators(carrusel, updateSlideFn) {

//   let slides = carrusel.querySelectorAll('.carrusel-item');
//   // console.log('slides', slides);

//   // Busca el contenedor de indicadores relacionado
//   // Obtener el id del carrusel, quitar 'desktop' y reemplazar por 'carrusel-indicators'
//   let carruselId = carrusel.id || '';
//   // console.log('carruselId', carruselId);
  
//   let indicatorId = carruselId + '-carrusel-indicators' || '';
//   let indicatorsDiv = document.getElementById(indicatorId);
//   // console.log('indicatorId', indicatorId);
//   // console.log('indicatorsDiv', indicatorsDiv);
//   let numSlides = slides.length;
//   // console.log('numSlides', numSlides);
  
//   // Si no hay más de una slide, no mostrar
//   if (numSlides < 2) {
//     let destinosBtns = document.querySelectorAll(`#${carruselId} a.destinos-carrusel-btn`);
    
//     destinosBtns.forEach(btn => {
//       btn.style.display = 'none';
//     });
//     indicatorsDiv.style.display = 'none';
//   }
  
//   if (numSlides && indicatorsDiv) {

//     indicatorsDiv.innerHTML = '';

//     for (let i = 0; i < numSlides; i++) {
//       // Crear indicador
//       let indicator = document.createElement('a');
//       indicator.type = 'button';
//       indicator.classList.add('carrusel-indicator');
//       indicator.setAttribute('href', `#${carruselId}`);
//       indicator.setAttribute('aria-label', `Carousel Page ${i + 1}`);
//       indicator.dataset.slideTo = i;

//       if (i === 0) {
//         indicator.classList.add('active');
//         indicator.setAttribute('aria-current', 'true');
//       }

//       indicator.addEventListener('click', (e) => {
//         e.preventDefault();
//         updateSlideFn(i, carrusel);
//       });

//       indicatorsDiv.appendChild(indicator);
//     }
//   }
//   //document.getElementById('destinos-desktop').hidden = false;
// }


// Función Carrusel
function showSlide(index, carrusel) {
  let inner = carrusel.querySelector('.carrusel-inner');
  let items = carrusel.querySelectorAll('.carrusel-item');
  let itemsDot = carrusel.querySelectorAll('.mainCarousel-dot');
  let percentage = index * 100;
  let carruselId = carrusel.id || '';
  let indicatorId = carruselId.replace('desktop', 'carrusel-indicators');
  let indicators = document.getElementById(indicatorId);

  inner.style.transform = `translateX(-${percentage}%)`;

  items.forEach((item, i) => {
    if (i == index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
  itemsDot.forEach((item, i) => {
    if (i == index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  let indicatorList = indicators.querySelectorAll('.carrusel-indicator');
  indicatorList.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
    if (i === index) {
      dot.setAttribute('aria-current', 'true');
    } else {
      dot.removeAttribute('aria-current');
    }
  });

  current = index;
}

$(document).ready(function () {
  console.log("main_carousel.js loaded");
  //quitar clases de elemento padre
  $(".site-content #carousel .relative .w-full").first().removeClass("md:h-[calc(100vh-436px)]");
  $(".site-content #carousel .relative .w-full").first().removeClass("min-h-[480px]");
  /* $(".site-content #carousel .relative").first().addClass("rttw-pb-[60vh]");
  $(".site-content #carousel .relative").first().addClass("md:rttw-pb-[0px]"); */
  console.log("Clases de elemento .site-content #carousel .relative .w-full quitadas");
  
  
  // Selecciona todos los carruseles con id que empiece por 'destinos-desktop'
  let carruseles = document.querySelectorAll('.main-carousel');
  carruseles.forEach(function(carrusel) {
    let items = carrusel.querySelectorAll('.carrusel-item');
    let totalItems = items.length;
    let current = 0;

    // Botón izquierda
    let leftBtn = carrusel.querySelector('.desktop-left');
    if (leftBtn) {
      leftBtn.addEventListener('click', function handleCarruselBtn() {
        current = (current - 1 + totalItems) % totalItems;
        showSlide(current, carrusel);
      });
    }

    // Botón derecha
    let rightBtn = carrusel.querySelector('.desktop-right');
    if (rightBtn) {
      rightBtn.addEventListener('click', function handleCarruselBtn() {
        current = (current + 1) % totalItems;
        showSlide(current, carrusel);
      });
    }

    // Swipe en mobile sobre el contenedor de slides
    const inner = carrusel.querySelector('.carrusel-inner');
    if (inner) {
      let startX = 0;
      let startY = 0;
      let deltaX = 0;
      let isSwiping = false;

      const touchStart = function (e) {
        if (!e.touches || e.touches.length > 1) return; // ignorar multitouch
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        deltaX = 0;
        isSwiping = false;
      };

      const touchMove = function (e) {
        if (!e.touches || e.touches.length > 1) return;
        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        const dx = currentX - startX;
        const dy = currentY - startY;
        // decidir si es swipe horizontal
        if (!isSwiping && Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) {
          isSwiping = true;
        }
        if (isSwiping) {
          e.preventDefault();
          deltaX = dx;
        }
      };

      const touchEnd = function () {
        if (!isSwiping) return;
        const threshold = 40; // píxeles mínimos para considerar swipe
        if (Math.abs(deltaX) > threshold) {
          if (deltaX < 0) {
            // swipe izquierda -> siguiente
            current = (current + 1) % totalItems;
          } else {
            // swipe derecha -> anterior
            current = (current - 1 + totalItems) % totalItems;
          }
          showSlide(current, carrusel);
        }
        startX = 0;
        startY = 0;
        deltaX = 0;
        isSwiping = false;
      };

      inner.addEventListener('touchstart', touchStart, { passive: true });
      inner.addEventListener('touchmove', touchMove, { passive: false });
      inner.addEventListener('touchend', touchEnd, { passive: true });
      inner.addEventListener('touchcancel', touchEnd, { passive: true });
    }
  });

  // Selecciona todos los carruseles con id que empiece por 'destinos-desktop'
  /* carruseles.forEach(function(carrusel) {
    agregarIndicators(carrusel, showSlide);
  }); */

  /* agregarIndicators(items, indicators, showSlide); */
  //showSlide(current);

  // Agregar desplazamiento carrusel mobile
  $('.tab-container:not(.rt-hidden) .destinos-mobile a.destinos-carrusel-btn').on('click', function handleCarruselScroll() {
    // console.log('Clicked:', this.className);

    const topParent = $(this).parent().parent().get(0);
    const scrollContainer = topParent.querySelector('.destinos-mobile > div');
    const items = scrollContainer.querySelectorAll('.card');
    const scrollLeft = scrollContainer.scrollLeft;
    const containerRect = scrollContainer.getBoundingClientRect();

    let targetScrollLeft = scrollLeft;

    const positions = Array.from(items).map(item => {
      const itemRect = item.getBoundingClientRect();
      return {
        element: item,
        left: itemRect.left - containerRect.left + scrollLeft
      };
    });

    if (this.classList.contains('left')) {
      // Se busca la card más cercana hacia atrás
      for (let i = positions.length - 1; i >= 0; i--) {
        if (positions[i].left < scrollLeft - 8) {
          targetScrollLeft = positions[i].left;
          break;
        }
      }
    } else {
      // Se busca la card más cercana hacia adelante
      for (let i = 0; i < positions.length; i++) {
        if (positions[i].left > scrollLeft + 8) {
          targetScrollLeft = positions[i].left + 15;
          break;
        }
      }
    }

    scrollContainer.scroll({
      left: targetScrollLeft
    });
  });

  // Quitar clases de elemento padre
  const carouselDiv = document.getElementById('rt-carousel');
  let parentElem = carouselDiv.parentElement;
  parentElem.classList.forEach(elemClass => {
    if (elemClass === 'md:min-h-0') {
      parentElem.classList.remove('md:min-h-0');
    }
    if (elemClass === 'md:h-[calc(100vh-436px)]') {
      parentElem.classList.remove('md:h-[calc(100vh-436px)]');
    }
  });
});