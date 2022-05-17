/* Escribir un programa que muestre en pantalla los números del 1 al 100,
sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por
“buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—,
por la palabra “fizzbuzz”.


function fizzbu() {
    for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0){
        console.log ("fizzbuzz")
    }
    else if (i % 3 == 0 && i % 5 != 0){
        console.log ("fizz")
    }
    else if (i % 3 != 0 && i % 5 == 0){
        console.log ("buzz")
    }
    else { 
        console.log (i)
    }
}
}

fizzbu()
*/
/* Escriban una función que reciba dos parámetros: un array y un índice. La
función deberá de mostrar por consola el valor del elemento según el
índice dado. Por ejemplo, dada la siguiente array e índice, la función
imprimirá '6'. let array = */

let array = [
	3,
	6,
	67,
	6,
	23,
	11,
	100,
	8,
	93,
	0,
	17,
	24,
	7,
	1,
	33,
	45,
	28,
	33,
	23,
	12,
	99,
	100
];

/**
 * Y el siguiente indice:
 

let indice = 10;

function arrayIndice (array,indice) {
    console.log(array[indice])
}

arrayIndice (array,indice)

Escribir una función que, dado un número de mes, devuelva la cantidad
de días de ese mes —suponiendo que no es un año bisiesto—.
Tienen 31 días: Enero 1, marzo3 ,5 mayo, 7julio, 8agosto, 10octubre y 12diciembre.

Tienen 30 días: 4Abril, 6junio, 9septiembre y 11noviembre.

Tienen 28 días: Febrero.

function diasMes (numeroMes){
    if (numeroMes == 1 || numeroMes == 4 ||numeroMes == 5 ||numeroMes == 7 ||numeroMes == 8 ||
        numeroMes == 10 ||numeroMes == 12){
            return 31
        }
    else if (numeroMes == 4 || numeroMes == 6 ||numeroMes == 9 ||numeroMes == 11){
                return 30
            }
    else {return 28}
}

console.log(diasMes(2))

Escribir una función de JavaScript que invierta un número. Por ejemplo,
si x = 32443, la salida debería ser 34423.
https://codesandbox.io/s/inverter-jfwm7?file=/src/index.js*/

let number = 123456789;

function invertirNumero(n) {
  let convertir = n.toString().split("").reverse().join("");
  return Number(convertir);
}

console.log(invertirNumero(number)); 

/**
 * Escribir una función que reciba una array
 *  y solo imprima los valores que se repiten.
 *  Por ejemplo, dada la siguiente array e índice,
 *  la función imprimirá '6,23,33,100'.
 * let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

for (let i = 0; i < tempArray.length; i++) {
  if (tempArray[i + 1] === tempArray[i]) {
    duplicados.push(tempArray[i]);
  }
}
 
console.log(duplicados); // [2, 4]

.sort()
*/
let numeros = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]
let duplicados = []
let tempArray = [...numeros].sort()

for (let i = 0; i < tempArray.length; i++) {
    if(tempArray[i]==tempArray[i + 1]){
        duplicados.push(tempArray[i])
    };
    
}
 
console.log (duplicados);