const Lanche = require('../models/Lanche'); 

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
  return newLanche;
};

const updateLancheService = async (id, lanche) => {
  const lancheEdited = await Lanche.findByIdAndUpdate(id, lanche);
  return lancheEdited;
};


const deleteLancheService = async (id) => {
  return await Lanche.findByIdAndDelete(id);
};

module.exports = {
    findLanchesService,
    findLancheByIdService,
    createLancheService,
    updateLancheService,
    deleteLancheService,
};


