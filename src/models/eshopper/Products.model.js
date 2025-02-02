const { EshopperConnection } = require("../../utils/databaseConection");

module.exports = class Products {
  constructor(product) {
    this.product = product;
  }

  static async getAll({ limit }) {
    const offset = limit - 30;
    const priceRange = await new Promise((resolve, reject) => {
      EshopperConnection()
        .all(
          "SELECT CASE WHEN price BETWEEN 0 AND 100 THEN '0-100 L.E' WHEN price BETWEEN 100 AND 200 THEN '100-200 L.E' WHEN price BETWEEN 200 AND 300 THEN '200-300 L.E' ELSE '300 L.E+' END AS price_range FROM Products GROUP BY price_range ORDER BY price_range;",
          [],
          (err, rows) => {
            if (err) reject(err);
            resolve(rows);
          }
        )
        .close();
    });
    const products = await new Promise((resolve, reject) => {
      EshopperConnection()
        .all(
          "SELECT * FROM `Products` WHERE available = 1 LIMIT 30 OFFSET ?",
          [offset],
          (err, rows) => {
            if (err) reject(err);
            resolve(rows);
          }
        )
        .close();
    });

    const products_count = await new Promise((resolve, reject) => {
      EshopperConnection()
        .get(
          "SELECT COUNT(*) AS products_count FROM `Products` WHERE available = 1",
          [],
          (err, row) => {
            if (err) reject(err);
            resolve(row);
          }
        )
        .close();
    });

    const pages = Math.ceil(products_count.products_count / 30);

    return { priceRange, products, pages };
  }

  latestProducts() {
    return new Promise((resolve, reject) => {
      EshopperConnection()
        .all(
          "SELECT * FROM `Products` WHERE available = 1 ORDER BY id LIMIT 8",
          [],
          (err, rows) => {
            if (err) reject(err);
            resolve(rows);
          }
        )
        .close();
    });
  }

  async byProductCategory() {
    return new Promise((resolve, reject) => {
      EshopperConnection()
        .all(
          "SELECT * FROM `Products` WHERE category = ? AND available = 1 LIMIT 8",
          [this.product.category],
          (err, rows) => {
            if (err) reject(err);
            resolve(rows);
          }
        )
        .close();
    });
  }
  async byCategory() {
    const offset = this.product.limit - 30;
    const sql = `SELECT * FROM \`Products\` WHERE category = ? AND available = 1 LIMIT 30 OFFSET ?`;
    const products = await new Promise((resolve, reject) => {
      EshopperConnection()
        .all(sql, [this.product.category, offset], (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        })
        .close();
    });

    const products_count = await new Promise((resolve, reject) => {
      EshopperConnection()
        .get(
          "SELECT COUNT(*) AS products_count FROM `Products` WHERE category = ? AND available = 1",
          [this.product.category],
          (err, row) => {
            if (err) reject(err);
            resolve(row);
          }
        )
        .close();
    });
    const pages = Math.ceil(products_count.products_count / 30);

    return { products, pages };
  }

  async bySearch() {
    const query = this.product.query;
    const offset = this.product.limit - 30;

    const products_count = await new Promise((resolve, reject) => {
      EshopperConnection()
        .get(
          "SELECT COUNT(*) AS products_count FROM `Products` WHERE name LIKE ?",
          ["%" + query + "%"],
          (err, row) => {
            if (err) reject(err);
            resolve(row);
          }
        )
        .close();
    });

    const pages = Math.ceil(products_count.products_count / 30);

    return new Promise((resolve, reject) => {
      EshopperConnection()
        .all(
          "SELECT * FROM `Products` WHERE name LIKE ? AND available = 1 LIMIT 30 OFFSET ?",
          ["%" + query + "%", offset],
          (err, rows) => {
            if (err) reject(err);
            resolve({ products: rows, pages });
          }
        )
        .close();
    });
  }
  // async add() {
  //   return new Promise((resolve, reject) => {
  //      DatabaseConnection("eshop.db").run(
  //       "INSERT INTO `Products`(`name`, `description`, `category`, `company`, `price`, `image`, `available`, `buyingprice`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
  //       [
  //         this.product.name,
  //         this.product.description,
  //         this.product.category,
  //         this.product.price,
  //         this.product.image,
  //         this.product.available,
  //       ],
  //       function (err) {
  //         if (err) reject(err);
  //         resolve({ success: true, id: this.lastID });
  //       }
  //     );
  //   });
  // }

  async edit() {
    return new Promise((resolve, reject) => {
      const updates = Object.entries(this.product)
        .map(([key, value]) => `${key} = ?`)
        .join(", ");
      const values = Object.values(this.product);
      values.push(this.product.id);

      EshopperConnection()
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

  async byId() {
    return new Promise((resolve, reject) => {
      EshopperConnection()
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

  async byFilter() {
    const offset = this.product.limit - 30;
    const inputs = [];
    let sql = "SELECT * FROM `Products` WHERE Products.available = 1";
    const priceRange = await new Promise((resolve, reject) => {
      EshopperConnection()
        .all(
          "SELECT CASE WHEN price BETWEEN 0 AND 100 THEN '0-100 L.E' WHEN price BETWEEN 100 AND 200 THEN '100-200 L.E' WHEN price BETWEEN 200 AND 300 THEN '200-300 L.E' ELSE '300 L.E+' END AS price_range FROM Products GROUP BY price_range ORDER BY price_range;",
          [],
          (err, rows) => {
            if (err) reject(err);
            resolve(rows);
          }
        )
        .close();
    });

    if (!this.product.price.includes("all")) {
      if (this.product.price === "300 L.E+") {
        inputs.push(300);
        sql += ` AND Products.price >= ?`;
      } else {
        const from = Number(this.product.price.split("-")[0]);
        const to = Number(this.product.price.split("-")[1].replace(" L.E", ""));
        inputs.push(from, to);
        sql += ` AND Products.price BETWEEN ? AND ?`;
      }
    }

    if (this.product.category !== 0) {
      inputs.push(this.product.category);
      sql += ` AND Products.category = ?`;
    }

    if (this.product.size !== 0) {
      sql = sql
        .replace(
          "*",
          "DISTINCT Products.id, Products.name, Products.image, Products.price, Products.offer"
        )
        .replace(
          "`Products`",
          "Products INNER JOIN Product_Sizes ON Products.id = Product_Sizes.product_id"
        );
      inputs.push(this.product.size);
      sql += ` AND Product_Sizes.size_id = ?`;
    }

    sql += ` LIMIT 30 OFFSET ?`;
    inputs.push(offset);

    const products = await new Promise((resolve, reject) => {
      EshopperConnection()
        .all(sql, [...inputs], (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        })
        .close();
    });

    const products_count = await new Promise((resolve, reject) => {
      let query = sql.includes("DISTINCT")
        ? sql.replace(
            "DISTINCT Products.id, Products.name, Products.image, Products.price, Products.offer",
            "COUNT(DISTINCT Products.id) AS products_count"
          )
        : sql.replace("*", "COUNT(*) AS products_count");
      query = query.replace("LIMIT 30 OFFSET ?", "");
      inputs.pop();
      EshopperConnection()
        .get(query, [...inputs], (err, row) => {
          if (err) reject(err);
          resolve(row);
        })
        .close();
    });

    const pages = Math.ceil(products_count.products_count / 30);

    return { priceRange, products, pages };
  }

  async forCart() {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM \`Products\` WHERE id IN (${this.product.products
        .map(() => "?")
        .join(", ")})`;

      EshopperConnection()
        .all(query, [...this.product.products], (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        })
        .close();
    });
  }
};
