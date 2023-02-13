'use strict';
/* 
  Faça um programa que pergunte ao usuário um número e valide se o numero é par ou impar:
  - Crie uma variável para receber o valor, com conversão para inteiro
  - Para um número ser par, a divisão dele por 2 tem que dar resto 0
*/

const prompt = require('prompt-sync')({ sigint: true });

let numero = parseInt(prompt('Escolha um número inteiro: '));
const resto = numero % 2;

if (resto == 0) {
  console.log(`O número ${numero} é par`);
} else {
  console.log(`O número ${numero} é impar`);
}
