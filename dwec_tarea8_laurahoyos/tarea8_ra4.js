// Mensaje inicial del programa
console.log("=== GESTOR DE INVENTARIO ===");

// Clase Producto
class Producto {

    // Constructor: recibe los datos de cada producto
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    // Calcula el valor total de las unidades del producto
    calcularSubtotal() {
        return this.precio * this.cantidad;
    }

}

// Array con los productos del inventario
let inventario = [
    new Producto("Teclado Mecánico", 45.00, 10),
    new Producto("Ratón Óptico", 15.50, 20),
    new Producto("Monitor 24 pulgadas", 120.00, 8),
    new Producto("Micrófono USB", 35.00, 4)
];

// Variable para acumular el valor total del almacén
let valorTotalAlmacen = 0;

// Mostrar los productos en la consola
console.log("--- PRODUCTOS EN STOCK ---");

inventario.forEach(prod => {

    // Calcular el subtotal de cada producto
    let subtotal = prod.calcularSubtotal();

    // Sumar el subtotal al valor total
    valorTotalAlmacen += subtotal;

    // Mostrar los datos del producto
    console.log(`${prod.nombre} | ${prod.cantidad} u. | ${subtotal.toFixed(2)} €`);

});

// Mostrar el valor total del almacén
console.log("VALOR TOTAL: " + valorTotalAlmacen.toFixed(2) + " €");

// El método calcularSubtotal() multiplica el precio de un producto por su cantidad.
// Así podemos conocer el valor total de las unidades disponibles en el almacén.
// Utilizamos forEach() para recorrer todos los productos del inventario.
// De esta forma, podemos calcular y mostrar sus subtotales sin repetir código.