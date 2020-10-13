function capitalize(texto) {
    let len = texto.length;
    return texto.substring(0, len - 1).toLowerCase() + texto.substring(len - 1, len).toUpperCase();
}



console.log(capitalize("Prueba"));