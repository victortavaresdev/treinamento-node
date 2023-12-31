const { sqlDatabaseQuery } = require("../../utils/database/sqlDatabaseQuery");
const {
  badRequestException,
} = require("../../utils/errors/badrequest-exception");
const { dataValidation } = require("../../utils/validation/data-validation");
const { userRules } = require("../../utils/validation/rules/user-rules");
const { randomUUID } = require("crypto");

class CreateUser {
  async execute(body, next) {
    // Validação de dados do usuário e tratando os possíveis erros
    const { isDataValid, validationErrors } = dataValidation(body, userRules());
    if (!isDataValid) return badRequestException(validationErrors, next);

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
