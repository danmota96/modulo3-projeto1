

const router = require('express').Router();
const controllerLanches = require('../controllers/lanches.controller');


router.get('/lista-lanches', controllerLanches.findLanchesController);
router.get('/lista-lanches/:id', controllerLanches.findLancheByIdController);

module.exports = router;
