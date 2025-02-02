const sqlite3 = require("sqlite3").verbose();

function DatabaseConnection() {
  const db = new sqlite3.Database(`./src/config/database/default.db`);
  return db;
}

module.exports = { DatabaseConnection };
