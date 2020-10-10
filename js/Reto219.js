function repeat(elemento, cantidad) {
    let arrayList = [];
    let contador = 1;
    while (contador <= cantidad) {
        arrayList.push(elemento);
        contador++;
    }
    return arrayList;
}

console.log(repeat(13,5));