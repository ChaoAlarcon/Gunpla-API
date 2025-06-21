const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

// Habilitar CORS
app.use(cors());

// Conexión a la base de datos SQLite (en la misma carpeta)
const dbPath = path.resolve(__dirname, 'gunpla.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.message);
  } else {
    console.log('Connected to the gunpla database.');
  }
});

// Ruta para obtener todos los gunplas
app.get('/gunpla', (req, res) => {
  const query = 'SELECT name, series, height, manufacturer, price, release FROM gunpla';

  db.all(query, [], (err, rows) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err.message);
      res.status(500).json({ error: 'Error al obtener los datos' });
    } else {
      res.json({
        results: rows.length,
        data: rows
      });
    }
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`>>> Servidor escuchando en http://localhost:${PORT}/gunpla`);
});
