'use strict';
/* 
  Faça um programa que peça dois números, imprima o maior deles ou imprima "Números iguais" se os números forem iguais.
*/

const prompt = require('prompt-sync')({ sigint: true });

let numero2 = +prompt('Escolha um número: ');
let numero1 = +prompt('Escolha outro número: ');

if (numero1 > numero2) {
  console.log(`O número ${numero1} é o maior número`);
} else if (numero1 < numero2) {
  console.log(`O número ${numero2} é o maior número`);
} else {
  console.log('Números iguais');
}
        