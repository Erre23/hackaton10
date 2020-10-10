function findLargestNums(...numeros) {
    if (numeros.length != 0)
    {
        return 'Sólo debe mandar un parametro de tipo matriz';
    } else {
        let numerosMayores = [];
        numeros[0].map(a => {
            numerosMayores.push(Math.max.apply(this, a));
        });
        return numerosMayores;
    }
}

console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));