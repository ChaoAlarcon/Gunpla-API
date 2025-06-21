const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('gunpla.db', (err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.message);
  } else {
    console.log('Connected to the gunpla database.');
  }
});

// Crear tabla si no existe
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS gunpla (
      id INTEGER PRIMARY KEY,
      name TEXT,
      series TEXT,
      height REAL,
      manufacturer TEXT,
      price TEXT,
      release TEXT
    )
  `);
});

module.exports = db;
