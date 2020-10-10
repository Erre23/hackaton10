function formatNumberPhone(...numeros) {
    if (numeros.length != 10 || numeros.filter(x => typeof(x) != "number" || x < 0 || x > 9).length > 0) {
        return console.log('La cantidad de numeros ingresados debe ser 10 y estos deben estar en el rango de 0 a 9');
    }
    else {
        [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10] = numeros;
        return `(${n1}${n2}${n3}) ${n4}${n5}${n6}-${n7}${n8}${n9}${n10}`;
    }
}


console.log(formatNumberPhone(0,9,9,8,8,0,2,8,7,8));

console.log(formatNumberPhone(0,9,9,8,8,0,2,8,7,-1));

console.log(formatNumberPhone(0,9,9,8,8,0,2,8,7,'asdas'));

console.log(formatNumberPhone(0,9,9,8,8,0,2,8,7));