'use strict';
/* 
  Agora, imprima todas as tabuadas do número 1 ao 10.
*/

for (let i = 1; i < 11; i++) {
  for (let j = 1; j < 11; j++) {
    const element = j * i;
    console.log(`${j} * ${i} = ${element}`);
  }
}
