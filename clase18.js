/* Obtener en un nuevo array las edades menores a 18.
Obtener en un nuevo array las edades mayor o igual a 18.
Obtener en un nuevo array las edades igual a 18.
Obtener el menor.
Obtener el mayor. 
Obtener el promedio de edades.
Incrementar en 1 todas las edades.


const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
let mayorOigual18 = [];

for (let i=0; i <= edades.length; i++){
    if (edades[i] >= 18){
        mayorOigual18.push(edades[i])
    }
}

console.log(mayorOigual18)

let menores18 = [];

for (let i=0; i <= edades.length; i++){
    if (edades[i] <= 18){
        menores18.push(edades[i])
    }
}

console.log(menores18)

let menor = Math.min(...edades);

console.log(menor)
let mayor= Math.max(...edades)
console.log(mayor)

promedio de edades
let suma = 0;
for (let i = 0; i < edades.length; i++) {
  suma += edades[i];
}

let promedio = suma / edades.length;
 console.log(promedio) 

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

suma = 0
for (let i=0; i < edades.length; i++){
    suma = suma + edades[i]
    }

console.log(suma)

let promedio=suma/edades.length
console.log(promedio)

let edades_incrementadas = []
for (let i=0; i < edades.length; i++){
    edades_incrementadas.push(edades[i] += 1)
    }
console.log("Las edades_incrementadas en uno son " + edades_incrementadas) 



Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
Obtener un nuevo array de cuentas cuyas edades sean igual a 30.
Obtener la cuenta con el titular de la misma más joven.
Obtener un nuevo array por cada tipo de cuenta.
Obtener un nuevo array con las cuentas habilitadas.
Obtener un nuevo array con las cuentas deshabilitadas.
Obtener la cuenta con el menor saldo.
Obtener la cuenta con el mayor saldo.
*/


const arrayCuentas = [
  {
    titular: "Arlene Barr",
    estaHabilitada: false,
    saldo: "$3,253.40",
    edadTitular: 33,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Roslyn Torres",
    estaHabilitada: false,
    saldo: "$3,229.45",
    edadTitular: 27,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Cleo Lopez",
    estaHabilitada: true,
    saldo: "$1,360.19",
    edadTitular: 34,
    tipoCuenta: "corriente",
  },
  {
    titular: "Daniel Malone",
    estaHabilitada: false,
    saldo: "$3,627.12",
    edadTitular: 30,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: "$1,616.52",
    edadTitular: 34,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Harding Mitchell",
    estaHabilitada: true,
    saldo: "$1,408.68",
    edadTitular: 25,
    tipoCuenta: "corriente",
  },
];

let mayores30 = [];
for (let i=0; i<arrayCuentas.length; i++){
    if (arrayCuentas[i].edadTitular>= 30) {
        mayores30.push(arrayCuentas[i])
    }
} 
console.log(mayores30)
/* for(let i=0; i<arrayCuentas.length ; i++ ) {
	if(arrayCuentas[i].edadTitular < 30) {
		menores.push(arrayCuentas[i])
	} else {
		mayores.push(arrayCuentas[i])
		if(arrayCuentas[i].edadTitular === 30) {
			iguales.push(arrayCuentas[i])
		}
	}
}

/* console.log(menores)
console.log(mayores) 
console.log(iguales)

let cuentasMenor
for (let i = 0; i< arrayCuentas.length ; i++) {
	if (i === 0) {
		cuentasMenor = arrayCuentas[i];
	  } else if (arrayCuentas[i].edadTitular < cuentasMenor.edadTitular) {
		cuentasMenor = arrayCuentas[i];
	  }
}

console.log(cuentasMenor) */