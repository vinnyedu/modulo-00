'use strict';
/* 
  Crie um programa onde o usuário possa digitar vários valores numéricos e cadastre-os em uma lista. Caso o número já esteja lá dentro, ele não será adicionado. No final, serão exibidos todos os valores únicos digitados, em ordem crescente.
*/

const prompt = require('prompt-sync')({ sigint: true });

let lista = [];

while (true) {
  let num = +prompt('Valor para a lista: ');
  if (isNaN(num)) {
    console.log('Saindo do programa');
    break;
  } else if (!lista.includes(num)) {
    lista.push(num);
  } else {
    console.log('Número repetido');
  }
}

lista.sort((a, b) => a - b);
console.log('Lista ordenada: ' + lista.join(' '));
