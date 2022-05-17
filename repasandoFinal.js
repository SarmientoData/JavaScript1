/* Ejercicio 1
1. Revisa el siguiente archivo, identifica sus componentes, vamos a estar
usándolos a lo largo de este ejercicio.
a. ¿Qué tipo de dato es?
b. ¿Cuáles son las claves que puedes identificar?
 */

// 1. a. Se trata de un array de Objetos literales, Este array se denomina
// alumnos y cuenta con 5 objetos literales, con 5 propiedades cada uno.
// 1. b. Se identifican cinco claves de las propiedades de los Objetos Literales: 
//id, nombre, apellido, legajo y notas.


// 2. Crear una función que ordene la estructura definida en el archivo final.js
// según la propiedad legajo de forma descendente. (*)

const alumnos = [
    {
      id: 0,
      nombre: "Leandro",
      apellido: "Borrelli",
      legajo: 20210308,
      notas: [],
    },
    {
      id: 1,
      nombre: "Esteban",
      apellido: "Piazza",
      legajo: 20210211,
      notas: [],
    },
    {
      id: 2,
      nombre: "Martin",
      apellido: "Cejas",
      legajo: 20210218,
      notas: [],
    },
    {
      id: 3,
      nombre: "Karina",
      apellido: "Borgna",
      legajo: 20210516,
      notas: [],
    },
    {
      id: 5,
      nombre: "Javier",
      apellido: "Riera",
      legajo: 20220125,
      notas: [],
    },
  ];

function ordenarLegajo (parametro){
    for (let i = 0; i < parametro.length; i++){
        for (let j = 0; j < parametro.length -1; j++){
            if (parametro[j].legajo<parametro[j+1].legajo){
                let temporal = parametro[j]
                parametro[j] = parametro[j+1]
                parametro[j+1] = temporal
            }
        }
    }
    return parametro
}

console.log (ordenarLegajo(alumnos))

/* Ejercicio 2
3. Crear un método que retorne el promedio de notas. (*)
4. Crear una función que ordene las notas del alumno de forma ascendente.
(*/

alumno = {
    id: 5,
    nombre: "Lucas",
    apellido: "Astrada",
    legajo: 20220125,
    notas: [10,6,8,7,9],
    promedioNotas: function(){
        suma = 0;
        for (i= 0; i < this.notas.length; i++){
            suma += this.notas
        }
    return suma / this.notas.length
    }
}

function ordenarNotas(parametro){
    for (let i = 0; i < parametro.notas.length; i++) {
        if (parametro.notas[i] > parametro.notas[i + 1]) {
            let temp = parametro.notas[i]
            parametro.notas[i] = parametro.notas[i + 1]
            parametro.notas[i + 1] = temp   
        }
    }
return parametro
}

console.log (ordenarNotas(alumno))
   /* Ejercicio 3
    A. Crea una matriz de 3x3, cuadrada, con números enteros negativos en
    cada una de sus posiciones.
    B. Crear una función que retorne la suma de todos los números dentro de la
    matriz que sean múltiplos de 5.
   
    D. Crear una función que retorne la multiplicación de las diagonales de la
    matriz.*/

let array1 = [-12,-46,-74];
let array2 = [-98,-51,-62];
let array3 = [-74,-45,-56];

let miMatriz = [];

miMatriz.push (array1,array2,array3)

console.table (miMatriz)

function sumaMultipos5 (parametro){
    suma = 0;
    for (let i = 0; i < parametro.length; i++) {
        for (let j = 0; j < parametro[i].length; j++) {
            if (parametro[i][j] % 5 == 0){
                suma += parametro[i][j]
            }
        }
    return suma
    }
}

console.log(sumaMultipos5(miMatriz))

// C. Crear una función que retorne un valor booleano dependiendo si la suma
// de todos los valores de la matriz es impar.

function sumaImpar (parametro){
    let suma = 0;
    for (let i = 0; i < parametro.length; i++) {
        for (let j = 0; j < parametro[i].length; j++) {
            suma += parametro[i][j]
            }
                   
        }      
    return (suma % 2 != 0)
 }

// console.log(sumaImpar(miMatriz))

// Crear una función que retorne la multiplicación de las diagonales de la
// matriz.

function multiplicarDiagonales (parametro){
    let diagonal1 = 1
    let diagonal2 = 1
    for (let i = 0; i < parametro.length; i++) {
        for (let j = 0; j < parametro[i].length; j++) {
            if (i == j) {
                diagonal1 = diagonal1 * (parametro[i][j])
            }
            if (i + j == parametro.length - 1) {
                diagonal2 = diagonal2 * (parametro[i][j])
            }
        }
    }
return (diagonal1 * diagonal2)
}

// console.log(multiplicarDiagonales(miMatriz))