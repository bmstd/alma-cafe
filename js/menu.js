
/* ==================== CARTA Y FILTROS ==================== */

import { productos } from "./products.js";

(() => {
    const categoriasContainer = document.querySelector(
        ".menu__categories-list"
    );

    const productosContainer = document.querySelector(
        ".menu__products-grid"
    );

    const mensajeVacio = document.querySelector(
        ".menu__empty"
    );

    if (
        !categoriasContainer ||
        !productosContainer ||
        !mensajeVacio
    ) {
        return;
    }

    const categorias = [
        "Cafetería",
        "Bebidas frías",
        "Otras bebidas",
        "Pastelería",
        "Salados",
        "Tortas y postres"
    ];

    const productosActivos = productos.filter(
        (producto) => producto.activo
    );

    const categoriasDisponibles = categorias.filter(
        (categoria) =>
            productosActivos.some(
                (producto) =>
                    producto.categorias.includes(categoria)
            )
    );

    let categoriaSeleccionada = "Todo";

    /* ==================== CATEGORÍAS ==================== */

    const renderizarCategorias = () => {
        const botones = [
            "Todo",
            ...categoriasDisponibles
        ];

        categoriasContainer.innerHTML = botones.map(
            (categoria) => {
                const activa = categoria === categoriaSeleccionada;

                return `
                    <button
                        class="menu__category-button${activa ? " is-active" : ""}"
                        type="button"
                        data-category="${categoria}"
                        aria-pressed="${activa}"
                    >
                        ${categoria}
                    </button>
                `;
            }
        ).join("");
    };

    /* ==================== PRODUCTOS ==================== */

    const renderizarProductos = () => {
        productosContainer.innerHTML = productosActivos.map(
            (producto) => `
                <article
                    class="menu__product-card"
                    tabindex="0"
                    data-product-id="${producto.id}"
                    data-categories="${producto.categorias.join(",")}"
                >
                    <img
                        class="menu__product-image"
                        src="${producto.imagen}"
                        alt="${producto.nombre}"
                        loading="lazy"
                    >

                    <div class="menu__product-info">
                        <h3 class="menu__product-name">
                            ${producto.nombre}
                        </h3>

                        <p class="menu__product-price">
                            $${producto.precio.toLocaleString("es-AR")}
                        </p>
                    </div>
                </article>
            `
        ).join("");
    };

    /* ==================== FILTRADO ==================== */

    const filtrarProductos = () => {
        let productosVisibles = 0;

        productosContainer
            .querySelectorAll(".menu__product-card")
            .forEach((tarjeta) => {
                const categoriasProducto =
                    tarjeta.dataset.categories.split(",");

                const mostrar =
                    categoriaSeleccionada === "Todo" ||
                    categoriasProducto.includes(categoriaSeleccionada);

                tarjeta.classList.toggle("is-hidden", !mostrar);

                if (mostrar) {
                    productosVisibles++;
                }
            });

        mensajeVacio.hidden = productosVisibles > 0;
    };

    /* ==================== EVENTOS ==================== */

    categoriasContainer.addEventListener("click", (event) => {
        const boton = event.target.closest("[data-category]");

        if (!boton || !categoriasContainer.contains(boton)) {
            return;
        }

        categoriaSeleccionada = boton.dataset.category;

        renderizarCategorias();
        filtrarProductos();
    });

    /* ==================== INICIALIZACIÓN ==================== */

    renderizarCategorias();
    renderizarProductos();
    filtrarProductos();

})();

/* ==================== FIN CARTA Y FILTROS ==================== */
