const express = require('express');
const port = 3000;
const app = express();

app.use(express.json());

const lanches = [
    {
      id: 1,
      local: '101 Brasa Burger',
      localizacao: 'Vila Velha - ES',
      lanche: 'GTO',
      descricao:
        '2 Carnes, queijo mussarela e cheddar, costela desfiada, bacon e molho 101!',
      foto: 'assets/img/101.PNG',
      preco: 35.0,
    },
    {
      id: 2,
      local: 'Korujão Lanches',
      localizacao: 'Vila Velha - ES',
      lanche: 'Triplo Cheddar Bacon',
      descricao:
        '3 carnes, queijo mussarela, cheddar e catupiry, alface, tomate, ovo de codorna, azeitona, milho, batata palha',
      foto: 'assets/img/korujao.PNG',
      preco: 19.0,
    },
    {
      id: 3,
      local: 'Gol Burger',
      localizacao: 'Vila Velha - ES',
      lanche: 'PIRLO',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: 'assets/images/chocolate-belga.png',
      preco: 7.0,
    },
  ];

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});