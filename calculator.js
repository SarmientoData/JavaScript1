const prompt = require("prompt-sync")({ sigint: true }); 

/* 1. Crear un archivo calculadora.js que contendrá las distintas operaciones a
realizar de nuestra calculadora.
2. Crear una función sumar, esta deberá recibir dos parámetros y retornar la
suma de los mismos. 

function sumar(nro1,nro2){
    return nro1 + nro2;
}
console.log(sumar(10,2))

/*  3. Crear una función restar, la cual deberá recibir dos parámetros y retornar la
resta del primero menos el segundo. 

function restar(nro1,nro2){
    return nro1 - nro2;
}
console.log(restar(10,2))


/* 4. Crear una función multiplicar, la misma deberá recibir dos parámetros y
retornar el resultado de su multiplicación. 

function multiplicar(nro1,nro2){
    return nro1 * nro2;
}
console.log(multiplicar(10,2)) 

/* 5. Crear una función dividir, la cual recibirá dos parámetros y retornar el resultado
de la división del primero sobre el segundo.

function dividir(nro1,nro2){
    return nro1 / nro2;
}
console.log(dividir(10,2))*/

console.log("-------------- Testeo de Operaciones / Calculadora --------------")

/* En el archivo calculadora.js —debajo de nuestras 4 funciones hechas con
anterioridad— creá un console.log en el cual vas a poner un string para indicar
que debajo de él comenzarás a probar las funciones, algo así como un
“separador de código”. Por ejemplo:
console.log(“-------------- Testeo de Operaciones / Calculadora --------------”)
2. Ejecutar la función que permite sumar y la función que permite restar pasando
como argumentos dos números cualesquiera. Mostrar en consola los
resultados.
3. Ejecutar la función que permite multiplicar pasando como argumentos dos
números cualesquiera. Mostrar en consola el resultado.
4. Ejecutar la función que permite dividir pasando como argumentos dos
números cualesquiera. Mostrar en consola el resultado.
5. Ejecutar la función que permite dividir pasando, ahora, como uno de los dos
argumentos, el número cero. Mostrar en consola el resultado. 

function sumar(){
    let nro1  = prompt ("ingrese nro1: ")
    let nro2  = prompt ("ingrese nro2: ")
    return parseInt(nro1) + parseInt(nro2);
}
console.log(sumar())

function restar(){
    let nro1  = prompt ("ingrese nro1: ")
    let nro2  = prompt ("ingrese nro2: ")
    return parseInt(nro1) - parseInt(nro2);
}
console.log(restar())

function dividir(){
    let nro1  = prompt ("ingrese nro1: ")
    let nro2  = prompt ("ingrese nro2: ")
    return parseInt(nro1) / parseInt(nro2);
}
console.log(dividir() */

console.log("-------------- Testeo de Operaciones / Calculadora --------------")

/*  crear funcion cuadradoDeUnNumero como parámetro y deberá retornar ese número elevado al cuadrado.
Importante: cuadradoDeUnNumero() deberá utilizar la función multiplicar() para
calcular el cuadrado del parámetro ingresado a cuadradoDeUnNumero()

function multiplicar(){
    let nro1  = prompt ("ingrese nro1: ")
    let nro2  = prompt ("ingrese nro2: ")
    return parseInt(nro1) * parseInt(nro2);
}

function cuadradoDeUnNumero(){
    let a  = prompt ("ingrese a: ")
    return multiplicar(a,a);
}
console.log(cuadradoDeUnNumero()) */


/* 2. Crear la función promedioDeTresNumeros, la misma deberá calcular el promedio
de 3 números, que serán ingresados por parámetro.
Importante: promedioDeTresNumeros() deberá utilizar algunas funciones
previamente creadas de nuestra calculadora.*/


/* 3. Crear la función calcularPorcentaje. Esta recibirá dos parámetros: el número
total y el porcentaje que se le quiere calcular. Deberá retornar el x% del total.
Ejemplo: calcularPorcentaje(300, 15) debe retornar 45, ya que es el 15% de 300.
Importante: calcularPorcentaje() deberá utilizar algunas funciones previamente
creadas de nuestra calculadora.*/