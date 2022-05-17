/* Bucles y repeticiones
1) Crear una función que pida un valor por parámetro y muestre los 10
números siguientes.
2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.
3) Escribir un programa que muestre la sumatoria de todos los números
entre el 0 y el 100
4) Dado un número entero positivo, mostrar su factorial. El factorial de
un número se obtiene multiplicando todos los números enteros
positivos que hay entre el 1 y ese número.
5) Crear una función que muestre todos los números de la secuencia de
fibonacci hasta el valor ingresado por parámetro. */

function diezSiguientes(){
    for (let i = 1; i <=10; i++){
        console.log(i)
    }
}

//diezSiguientes(32)

function de3en3(){
    for (let i = 5; i <=20; i= i+3){
        console.log(i)
    }
}

// de3en3()
function sumatoria100(){
    sumatoria= 0;
    for (let i = 0; i <=100; i++){
        sumatoria += sumatoria(i)
    }
}

console.log(sumatoria100())
