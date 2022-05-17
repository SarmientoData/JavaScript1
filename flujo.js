const prompt = require("prompt-sync")({ sigint: true }); 

let edad = parseInt(prompt ("ingrese nro2: "));
if (edad<0){
    console.log("Error, edad inválida. Por favor ingrese un número válido.")
}
else if (edad<18){
    console.log("No puede pasar al bar")
}
else if (edad==21){
    console.log("Puede pasar al bar,felicitiaciones por haber llegado a la mayoria de edad")
}
else if (edad>21){
    console.log("Puede pasar al bar,pero no puede tomar alcohol")
}
else {
    console.log("Puede pasar al bar y tomar alcohol")
}
if (edad %2 != 0){
    console.log("Sabías que tu edad es un número impar?")
}
