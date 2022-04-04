// Clausuras o closures
function crearContador() {
    let contador = 0;
    return {
        getValorContador(){
            return contador;
        },
        contar(){
            contador++;
        },
        decrementar(){
            contador--;
        }
    }
}

let unContador = crearContador();
console.log(unContador.getValorContador());
unContador.contar();
console.log(unContador.getValorContador());

/// pero por qué closure?
console.log(unContador.contador);

unContador.decrementar();
console.log(unContador.getValorContador());