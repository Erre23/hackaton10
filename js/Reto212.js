function getStudentNames(objeto) {
    let names =[];
    objeto.map(x => names.push(x.name))
    return names;
}

console.log(getStudentNames([
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
  ]));