function modalVideo() {

    let selector = document.getElementById("modal-1");

    selector.classList.toggle("active");

}

function menuMobile() {
    let selector = document.getElementById("cont-menu-mobile");
    selector.classList.toggle("active");
}

function modalVideoAbout() {
    
    let selector = document.getElementById("modal-2");

    selector.classList.toggle("active");
    
}

/**
 * Toggles the visibility of additional cars when the "Discover Vehicles" button is clicked.
 * It adds/removes a 'hidden' class to the 'additional-cars-container' and updates the button text.
 */
document.addEventListener('DOMContentLoaded', function() {
    const discoverBtn = document.getElementById('discover-vehicles-btn');
    const additionalCarsContainer = document.getElementById('additional-cars-container');

    if (discoverBtn && additionalCarsContainer) {
        // Inicialmente ocultar el contenedor de autos adicionales usando la clase 'hidden'
        additionalCarsContainer.classList.add('hidden');

        discoverBtn.addEventListener('click', function() {
            // Alternar la clase 'hidden' en el contenedor de autos adicionales
            additionalCarsContainer.classList.toggle('hidden');

            // Cambiar el texto del botón según la visibilidad del contenedor
            if (additionalCarsContainer.classList.contains('hidden')) {
                this.textContent = 'Discover Vehicles -'; // Si está oculto, mostrar "Discover Vehicles -"
            } else {
                this.textContent = 'Show Less -'; // Si está visible, mostrar "Show Less -"
            }
        });
    }
});

// --- Funcionalidad del Acordeón para FAQ en rentals.html ---
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Cierra todos los demás ítems antes de abrir el actual (opcional)
            // faqItems.forEach(otherItem => {
            //     if (otherItem !== item && otherItem.classList.contains('active')) {
            //         otherItem.classList.remove('active');
            //     }
            // });

            // Alternar la clase 'active' para expandir/colapsar
            item.classList.toggle('active');
        });
    });
});