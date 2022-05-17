/* objetos son la representación en código de un objeto de la vida real
let curso = {
    nacion: "Argentina",
    cantidadDeAlumnos: 12,
    docentes: ["Nacho","Javier"],
    horario: "de 8 a 12",
    decirNacionalidad: function(){
        return "Yo Naci en " + this.nacion;
    }
}

// console.log(curso.decirNacionalidad())

// metodos

// arrays
let nombres = ["nacho","dario","javier"];
let edades = [10,92,14]

console.log(nombres[0])

// metodos de array
// push
let colores = ["azul","amarillo","verde"]
colores.push("violeta")
colores.pop()
colores.shift()
colores.unshift("rojo")

console.log(colores.join("  -  "))

let posicionAmarillo = colores.indexOf("amarillo");
if (posicionAmarillo != -1){
    console.log ("existe amarillo")
}

// un string es un objeto
console.log("hola".length)


let texto = "hola como estas la";

function menciona(texto,palabra){
    posicionPalabra = texto.indexOf(palabra); 
    if (posicionPalabra != -1){
        return true
        }
    else {
        return false
    }
}

console.log(menciona(texto,"cabeza"))

let frase = 'Hola!, soy Carli';

let licenciada = ("'" + frase.slice(10,16) + "'")

console.log(licenciada)


for (let i=1; i <=4; i++) {
    console.log(i)
}

console.log("Fin de ciclo")

let x = 1;
while (x <=10){
    console.log(x);
    x++;
}

console.log("fin de while")
*/

let y = 6;
do {
    console.log(y);
    y++

} while (y <=9)