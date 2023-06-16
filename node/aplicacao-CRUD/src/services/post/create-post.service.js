const { sqlDatabaseQuery } = require("../../utils/database/sqlDatabaseQuery");
const {
  badRequestException,
} = require("../../utils/errors/badrequest-exception");

const { randomUUID } = require("crypto");
const { dataValidation } = require("../../utils/validation/data-validation");
const { postRules } = require("../../utils/validation/rules/post-rules");

class CreatePost {
  async execute(body, next) {
    // Validação de dados do post e tratando os possíveis erros
    const { isDataValid, validationErrors } = dataValidation(body, postRules());
    if (!isDataValid) return badRequestException(validationErrors, next);

    // SQL para inserir os dados no banco de dados
    const sql = `
       INSERT INTO posts (id, title, content, user_id)
       VALUES ('${randomUUID()}','${body.title}', '${
      body.content
    }', 'eb6e12d4-593b-478a-8a37-a0e9a39e6b23')
   `;

    // Passa o SQL como parâmetro para a função de consulta de banco de dados
    await sqlDatabaseQuery(sql);
  }
}

module.exports = {
  CreatePost,
};
