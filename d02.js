'use strict';
/* 
    Faça um programa que vai receber como parâmetro o ano de nascimento de uma pessoa, retornando um valor literal indicando se uma pessoa tem voto NEGADO, OPCIONAL ou OBRIGATÓRIO nas eleições:
*/

const prompt = require('prompt-sync')({ sigint: true });
      
const anoNascimento = +prompt('Ano de nascimento: ');
const anoAtual = new Date().getFullYear();
const idade = anoAtual - anoNascimento;
let voto = '';

if (idade < 16) {
  voto = 'NEGADO';
} else if (idade < 18 || idade > 65) {
  voto = 'OPCIONAL';
} else {
  voto = 'OBRIGATÓRIO';
}

console.log(`Você tem ${idade} anos e seu voto é ${voto}`);
