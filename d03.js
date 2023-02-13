'use strict';
/* 
  Jogo da adivinhação: Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu.
*/

const prompt = require('prompt-sync')({ sigint: true });

let contador = 0;
let num = 999;
const randomNum = Math.floor(Math.random() * 11);

while (true) {
  num = +prompt('Escolha um número entre 0 e 10: ');
  if (num == randomNum) {
    console.log('Você acertou!');
    break;
  } else {
    console.log('Você errou, tente de novo!');
  }
}
