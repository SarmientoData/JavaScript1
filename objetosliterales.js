

let curso = {
    cantidadDeAlumnos : 32,
    docentes: ["Nacho", "Javier"],
    horario: "de 19 a 21 horas",
    notificaciones : function(){
        return "El horario es" + this.horario;
    }
}

console.log(curso.notificaciones());

// los objetos literales teien metodos. son funciones uqe se asignan como valor a los objetos.

let miPais = {
    nombre: "Argentina",
    poblacion: 34421432,
    capital: "Buenos Aires",
    decirNacionalidad: function(){
        return this.nombre
    }
}

console.log(miPais.decirNacionalidad())

// palabra reservada this hace referencia al objeto que esta invocando la función

