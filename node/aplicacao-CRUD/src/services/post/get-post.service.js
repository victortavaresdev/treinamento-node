const { sqlDatabaseQuery } = require("../../utils/database/sqlDatabaseQuery");

class GetPost {
  async execute(id) {
    // SQL para buscar os dados de um usuário no banco de dados
    const sql = `
        SELECT * FROM posts WHERE id = '${id}'
    `;

    // Passa o SQL como parâmetro para a função de consulta de banco de dados
    const { queryResult } = await sqlDatabaseQuery(sql);

    return {
      queryResult,
    };
  }
}

module.exports = {
  GetPost,
};
