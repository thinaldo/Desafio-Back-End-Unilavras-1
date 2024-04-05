const validateName = (req, res, next) => {
  const {nome} = req.body;

  if (nome === undefined) {
    return res.status(400).json({message: 'O campo "nome" é obrigatório'});
  }

  if (nome.trim() === '') {
    return res.status(400).json({message: 'O campo "nome" não pode ser vazio'});
  }

  next();
};

module.exports = {validateName};

