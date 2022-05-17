const numeros = [1,2,3,4,5,6,7,8,9]

function buscarRepetidos(numeros){
    let repetidos = []
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0){
            repetidos.push (numeros[i])
        }
    console.log(repetidos);
    }

}
buscarRepetidos(numeros)