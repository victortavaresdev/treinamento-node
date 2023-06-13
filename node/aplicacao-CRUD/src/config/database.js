const postgres = require("pg");

// Carrega as variáveis de ambiente
const dotenv = require("dotenv");
dotenv.config();

// Configuração do banco de dados PostgreSQL
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;

const database = new postgres.Pool({
  user: dbUsername,
  password: dbPassword,
  host: dbHost,
  port: dbPort,
  database: dbName,
});

module.exports = database;
