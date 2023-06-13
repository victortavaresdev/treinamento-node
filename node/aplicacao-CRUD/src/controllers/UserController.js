const database = require("../config/database");
const { randomUUID } = require("crypto");

class UserController {
  async create(request, response) {
    // Corpo da requisição (Dados do Front-end)
    const body = request.body;

    // SQL para inserir os dados no banco de dados
    const sql = `
      INSERT INTO users (id, name, email)
      VALUES ('${randomUUID()}','${body.name}', '${body.email}')
  `;

    // Estabelece conexão com o banco de dados
    const client = await database.connect();

    // Faz a consulta no banco de dados através do método query()
    await client.query(sql);
    await client.end();

    // Resposta do servidor a requisição do Front-end
    response.status(201).json();
  }

  async read(request, response) {
    // ID do registro do usuário
    const { id } = request.params;

    // SQL para buscar os dados de um usuário no banco de dados
    const sql = `
        SELECT * FROM users WHERE id = '${id}'
    `;

    // Estabelece conexão com o banco de dados
    const client = await database.connect();

    // Faz a consulta no banco de dados através do método query()
    const queryResult = await client.query(sql);
    await client.end();

    // Resposta do servidor a requisição do Front-end
    response.status(200).json({ data: queryResult.rows[0] });
  }

  async update(request, response) {
    // ID do registro do usuário
    const { id } = request.params;
    // Corpo da requisição (Dados do Front-end)
    const body = request.body;

    // SQL para atualizar os dados de um usuário no banco de dados
    const sql = `
        UPDATE users 
        SET name = '${body.name}', email = '${body.email}'
        WHERE id = '${id}'
    `;

    // Estabelece conexão com o banco de dados
    const client = await database.connect();

    // Faz a consulta no banco de dados através do método query()
    await client.query(sql);
    await client.end();

    // Resposta do servidor a requisição do Front-end
    response.status(200).json();
  }

  async delete(request, response) {
    // ID do registro do usuário
    const { id } = request.params;

    // SQL para deletar os dados de um usuário no banco de dados
    const sql = `
        DELETE FROM users WHERE id = '${id}'
    `;

    // Estabelece conexão com o banco de dados
    const client = await database.connect();

    // Faz a consulta no banco de dados através do método query()
    await client.query(sql);
    await client.end();

    // Resposta do servidor a requisição do Front-end
    response.status(204).json();
  }
}

module.exports = {
  UserController,
};
