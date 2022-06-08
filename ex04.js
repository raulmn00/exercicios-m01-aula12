function atravessarRua(x, y, z) {
  let posicaoInicial = x;
  let posicaoFinal = y;
  let passosPorVez = z;

  let contadoraPassos = 0;

  for (let i = x; i <= y; i += passosPorVez) {
    contadoraPassos++;
  }
  console.log(
    `Foi necessário ${contadoraPassos} passos para nosso Master Bluemer sair de ${posicaoInicial} e chegar até ${posicaoFinal}`
  );
}

atravessarRua(0, 20, 2);
