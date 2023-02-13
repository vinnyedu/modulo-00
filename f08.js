'use strict';
/* 
    Conversor de moedas: Crie um programa que solicite um valor em real ao usuário e converta esse valor, para:
    - DOLAR
	- EURO
	- LIBRA ESTERLINA
	- DÓLAR CANADENSE
	- PESO ARGENTINO
	- PESO CHILENO
*/

const prompt = require('prompt-sync')({ sigint: true });

const moedas = [
  'Dolar',
  'Euro',
  'Libra Esterlina',
  'Dólar Canadense',
  'Peso Argentino',
  'Peso Chileno',
];

const taxas = [0.19, 0.18, 0.16, 0.26, 36.37, 152.65];

for (const [i, moeda] of moedas.entries()) {
  console.log(`${i + 1}: ${moeda}`);
}
let escolha = 10;

while (escolha > 6) {
  escolha = +prompt('Escolha uma moeda: ');
}

let real = +prompt('Valor em reais: ');
const total = real * taxas[escolha -1]

console.log(
  `${real} reais valem ${(total.toFixed(2))} em ${moedas[escolha - 1]}`
);
