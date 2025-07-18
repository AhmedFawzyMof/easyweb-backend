const { EshopperConnection } = require("../../utils/databaseConection");

module.exports = class Contact {
  constructor(contact) {
    this.contact = contact;
  }

  static async getAll() {
    return new Promise((resolve, reject) => {
      EshopperConnection()
        .all("SELECT * FROM `Contact`", [], (err, rows) => {
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
          "INSERT INTO `Contact` (`name`, `email`, `phone`, `message`, `seen`) VALUES (?, ?, ?, ?, ?)",
          [
            this.contact.name,
            this.contact.email,
            this.contact.phone,
            this.contact.message,
            this.contact.seen,
          ],
          function (err) {
            if (err) reject(err);
            resolve({ success: true });
          }
        )
        .close();
    });
  }
};
