const validateAge = (req, res, next) => {
  const {idade} = req.body;

  if (idade === undefined || idade === '') {
    return res.status(400).json({message: 'O campo "idade" é obrigatório'});
  }

  if (isNaN(parseInt(idade)) || parseInt(idade) < 0 || parseInt(idade) > 130) {
    return res.status(400).json({message: 'O campo "idade" deve ser um inteiro positivo e dentro de um intervalo válido'});
  }

  next();
};

module.exports = {validateAge};

