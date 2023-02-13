'use strict';
/* 
    Defina uma variável para o valor de uma compra que custou R$100,98;
    Defina uma variável para o valor que o cliente pagou R$150,00;
    Defina uma variável que calcula o valor do troco e exiba-o no console com o valor final arredondado.

*/

const conta = 100.98;
const pago = 150.00;
const troco = pago - conta;

console.log(`Valor da conta: R$${conta}\nValor da pago: R$${pago.toFixed(2)}\nValor troco: R$${troco.toFixed(2)}`);