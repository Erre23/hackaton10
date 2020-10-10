function objectToArray(objeto) {
    return Object.entries(objeto);
}

console.log(objectToArray({ a: 1, b: 2 }));