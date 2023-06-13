// Node.js® é um ambiente de execução de JavaScript em nível de back-end e front-end.

// https://nodejs.org/pt-br/
// https://expressjs.com/

// Ferramentos que utilizaremos:

// Node.js: tecnologia para execução de JavaScript em server-side
// npm: ferramenta usada para instalação de pacotes
// express: framework usado para configuração de rotas na execução do servidor web
// nodemon: automatiza a execução do servidor web (sua função é reiniciar o servidor web cada vez que um arquivo é alterado)

const express = require("express");
const fileSystem = require("fs");
const path = require("path");

const app = express();

const PORT = 3000;

// SERVIDOR ESCUTANDO POR CONEXÕES DE CLIENTES
app.listen(PORT, () =>
  console.log(`Servidor em execução: http://localhost:${PORT}`)
);

const caminhoDoDiretorio = path.join(__dirname, "dados", "dados.json");

// VERBOS HTTP
// get, POST, PUT, PATCH, DELETE

// ROTAS DA API
app.get("/api/receber-dados", (request, response) => {
  const dadosDoArquivo = fileSystem.readFileSync(caminhoDoDiretorio, "utf-8");

  response.status(200).send(dadosDoArquivo);
});

app.post("/api/enviar-dados", (request, response) => {
  const dadosDoFrontend = {
    usuario: {
      nome: "julia",
      sobrenome: "alves",
      idade: 25,
    },
  };

  const dados = JSON.stringify(dadosDoFrontend);

  fileSystem.writeFileSync(caminhoDoDiretorio, dados);

  response.status(201).send(dados);
});
