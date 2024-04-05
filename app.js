const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();

// Middleware para parsear o corpo das requisições em JSON
app.use(bodyParser.json());

// Importa as rotas
const clientesRouter = require('./routes/clientes');
const produtosRouter = require('./routes/produtos');

// Define as rotas
app.use('/produtos', produtosRouter);
app.use('/clientes', clientesRouter);

// Define uma rota padrão para quando a rota especificada não é encontrada
app.use((req, res) => {
  res.status(404).send('Página não encontrada');
});

// Inicia o servidor na porta especificada nas variáveis de ambiente ou na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
