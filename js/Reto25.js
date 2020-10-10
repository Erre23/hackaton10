function filtrarDistintoAString(...argumentos) {
    return argumentos.filter(x => typeof(x) != "string");
}


console.log(filtrarDistintoAString(10, 'a', true, 'a', {nombre:'eduardo'}, 'a'));