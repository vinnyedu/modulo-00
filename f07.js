'use strict';
/* 
    Defina uma variável para o valor do ano do nascimento;
    Defina uma variável para o valor do ano atual;
    Defina uma variável que calcula o valor final da idade da pessoa;
    Exiba uma mensagem final dizendo a idade da pessoa e a mensagem "Você está na flor da idade".

*/

const prompt = require('prompt-sync')({ sigint: true });

const anoNasc =  +prompt('Ano de nascimento: ')
const anoAtual = 2023
const idade = anoAtual - anoNasc

console.log(`Você nasceu em ${anoNasc} e tem ${idade} anos.\nVocê está na flor da idade!`);