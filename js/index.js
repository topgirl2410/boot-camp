/** Imperativos VS Declarativos */

const listaProgramadores = ["Gorka", "Martin", "Alex", "Leire"];

let nombres = [];


// Programacion imperativa
listaProgramadores.forEach((programador, posicion) => {
    nombres[posicion] = programador;
})


// Programacion declarativa

nombres = [...listaProgramadores];


console.log(nombres)

/** Funcionales VS Procedimentales **/

// Suma Procedimental

let suma = 0;

for (let i = 1; 1 <= 10; i++) {
    suma = suma + i;
}

// Suma Funcional

// 1 - Definimos la función

function sumar_los_diez_primeros_enteros() {
    let suma = 0;

    for (let i = 1; 1 <= 10; i++) {
        suma = suma + i;
    }

    return suma;
}

// 2 - Utilizamos la función
let sumar = sumar_los_diez_primeros_enteros();

console.log(sumar)