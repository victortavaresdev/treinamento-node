const { sqlDatabaseQuery } = require("../../utils/database/sqlDatabaseQuery");

class UpdatePost {
  async execute(id, body) {
    // SQL para atualizar os dados de um usuário no banco de dados
    const sql = `
        UPDATE posts 
        SET title = '${body.title}', content = '${body.content}'
        WHERE id = '${id}'
    `;

    // Passa o SQL como parâmetro para a função de consulta de banco de dados
    await sqlDatabaseQuery(sql);
  }
}

module.exports = {
  UpdatePost,
};
