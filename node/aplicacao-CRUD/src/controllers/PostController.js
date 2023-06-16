const { CreatePost } = require("../services/post/create-post.service");
const { DeletePost } = require("../services/post/delete-post.service");
const { GetPost } = require("../services/post/get-post.service");
const { UpdatePost } = require("../services/post/update-post.service");

class PostController {
  async create(request, response, next) {
    // Corpo da requisição (Dados do Front-end)
    const body = request.body;

    // Passa o BODY para Service
    const createPost = new CreatePost();
    await createPost.execute(body, next);

    // Resposta do servidor a requisição do Front-end
    response.status(201).json();
  }

  async read(request, response) {
    // ID do registro do usuário
    const { id } = request.params;

    // Passa o ID para o Service
    const getPost = new GetPost();
    const { queryResult } = await getPost.execute(id);

    // Resposta do servidor a requisição do Front-end
    response.status(200).json({ data: queryResult.rows[0] });
  }

  async update(request, response) {
    // ID de registro do usuário
    const { id } = request.params;
    // Corpo da requisição (Dados do Front-end)
    const body = request.body;

    // Passa o ID e o BODY para o Service
    const updatePost = new UpdatePost();
    await updatePost.execute(id, body);

    // Resposta do servidor a requisição do Front-end
    response.status(200).json();
  }

  async delete(request, response) {
    // ID de registro do usuário
    const { id } = request.params;

    // Passa o ID para o Service
    const deletePost = new DeletePost();
    await deletePost.execute(id);

    // Resposta do servidor a requisição do Front-end
    response.status(204).json();
  }
}

module.exports = {
  PostController,
};
