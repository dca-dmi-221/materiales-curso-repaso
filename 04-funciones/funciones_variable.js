let saludar = function(nombre) {
    console.log("Hola soy: " + nombre);
}
saludar("Monk");

let despedirse = function(nombre) {
    console.log("chao, suerte te desea: " + nombre);
}

let animar = function(nombre) {
    console.log("Ánimo, equipo, soy: " + nombre);
}

function actuar(comportamiento, nombre) {
    comportamiento(nombre);
}

actuar(saludar, "Monk");
actuar(despedirse, "Monk");
actuar(animar, "Monk");
