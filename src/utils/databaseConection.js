const sqlite3 = require("sqlite3").verbose();

function EshopperConnection() {
  const db = new sqlite3.Database(`./src/config/database/eshop.db`);
  return db;
}

function TalgatnaConnection() {
  const db = new sqlite3.Database(`./src/config/database/frozen.db`);
  return db;
}

function ElhayaGroupConnection() {
  const db = new sqlite3.Database(`./src/config/database/alhayatgroup.sqlite3`);
  return db;
}

function BahaaEduConnection() {
  const db = new sqlite3.Database(`./src/config/database/bahaa.db3`);
  return db;
}

function ElManzelConnection() {
  const db = new sqlite3.Database(`./src/config/database/elbaytbaytk.sqlite`);
  return db;
}

module.exports = {
  EshopperConnection,
  TalgatnaConnection,
  ElhayaGroupConnection,
  BahaaEduConnection,
  ElManzelConnection,
};
