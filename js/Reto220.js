String.vreplace(vocal) {
    
    this = this.replace("a", vocal);
    this = this.replace("A", vocal);
    this = this.replace("e", vocal);
    this = this.replace("E", vocal);
    this = this.replace("i", vocal);
    this = this.replace("I", vocal);
    this = this.replace("o", vocal);
    this = this.replace("O", vocal);
    this = this.replace("u", vocal);
    this = this.replace("U", vocal);

    return this;
}

console.log("apples and bananas".vreplace("a"));