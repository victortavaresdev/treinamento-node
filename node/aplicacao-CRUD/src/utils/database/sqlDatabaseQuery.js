const database = require("../../config/database");

const sqlDatabaseQuery = async (sql) => {
  // Estabelece conexão com o banco de dados
  const client = await database.connect();

  // Faz a consulta no banco de dados através do método query()
  const queryResult = await client.query(sql);
  await client.end();

  return {
    queryResult,
  };
};

module.exports = {
  sqlDatabaseQuery,
};
