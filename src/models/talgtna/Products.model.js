const { TalgatnaConnection } = require("../../utils/databaseConection");

module.exports = class Products {
  constructor(product) {
    this.product = product;
  }

  static async getAll() {
    return new Promise((resolve, reject) => {
      TalgatnaConnection()
        .all("SELECT * FROM `Products`", [], (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        })
        .close();
    });
  }

  async byCategory() {
    return new Promise((resolve, reject) => {
      TalgatnaConnection()
        .all(
          "SELECT * FROM `Products` WHERE category = ? ORDER BY available DESC",
          [this.product.category],
          (err, rows) => {
            if (err) reject(err);
            resolve(rows);
          }
        )
        .close();
    });
  }

  static async bySearch({ query }) {
    return new Promise((resolve, reject) => {
      TalgatnaConnection()
        .all(
          "SELECT * FROM `Products` WHERE name LIKE ? ORDER BY available DESC",
          ["%" + query + "%"],
          (err, rows) => {
            if (err) reject(err);
            resolve(rows);
          }
        )
        .close();
    });
  }

  async inFavorite({ userId }) {
    return new Promise((resolve, reject) => {
      TalgatnaConnection()
        .get(
          "SELECT * FROM `favourite` WHERE `user` = ? AND `product` = ?",
          [userId, this.product.id],
          (err, row) => {
            if (err) reject(err);
            resolve(row);
          }
        )
        .close();
    });
  }

  async byCompany() {
    return new Promise((resolve, reject) => {
      TalgatnaConnection()
        .all(
          "SELECT * FROM `Products` WHERE company = ? ORDER BY available DESC",
          [this.product.company],
          (err, rows) => {
            if (err) reject(err);
            resolve(rows);
          }
        )
        .close();
    });
  }

  async add() {
    return new Promise((resolve, reject) => {
      TalgatnaConnection()
        .run(
          "INSERT INTO `Products`(`name`, `description`, `category`, `company`, `price`, `image`, `available`, `buyingprice`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
          [
            this.product.name,
            this.product.description,
            this.product.category,
            this.product.company,
            this.product.price,
            this.product.image,
            this.product.available,
            this.product.buyingprice,
          ],
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
      const updates = Object.entries(this.product)
        .map(([key, value]) => `${key} = ?`)
        .join(", ");
      const values = Object.values(this.product);
      values.push(this.product.id);

      TalgatnaConnection()
        .run(
          `UPDATE \`Products\` SET ${updates} WHERE \`id\` = ?`,
          values,
          function (err) {
            if (err) reject(err);
            resolve({ success: true, changes: this.changes });
          }
        )
        .close();
    });
  }

  async addFavorite({ userId }) {
    return new Promise((resolve, reject) => {
      TalgatnaConnection()
        .run(
          "INSERT INTO `favourite` (`product`, `user`) VALUES (?, ?)",
          [this.product.id, userId],
          function (err) {
            if (err) reject(err);
            resolve({ success: true, id: this.lastID });
          }
        )
        .close();
    });
  }

  static async byFavorite({ userId }) {
    return new Promise((resolve, reject) => {
      TalgatnaConnection()
        .all(
          "SELECT favourite.product, favourite.user, Products.name, Products.image, Products.price, Products.available, Products.id FROM `favourite` INNER JOIN `Products` ON favourite.product = Products.id WHERE user = ?",
          [userId],
          (err, rows) => {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              resolve(rows);
            }
          }
        )
        .close();
    });
  }

  async byId() {
    return new Promise((resolve, reject) => {
      TalgatnaConnection()
        .get(
          "SELECT * FROM `Products` WHERE id = ?",
          [this.product.id],
          (err, row) => {
            if (err) reject(err);
            resolve(row);
          }
        )
        .close();
    });
  }
};
