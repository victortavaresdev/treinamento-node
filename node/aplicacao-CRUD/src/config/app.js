const express = require("express");
const { router } = require("../routes");
const { errorHandler } = require("../utils/errors/error-handler");

// Carrega as variáveis de ambiente
const dotenv = require("dotenv");
dotenv.config();

// Cria uma aplicação express.js
const app = express();

// Define que o formato de dados aceito pela nossa API será em JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware que expoe as rotas para serem consumidas pelo Front-end
app.use(router);

// Middleware para interceptar os erros disparados pela aplicação
app.use(errorHandler);

module.exports = {
  app,
};
