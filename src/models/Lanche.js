const mongoose = require('mongoose');

const LancheSchema = new mongoose.Schema({
    local: { type: String, required: true },
    localizacao: { type: String, required: true },
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    foto: { type: String, required: true },
    preco: { type: Number, required: true },
  });

//código para criar a collection Lanche no DB
const Lanche = mongoose.model('lanches', LancheSchema);

module.exports = Lanche;
