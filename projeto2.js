// PROJETO 2 - JOKENPÔ
console.clear();
const prompt = require("prompt-sync")();

// apresentação do Jogo
console.log(`
Olá jogador! Bem-vindo ao famoso jogo do Jokenpô!
Seu adversário nesse jogo será o computador!
               # REGRAS DO JOGO #
Nesse jogo voce tem 03 opções para escolher:`);

// formação da lista com as 03 opções/elementos do jogo
const lista = ["PEDRA", "PAPEL", "TESOURA"];
const listaopcoes = `
[1] ${lista[0]}
[2] ${lista[1]}
[3] ${lista[2]}
`;
console.log(listaopcoes);

// console.log apresentando as regras básicas do jogo
console.log(`* Pedra ganha da Tesoura, mas perde para o Papel.
* Tesoura ganha do Papel, mas perde para a Pedra.
* Papel ganha da Pedra, mas perde para a Tesoura.

Então, vamos começar...
`);

// prompt pergunta para armazenar obrigatoriamente nome do jogador
let nomeUsuario = prompt("1º) Qual seu nome jogador? ");
while (nomeUsuario == "") {
  console.log("Resposta inválida, coloque um nome!");
  nomeUsuario = prompt("1º) Qual seu nome jogador? ");
}
console.log();

// condição que pergunta se o usuario quer jogar novamente, após o numero de jogadas ser concluida
do {
  // Commando prompt para perguntar quantas rodadas o usuário vai querer jogar
  let perguntarodadas = +prompt(
    "2º) QUANTAS rodadas voce quer jogar com seu adversário? "
  );
  console.log();

  // variáveis para declarar a quantidade de vitórias para cada jogador no fim do laço "for"
  let pontosUsuario = 0;
  let pontosComputador = 0;
  let somaUsuario = 0;
  let somaComputador = 0;
  let resultadoCampeao = 0;

  // Condição para repetir número de rodadas conforme decisão do usuário
  for (let rodadas = 1; rodadas <= perguntarodadas; rodadas++) {
    // comando prompt da pergunta para o usuário, com o comando while para aceitar somente aceitar respostas 1, 2 ou 3
    let usuario = prompt(
      "3º) Qual a sua escolha? PEDRA(1), PAPEL(2) ou TESOURA(3)? Escolha o número como resposta... "
    );
    while (usuario !== "1" && usuario !== "2" && usuario !== "3") {
      console.log("Resposta inválida!");
      usuario = prompt("Qual opção voce escolhe? ");
    }

    // condiçionais que exibem o resultado da escolha do usuario e do computador
    if (usuario == 1) {
      console.log(`-> ${nomeUsuario} = PEDRA`);
    } else if (usuario == 2) {
      console.log(`-> ${nomeUsuario} = PAPEL`);
    } else if (usuario == 3) {
      console.log(`-> ${nomeUsuario} = TESOURA`);
    }

    // comando que gera um número aleatório que representará a resposta do computador nas condições abaixo
    let computador = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (computador == 1) {
      console.log("-> Computador = PEDRA");
    } else if (computador == 2) {
      console.log("-> Computador = PAPEL");
    } else if (computador == 3) {
      console.log("-> Computador = TESOURA");
    }

    // condicionais que comparar as respostas dos jogadores e declarar o vencedor da rodada
    if (
      (usuario == 1 && computador == 3) ||
      (usuario == 2 && computador == 1) ||
      (usuario == 3 && computador == 2)
    ) {
      console.log(`   RESULTADO: ${nomeUsuario} VENCEU!`);
      pontosUsuario++;
    } else if (
      (computador == 1 && usuario == 3) ||
      (computador == 2 && usuario == 1) ||
      (computador == 3 && usuario == 2)
    ) {
      console.log("   RESULTADO: Computador VENCEU!");
      pontosComputador++;
    } else {
      console.log("   RESULTADO: Empate! Ninguem venceu!");
    }
    console.log();
  }

  // verificação de pontuação dos jogadores e o grande vencedor das rodadas
  somaUsuario = somaUsuario + pontosUsuario;
  somaComputador = somaComputador + pontosComputador;
  // exibindo o resultado das vitórias na tela, com as condicionais que verificará o campeão final
  console.log("RESULTADO DE VITÓRIAS NA(S) RODADA(S)");
  console.log(somaUsuario, `Vitória(s) para ${nomeUsuario}!`);
  console.log(somaComputador, "Vitória(s) para o Computador");
  console.log();
  if (somaUsuario > somaComputador) {
    console.log(`# # #  ${nomeUsuario} É O CAMPEÃO DO JOGO !!! # # #`);
  } else if (somaComputador > somaUsuario) {
    console.log("# # #  O COMPUTADOR É O CAMPEÃO DO JOGO !!!  # # #");
  } else {
    console.log("# # #  DEU EMPATE! NINGUÉM SAIU VENCEDOR NO JOGO !!!  # # #");
  }
  console.log();

  // nesta parte, ao finalizar as rodadas, pergunta-se se usuario quer jogar outra vez dando a opção de voltar a escolha de novas rodasdas
  verifica = prompt("Deseja jogar novamente? [S/N] ").toLowerCase();
  while (verifica !== "s" && verifica !== "n") {
    console.log("Resposta inválida!");
    verifica = prompt("Deseja jogar novamente? [S/N] ").toLowerCase();
  }
  console.log();
} while (verifica == "s");
{
  console.log("FIM DO JOGO!");
}
console.log();
