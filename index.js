const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/lanches.route');
const connectToDatabase = require('./src/database/database'); 

const port = 3333;
const app = express();
const route = require('./src/routes/lanches.route');
connectToDatabase(); 

app.use(express.json());
app.use(cors());
app.use('/lanches', route);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
