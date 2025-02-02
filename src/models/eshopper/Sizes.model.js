const { EshopperConnection } = require("../../utils/databaseConection");

module.exports = class Categories {
  constructor(size) {
    this.size = size;
  }

  static async getAll() {
    return new Promise((resolve, reject) => {
      EshopperConnection()
        .all("SELECT * FROM `Sizes`", [], (err, rows) => {
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
          "INSERT INTO `Sizes` (`size`) VALUES (?)",
          [this.size.name],
          function (err) {
            if (err) reject(err);
            resolve();
          }
        )
        .close();
    });
  }

  async edit() {
    return new Promise((resolve, reject) => {
      EshopperConnection()
        .run(
          "UPDATE `Sizes` SET `size` = ? WHERE `id` = ?",
          [this.size.name, this.size.id],
          function (err) {
            if (err) reject(err);
            resolve();
          }
        )
        .close();
    });
  }

  async remove() {
    return new Promise((resolve, reject) => {
      EshopperConnection()
        .run(
          "DELETE FROM `Sizes` WHERE `id` = ?",
          [this.size.id],
          function (err) {
            if (err) reject(err);
            resolve();
          }
        )
        .close();
    });
  }

  async byProduct() {
    return new Promise((resolve, reject) => {
      EshopperConnection()
        .all(
          "SELECT Sizes.size, Sizes.id FROM `Sizes` INNER JOIN Product_Sizes ON Sizes.id = Product_Sizes.size_id WHERE Product_Sizes.product_id = ?",
          [this.size.product_id],
          (err, row) => {
            if (err) reject(err);
            resolve(row);
          }
        )
        .close();
    });
  }
};
