'use strict';
/* 
  Reajuste salarial: As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.
    Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
     - salários até R$ 280,00 (incluindo) : aumento de 20%
     - salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
     - salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
     - salários de R$ 1500,00 em diante : aumento de 5%
    Após o aumento ser realizado, informe na tela:
     - o salário antes do reajuste;
     - o percentual de aumento aplicado;
     - o valor do aumento;
     - o novo salário, após o aumento
*/

const prompt = require('prompt-sync')({ sigint: true });

let reajuste = 0;
let salario = +prompt('Valor do salário: ');

if (salario <= 280) {
  reajuste = 20;
} else if (salario <= 700) {
  reajuste = 15;
} else if (salario <= 1500) {
  reajuste = 10;
} else if (salario > 1500) {
  reajuste = 5;
}

const aumento = (salario * reajuste) / 100;
const total = salario + aumento;

console.log(
  `O salário antes do reajuste: ${salario}\nO percentual de aumento aplicado: ${reajuste}%\nO valor do aumento: ${aumento}\nO novo salário: ${total}`
);
