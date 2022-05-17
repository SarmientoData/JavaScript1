// metodo push nos suma al final

let colores = ["azul","blanco"];
colores.push ("verde")

console.log (colores)

// sacar utiliza el metodo pop() saca el ultimo
let nombre = ["juan","esteban"];
let elUltimo = nombre.pop();
console.log(elUltimo)

// shift saca al prinicipo (0) unshift te inserta
let nombres = ["juan","esteban","carlos","ignacio"];
let elPrimero = nombres.shift();
console.log(elPrimero)

let colores1 = ["azul","blanco"];
colores1.unshift ("verde")

console.log (colores1)


let notas = [1,2,3,4,5,6]
notas.push(1);
notas.push(4);

console.log(notas);

let elUltimo1= notas.pop();
 console.log (elUltimo1)

 //shift y unshift
 notas.shift();
 notas.shift()

 notas.unshift (1)
 console.log(notas)

 // indexOf busca el indice. Si no esta, nos devuelve -1. 
 //lastIndexOf() comienza desde el final
 // join los une a todos en un unico string
 // como parametro podemos usar cualquier elemeto delimitador

 let notas2 = [1,2,3,4,5,6,7,8,8];

 let posicionDelOcho= notas2.lastIndexOf(7)
 if (posicionDelOcho != -1){
     console.log ("Lo Encontre")
 }
 
 let resultado = notas.join("cabeza");
 // console.log(resultado)

 // nuevo

 let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
  ];
  
  let fraseNueva = arrayFrase.join(" ");
  console.log(fraseNueva);