const prompt = require('prompt-sync')();
console.clear();
function atravessarRua(x, y, z) {

  let contadoraPassos = 0;

  for (let i = x; i <= y; i += z) {
    contadoraPassos++;
  }
  return `Foi necessário ${contadoraPassos} passos para nosso Master Bluemer sair de ${x} e chegar até ${y}`;
}

const posicaoInicial = +prompt("Digite a posição inicial do MB: ");
const posicaoFinal = +prompt("Digite a posição final do MB: ");
const passosPorVez = +prompt("Digite quantos passos por vez ele irá dar: ");

console.log(atravessarRua(posicaoInicial, posicaoFinal, passosPorVez));