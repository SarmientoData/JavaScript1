/* Loop de pares
Deberás crear una función llamada loopDePares que reciba como parámetro un número
y haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso de
que el número de la iteración sumado con el número pasado por parámetro sea par,
mostrará en la consola: “El número X es par”. 

function loopDePares(numero){
    for (i=0; i<=100; i++) {
        if ((i + numero) % 2 === 0){
            console.log ("El numero " + (i + numero)+ " es par")
    }
    else {
        console.log ("El numero " + (i + numero)+ " es impar")
    }
}
}
loopDePares (11)
*/

/* Loop de impares con palabra
Deberás crear una función llamada loopDeImpares que reciba como parámetro un
número y una palabra, y haga un loop de 0 a 100 mostrando en la consola cada número
del loop. Luego, modificar el código para que, en caso de que ese número sumado con el
número pasado por parámetro sea impar, muestre en la consola la palabra pasada por
parámetro.
*/


/*function loopDeImpares(numero, palabra){
    for (let i=0; i <= 100; i++){
        if ((numero + i) % 2 != 0){
            console.log((numero + i) + palabra)
        } 
    }
}

loopDeImpares(2, " es un numero impar")

Sumatoria
Deberás crear una función llamada sumatoria que reciba un número como parámetro y 
que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. Ejemplo:
sumatoria(3) debe retornar 6 porque hace (1+2+3)

let suma = 0
function sumatoria (numero){
    for (let i=0; i <= numero; i++){
        suma += i}
    return suma;
    }

console.log(sumatoria(6))

 Nuevo arreglo
Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro 
y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado. 
Ejemplo:
nuevoArreglo(5) debe retornar [1,2,3,4,5]
nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10] */


let arreglo = []

function nuevoArreglo (nro){
  
    for (let i=0; i <= nro; i++){
         arreglo.push(i);
    
    }
        
        console.log(arreglo);
    }

nuevoArreglo(4);

/* EJ 4
function  nuevoArreglo(p) {
    let arreglo = [];

    for (let i = 1; i <= p; i++) {
        arreglo.push(i);
    }
    console.log(arreglo);
}
nuevoArreglo(7);

*/ 