const express = require("express");
const { UserController } = require("../controllers/UserController");

const router = express.Router();

const userController = new UserController();

// C R U D

// Rotas da API
router.post("/users/create", userController.create);
router.get("/users/:id", userController.read);
router.put("/users/:id/update", userController.update);
router.delete("/users/:id/delete", userController.delete);

module.exports = {
  router,
};
