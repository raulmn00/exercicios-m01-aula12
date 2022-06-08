const prompt = require('prompt-sync')();
console.clear();

let qtdValores = +prompt('Quantos valores você quer adicionar: ');
let valores = [];

for (let i = 0; i < qtdValores; i++) {
    let valor = prompt('Digite um valor:');
    valores.push(valor);
}

let valoresReversos = valores.reverse();

console.log(valoresReversos);