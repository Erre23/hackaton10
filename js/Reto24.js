function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
      return previous + current;
    });
}

console.log(`Suma de 1 + 2 + 3 = ${sum(1, 2, 3)}`);
console.log(`Suma de 1 + 2 + 3 + 4 = ${sum(1, 2, 3, 4)}`);