function countdown(numero) {
    let countDownArray = [];
    for(let cont = numero; cont >= 0; cont--){
        countDownArray.push(cont);
    }
    return countDownArray;
};

console.log(countdown(5));