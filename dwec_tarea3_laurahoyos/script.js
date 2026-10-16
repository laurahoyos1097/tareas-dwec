// paso 2
const nombre = "Laura";
let edad = 29;
let curso = "DAW";
let matriculado = true;

console.log(nombre, typeof nombre);
console.log(edad, typeof edad);
console.log(curso, typeof curso);
console.log(matriculado, typeof matriculado);

//paso 3
if (true) {
let mensaje = "Estoy dentro del bloque";
console.log(mensaje);
}
// console.log(mensaje);

//paso 4
let precioTexto = "25";
console.log(precioTexto, typeof precioTexto);

let precioNumero = Number(precioTexto);
console.log(precioNumero, typeof precioNumero);

let total = precioNumero + 10;
console.log("Total: " + total);

//paso 5
let numero = 5;
let texto = "5";

console.log(numero == texto);
console.log(numero === texto);

//paso 6
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

let edadUsuario = 20;
let tieneCarnet = true;
console.log(edadUsuario >= 18 && tieneCarnet);