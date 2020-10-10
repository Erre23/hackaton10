function findNemo (texto) {
    let array = texto.split(" ");
    let posicion = -1;
    array.map((p, i) => {
        if (p.toUpperCase() == "NEMO"){
            posicion = i;
        }
    });
    return posicion;
}

console.log(findNemo("I am finding Nemo !"));