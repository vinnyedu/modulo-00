'use strict';
/* 
  Faça um script que peça um valor e mostre na tela se o valor é positivo ou negativo e implemente a funcionalidade de não aceitar o número 0.
*/

const prompt = require('prompt-sync')({ sigint: true });

let numero = 0;
while ((numero == 0)) {
  numero = +prompt('Escolha um número: ');
}

if (numero > 0) {
  console.log(`O número ${numero} é positivo`);
} else if (numero < 0) {
  console.log(`O número ${numero} é negativo`);
}
