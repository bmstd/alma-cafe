
/* ==================== NAVBAR ==================== */

(() => {
    const navbarToggle = document.querySelector(".navbar__toggle");
    const navbarMenu = document.querySelector("#navbar-menu");

    if (!navbarToggle || !navbarMenu) return;

    const desktopMedia = window.matchMedia("(min-width: 1024px)");

    const closeMenu = () => {
        if (desktopMedia.matches) return;

        navbarToggle.classList.remove("is-active");

        navbarToggle.setAttribute("aria-expanded", "false");
        navbarToggle.setAttribute("aria-label", "Abrir menú");

        navbarMenu.hidden = true;
    };

    const toggleMenu = () => {
        if (desktopMedia.matches) return;

        const isOpen =
            navbarToggle.getAttribute("aria-expanded") === "true";

        if (isOpen) {
            closeMenu();
            return;
        }

        navbarToggle.classList.add("is-active");

        navbarToggle.setAttribute("aria-expanded", "true");
        navbarToggle.setAttribute("aria-label", "Cerrar menú");

        navbarMenu.hidden = false;
    };

    /* Actualizar navegación según el ancho de pantalla */
    const actualizarNavbar = () => {
        const esDesktop = desktopMedia.matches;

        navbarToggle.hidden = esDesktop;
        navbarMenu.hidden = !esDesktop;

        navbarToggle.classList.remove("is-active");

        navbarToggle.setAttribute("aria-expanded", "false");
        navbarToggle.setAttribute("aria-label", "Abrir menú");
    };

    /* Abrir y cerrar al tocar el botón */
    navbarToggle.addEventListener("click", toggleMenu);

    /* Cerrar al seleccionar un enlace */
    navbarMenu.querySelectorAll(".navbar__link").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    /* Cerrar al presionar Escape */
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    /* Detectar cambios entre móvil, tablet y escritorio */
    desktopMedia.addEventListener("change", actualizarNavbar);

    actualizarNavbar();
})();

import "./menu.js";
import "./featured.js";
import "./product-modal.js";
