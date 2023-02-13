'use strict';
/* 
  Caixa eletrônico: Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes na máquina.
    - Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
    - Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.
*/

const prompt = require('prompt-sync')({ sigint: true });

const notas = [100, 50, 10, 5, 1];
let saque = +prompt('Valor do saque: ');
if (10 <= saque <= 600) {
  for (let i = 0; i < notas.length; i++) {
    const nota = parseInt(saque / notas[i]);
    if (nota != 0) {
      console.log(`${nota} notas de R$${notas[i]}`);
    }
    saque = saque - nota * notas[i];
  }
} else {
  console.log('Valor fora do limite!');
}
