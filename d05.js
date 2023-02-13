'use strict';
/* 
  Jogo Jokenpô: Utilizando os conceitos aprendidos até estruturas de repetição, crie um programa que jogue pedra, papel e tesoura (Jokenpô) com você.
    - Permitir que eu decida quantas rodadas iremos fazer;
    - Ler a minha escolha (Pedra, papel ou tesoura);
    - Decidir de forma aleatória a decisão do computador;
    - Mostrar quantas rodadas cada jogador ganhou;
    - Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
    - Perguntar se o Jogador quer jogar novamente, se sim inicie volte a escolha de quantidade de rodadas, se não finalize o programa.
*/

const prompt = require('prompt-sync')({ sigint: true });

let vitoriasJogador = 0;
let vitoriasComputador = 0;
let continuar = 's';
const jogadas = ['pedra', 'papel', 'tesoura'];

while (continuar == 's') {
  let rodadas = +prompt('Número de rodadas: ');
  for (let i = 0; i < rodadas; i++) {
    console.log(`Rodada ${i + 1}`);
    for (const [i, jogada] of jogadas.entries()) {
      console.log(`[${i}]${jogada}`);
    }
    const computador = Math.floor(Math.random() * 3);
    const jogador = +prompt('Escolha sua jogada: ');
    if (computador == jogador) {
      console.log('Empate');
      console.log(`Jogador e computador escolheram ${jogadas[computador]}`);
    } else if (jogador == 0) {
      if (computador == 1) {
        console.log(
          `Jogador: ${jogadas[jogador]}\nComputador: ${jogadas[computador]}\nVitória Computador`
        );
        vitoriasComputador++;
      } else {
        console.log(
          `Jogador: ${jogadas[jogador]}\nComputador: ${jogadas[computador]}\nVitória Jogador`
        );
        vitoriasJogador++;
      }
    } else if (jogador == 1) {
      if (computador == 2) {
        console.log(
          `Jogador: ${jogadas[jogador]}\nComputador: ${jogadas[computador]}\nVitória Computador`
        );
        vitoriasComputador++;
      } else {
        console.log(
          `Jogador: ${jogadas[jogador]}\nComputador: ${jogadas[computador]}\nVitória Jogador`
        );
        vitoriasJogador++;
      }
    } else if (jogador == 2) {
      if (computador == 0) {
        console.log(
          `Jogador: ${jogadas[jogador]}\nComputador: ${jogadas[computador]}\nVitória Computador`
        );
        vitoriasComputador++;
      } else {
        console.log(
          `Jogador: ${jogadas[jogador]}\nComputador: ${jogadas[computador]}\nVitória Jogador`
        );
        vitoriasJogador++;
      }
    }
  }
  console.log(
    `Jogador [${vitoriasJogador}] x [${vitoriasComputador}] Computador`
  );
  vitoriasComputador = 0;
  vitoriasJogador = 0;
  do {
    continuar = prompt('Deseja jogar novamente[s/n]').toLowerCase();
  } while (continuar != 's' && continuar != 'n');
}
console.log('Jogo finalizado!!!');
