var nome = window.prompt('Digite o seu nome: ','Digite aqui')

var valorEmBitcoin = window.prompt("Converta Bitcoin para Real ","Digite aqui o valor em Bitcoin");

valorEmBitcoin = parseInt(valorEmBitcoin);

var cotacaoReal = 116943;

var conversao = valorEmBitcoin * cotacaoReal;
conversa0 = conversao.toFixed(2);
alert( nome + ', ' + valorEmBitcoin + ' Bitcoin é equivalente a R$ ' + conversao + '.');
