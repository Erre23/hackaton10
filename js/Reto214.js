function squaresSum(num) {
    let suma = 0;
    for(let cont = 1; cont <= num; cont++) {
        suma += Math.pow(cont,2);
    }

    return suma;
}

console.log(squaresSum(3));