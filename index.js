const express = require('express');
const port = 3000;
const app = express();

app.use(express.json());
const cors = require('cors');

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
      foto: 'assets/images/chocolate-belga.png',
      preco: 7.0,
    },
];

//ROTA PARA LER OBJETO LANCHES
app.get('/lanches/lista-lanches', (req, res) => {
    res.send(lanches);
});

//ROTA PARA LER O LANCHE SEPARADAMENTE
app.get('/lanches/lista-lanches/:id', (req,res) =>{
    const idParam = req.params.id;
    const chosenLanche = lanches.find((lanche) => lanche.id == idParam);
    res.send(chosenLanche);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
