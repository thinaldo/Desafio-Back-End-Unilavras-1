const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const {validateAge} = require('../middlewares/idadeMiddleware');
const {validateName} = require('../middlewares/nomeMiddleware');
const {validateFamilyName} = require('../middlewares/sobrenomeMiddleware');

// Rota para buscar todos os clientes
router.get('/', clienteController.findAll);

// Rota para adicionar um novo cliente (com validação de nome, sobrenome e idade)
router.post('/', validateName, validateFamilyName, validateAge, clienteController.save);

// Rota para atualizar um cliente existente
router.put('/:id', clienteController.update);

// Rota para remover um cliente pelo ID
router.delete('/:id', clienteController.remove);

module.exports = router;
