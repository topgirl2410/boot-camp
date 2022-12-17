/**Imperativos VS Declarativos */

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