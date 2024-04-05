const validateFamilyName = (req, res, next) => {
  const {sobrenome} = req.body;

  if (sobrenome === undefined) {
    return res.status(400).json({message: 'O campo "sobrenome" é obrigatório'});
  }

  if (sobrenome.trim() === '') {
    return res.status(400).json({message: 'O campo "sobrenome" não pode ser vazio'});
  }

  next();
};

module.exports = {validateFamilyName};

