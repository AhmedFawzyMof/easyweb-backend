const { TalgatnaConnection } = require("../../utils/databaseConection");

module.exports = class Offers {
  constructor(offer) {
    this.offer = offer;
  }

  static async getAll() {
    return new Promise((resolve, reject) => {
      TalgatnaConnection()
        .all("SELECT * FROM `Offer`", [], (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        })
        .close();
    });
  }

  async add() {
    return new Promise((resolve, reject) => {
      TalgatnaConnection()
        .run(
          "INSERT INTO `Offer` (`product`, `image`, `company`) VALUES (?, ?, ?)",
          [this.offer.product, this.offer.image, this.offer.company],
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
      TalgatnaConnection()
        .run(
          "UPDATE `Offer` SET `image` = ?, `company` = ?, `product` = ? WHERE `id` = ?",
          [
            this.offer.image,
            this.offer.company,
            this.offer.product,
            this.offer.id,
          ],
          function (err) {
            if (err) reject(err);
            resolve({ success: true, changes: this.changes });
          }
        )
        .close();
    });
  }
};
