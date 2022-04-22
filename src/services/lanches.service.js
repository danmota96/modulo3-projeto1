const Lanche = require('../models/Lanche');

//novo modelo de findAll (via DB)
const findLanchesService = async () => {
    const lanches = await Lanche.find();
    return lanches;
};

const findLancheByIdService = async (id) => {
  const lanche = await Lanche.findById(id);
  return lanche;
};

const createLancheService = async (lanche) => {
  const newLanche = await Lanche.create(lanche);
  return newLanche ;
};

const updateLancheService =  async (id, lanche) => {
  const lancheEdited = await Lanche.findByIdAndUpdate (id,lanche);
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


