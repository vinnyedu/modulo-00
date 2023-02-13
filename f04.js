'use strict';
/* 
    Faça um programa de cadastro de clientes que mostre um menu de opções e permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.
*/

const prompt = require('prompt-sync')({ sigint: true });

const menu = ['Bife com batata frita', 'Pernil assado', 'Strogonoff de franco'];

for (const [i, opcao] of menu.entries()) {
  console.log(`${i + 1}: ${opcao}`);
}

const opcao = +prompt('Escolha uma opção: ');
console.log(`Você escolheu: ${menu[opcao - 1]}`);
