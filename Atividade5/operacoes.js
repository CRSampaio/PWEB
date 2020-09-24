const primeiroNumero = prompt("Digite o primeiro número")
const segundoNumero = prompt("Digite o segundo número")
const soma = parseFloat(primeiroNumero) + parseFloat(segundoNumero)
const sub = parseFloat(primeiroNumero) - parseFloat(segundoNumero)
const div = parseFloat(primeiroNumero) / parseFloat(segundoNumero)
const rest = parseFloat(primeiroNumero) % parseFloat(segundoNumero)

alert("Soma: " + soma + "\n" + "Subtração: " + sub + "\n" + "Divisão: " + div + "\n" + "Resto Divisão: " + rest)