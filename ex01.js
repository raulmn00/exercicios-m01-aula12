const prompt = require("prompt-sync")();
console.clear();

function calculadora(num1, num2) {
  let soma = num1 + num2;
  let subtracao = num1 - num2;
  let multiplicacao = num1 * num2;
  let divisao = num1 / num2;
  console.log(`
  O resultado da soma é: ${soma},
  O resultado da subtração é: ${subtracao},
  O resultado da multiplicação é: ${multiplicacao},
  O resultado da divisão é: ${divisao}`);
}

calculadora(10,20);