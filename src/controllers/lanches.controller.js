const mongoose = require('mongoose'); 
const lanchesService = require('../services/lanches.service');


const findLanchesController = async (req, res) => {
  const allLanches = await lanchesService.findLanchesService();
  res.send(allLanches);
};

const findLancheByIdController = async (req, res) => {
  const idParam = req.params.id;
  //validar se o idParam pode ser válido para o mongo

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(400).send({ message: 'ID inválido!' });
  }
  /* findLancheByIdService utiliza-se ASYNC */
  const chosenLanche = await lanchesService.findLancheByIdService(idParam);

  if (!chosenLanche) {
    return res.status(404).send({ message: 'Lanche não encontrada!' });
  }
  res.send(chosenLanche);
}; 


const createLancheController = async (req, res) => {
  const lanche = req.body;
  if (
    !lanche ||
    !lanche.local ||
    !lanche.localizacao ||
    !lanche.nome ||
    !lanche.descricao ||
    !lanche.preco ||
    !lanche.foto
  ) {
    //STATUS (NUM) indica qual tipo de erro irá aparecer.
    return res.status(400).send({
      mensagem:
        'Você não preencheu todos os dados para adicionar uma nova paleta ao cardápio!',
    });
  }
  const newLanche = await lanchesService.createLancheService(lanche);
  res.send(newLanche);
};



const updateLancheController = async (req, res) => {
  const idParam = req.params.id;
  const lancheEdit = req.body;
  //tratamento de erro
  
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(400).send({message: 'ID inválido'});
  }

  /* VALIDAÇÃO PARA VERIFICAR SE O ID ESTÁ CADASTRADO */
  const chosenLanche = await lanchesService.findLancheByIdService(idParam);

  if (!chosenLanche) {
    return res.status(404).send({ message: "Lanche não cadastrado!" })
  }

  const updateLanche = await lanchesService.updateLancheService(idParam, lancheEdit);

  if (
    !lancheEdit ||
    !lancheEdit.local ||
    !lancheEdit.localizacao ||
    !lancheEdit.nome ||
    !lancheEdit.descricao ||
    !lancheEdit.preco ||
    !lancheEdit.foto
    ) {
    return res.status(400).send({ message: "Você não preencheu todos os dados para editar o lanche!" });
  }

  res.send(updateLanche);
};

const deleteLancheController = async (req, res) => {
  const idParam = req.params.id;
   //tratamento de erro

  if(!mongoose.Types.ObjectId.isValid){
    return res.status(400).send({message: 'ID inválido'});
  }

  const chosenLanche = lanchesService.deleteLancheService(idParam);

  if (!chosenLanche) {
    return res.status(404).send({ message: 'Lanche não encontrado!' });
  }

  await lanchesService.deleteLancheService(idParam);
  
  res.send({ message: 'Lanche deletado com sucesso!' });
};

module.exports = {
  findLanchesController,
  findLancheByIdController,
  createLancheController,
  updateLancheController,
  deleteLancheController,
};
