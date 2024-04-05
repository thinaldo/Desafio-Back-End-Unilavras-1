const connection = require('../configs/dbConfiguration');

const findAll = async () => {
  const [clientes] = await connection.execute('SELECT * FROM clientes');
  return clientes;
};

const save = async (cliente) => {
  const {nome, sobrenome, email, idade} = cliente;
  const query = 'INSERT INTO clientes (nome, sobrenome, email, idade) VALUES (?, ?, ?, ?)';
  const [result] = await connection.execute(query, [nome, sobrenome, email, idade]);
  return result.affectedRows === 1;
};

const update = async (cliente) => {
  const {id, nome, sobrenome, email, idade} = cliente;
  const query = 'UPDATE clientes SET nome = ?, sobrenome = ?, email = ?, idade = ? WHERE id = ?';
  const [result] = await connection.execute(query, [nome, sobrenome, email, idade, id]);
  return result.affectedRows === 1;
};

const remove = async (id) => {
  const query = 'DELETE FROM clientes WHERE id = ?';
  const [result] = await connection.execute(query, [id]);
  return result.affectedRows === 1;
};

module.exports = {
  findAll,
  save,
  update,
  remove,
};
