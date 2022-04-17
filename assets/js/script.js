const baseUrl = "http://localhost:3000/lanches";

//Localizar todos os lanches do backend
async function findAllLanches() {
  const response = await fetch(`${baseUrl}/lista-lanches`);
  const lanches = await response.json();

  lanches.forEach((lanches) => {
  document.getElementById('LancheList').insertAdjacentHTML(
    'beforeend',
    `
    <div class="ListaLancheItem">
      <div class="ListaLancheItem__local">${lanche.local}</div>
      <div class="ListaLancheItem__localizacao">${lanche.localizacao}S</div>
      <img src=${lanche.foto} alt=${lanche.nome} class="ListaLancheItem__foto" width="25%">
      <div class="ListaLancheItem__nome">${lanche.nome}/div>
      <div class="ListaLancheItem__descricao">${lanche.descricao}</div>
      <div class="ListaLancheItem__preco">${lanche.preco.toFixed(2)}</div>
    </div>

    `,
  );
  });
};

findAllLanches();
