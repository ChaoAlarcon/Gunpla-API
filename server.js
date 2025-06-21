const express = require('express');
const app = express();
const port = 3000;

console.log(">>> Iniciando servidor...");

const gunplaRouter = require('./gunplaController');
app.use('/gunpla', gunplaRouter);

app.listen(port, () => {
  console.log(`>>> Servidor escuchando en http://localhost:${port}/gunpla`);
});
