const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const {validateProduto} = require('../middlewares/produtoMiddleware');

// Rota para buscar todos os produtos
router.get('/', produtoController.findAll);

// Rota para adicionar um novo produto (com validação dos dados de entrada)
router.post('/', validateProduto, produtoController.save);

// Rota para atualizar um produto existente (com validação dos dados de entrada)
router.put('/:id', validateProduto, produtoController.update);

// Rota para remover um produto pelo ID
router.delete('/:id', produtoController.remove);

module.exports = router;
