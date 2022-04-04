// Visibilidad de las variables

// let y const - bloque de código { }
const valorVariables = 10;
{
    let valorInterno = 5;    
    {
        console.log(valorInterno, valorVariables);
    }
}

// var - funciones
