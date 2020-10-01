const i = 0;
while (i < 4) {
    const idade = prompt("Digite a sua idade");
    const sexo = prompt("Digite o seu sexo (M/F)");
    const opiniao = prompt("Digite a sua opinião (4=ótimo/3=bom/2=regular/1=péssimo)");
    const mediaIdade;
    const qtdePessoasPessimo;
    const porcPessoasOtimoBom;
    const m;
    const f;
    var vetIdade[i] = parseFloat(idade);
    var vetSexo[i] = sexo;
    var vetOpiniao[i] = opiniao;
    const maiorIdade = parseFloat(vetIdade[i]);
    const menorIdade = parseFloat(vetIdade[i]);
    i++;
}

for (cont = 0; cont < vetSexo.length; i++) {
    if (vetIdade[cont] > maiorIdade) {
        maiorIdade = vetIdade;
    }
    if (vetIdade[cont] < menorIdade) {
        menorIdade = vetIdade;
    }
    if (vetSexo[cont] == "M" || vetSexo[i] == "m") {
        parseFloat(m) ++;
    } else if (vetSexo[cont] == "F" || vetSexo[i] == "f") {
        parseFloat(f) ++;
    }
    if (vetOpiniao[cont] == 1) {
        parseFloat(qtdePessoasPessimo) ++;
    } else if (vetOpiniao[cont] == 4 || vetOpiniao[i] == 3) {
        parseFloat(porcPessoasOtimoBom) ++;
    }
    mediaIdade = parseFloat(mediaIdade) + parseFloat(vetIdade[cont]);
}
porcPessoasOtimoBom = ((parseFloat(porcPessoasOtimoBom) / parseFloat(vetOpiniao.length))*100) + "%";
mediaIdade = parseFloat(mediaIdade) / vetIdade.length;
alert("Média da idade: " + mediaIdade + "\nIdade da pessoa + velha: " + maiorIdade + "\nIdade da pessoa + nova" + menorIdade
     +"\nQtde. Pessoas que responderam péssimo: " + qtdePessoasPessimo + "\n Porcentagem de pessoas que responderam ótimo e bom: "
     + porcPessoasOtimoBom + "\n Nº de mulheres que responderam o questionário: " + f + "\n Nº de homens que responderam o questionário: "
     + m)
