'use strict';
/* 
    Defina uma variável para o valor de uma refeição que custou R$ 42,54;
    Defina uma variável para o valor da taxa de serviço que é de 10%;
    Defina uma variável que calcula o valor total da conta e exiba-o no console com essa formatação: R$ 9999.99.

*/

const conta = 42.54;
const taxa = 10;
const total = conta + conta * taxa/100;

console.log(`Valor da conta: R$${conta}\nValor da taxa: ${taxa}%\nValor total: R$${total.toFixed(2)}`);