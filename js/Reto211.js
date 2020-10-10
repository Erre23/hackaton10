function getBudgets(objeto) {
    let suma = 0;
    objeto.map(x => suma += x.budget);
    return suma;
}

console.log(getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ]));