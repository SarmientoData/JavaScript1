const prompt = require("prompt-sync")({ sigint: true });

/* Crear una función que convierta pulgadas en centímetros. 
Recibe por parámetro pulgadas y retorna su equivalente en centímetros.
*/ 

function pulgadasAcentimetros (){
    let pulgada  = prompt ("ingrese cantidad de pulgadas: ")
    return pulgada * 2.54;
}

// console.log(pulgadasAcentimetros())

/* ear una función que recibe un string y lo convierte en una URL.
Ej: “pepito” es devuelto como “http://www.pepito.com”
*/

function stringAurl(){
    let palabra  = prompt ("ingrese palabra: ")
    return "http://www."+ palabra + ".com"
}

// console.log(stringAurl())

/* Crear una función que recibe un string y devuelve la misma frase pero con
admiración. */
function stringaAdmiracion(){
    let string  = prompt ("ingrese string: ")
    return "¡"+ string + "!"
}

// console.log(stringaAdmiracion())

/* 4. Crear una función que calcule la edad de los perros, considerando que 1 año
para nosotros son 7 de ellos. */
function edadPerros(){
    let edadReal  = prompt ("ingrese edad: ")
    return edadReal * 7
}

//console.log(edadPerros())

/* Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
sueldo mensual como parámetro.
PD: considerá que tu mes de trabajo tiene 40 horas. */
function valorHoraTrabajo(){
    let sueldoMensual  = prompt ("ingrese sueldoMensual: ")
    return sueldoMensual / 40
}

// console.log(valorHoraTrabajo())

/* Crear la función calculadorIMC() que reciba la altura en metros y el peso en
kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
probando diferentes valores. */
function calculadorIMC(){
    let altura  = prompt ("ingrese altura: ");
    let peso  = prompt ("ingrese peso: ")
    return altura / peso
}
console.log(calculadorIMC())
