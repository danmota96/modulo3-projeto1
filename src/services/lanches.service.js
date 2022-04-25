const Lanche = require('../models/Lanche'); 

const findLanchesService = async () => {
    const lanches = await Lanche.find();
    return lanches;
}; 

const findLancheByIdService = (idParam) => {
  return lanches.find((lanche) => lanche.id === idParam);
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


