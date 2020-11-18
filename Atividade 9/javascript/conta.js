class Conta{	
	getNome(){
		return this.nome;
	}
	getBanco(){
		return this.banco;
	}
	getNumeroConta(){
		return this.numeroConta;
	}
	getSaldo(){
		return this.saldo;
	}
	setNome(nome){
		this.nome = nome;
	}
	setBanco(banco){
		this.banco = banco;
	}
	setNumeroConta(numeroConta){
		this.numeroConta = numeroConta;
	}
	setSaldo(saldo){
		this.saldo = saldo;
	}
}

class ContaCorrente extends Conta {
	getSaldoEspecial(){
		return this.saldoEspecial;
	}
	setSaldoEspecial(saldoEspecial){
		this.saldoEspecial = saldoEspecial;
	}
}

class ContaPoupanca extends Conta {
	setDataVencimento(dataVencimento){
		this.dataVencimento = dataVencimento;
	}
	getDataVencimento(){
		return this.dataVencimento;
	}
	setJuros(juros){
		this.juros = juros;
	}
	getJuros(){
		return this.juros;
	}
}

let minhaContaCorrente = new ContaCorrente();
minhaContaCorrente.setNome("Cauê Ribeiro Sampaio");
minhaContaCorrente.setBanco("Banco da Praça");
minhaContaCorrente.setNumeroConta("7811");
minhaContaCorrente.setSaldo("R$ 1000,00");
minhaContaCorrente.setSaldoEspecial("R$ 500,00");

let minhaContaPoupanca = new ContaPoupanca();
minhaContaPoupanca.setNome("Josinei da Silva");
minhaContaPoupanca.setBanco("Banco Pacote");
minhaContaPoupanca.setNumeroConta("7181");
minhaContaPoupanca.setSaldo("R$ 10000,00");
minhaContaPoupanca.setJuros("5%");
minhaContaPoupanca.setDataVencimento("31/12/2021");

textoContaCorrente = "Nome: " + minhaContaCorrente.getNome() + "<br>" 
+ "Banco: "+ minhaContaCorrente.getBanco() + "<br>"
+ "Numero da conta: " + minhaContaCorrente.getNumeroConta() + "<br>"
+ "Saldo: " + minhaContaCorrente.getSaldo() + "<br>"
+ "Saldo Especial: " + minhaContaCorrente.getSaldoEspecial() + "<br> <br>";

textoContaPoupanca = "Nome: " + minhaContaPoupanca.getNome() + "<br>" 
+ "Banco: "+ minhaContaPoupanca.getBanco() + "<br>"
+ "Numero da conta: " + minhaContaPoupanca.getNumeroConta() + "<br>"
+ "Saldo: " + minhaContaPoupanca.getSaldo() + "<br>"
+ "Juros: " + minhaContaPoupanca.getJuros() + "<br>"
+ "Data Vencimento: " + minhaContaPoupanca.getDataVencimento();


document.write(textoContaCorrente);
document.write(textoContaPoupanca)