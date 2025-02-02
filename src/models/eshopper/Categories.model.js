const { EshopperConnection } = require("../../utils/databaseConection");

module.exports = class Categories {
  constructor(category) {
    this.category = category;
  }

  static async getAll() {
    return new Promise((resolve, reject) => {
      EshopperConnection()
        .all("SELECT * FROM `Categories`", [], (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        })
        .close();
    });
  }

  async add() {
    return new Promise((resolve, reject) => {
      EshopperConnection()
        .run(
          "INSERT INTO `Categories` (`name`) VALUES (?)",
          [this.category.name],
          function (err) {
            if (err) reject(err);
            resolve({ success: true, id: this.lastID });
          }
        )
        .close();
    });
  }

  async edit() {
    return new Promise((resolve, reject) => {
      EshopperConnection()
        .run(
          "UPDATE `Categories` SET `name_ar` = ? WHERE `id` = ?",
          [this.category.name, this.category.id],
          function (err) {
            if (err) reject(err);
            resolve({ success: true, changes: this.changes });
          }
        )
        .close();
    });
  }
};
