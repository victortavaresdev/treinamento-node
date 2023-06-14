const { CreateUser } = require("../services/user/create-user.service");
const { DeleteUser } = require("../services/user/delete-user.service");
const { GetUser } = require("../services/user/get-user.service");
const { UpdateUser } = require("../services/user/update-user.service");

class UserController {
  async create(request, response) {
    // Corpo da requisição (Dados do Front-end)
    const body = request.body;

    // Passa o BODY para Service
    const createUser = new CreateUser();
    await createUser.execute(body);

    // Resposta do servidor a requisição do Front-end
    response.status(201).json();
  }

  async read(request, response) {
    // ID do registro do usuário
    const { id } = request.params;

    // Passa o ID para o Service
    const getUser = new GetUser();
    const { queryResult } = await getUser.execute(id);

    // Resposta do servidor a requisição do Front-end
    response.status(200).json({ data: queryResult.rows[0] });
  }

  async update(request, response) {
    // ID de registro do usuário
    const { id } = request.params;
    // Corpo da requisição (Dados do Front-end)
    const body = request.body;

    // Passa o ID e o BODY para o Service
    const updateUser = new UpdateUser();
    await updateUser.execute(id, body);

    // Resposta do servidor a requisição do Front-end
    response.status(200).json();
  }

  async delete(request, response) {
    // ID de registro do usuário
    const { id } = request.params;

    // Passa o ID para o Service
    const deleteUser = new DeleteUser();
    await deleteUser.execute(id);

    // Resposta do servidor a requisição do Front-end
    response.status(204).json();
  }
}

module.exports = {
  UserController,
};
