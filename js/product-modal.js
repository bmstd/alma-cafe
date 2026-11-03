
/* ==================== MODAL DE PRODUCTOS ==================== */

(() => {
    const modal = document.querySelector(".product-modal");

    if (!modal) return;

    const imagen = modal.querySelector(".product-modal__image");
    const titulo = modal.querySelector(".product-modal__title");
    const precio = modal.querySelector(".product-modal__price");
    const descripcion = modal.querySelector(".product-modal__description");

    const ingredientes = modal.querySelector(
        ".product-modal__ingredients-list"
    );

    const botonCerrar = modal.querySelector(".product-modal__close");

    if (
        !imagen ||
        !titulo ||
        !precio ||
        !descripcion ||
        !ingredientes ||
        !botonCerrar
    ) {
        return;
    }

    /* ==================== ABRIR MODAL ==================== */

    const abrirModal = (producto) => {
        if (!producto) return;

        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;

        titulo.textContent = producto.nombre;

        precio.textContent =
            `$${producto.precio.toLocaleString("es-AR")}`;

        descripcion.textContent = producto.descripcion;

        ingredientes.replaceChildren();

        const listaIngredientes = Array.isArray(producto.ingredientes)
            ? producto.ingredientes
            : [];

        listaIngredientes.forEach((ingrediente) => {
            const elemento = document.createElement("li");

            elemento.textContent = ingrediente;

            ingredientes.appendChild(elemento);
        });

        modal.showModal();

        // Bloquear el scroll de la página de fondo
        document.body.style.overflow = "hidden";
    };

    /* ==================== CERRAR MODAL ==================== */

    const cerrarModal = () => {
        if (!modal.open) return;

        modal.close();

        // Recuperar el scroll de la página
        document.body.style.overflow = "";
    };

    /* ==================== EVENTOS ==================== */

    // Cerrar mediante el botón
    botonCerrar.addEventListener("click", cerrarModal);

    // Cerrar al hacer clic fuera del contenido
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            cerrarModal();
        }
    });

    // Cerrar mediante Escape
    modal.addEventListener("close", () => {
        document.body.style.overflow = "";
    });

    // Recibir el producto seleccionado desde menu.js
    document.addEventListener("product-select", (event) => {
        abrirModal(event.detail.producto);
    });

})();

/* ==================== FIN MODAL DE PRODUCTOS ==================== */
