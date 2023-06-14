const { sqlDatabaseQuery } = require("../../utils/database/sqlDatabaseQuery");
const { randomUUID } = require("crypto");

class CreateUser {
  async execute(body) {
    // SQL para inserir os dados no banco de dados
    const sql = `
       INSERT INTO users (id, name, email)
       VALUES ('${randomUUID()}','${body.name}', '${body.email}')
   `;

    // Passa o SQL como parâmetro para a função de consulta de banco de dados
    await sqlDatabaseQuery(sql);
  }
}

module.exports = {
  CreateUser,
};
