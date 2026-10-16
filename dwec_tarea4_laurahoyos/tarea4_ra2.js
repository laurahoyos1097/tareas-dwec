// PARTE 1: Evaluador de notas con condicionales (if...else)
let notaEstudiante = 4; 
console.log("=== EVALUACIÓN INDIVIDUAL ===");
if (notaEstudiante < 5) {
    console.log("Nota: " + notaEstudiante + " -> Suspenso");
} else if (notaEstudiante < 7) {
    console.log("Nota: " + notaEstudiante + " -> Aprobado");
} else if (notaEstudiante < 9) {
    console.log("Nota: " + notaEstudiante + " -> Notable");
} else {
    console.log("Nota: " + notaEstudiante + " -> Sobresaliente");
}

// PARTE 2: Día de la semana con switch
let diaCodigo = 3; 
console.log("\n=== DÍA DE LA SEMANA ===");
switch (diaCodigo) {
    case 1:
        console.log("Día seleccionado: Lunes");
        break;
    case 2:
        console.log("Día seleccionado: Martes");
        break;
    case 3:
        console.log("Día seleccionado: Miércoles");
        break;
    case 4:
        console.log("Día seleccionado: Jueves");
        break;
    case 5:
        console.log("Día seleccionado: Viernes");
        break;
    case 6:
        console.log("Día seleccionado: Sábado");
        break;
    case 7:
        console.log("Día seleccionado: Domingo");
        break;
    default:
        console.log("Código de día no válido");
        break;
}

// PARTE 3: Recorrido de una lista de notas con for...of
let listaNotas = [4, 6.5, 9, 3.5, 8, 5.5]; 
let aprobados = 0;
let suspensos = 0;

console.log("\n=== RESUMEN DEL GRUPO ===");
for (let nota of listaNotas) {
    if (nota >= 5) {
        aprobados++;
    } else {
        suspensos++;
    }
}
console.log("Total de aprobados: " + aprobados);
console.log("Total de suspensos: " + suspensos);

// PARTE 4: Bucle do...while
let revisionesPendientes = 3; 
console.log("\n=== REVISIONES PENDIENTES ===");
do {
    console.log("Procesando revisión. Quedan: " + revisionesPendientes);
    revisionesPendientes--;
} while (revisionesPendientes > 0);