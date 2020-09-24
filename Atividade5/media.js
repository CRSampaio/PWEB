const nomeAluno = prompt("Digite o nome do aluno")
const primeiraNota = prompt("Digite a primeira nota")
const segundaNota = prompt("Digite a segunda nota")
const terceiraNota = prompt("Digite a terceira nota")
const media = (parseFloat(primeiraNota) + parseFloat(segundaNota) + parseFloat(terceiraNota)) / 3

alert("O aluno " + nomeAluno + " teve a média " + media)