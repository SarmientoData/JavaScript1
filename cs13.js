function loopDePares(n) {

    for (let i = 0; i <= 100; i++) {
        console.log(i);
        let number = n + i;
        if (number%2 == 0) {
            console.log(`El nÃºmero ${number} es par`);
        }
    }
}
loopDePares(5);

//EJ 2
function loopDeImpares(n, palabra) {

    for (let i = 0; i <= 100; i++) {
        console.log(i);
        let number = n + i;
        if (number%2 == 1) {
            console.log(palabra);
        }
    }
}
loopDeImpares(2, 'hola');

//EJ 3
function sumatoria(n){
    let total = 0;
    for (let i = 1; i <= n; i++){
        total += i;
    }
    return total;
  }
console.log(sumatoria(3)); 


//EJ 5
function split(t) {
    let array = [];
    for (let i = 0; i < t.length; i++) {
        var elSplit = t[i];
        array.push(elSplit);
    }
    return array;
}
console.log(split('hola'));

//EJ 6
function caracterDelMedio(c) {
    let posicion = (c.length) / 2;
    if (c.length%2 == 0) {
        let loLeido = '' + c[posicion - 1] + c[posicion] + ''
        return loLeido;
    } else {
        return c[posicion - 0.5];
    }
}
console.log(caracterDelMedio('cosas'));

//EJ 7
let arrayHandler = (array1, array2) => {
    for (let i = 0; i < array1.length; i++) {
        console.log(`soy ${array1[i]} y yo soy ${array2[i]}`); 
    }
}
arrayHandler([1, 2, 3, 4], ['h', 'o', 'l', 'a']);

//EJ 8
let palindromo = x => {
    let reverso = split(x);
    return reverso.reverse().join('') == x;
}
console.log(palindromo('hola')); 