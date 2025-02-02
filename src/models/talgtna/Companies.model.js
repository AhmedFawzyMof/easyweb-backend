const { TalgatnaConnection } = require("../../utils/databaseConection");

class Companies {
  constructor({ name, image }) {
    this.name = name;
    this.image = image;
  }

  static async getAll() {
    return new Promise((resolve, reject) => {
      TalgatnaConnection()
        .all("SELECT * FROM `Companies`", (err, rows) => {
          if (err) reject(err);
          else resolve(rows);
        })
        .close();
    });
  }

  async add() {
    return new Promise((resolve, reject) => {
      TalgatnaConnection()
        .run(
          "INSERT INTO `Companies` (`name`, `image`) VALUES (?, ?)",
          [this.name, this.image],
          (err) => {
            if (err) reject(err);
            else resolve({ success: true, id: this.lastID });
          }
        )
        .close();
    });
  }

  async edit() {
    return new Promise((resolve, reject) => {
      TalgatnaConnection()
        .run(
          "UPDATE `Companies` SET `name` = ?, `image` = ? WHERE `id` = ?",
          [this.name, this.image, this.id],
          (err) => {
            if (err) reject(err);
            else resolve({ success: true, changes: this.changes });
          }
        )
        .close();
    });
  }

  async byName() {
    return new Promise((resolve, reject) => {
      TalgatnaConnection()
        .get(
          "SELECT * FROM `Companies` WHERE `name` = ?",
          [this.name],
          (err, row) => {
            if (err) reject(err);
            else resolve(row);
          }
        )
        .close();
    });
  }
}

module.exports = Companies;
