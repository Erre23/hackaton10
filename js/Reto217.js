function diffMaxMin(numeros) {
    return Math.max.apply(this,numeros) - Math.min.apply(this,numeros);
};

console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));