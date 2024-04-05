const clienteService = require('../services/clienteService');

const findAll = async (req, res) => {
  try {
    const clientes = await clienteService.findAll();
    res.status(200).json(clientes);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Erro ao buscar clientes'});
  }
};

const save = async (req, res) => {
  try {
    const result = await clienteService.save(req.body);
    if (result) {
      res.status(201).json({message: 'Cliente salvo com sucesso'});
    } else {
      res.status(400).json({message: 'Erro ao salvar cliente'});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Erro interno ao salvar cliente'});
  }
};

const update = async (req, res) => {
  try {
    const novoBody = {...req.body, id: Number(req.params.id)};
    const result = await clienteService.update(novoBody);
    if (result) {
      res.status(200).json({message: 'Cliente atualizado com sucesso'});
    } else {
      res.status(400).json({message: 'Erro ao atualizar cliente'});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Erro interno ao atualizar cliente'});
  }
};

const remove = async (req, res) => {
  try {
    const result = await clienteService.remove(req.params.id);
    if (result) {
      res.status(200).json({message: 'Cliente removido com sucesso'});
    } else {
      res.status(400).json({message: 'Erro ao remover cliente'});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Erro interno ao remover cliente'});
  }
};

module.exports = {
  findAll,
  save,
  update,
  remove,
};
