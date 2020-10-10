function multiplyByLength(numeros) {
    return numeros.map(num => {
        num = num * numeros.length;
        return num;
    });
};

console.log(multiplyByLength([2, 3, 1, 0]));