function updateFAQCollapse() {
  const main = document.getElementById('faq-main');
  const collapse = document.querySelector('#faq-collapse > div');
  const toggleBtn = document.getElementById('faq-collapse-toggle');
  const allItems = Array.from(document.querySelectorAll('.faqs-container .faq-item'));

  const visibleCount = window.innerWidth >= 768 ? 3 : 2;

  // Restaurar todos los ítems al contenedor principal
  allItems.forEach(item => main.appendChild(item));
  collapse.innerHTML = '';

  if (allItems.length <= visibleCount) {
    toggleBtn.classList.add('rt-hidden');
    return;
  }

  // Mover ocultos al collapse
  const hiddenItems = allItems.slice(visibleCount);
  hiddenItems.forEach(item => collapse.appendChild(item));
}

function setupCollapseToggle() {
  const btn = document.getElementById('faq-collapse-toggle');
  const collapse = document.getElementById('faq-collapse');
  const icon = btn.querySelector('i');
  const openText = btn.querySelector('span.open');
  const closeText = btn.querySelector('span.close');

  let isOpen = false;

  btn.addEventListener('click', () => {
    if (isOpen) {
      // Cerrar
      collapse.style.maxHeight = collapse.scrollHeight + 'px'; // para forzar reflow
      requestAnimationFrame(() => {
        collapse.style.maxHeight = '0px';
      });
      icon.classList.remove('rotate');
      closeText.classList.remove('rt-hidden');
      openText.classList.add('rt-hidden');
    } else {
      // Abrir
      collapse.style.maxHeight = collapse.scrollHeight + 'px';
      icon.classList.add('rotate');
      openText.classList.remove('rt-hidden');
      closeText.classList.add('rt-hidden');
    }

    isOpen = !isOpen;
  });

  collapse.style.maxHeight = isOpen ? collapse.scrollHeight + 'px' : '0px';
}


window.addEventListener('load', () => {
  updateFAQCollapse();
  setupCollapseToggle();
});
window.addEventListener('resize', updateFAQCollapse);
