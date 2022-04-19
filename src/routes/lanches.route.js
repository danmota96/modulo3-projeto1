

const router = require('express').Router();
const controllerLanches = require('../controllers/lanches.controller');

//rotas de listagem
router.get('/lista-lanches', controllerLanches.findLanchesController);
router.get('/lista-lanches/:id', controllerLanches.findLancheByIdController);

//rotas para criar, atualizar e deletar um iD
router.post('/create', controllerLanches.createLancheController);
router.put('/update/:id', controllerLanches.updateLancheController);
router.delete('/delete/:id', controllerLanches.deleteLancheController);

module.exports = router;
