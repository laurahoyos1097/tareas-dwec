// PARTE 1: Generador de Identificador Aleatorio con Math

console.log("=== GENERADOR DE USUARIO (Objeto Math) ===");

// Math.random() genera un decimal entre 0 y 1
// Math.floor() redondea hacia abajo

let idAleatorio = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

console.log("Identificador de usuario generado: USR-" + idAleatorio);

console.log("Valor constante de Math.PI: " + Math.PI.toFixed(2));

// PARTE 2: Reloj y Diferencia Temporal con Objeto Date

console.log("\n=== CÁLCULO TEMPORAL (Objeto Date) ===");

// Obtener la fecha y hora exacta de este instante
let fechaActual = new Date();

// Crear una fecha concreta (Año, Mes - 1, Día)
let fechaInicioCurso = new Date(2026, 8, 1);

console.log("Fecha de hoy: " + fechaActual.toLocaleDateString());
console.log("Fecha de inicio de curso: " + fechaInicioCurso.toLocaleDateString());

// Calcular la diferencia en milisegundos
let diferenciaMilisegundos = fechaActual.getTime() - fechaInicioCurso.getTime();

// Convertir milisegundos a días
let diasTranscurridos = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

console.log("Días transcurridos desde el inicio: " + diasTranscurridos + " días");

// PARTE 3: Formateo de Texto

let nombreUsuario = " Laura Hoyos ";

// Limpiamos los espacios sobrantes y convertimos a mayúsculas
let nombreLimpio = nombreUsuario.trim().toUpperCase();

console.log("\n=== DATOS DEL ESTUDIANTE ===");
console.log("Texto original con espacios:" + nombreUsuario);
console.log("Texto formateado: " + nombreLimpio);
console.log("Número total de caracteres: " + nombreLimpio.length);