String.prototype.vreplace = function (vocal) {
    let texto = this;
    texto = texto.replace("a", vocal);
    texto = texto.replace("A", vocal);
    texto = texto.replace("e", vocal);
    texto = texto.replace("E", vocal);
    texto = texto.replace("i", vocal);
    texto = texto.replace("I", vocal);
    texto = texto.replace("o", vocal);
    texto = texto.replace("O", vocal);
    texto = texto.replace("u", vocal);
    texto = texto.replace("U", vocal);

    return texto;
}

console.log("apples and bananas".vreplace("u"));