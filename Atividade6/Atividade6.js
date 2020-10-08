var userChoice = prompt("Pedra, papel ou tesoura?");
var computerChoice = Math.random();

if (computerChoice < 0.34) {
	computerChoice = "pedra";
} else if(computerChoice <= 0.67) {
	computerChoice = "papel";
} else {
	computerChoice = "tesoura";
} 

alert("Computer: " + computerChoice);

var compare = function (choice1, choice2) {
    if (choice1 === choice2)
		return ("O resultado é um empate!")
    else if (choice1 === "pedra") {
        if (choice2 === "tesoura")
			return ("pedra vence")
        else {
            return ("papel vence")
        }
    }
    else if (choice1 === "papel") {
        if (choice2 === "pedra")
			return "papel vence"
        else {
            return "tesoura vence"
        }
    }
    else if (choice1 === "tesoura") {
        if (choice2 === "pedra")
			return "pedra vence"
        else {
            return "tesoura vence"
        }
    }
};
var resposta = compare(userChoice,computerChoice)
alert(resposta)