// que si tuvo más de 4 aprobo

function aprobado(nota){
    if(nota > 4){
        return "aprobó"
    }
    else if (nota=4){
        return "pasoJusto" 
    }
    else {
        return "desaprobó"
    }
}


//console.log (aprobado(4))

const asistenciaMinima = 23;
function aprobar (asistencias,progreso){
    if (asistencias >= asistenciaMinima && progreso){
        return "aprobado"
    }
    else {
        return "desaprobado"
    }
}
// console.log(aprobar(23,true))

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

//console.log (clase)

function siguienteCursada (clase){
    for (let i = 0; i < clase.length; i++) {
        clase[i].bimestre += 1
    }
return clase
}

console.log (siguienteCursada(clase))
