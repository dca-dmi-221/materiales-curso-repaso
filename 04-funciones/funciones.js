// declaración
function saludar(nombreEmisor, nombreReceptor){
    console.log("hola " + nombreReceptor + ", soy: " + nombreEmisor);
}
saludar("Viviana", "Jose");
saludar("Jose", "Viviana");

// expresión
let saludar = function(nombreEmisor, nombreReceptor){
    console.log("hola " + nombreReceptor + ", soy: " + nombreEmisor);
}
saludar("Juanito", "Jose");
saludar("Jose", "Juanito");