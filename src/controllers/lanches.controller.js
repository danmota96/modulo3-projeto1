const lanchesService = require('../services/lanches.service');


const findLanchesController = (req,res) => {
    const allLanches = lanchesService.findLanchesService();
    res.send(allLanches);
};
 

const findLancheByIdController = (req,res) => {
    const idParam = Number(req.params.id);
    const chosenLanche = lanchesService.findLancheByIdService(idParam);
    res.send(chosenLanche);
};

module.exports = {
    findLanchesController,
    findLancheByIdController,
};
