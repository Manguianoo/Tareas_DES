function generarDatos(cantidad){
    let array = [];
    for(let i = 0; i < cantidad; i++){
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    return array;
}

function medir(name, fn){
    let inicio = performance.now();
    fn();
    let fin = performance.now();
    let tiempo = fin - inicio;
    return {name, tiempo};
}

function comparar(cantidad){
    let datos = generarDatos(cantidad);
    let resultados = [];

    //filer y map
    resultados.push(medir("filter y map", () => {
        datos.filter(function(n){return n % 2 === 0; })
        .map(function(n){ return n * 2; });
    }));

    //reduce
    resultados.push(medir("reduce", () => {
        datos.reduce(function(acc, n){
            if(n % 2 === 0) acc.push(n * 2);
            return acc;
        }, []);
    }));

    //for
    resultados.push(medir("for", () => {
        let resultado = [];
        for(let i = 0; i < datos.length; i++){
            if(datos[i] % 2 === 0) {
                resultado.push(datos[i] * 2);
            }
        }
    }));

console.table(resultados);
}

comparar(1000);  
comparar(10000);  
comparar(100000);  
comparar(1000000);  