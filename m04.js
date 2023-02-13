'use strict';
/* 
  Crie um programa em Portugol que peça a nota do aluno, que deve ser um `real` entre 0.00 e 10.0
	  - Se a nota for menor que 6.0, deve exibir a nota F
	  - Se a nota for de 6.0 até 7.0, deve exibir a nota D
	  - Se a nota for entre 7.0 e 8.0, deve exibir a nota C
	  - Se a nota for entre 8.0 e 9.0, deve exibir a nota B
	  - Por fim, se for entre 9.0 e 10.0, deve exibir um belo de um A
*/

const prompt = require('prompt-sync')({ sigint: true });

let nota = 999;
let resultado = '';

while (nota > 10 || nota < 0) {
  nota = parseFloat(prompt('Nota do aluno[0-10]: ')).toFixed(1);
}

if (nota < 6) {
  resultado = 'F';
} else if (nota < 7) {
  resultado = 'D';
} else if (nota < 8) {
  resultado = 'C';
} else if (nota < 9) {
  resultado = 'B';
} else if (nota < 10) {
  resultado = 'A';
}

console.log(`Resultado: ${resultado}`);
