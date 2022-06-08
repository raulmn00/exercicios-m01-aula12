const prompt = require("prompt-sync")();
console.clear();

function verificaNumero(numero) {
  if (numero % 3 === 0) {
    return true;
  } else {
    return false;
  }
}

let num = +prompt("Digite um número: ");

if (verificaNumero(num) === true) {
  console.log(`O número ${num} é divisível por 3.`);
} else if (verificaNumero(num) === false) {
  console.log(`O número ${num} não é divisível por 3.`);
}
