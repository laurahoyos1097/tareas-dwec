// PARTE 1: Consulta de propiedades del BOM

console.log("=== INFORMACIÓN DEL NAVEGADOR (BOM) ===");

// Medir el ancho y alto del área visible en píxeles
let anchoVentana = window.innerWidth;
let altoVentana = window.innerHeight;

// Obtener la dirección y el protocolo de la página
let urlActual = location.href;
let protocolo = location.protocol;

console.log("Ancho visible de ventana: " + anchoVentana + "px");
console.log("Alto visible de ventana: " + altoVentana + "px");
console.log("URL de la página: " + urlActual);
console.log("Protocolo utilizado: " + protocolo);

// PARTE 2: Creación de cookies con expiración

console.log("\n=== GESTIÓN DE COOKIES ===");

let usuarioNombre = "Laura";
let temaPreferido = "claro";

// Calcular la fecha de expiración: 7 días a partir de ahora
let fechaExpiracion = new Date();

fechaExpiracion.setTime(fechaExpiracion.getTime() + (7 * 24 * 60 * 60 * 1000));

// Crear dos cookies independientes
// La ruta path=/ permite acceder desde toda la web local

document.cookie = "usuario=" + usuarioNombre + "; expires=" + fechaExpiracion.toUTCString() + "; path=/;";

document.cookie = "tema=" + temaPreferido + "; expires=" + fechaExpiracion.toUTCString() + "; path=/;";

console.log("Instrucciones para guardar las cookies ejecutadas.");

// PARTE 3: Lectura de cookies

let todasLasCookies = document.cookie;

console.log("Cadena completa de cookies almacenadas:");
console.log(todasLasCookies);