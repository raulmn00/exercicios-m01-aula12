const prompt = require("prompt-sync")();
console.clear();

function calculaArea(largura, comprimento) {
  let area = largura * comprimento;
  return area;
}

let larg = +prompt('Digite uma largura: ');
let comp = +prompt('Digite um comprimento: ');

let area = calculaArea(larg, comp);

console.log(`A área é igual a: ${area} m²`);