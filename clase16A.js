// Dado los siguientes numeros:

let num1 = 43;
let num2 = 78;
let num3 = 14;

// Crea un algoritmo que te permita identificar
// el numero mayor. Utiliza condicionales como el
// if, else, o else if.

function numeroMayor (num1,num2,num3) {
  if (num1 > num2 && num1 > num3){
    return "num1 es el mayor"
  }

  else if (num2 > num1 && num2 > num3){
    return "num2 es el mayor";
  }
  
  else {
    return "num3 es el mayor";
  }
}

console.log(numeroMayor(num1,num2,num3))

// El mayor

const numeros = [5, 12, 2, 40, 33, 2, 8];

var mayor = Math.max(...numeros);
console.log(mayor)  