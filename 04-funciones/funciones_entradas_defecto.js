
function dividir(a, b=1){
    return a / b;
}
console.log(dividir(1));

function despedirse (nombre, apellido = ""){
    console.log("Chao, " + nombre + " " + apellido);
}
despedirse("Juan");