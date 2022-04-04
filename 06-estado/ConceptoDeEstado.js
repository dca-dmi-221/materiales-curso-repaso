/**
 * Conceptos de abstracción y estado:
 * 
 -------------- * Selector de ropa *
 * 
 * Opciones de prenda Superior:
 *  - 0 Camisa
 *  - 1 Camiseta
 *  - 2 Polo
 *  - 3 Otro
 * 
 * Opciones de prenda Inferior:
 *  - 0 Pantalón
 *  - 1 Bermuda
 *  - 2 Jean
 *  - 3 Otro
 * 
 * Opciones de zapatos:
 *  - 0 Crocs
 *  - 1 Chanclas
 *  - 2 Tenis
 *  - 3 Formales
 * 
 * Uso de accesorios (boolean):
 *  - tiene bufanda?
 *  - tiene aretes?
 *  - tiene reloj?
 * 
 * Construya un conjunto de funciones que determinen una "combinación" completa
 * 
 * (0 1 2 false false true) ---> programa ---> selección de ropa
 * 
 */


function selectorPrendaSuperior(seleccion) {
    let prendaSuperior = "";
    switch (seleccion) {
        case 0:
            prendaSuperior = "Camisa";
            break;
        case 1:
            prendaSuperior = "Camiseta";
            break;
        case 2:
            prendaSuperior = "Polo";
            break;
        case 3:
            prendaSuperior = "Otro";
            break;
    }
    return prendaSuperior;
}

function selectorPrendaInferior(seleccion) {
    let prendaInferior = "";
    switch (seleccion) {
        case 0:
            prendaInferior = "Pantalón";
            break;
        case 1:
            prendaInferior = "Bermuda";
            break;
        case 2:
            prendaInferior = "Jean";
            break;
        case 3:
            prendaInferior = "Otro";
            break;
    }
    return prendaInferior;
}

function selectorZapatos(seleccion) {
    let zapatos = "";
    switch (seleccion) {
        case 0:
            zapatos = "Crocs";
            break;
        case 1:
            zapatos = "Chanclas";
            break;
        case 2:
            zapatos = "Tenis";
            break;
        case 3:
            zapatos = "Formales";
            break;
    }
    return zapatos;
}

function selectorAccesorios(tieneBufanta, tieneAretes, tieneReloj) {
    let accesorios = "estos accesorios: ";
    if(tieneBufanta){
        accesorios+= "\n - Bufanda"
    }
    if(tieneAretes){
        accesorios+= "\n - Aretes"
    }
    if(tieneReloj){
        accesorios+= "\n - Reloj"
    }
    return accesorios
}


function selectorRopa(superior, inferior, zapatos, accesoriosBufanda, accesoriosAretes, accesoriosReloj) {
    let selPrendaSuperior = selectorPrendaSuperior(superior);
    let selPrendaInferior = selectorPrendaInferior(inferior);
    let selZapatos = selectorZapatos(zapatos);
    let selAccesorios = selectorAccesorios(accesoriosBufanda, accesoriosAretes, accesoriosReloj);

    let textoSalida = `Este usuario ha seleccionado como prenda superior ${selPrendaSuperior}, 
tambien seleccionó como prenda inferior ${selPrendaInferior} y como zapatos ${selZapatos}, finalizando
su selección con ${selAccesorios}`;

    console.log(textoSalida);
}

selectorRopa(1,1,1,true, true, true);