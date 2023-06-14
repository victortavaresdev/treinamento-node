const { sqlDatabaseQuery } = require("../../utils/database/sqlDatabaseQuery");

class UpdateUser {
  async execute(id, body) {
    // SQL para atualizar os dados de um usuário no banco de dados
    const sql = `
        UPDATE users 
        SET name = '${body.name}', email = '${body.email}'
        WHERE id = '${id}'
    `;

    // Passa o SQL como parâmetro para a função de consulta de banco de dados
    await sqlDatabaseQuery(sql);
  }
}

module.exports = {
  UpdateUser,
};
