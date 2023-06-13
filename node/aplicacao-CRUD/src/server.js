const { app } = require("./config/app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Servidor em execução: http://localhost:${PORT}`)
);
