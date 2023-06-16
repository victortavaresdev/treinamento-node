const express = require("express");
const { UserController } = require("../controllers/UserController");
const { PostController } = require("../controllers/PostController");

const router = express.Router();

const userController = new UserController();
const postController = new PostController();

// Rotas da API
router.post("/users/create", userController.create);
router.get("/users/:id", userController.read);
router.put("/users/:id/update", userController.update);
router.delete("/users/:id/delete", userController.delete);

router.post("/posts/create", postController.create);
router.get("/posts/:id", postController.read);
router.put("/posts/:id/update", postController.update);
router.delete("/posts/:id/delete", postController.delete);

module.exports = {
  router,
};
