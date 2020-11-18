class Retangulo{
	constructor(base, altura){
		this.base = base;
		this.altura = altura;
	}
	calcularArea(){
		return this.base * this.altura;
	}
}

var b = prompt("Digite a base");
var a = prompt("Digite a altura");

let ret = new Retangulo(parseInt(b),parseInt(a));

alert("A área do retângulo é: " + ret.calcularArea());