function filterList(list) {
    return list.filter(x => !Number.isNaN(parseInt(x)));
}

console.log(filterList([1, 2, 3, "x", "y", 10]));