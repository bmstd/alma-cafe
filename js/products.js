
/* ==================== PRODUCTOS ==================== */

// Datos temporales para desarrollar la carta.
// Más adelante los obtendremos desde Supabase.

export const productos = [
    /* ==================== CAFETERÍA ==================== */

    {
        id: 1,
        nombre: "Espresso",
        precio: 2200,
        imagen: "./assets/images/products/espresso.webp",
        descripcion: "Un café intenso y aromático para disfrutar en cualquier momento.",
        ingredientes: ["Café"],
        categorias: ["cafeteria"],
        destacado: false,
        activo: true
    },
    {
        id: 2,
        nombre: "Cappuccino",
        precio: 3000,
        imagen: "./assets/images/products/cappuccino.webp",
        descripcion: "La combinación perfecta de café espresso y leche espumada.",
        ingredientes: ["Café", "Leche"],
        categorias: ["cafeteria"],
        destacado: true,
        activo: true
    },
    {
        id: 8,
        nombre: "Latte",
        precio: 3200,
        imagen: "./assets/images/products/latte.webp",
        descripcion: "Un café suave con abundante leche caliente y una delicada espuma.",
        ingredientes: ["Café espresso", "Leche"],
        categorias: ["cafeteria"],
        destacado: false,
        activo: true
    },
    {
        id: 9,
        nombre: "Mocaccino",
        precio: 3500,
        imagen: "./assets/images/products/mocaccino.webp",
        descripcion: "Una deliciosa mezcla de café, chocolate y leche cremosa.",
        ingredientes: ["Café espresso", "Chocolate", "Leche"],
        categorias: ["cafeteria"],
        destacado: false,
        activo: true
    },

    /* ==================== BEBIDAS FRÍAS ==================== */

    {
        id: 3,
        nombre: "Limonada",
        precio: 2500,
        imagen: "./assets/images/products/limonada.webp",
        descripcion: "Una bebida refrescante preparada con limones naturales.",
        ingredientes: ["Limón", "Agua", "Azúcar"],
        categorias: ["bebidas-frias"],
        destacado: false,
        activo: true
    },
    {
        id: 10,
        nombre: "Milkshake de chocolate",
        precio: 3800,
        imagen: "./assets/images/products/milkshake.webp",
        descripcion: "Un milkshake cremoso y refrescante con todo el sabor del chocolate.",
        ingredientes: ["Leche", "Helado de chocolate", "Salsa de chocolate"],
        categorias: ["bebidas-frias"],
        destacado: true,
        activo: true
    },
    {
        id: 11,
        nombre: "Licuado de frutilla",
        precio: 3500,
        imagen: "./assets/images/products/licuado-frutilla.webp",
        descripcion: "Un licuado cremoso y frutal preparado con frutillas.",
        ingredientes: ["Frutillas", "Leche", "Azúcar"],
        categorias: ["bebidas-frias"],
        destacado: false,
        activo: true
    },
    {
        id: 12,
        nombre: "Jugo de naranja",
        precio: 3000,
        imagen: "./assets/images/products/jugo-naranja.webp",
        descripcion: "Jugo natural de naranja, fresco y lleno de sabor.",
        ingredientes: ["Naranja"],
        categorias: ["bebidas-frias"],
        destacado: false,
        activo: true
    },

    /* ==================== OTRAS BEBIDAS ==================== */

    {
        id: 7,
        nombre: "Té",
        precio: 2000,
        imagen: "./assets/images/products/te.webp",
        descripcion: "Una infusión suave para hacer una pausa.",
        ingredientes: ["Té", "Agua"],
        categorias: ["otras-bebidas"],
        destacado: false,
        activo: true
    },
    {
        id: 13,
        nombre: "Té de frutos rojos",
        precio: 2800,
        imagen: "./assets/images/products/te-frutos-rojos.webp",
        descripcion: "Una infusión aromática y frutal, con un delicado sabor a frutos rojos.",
        ingredientes: ["Té", "Frutos rojos", "Agua"],
        categorias: ["otras-bebidas"],
        destacado: false,
        activo: true
    },
    {
        id: 14,
        nombre: "Chocolate caliente",
        precio: 3200,
        imagen: "./assets/images/products/chocolate.webp",
        descripcion: "Una bebida cremosa de chocolate, ideal para disfrutar en días frescos.",
        ingredientes: ["Chocolate", "Leche", "Azúcar"],
        categorias: ["otras-bebidas"],
        destacado: false,
        activo: true
    },
    {
        id: 15,
        nombre: "Submarino",
        precio: 3000,
        imagen: "./assets/images/products/submarino.webp",
        descripcion: "Leche caliente acompañada de una barra de chocolate para derretir.",
        ingredientes: ["Leche", "Chocolate"],
        categorias: ["otras-bebidas"],
        destacado: false,
        activo: true
    },

    /* ==================== PASTELERÍA ==================== */

    {
        id: 4,
        nombre: "Medialunas",
        precio: 1800,
        imagen: "./assets/images/products/medialuna.webp",
        descripcion: "Medialunas doradas y suaves, perfectas para acompañar el café.",
        ingredientes: ["Harina", "Manteca", "Azúcar"],
        categorias: ["pasteleria"],
        destacado: false,
        activo: true
    },
    {
        id: 16,
        nombre: "Alfajor de maicena",
        precio: 2200,
        imagen: "./assets/images/products/alfajor-maicena.webp",
        descripcion: "Dos tapas suaves de maicena unidas con dulce de leche y coco.",
        ingredientes: ["Maicena", "Dulce de leche", "Coco", "Huevo"],
        categorias: ["pasteleria"],
        destacado: false,
        activo: true
    },
    {
        id: 17,
        nombre: "Budín de limón",
        precio: 2500,
        imagen: "./assets/images/products/budin-limon.webp",
        descripcion: "Un budín esponjoso con un delicado sabor a limón.",
        ingredientes: ["Harina", "Huevo", "Azúcar", "Limón", "Manteca"],
        categorias: ["pasteleria"],
        destacado: false,
        activo: true
    },
    {
        id: 18,
        nombre: "Cookies con chips",
        precio: 2000,
        imagen: "./assets/images/products/cookie.webp",
        descripcion: "Galletas crocantes por fuera y suaves por dentro, con chips de chocolate.",
        ingredientes: ["Harina", "Manteca", "Azúcar", "Chocolate"],
        categorias: ["pasteleria"],
        destacado: false,
        activo: true
    },

    /* ==================== SALADOS ==================== */

    {
        id: 5,
        nombre: "Tostado de jamón y queso",
        precio: 4500,
        imagen: "./assets/images/products/tostado.webp",
        descripcion: "Pan tostado y crocante relleno de jamón y queso fundido.",
        ingredientes: ["Pan", "Jamón", "Queso"],
        categorias: ["salados"],
        destacado: false,
        activo: true
    },
    {
        id: 19,
        nombre: "Avocado Toast",
        precio: 4800,
        imagen: "./assets/images/products/avocado-toast.webp",
        descripcion: "Una tostada crocante acompañada de una cremosa preparación de palta y un toque de limón.",
        ingredientes: ["Pan", "Palta", "Limón", "Aceite de oliva", "Sal"],
        categorias: ["salados"],
        destacado: true,
        activo: true
    },
    {
        id: 20,
        nombre: "Tostado caprese",
        precio: 4800,
        imagen: "./assets/images/products/caprese.webp",
        descripcion: "Una combinación de sabores frescos con queso, tomate y albahaca.",
        ingredientes: ["Pan", "Mozzarella", "Tomate", "Albahaca"],
        categorias: ["salados"],
        destacado: false,
        activo: true
    },
    {
        id: 21,
        nombre: "Pan de campo",
        precio: 2800,
        imagen: "./assets/images/products/pan-de-campo.webp",
        descripcion: "Pan de campo artesanal, tostado y crocante por fuera, con una miga suave y esponjosa.",
        ingredientes: ["Harina", "Agua", "Levadura", "Sal", "Aceite de oliva"],
        categorias: ["salados"],
        destacado: false,
        activo: true
    },

    /* ==================== TORTAS Y POSTRES ==================== */

    {
        id: 6,
        nombre: "Cheesecake",
        precio: 3800,
        imagen: "./assets/images/products/cheesecake.webp",
        descripcion: "Una torta cremosa de queso sobre una base crocante de galletas.",
        ingredientes: ["Queso crema", "Azúcar", "Galletas"],
        categorias: ["tortas-postres"],
        destacado: false,
        activo: true
    },
    {
        id: 22,
        nombre: "Brownie",
        precio: 3200,
        imagen: "./assets/images/products/brownie.webp",
        descripcion: "Un brownie húmedo e intenso con todo el sabor del chocolate.",
        ingredientes: ["Chocolate", "Harina", "Manteca", "Huevo", "Azúcar"],
        categorias: ["tortas-postres"],
        destacado: true,
        activo: true
    },
    {
        id: 23,
        nombre: "Torta de chocolate",
        precio: 4200,
        imagen: "./assets/images/products/torta-chocolate.webp",
        descripcion: "Una torta esponjosa de chocolate con una cobertura cremosa.",
        ingredientes: ["Harina", "Chocolate", "Huevo", "Azúcar", "Manteca"],
        categorias: ["tortas-postres"],
        destacado: false,
        activo: true
    },
    {
        id: 24,
        nombre: "Tarta de frutilla",
        precio: 4200,
        imagen: "./assets/images/products/tarta-frutilla.webp",
        descripcion: "Una deliciosa tarta con una base crocante, crema suave y frutillas frescas.",
        ingredientes: ["Harina", "Manteca", "Crema pastelera", "Frutillas", "Azúcar"],
        categorias: ["tortas-postres"],
        destacado: false,
        activo: true
    }
];

/* ==================== FIN PRODUCTOS ==================== */
