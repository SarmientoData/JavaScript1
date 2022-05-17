
function arreglosDeObjetosDos(num, text) {
    let arreglo = []
    let objeto = {}
    for (let i = 1; i <= num; i++){
        objeto = {
            [text]: i 
         } 
        arreglo.push(objeto);
    }
    return arreglo;
}
console.log(arreglosDeObjetosDos(3, "Imperactiva"));