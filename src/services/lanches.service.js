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
        'Hambúrguer de 150g, cheddar inglês, refogado de bacon, cogumelo e cebola, cebola crispy e fonduta de emmenthal',
      foto: 'assets/img/PIRLO.PNG',
      preco: 30.0,
    },
    {
      id: 4,
      local: 'Prefiro Alcides',
      localizacao: 'Vila Velha - ES',
      nome: 'GLUTEN EXPLOSION',
      descricao:
        'ESCROTO (burger na brasa, bacon, maionese de chimichurri e bacon) + EMPANADA ',
      foto: 'assets/img/ALCIDES.PNG',
      preco: 36.90,
    },
    {
      id: 5,
      local: 'La Dolina',
      localizacao: 'Vitória - ES',
      nome: 'La Negra Bernasi',
      descricao:
        'Burger em pão australiano, blend caseiro 180g, queijo prato, bacon, lâminas de alho frito, ketchup, maionese e alface.',
      foto: 'assets/img/LANEGRABERNASI.PNG',
      preco: 25.0,
    },
    {
      id: 6,
      local: 'Jussara´s Forno',
      localizacao: 'Vila Velha - ES',
      nome: 'Burger de TutanO',
      descricao:
        'Hambúrguer 180 gr na Parrilha, Queijo Mozzarella Artelatte, Cogumelos Paris empanados e fritos, Tutano assado e molho agridoce',
      foto: 'assets/img/TUTANO.PNG',
      preco: 35.0,
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


