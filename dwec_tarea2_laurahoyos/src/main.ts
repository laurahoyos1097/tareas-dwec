interface Producto {
    id: number;
    nombre: string;
    precio: number;
    enStock: boolean;
}

const productos: Producto[] = [
    {
        id: 1,
        nombre: "Wardogs",
        precio: 39.99,
        enStock: true
    },
    {
        id: 2,
        nombre: "DayZ",
        precio: 47.99,
        enStock: true
    },
    {
        id: 3,
        nombre: "Path of Exile 2",
        precio: 27.95,
        enStock: false
    },
    {
        id: 4,
        nombre: "Death Stranding",
        precio: 39.99,
        enStock: true
    }
];

function calcularTotalStock(productos: Producto[]): number {
    let total: number = 0;

    for (const producto of productos) {
        if (producto.enStock === true) {
            total += producto.precio;
        }
    }

    return total;
}

const total = calcularTotalStock(productos);

console.log("Total de productos en stock: " + total.toFixed(2) + " €");