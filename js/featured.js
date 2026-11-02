
/* ==================== PRODUCTOS DESTACADOS ==================== */

import { productos } from "./products.js";

(() => {
    const carrusel = document.querySelector(".menu__featured");

    if (!carrusel) return;

    const track = carrusel.querySelector(".menu__featured-track");
    const indicadores = carrusel.querySelector(
        ".menu__featured-indicators"
    );
    const botonAnterior = carrusel.querySelector(
        ".menu__featured-button--previous"
    );
    const botonSiguiente = carrusel.querySelector(
        ".menu__featured-button--next"
    );

    if (!track || !indicadores || !botonAnterior || !botonSiguiente) {
        return;
    }

    const productosDestacados = productos.filter(
        (producto) => producto.activo && producto.destacado
    );

    if (productosDestacados.length === 0) {
        carrusel.hidden = true;
        return;
    }

    let indiceActual = 0;

    /* ==================== DIAPOSITIVAS ==================== */

    const renderizarDiapositivas = () => {
        track.innerHTML = productosDestacados.map(
            (producto, indice) => `
                <article
                    class="menu__featured-slide"
                    ${indice !== 0 ? "hidden" : ""}
                    aria-label="${indice + 1} de ${productosDestacados.length}"
                >
                    <img
                        class="menu__featured-image"
                        src="${producto.imagen}"
                        alt="${producto.nombre}"
                        ${indice === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}
                    >

                    <div class="menu__featured-content">
                        <h3 class="menu__featured-title">
                            ${producto.nombre}
                        </h3>

                        <p class="menu__featured-description">
                            ${producto.descripcion}
                        </p>

                        <p class="menu__product-price">
                            $${producto.precio.toLocaleString("es-AR")}
                        </p>
                    </div>
                </article>
            `
        ).join("");
    };

    /* ==================== INDICADORES ==================== */

    const renderizarIndicadores = () => {
        indicadores.innerHTML = productosDestacados.map(
            (producto, indice) => `
                <button
                    class="menu__featured-indicator${indice === 0 ? " is-active" : ""}"
                    type="button"
                    aria-label="Mostrar ${producto.nombre}"
                    aria-pressed="${indice === 0}"
                    data-slide="${indice}"
                ></button>
            `
        ).join("");
    };

    /* ==================== NAVEGACIÓN ==================== */

    const mostrarDiapositiva = (indice) => {
        indiceActual =
            (indice + productosDestacados.length) %
            productosDestacados.length;

        track.querySelectorAll(".menu__featured-slide").forEach(
            (diapositiva, posicion) => {
                diapositiva.hidden = posicion !== indiceActual;
            }
        );

        indicadores
            .querySelectorAll(".menu__featured-indicator")
            .forEach((indicador, posicion) => {
                const activo = posicion === indiceActual;

                indicador.classList.toggle("is-active", activo);
                indicador.setAttribute("aria-pressed", String(activo));
            });
    };

    botonAnterior.addEventListener("click", () => {
        mostrarDiapositiva(indiceActual - 1);
    });

    botonSiguiente.addEventListener("click", () => {
        mostrarDiapositiva(indiceActual + 1);
    });

    indicadores.addEventListener("click", (event) => {
        const boton = event.target.closest("[data-slide]");

        if (!boton || !indicadores.contains(boton)) return;

        mostrarDiapositiva(Number(boton.dataset.slide));
    });

    /* ==================== INICIALIZACIÓN ==================== */

    renderizarDiapositivas();
    renderizarIndicadores();

})();

/* ==================== FIN PRODUCTOS DESTACADOS ==================== */
