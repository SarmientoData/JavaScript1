   /* function loop (numero){
        for (let i = 0; i <= 100; i++){
            if ((i+numero)%2===0){
            console.log("El numero "+ (i+numero) + " es par")
        }else {
            console.log(i);
        }}
    }

    loop ()

    function loopDeImpares (nro,palabra){
        for (let i= 0; i <= 100; i++){
            if ((i+nro)%2 !== 0){
                console.log(i,palabra)
            }
        }
    }

loopDeImpares(0,"soy impar")
*/

function sumatoria (numero){
    let suma=0;
    for (let i = 1; i <= numero; i++){
        suma =suma +i;
    } 
    return suma;    
}

console.log(sumatoria(2 ))