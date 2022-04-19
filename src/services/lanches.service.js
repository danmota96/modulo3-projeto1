const lanches = [
    {
      id: 1,
      local: '101 Brasa Burger',
      localizacao: 'Vila Velha - ES',
      nome: 'GTO',
      descricao:
        '2 Carnes, queijo mussarela e cheddar, costela desfiada, bacon e molho 101!',
      foto: 'assets/img/101.PNG',
      preco: 35.0,
    },
    {
      id: 2,
      local: 'Korujão Lanches',
      localizacao: 'Vila Velha - ES',
      nome: 'Triplo Cheddar Bacon',
      descricao:
        '3 carnes, queijo mussarela, cheddar e catupiry, alface, tomate, ovo de codorna, azeitona, milho, batata palha',
      foto: 'assets/img/korujao.PNG',
      preco: 19.0,
    },
    {
      id: 3,
      local: 'Gol Burger',
      localizacao: 'Vila Velha - ES',
      nome: 'PIRLO',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: 'assets/img/PIRLO.PNG',
      preco: 7.0,
    },
];


const findLanchesService = () => {
    return lanches;
};

const findLancheByIdService = (parametroId) => {
    return lanches.find((lanche) => lanche.id === parametroId);
};

const createLancheService = (newLanche) => {
  const newId = lanches.length + 1;
  newLanche.id = newId;
  lanches.push(newLanche);
  return newLanche;
};

const updateLancheService = (id, lancheEdited) => {
  lancheEdited['id'] = id;
  const lancheIndex = lanches.findIndex((lanche) => lanche.id == id);
  lanches[lancheIndex] = lancheEdited;
  return lancheEdited;
};

const deleteLancheService = (id) => {
  const lancheIndex = lanches.findIndex((lanche) => lanche.id == id);
  return lanches.splice(lancheIndex, 1);
};

module.exports = {
    findLanchesService,
    findLancheByIdService,
    createLancheService,
    updateLancheService,
    deleteLancheService,
};


