const mongoose = require('mongoose');
 const remoteUrl = 
"mongodb+srv://admin:admin@projeto-lanches.xmilm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const localUrl = "mongodb://localhost:27017/lanches-db";

/* http://localhost:3333/lanches/api-docs/ LINK SWAGGER */
/* https://apilanchesblue.onrender.com/ */
 


function connectToDatabase() {
  mongoose
    .connect('mongodb+srv://admin:admin@projeto-lanches.xmilm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MONGO DB CONECTADO');
    })
    .catch((err) => {
      return console.log(`Erro na conexao com o banco: ${err}`);
    });
}

module.exports = connectToDatabase; 
