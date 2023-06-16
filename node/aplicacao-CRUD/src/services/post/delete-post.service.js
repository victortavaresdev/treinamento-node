const { sqlDatabaseQuery } = require("../../utils/database/sqlDatabaseQuery");

class DeletePost {
  async execute(id) {
    // SQL para deletar os dados de um usuário no banco de dados
    const sql = `
        DELETE FROM posts WHERE id = '${id}'
    `;

    // Passa o SQL como parâmetro para a função de consulta de banco de dados
    await sqlDatabaseQuery(sql);
  }
}

module.exports = {
  DeletePost,
};
