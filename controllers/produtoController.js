const produtoService = require('../services/produtoService');

const findAll = async (req, res) => {
  try {
    const produtos = await produtoService.findAll();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({message: 'Erro ao buscar produtos'});
  }
};

const save = async (req, res) => {
  try {
    const result = await produtoService.save(req.body);
    if (result) {
      res.status(201).json({message: 'Produto salvo com sucesso'});
    } else {
      res.status(400).json({message: 'Erro ao salvar produto'});
    }
  } catch (error) {
    res.status(500).json({message: 'Erro interno ao salvar produto'});
  }
};

const update = async (req, res) => {
  try {
    const novoBody = {...req.body, id: Number(req.params.id)};
    const result = await produtoService.update(novoBody);
    if (result) {
      res.status(200).json({message: 'Produto atualizado com sucesso'});
    } else {
      res.status(400).json({message: 'Erro ao atualizar produto'});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Erro interno ao atualizar produto'});
  }
};

const remove = async (req, res) => {
  try {
    const result = await produtoService.remove(req.params.id);
    if (result) {
      res.status(200).json({message: 'Produto removido com sucesso'});
    } else {
      res.status(400).json({message: 'Erro ao remover produto'});
    }
  } catch (error) {
    res.status(500).json({message: 'Erro interno ao remover produto'});
  }
};

module.exports = {
  findAll,
  save,
  update,
  remove,
};
