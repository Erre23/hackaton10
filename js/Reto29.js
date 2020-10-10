function charIndex(cadena, letra) {
    let indices = [];
    for(let i = 0; i < cadena.length; i++){
        if (cadena[i] == letra){
            indices.push(i);
        }
    }
    return indices;
}

console.log(charIndex("hello", "l"));