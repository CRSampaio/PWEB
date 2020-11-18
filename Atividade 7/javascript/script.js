function maior(num){
	var n = 0
	for(cont = 0; cont<num.length; cont++){
		if(num[cont] > n){
			n = num[cont];
		}
	}
	return n;
}
function igual(num){
	var igual = 0
	for(cont = 0; cont<num.length; cont++){
		for(i = 0; i<num.length; i++){
			if(cont != i){
				if(num[cont] == num[i]){
					igual = num[cont];
				}
			}
		}
	}
	return igual;
}

num1 = parseInt(prompt("Digite o primeiro número:"));
num2 = parseInt(prompt("Digite o segundo número:"));
num3 = parseInt(prompt("Digite o terceiro número:"));

igual = igual([num1, num2, num3]);
maior = maior([num1, num2, num3]);

if(igual){
	alert("O número " + igual + " é igual a um dos números digitados");		
} else {
	alert("O número " + maior + " é o maior");	
}
