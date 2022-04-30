const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

const controllerLanches = require('../controllers/lanches.controller');
const { 
    validId , 
    validObjectBody,
} = require('../middlewares/lanche.middleware');

//rotas de listagem
router.get('/lista-lanches', controllerLanches.findLanchesController);
router.get('/lista-lanches/:id', validId, controllerLanches.findLancheByIdController);

//rotas para criar, atualizar e deletar um iD
router.post('/create', validObjectBody, controllerLanches.createLancheController);
router.put('/update/:id', validId, validObjectBody, controllerLanches.updateLancheController);
router.delete('/delete/:id', validId, controllerLanches.deleteLancheController);

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = router;


