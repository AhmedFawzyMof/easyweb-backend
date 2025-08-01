const { EshopperConnection } = require("../../utils/databaseConection");

module.exports = class OrderProducts {
  constructor(orderproducts) {
    this.orderproducts = orderproducts;
  }

  async add() {
    return new Promise((resolve, reject) => {
      EshopperConnection()
        .run(
          "INSERT INTO `OrderProducts` (`product`, `order`, `quantity`) VALUES (?, ?, ?)",
          [
            this.orderproducts.product,
            this.orderproducts.order,
            this.orderproducts.quantity,
          ],
          function (err) {
            if (err) reject(err);
            resolve({ success: true, id: this.lastID });
          }
        )
        .close();
    });
  }

  async getAll() {
    return new Promise((resolve, reject) => {
      EshopperConnection()
        .all(
          "SELECT OrderProducts.quantity, OrderProducts.`order`, Products.id, Products.name, Products.image, Products.price FROM OrderProducts INNER JOIN Products ON OrderProducts.product = Products.id WHERE OrderProducts.`order` = ?",
          [this.orderproducts.order],
          (err, rows) => {
            if (err) reject(err);
            resolve(rows);
          }
        )
        .close();
    });
  }
};
