const validateProduto = (req, res, next) => {
  const {nome, preco, descricao} = req.body;

  if (!nome || nome.trim() === '') {
    return res.status(400).json({message: 'O campo "nome" é obrigatório e não pode ser vazio'});
  }

  if (preco === undefined || preco <= 0) {
    return res.status(400).json({message: 'O campo "preco" é obrigatório e deve ser maior que zero'});
  }

  if (descricao === undefined || descricao < 0) {
    return res.status(400).json({message: 'O campo "descricao" é obrigatório e não pode ser negativo'});
  }

  next();
};

module.exports = {validateProduto};
