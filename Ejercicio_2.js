function crearContador(){
    let contador = 0;

    return{
        incrementar: () => contador++,
        disminuir: () => contador--,
        reset: () => contador = 0,
        obtenerCuenta: () => contador
    }
}

const contador = crearContador();

contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.disminuir();
console.log(contador.obtenerCuenta());
