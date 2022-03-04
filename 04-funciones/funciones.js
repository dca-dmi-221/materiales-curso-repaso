// declaración
function saludar(nombreEmisor, nombreReceptor){
    console.log("hola " + nombreReceptor + ", soy: " + nombreEmisor);
}
saludar("Daniela", "Jose");
saludar("Jose", "Daniela");

// expresión
let saludar = function(nombreEmisor, nombreReceptor){
    console.log("hola " + nombreReceptor + ", soy: " + nombreEmisor);
}
saludar("Daniela", "Jose");
saludar("Jose", "Daniela");