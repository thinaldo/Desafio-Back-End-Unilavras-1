const pool = require('../configs/dbConfiguration');

const findAll = async () => {
  const [produtos] = await pool.execute('SELECT * FROM produtos');
  return produtos;
};

const findById = async (id) => {
  const query = 'SELECT * FROM produtos WHERE id = ?';
  const [produtos] = await pool.execute(query, [id]);
  return produtos;
};

const save = async (produto) => {
  const {nome, preco, descricao} = produto;
  const query = 'INSERT INTO produtos (nome, preco, descricao) VALUES (?, ?, ?)';
  const [result] = await pool.execute(query, [nome, preco, descricao]);
  return result.affectedRows === 1;
};

const update = async (produto) => {
  const {id, nome, preco} = produto;
  console.log(produto);
  const query = 'UPDATE produtos SET nome = ?, preco = ? WHERE id = ?';
  const [result] = await pool.execute(query, [nome, preco, id]);
  return result.affectedRows === 1;
};

const remove = async (id) => {
  const query = 'DELETE FROM produtos WHERE id = ?';
  const [result] = await pool.execute(query, [id]);
  return result.affectedRows === 1;
};

module.exports = {
  findAll,
  save,
  update,
  remove,
  findById,
};
