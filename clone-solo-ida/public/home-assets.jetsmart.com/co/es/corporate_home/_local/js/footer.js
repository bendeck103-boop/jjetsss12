function toggleAccordion(toggle) {
    // console.log('Click a collapse');

    let content = toggle.dataset.target;

    if (content && content.trim() !== "") {
        content = document.querySelector(content.trim());
    }

    if (!content || !content.classList || !content.classList.contains('collapse-content')) {
        content = toggle.previousElementSibling;

        if (!content || !content.classList || !content.classList.contains('collapse-content')) {
            const parent = toggle.parentElement;

            content = Array.from(parent.children).find(child =>
                child?.classList?.contains('collapse-content')
            );

            if (!content) {
                content = parent.querySelector('.collapse-content');
            }
        }
    }

    if (!content) {
        // console.log('Fallo');
        return;
    };

    // console.log(content);

    const isOpen = toggle.getAttribute('aria-expanded') === 'true';

    if (isOpen) {
        // Cerrar
        content.style.maxHeight = '0px';
        toggle.setAttribute('aria-expanded', 'false');
        toggle.classList.add('collapsed');

        /****** Esto debe cambiarse ******/
        // Cambiar texto si es necesario
        if (toggle.textContent?.includes('Ver menos')) {
            // console.log('What 1');
            toggle.textContent = 'Ver más';
        }
    } else {
        // Abrir
        content.style.maxHeight = content.scrollHeight + 'px';
        toggle.setAttribute('aria-expanded', 'true');
        toggle.classList.remove('collapsed');

        if (toggle.textContent?.includes('Ver más')) {
            // console.log('What 2');
            toggle.textContent = 'Ver menos';
        }
        /****** Esto debe cambiarse ******/
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll('.accordion-toggle, .collapse-btn');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => toggleAccordion(toggle));
    });
});

window.addEventListener('resize', () => {
  document.querySelectorAll('.collapse-content').forEach(content => {
    if (window.screen.width >= 640) {
      content.style.maxHeight = '';
    }
  });
});