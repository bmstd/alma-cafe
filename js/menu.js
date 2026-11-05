
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

    /* ==================== CATEGORÍAS ==================== */

    const categorias = [
        { id: "cafeteria", nombre: "Cafetería" },
        { id: "bebidas-frias", nombre: "Bebidas frías" },
        { id: "otras-bebidas", nombre: "Otras bebidas" },
        { id: "pasteleria", nombre: "Pastelería" },
        { id: "salados", nombre: "Salados" },
        { id: "tortas-postres", nombre: "Tortas y postres" }
    ];

    const productosActivos = productos.filter(
        (producto) => producto.activo
    );

    const categoriasDisponibles = categorias.filter(
        (categoria) =>
            productosActivos.some(
                (producto) =>
                    producto.categorias.includes(categoria.id)
            )
    );

    let categoriaSeleccionada = "todo";

    /* ==================== RENDERIZAR CATEGORÍAS ==================== */

    const renderizarCategorias = () => {
        const botones = [
            { id: "todo", nombre: "Todo" },
            ...categoriasDisponibles
        ];

        categoriasContainer.innerHTML = botones.map(
            (categoria) => {
                const activa =
                    categoria.id === categoriaSeleccionada;

                return `
                    <button
                        class="menu__category-button${activa ? " is-active" : ""}"
                        type="button"
                        data-category="${categoria.id}"
                        aria-pressed="${activa}"
                    >
                        ${categoria.nombre}
                    </button>
                `;
            }
        ).join("");
    };

    /* ==================== RENDERIZAR PRODUCTOS ==================== */

    const renderizarProductos = () => {
        productosContainer.innerHTML = productosActivos.map(
            (producto) => `
                <article
                    class="menu__product-card"
                    tabindex="0"
                    role="button"
                    aria-label="Ver detalles de ${producto.nombre}"
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
                    categoriaSeleccionada === "todo" ||
                    categoriasProducto.includes(categoriaSeleccionada);

                tarjeta.classList.toggle("is-hidden", !mostrar);

                if (mostrar) {
                    productosVisibles++;
                }
            });

        mensajeVacio.hidden = productosVisibles > 0;
    };

    /* ==================== EVENTOS DE CATEGORÍAS ==================== */

    categoriasContainer.addEventListener("click", (event) => {
        const boton = event.target.closest("[data-category]");

        if (!boton || !categoriasContainer.contains(boton)) {
            return;
        }

        categoriaSeleccionada = boton.dataset.category;

        renderizarCategorias();
        filtrarProductos();
    });

    /* ==================== EVENTOS DE PRODUCTOS ==================== */

    const activarProducto = (tarjeta) => {
        if (!tarjeta || tarjeta.classList.contains("is-hidden")) {
            return;
        }

        const productoId = Number(tarjeta.dataset.productId);

        const producto = productosActivos.find(
            (item) => item.id === productoId
        );

        if (!producto) {
            return;
        }

        // La apertura del modal se conectará en product-modal.js.
        // Por ahora, el producto seleccionado queda identificado.
        productosContainer.dispatchEvent(
            new CustomEvent("product-select", {
                bubbles: true,
                detail: { producto }
            })
        );
    };

    productosContainer.addEventListener("click", (event) => {
        const tarjeta = event.target.closest(
            ".menu__product-card"
        );

        if (!tarjeta || !productosContainer.contains(tarjeta)) {
            return;
        }

        activarProducto(tarjeta);
    });

    productosContainer.addEventListener("keydown", (event) => {
        if (
            event.key !== "Enter" &&
            event.key !== " "
        ) {
            return;
        }

        const tarjeta = event.target.closest(
            ".menu__product-card"
        );

        if (!tarjeta || !productosContainer.contains(tarjeta)) {
            return;
        }

        event.preventDefault();
        activarProducto(tarjeta);
    });

    /* ==================== INICIALIZACIÓN ==================== */

    renderizarCategorias();
    renderizarProductos();
    filtrarProductos();

})();

/* ==================== FIN CARTA Y FILTROS ==================== */
