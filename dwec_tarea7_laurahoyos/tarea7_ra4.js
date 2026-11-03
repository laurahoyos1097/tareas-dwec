/**
 * Calcula la media de dos notas.
 * @param {number} nota1 Primera nota.
 * @param {number} nota2 Segunda nota.
 * @returns {number} Media de ambas notas.
 */
const calcularPromedio = (nota1, nota2) => (nota1 + nota2) / 2;

/**
 * Comprueba si una nota alcanza el mínimo.
 * @param {number} nota Nota que se comprueba.
 * @param {number} notaCorte Mínimo para aprobar (por defecto, 5).
 * @returns {boolean} true si aprueba; false si suspende.
 */
const esAprobado = (nota, notaCorte = 5) => nota >= notaCorte;

// Pruebas iniciales y modificación del Paso 6 (esAprobado con nota de corte personalizada)
console.log("Promedio de 6 y 8: " + calcularPromedio(6, 8));
console.log("¿Aprueba un 4.5 con corte 5?: " + esAprobado(4.5));
console.log("¿Aprueba un 4.5 con corte 4?: " + esAprobado(4.5, 4));

/**
 * Calcula la media de un grupo y la envía al callback.
 * @param {number[]} listaNotas Notas del grupo.
 * @param {Function} funcionCallback Función que recibe la media.
 * @returns {void}
 */
const procesarListaNotas = (listaNotas, funcionCallback) => {
    if (listaNotas.length === 0) {
        console.log("No hay notas para calcular la media.");
        return;
    }

    let sumaTotal = 0;
    for (let nota of listaNotas) {
        sumaTotal += nota;
    }

    const mediaGrupo = sumaTotal / listaNotas.length;
    funcionCallback(mediaGrupo);
};

/**
 * Muestra la media con dos decimales.
 * @param {number} media Media del grupo.
 * @returns {void}
 */
const mostrarMedia = (media) => {
    console.log("La media del grupo es: " + media.toFixed(2));
};

/**
 * Indica si la media del grupo es suficiente.
 * @param {number} media Media del grupo.
 * @returns {void}
 */
const evaluarGrupo = (media) => {
    if (esAprobado(media)) {
        console.log("Estado del grupo: APROBADO");
    } else {
        console.log("Estado del grupo: REQUIERE REFUERZO");
    }
};

// PRIMERA COMPROBACIÓN
const calificaciones = [4, 7.5, 8, 3.5, 9];
console.log("=== PRIMERA COMPROBACIÓN ===");
procesarListaNotas(calificaciones, mostrarMedia);
procesarListaNotas(calificaciones, evaluarGrupo);

// SEGUNDA COMPROBACIÓN (Completando los ??? con los callbacks)
const nuevasCalificaciones = [2, 3, 4, 5, 1];
console.log("=== SEGUNDA COMPROBACIÓN ===");
procesarListaNotas(nuevasCalificaciones, mostrarMedia);
procesarListaNotas(nuevasCalificaciones, evaluarGrupo);