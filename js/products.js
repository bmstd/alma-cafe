
/* ==================== PRODUCTOS ==================== */

// Datos temporales para desarrollar la carta.
// Más adelante los obtendremos desde Supabase.

export const productos = [
    {
        id: 1,
        nombre: "Café espresso",
        precio: 2200,
        imagen: "./assets/images/espresso.jpg",
        descripcion: "Un café intenso para disfrutar en cualquier momento.",
        ingredientes: ["Café"],
        categorias: ["Cafetería"],
        destacado: true,
        activo: true
    },
    {
        id: 2,
        nombre: "Cappuccino",
        precio: 3000,
        imagen: "./assets/images/cappuccino.jpg",
        descripcion: "Café espresso con leche vaporizada y espuma cremosa.",
        ingredientes: ["Café", "Leche"],
        categorias: ["Cafetería"],
        destacado: true,
        activo: true
    },
    {
        id: 3,
        nombre: "Limonada",
        precio: 2500,
        imagen: "./assets/images/limonada.jpg",
        descripcion: "Una bebida fresca y cítrica.",
        ingredientes: ["Limón", "Agua", "Azúcar"],
        categorias: ["Bebidas frías"],
        destacado: false,
        activo: true
    },
    {
        id: 4,
        nombre: "Medialunas",
        precio: 1800,
        imagen: "./assets/images/medialunas.jpg",
        descripcion: "Medialunas ideales para acompañar tu café.",
        ingredientes: ["Harina", "Manteca", "Azúcar"],
        categorias: ["Pastelería"],
        destacado: true,
        activo: true
    },
    {
        id: 5,
        nombre: "Tostado de jamón y queso",
        precio: 4500,
        imagen: "./assets/images/tostado.jpg",
        descripcion: "Un clásico tostado, dorado y crocante.",
        ingredientes: ["Pan", "Jamón", "Queso"],
        categorias: ["Salados"],
        destacado: false,
        activo: true
    },
    {
        id: 6,
        nombre: "Cheesecake",
        precio: 3800,
        imagen: "./assets/images/cheesecake.jpg",
        descripcion: "Una porción cremosa y dulce para disfrutar.",
        ingredientes: ["Queso crema", "Azúcar", "Galletas"],
        categorias: ["Tortas y postres"],
        destacado: false,
        activo: true
    },
    {
        id: 7,
        nombre: "Té",
        precio: 2000,
        imagen: "./assets/images/te.jpg",
        descripcion: "Una infusión suave para hacer una pausa.",
        ingredientes: ["Té", "Agua"],
        categorias: ["Otras bebidas"],
        destacado: false,
        activo: true
    }
];

/* ==================== FIN PRODUCTOS ==================== */
