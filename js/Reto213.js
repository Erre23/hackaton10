function objectToArray(objeto) {
    return Object.entries(objeto);
}

console.log(objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
  }));