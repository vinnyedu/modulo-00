'use strict';
/* 
    Faça um programa, que receba as dimensões de um terreno retangular (comprimento e comprimento) e mostre a área do terreno:
*/
        
const prompt = require('prompt-sync')({ sigint: true });

let largura = +prompt('Largura do terreno: ');
let comprimento = +prompt('Comprimento do terreno: ');

const area = largura * comprimento;
        
console.log(`A área do terreno é ${area}m²`);
