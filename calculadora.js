function sumar (numero1, numero2){
    return numero1 + numero2;
}

function restar (numero1, numero2){
    return numero1 - numero2;
}

function multiplicar (numero1, numero2){
    return numero1 * numero2;
}

function dividir (numero1, numero2){
    return numero1 / numero2;
}
console.log("-------------- Testeo de Operaciones / Calculadora --------------")

// Ejecutar la función que permite sumar y la función que permite restar pasando como argumentos 
// dos números cualesquiera. Mostrar en consola los resultados.
console.log (sumar(2,3))
console.log (restar(2,3))
// Ejecutar la función que permite multiplicar pasando como argumentos dos
// números cualesquiera. Mostrar en consola el resultado.
console.log (multiplicar(2,3))

// Ejecutar la función que permite dividir pasando como argumentos dos
// números cualesquiera. Mostrar en consola el resultado.
console.log(dividir(18,4))
// Ejecutar la función que permite dividir pasando, ahora, como uno de los dos
// argumentos, el número cero. Mostrar en consola el resultado.
console.log (dividir(0,3))
console.log (dividir(2,0))

// Calculadora - Nivel III - Funciones extras
// Si llegamos hasta aquí, podemos quedarnos tranquilos con lo realizado. A
// continuación desarrollaremos funciones extras a nuestra calculadora, en las cuales
//utilizaremos las funciones ya creadas. Podemos realizar la prueba de estas luego de
//desarrollar cada una.
//1. Crear una función que se llame cuadradoDeUnNumero, la cual recibe un
//número como parámetro y deberá retornar ese número elevado al cuadrado.
//Importante: cuadradoDeUnNumero() deberá utilizar la función multiplicar() para
//calcular el cuadrado del parámetro ingresado a cuadradoDeUnNumero()

function cuadradoDeUnNumero(numero4){
    return multiplicar(numero4,numero4)
}

console.log(cuadradoDeUnNumero(5))

//2. Crear la función promedioDeTresNumeros, la misma deberá calcular el promedio
//de 3 números, que serán ingresados por parámetro.
//Importante: promedioDeTresNumeros() deberá utilizar algunas funciones
//previamente creadas de nuestra calculadora.

function promedioDeTresNumeros(n1,n2,n3){
    let n4 = n1 + n2 + n3;
    return dividir (n4,3)
}
console.log (promedioDeTresNumeros(10,3,4))

//3. Crear la función calcularPorcentaje. Esta recibirá dos parámetros: el número
//total y el porcentaje que se le quiere calcular. Deberá retornar el x% del total.
//Ejemplo: calcularPorcentaje(300, 15) debe retornar 45, ya que es el 15% de 300.
//Importante: calcularPorcentaje() deberá utilizar algunas funciones previamente
//creadas de nuestra calculadora.

function calcularPorcentaje(nroInicial,porcentaje){
    let nP = multiplicar (nroInicial, porcentaje);
    return dividir (nP,100)
}
console.log (calcularPorcentaje(100,3))

// Crear una función GeneradorDePorcentaje que recibe dos parámetros y deberá
// retornar el porcentaje del primero con respecto al segundo.
// Importante: GeneradorDePorcentaje() deberá utilizar algunas funciones
// previamente creadas de nuestra calculadora.
// Ejemplo: GeneradorDePorcentaje(2, 200) deberá retornar 1, ya que 2 es el 1% de
// 200.

function GeneradorDePorcentaje(primerNro,segundoNro){
    let nP = dividir (primerNro, segundoNro);
    return multiplicar (nP,100)
}
console.log (GeneradorDePorcentaje(100,1000))

