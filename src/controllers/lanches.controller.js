const lanchesService = require('../services/lanches.service');

const findLanchesController = (req, res) => {
  const allLanches = lanchesService.findLanchesService();
  res.send(allLanches);
};

const findLancheByIdController = (req, res) => {
  const idParam = Number(req.params.id);
  const chosenLanche = lanchesService.findLancheByIdService(idParam);
  res.send(chosenLanche);
};

const createLancheController = (req, res) => {
  const lanche = req.body;
  const newLanche = lanchesService.createLancheService(lanche);
  res.send(newLanche);
};

const updateLancheController = (req, res) => {
  const idParam = +req.params.id;
  const lancheEdit = req.body;
  const updatedLanche = lanchesService.updateLancheService(idParam, lancheEdit);
  res.send(updatedLanche);
};

const deleteLancheController = (req, res) => {
  const idParam = req.params.id;
  lanchesService.deleteLancheService(idParam);
  res.send({ message: 'Lanche deletado com sucesso!' });
};

module.exports = {
  findLanchesController,
  findLancheByIdController,
  createLancheController,
  updateLancheController,
  deleteLancheController,
};
