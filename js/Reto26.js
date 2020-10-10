function minMax(...numeros) {
     return [Math.min.apply(this, numeros), Math.max.apply(this, numeros)];
}


console.log(minMax(20, 10, 5, 80, 90, 2, 100, 8));