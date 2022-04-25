const  mongoose = require('mongoose');

const validId = (req, res, next) => {
    const idParam = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(idParam)) {
        return res.status(400).send({message: 'Id inválido'});
    }
    next();
};

//método para validar o json
const validObjectBody = (req, res, next) => {
    const lancheEdit = req.body;
    
    if (
        !lancheEdit ||
        !lancheEdit.local ||
        !lancheEdit.localizacao ||
        !lancheEdit.nome ||
        !lancheEdit.descricao ||
        !lancheEdit.preco ||
        !lancheEdit.foto
        ) {
            return res.status(400).send({ message: 'Envie todos os campos da paleta' });
        };

    next();
  };

module.exports = {
    validId,
    validObjectBody,
};
