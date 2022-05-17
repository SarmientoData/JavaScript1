// Ejercicio 1
// 1
let estudiante = { 
    nombre: "Joaquin",
    apellido: "Sarmiento",
    camada: 5,
    esParcial: true
}


// 2
function examen(nota){
    if(nota < 4){
        return "El alumno obtuvo una nota igual a " + nota + " por lo tanto su condición es desaprobado"}
    else if(nota >= 4 && nota < 7){
            return "El alumno obtuvo una nota igual a " + nota + " por lo tanto su condición es debe rendir examen final"
        }
    else{
        return "El alumno obtuvo una nota igual a " + nota + " por lo tanto su condición es promocionado"
    }
}

console.log(examen(10))

// Ejercicio 2:
clase = []

let compañero1 = { 
    nombre: "Esteban",
    apellido: "Piazza",
    bimestre: 1
}

let compañero2 = {   
    nombre: "Leandro",
    apellido: "Borrelli",
    bimestre: 1
}
  
let compañero3 = {
    nombre: "Martín",
    apellido: "Cejas",
    bimestre: 1
}   
 
clase.push(compañero1, compañero2, compañero3)

console.log (clase)

function siguienteCursada (clase){
    for (let i = 0; i < clase.length; i++){
        clase[i].bimestre += 1
}
return clase
}

console.log(clase)
siguienteCursada(clase)
console.log(clase)

// Ejercicio 3
const asistenciaMinima = 23;
function aprobado (asistencias,progreso){
    if (asistencias>=asistenciaMinima && progreso == true){
        return "aprobado"
    }
    else {
        return "desaprobado"
    }
}
console.log(aprobado(23,true))