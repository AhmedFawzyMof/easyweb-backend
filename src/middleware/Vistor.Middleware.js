const { DatabaseConnection } = require("../config/index");

const { v4: uuidv4 } = require("uuid");

const VistorMiddleware = async (req, res, next) => {
  if (req.cookies.uiv) {
    const visitor = await new Promise((resolve, reject) =>
      DatabaseConnection()
        .get(
          `SELECT * FROM visitor WHERE ip = ?`,
          [req.cookies.uiv],
          (err, rows) => {
            if (err) reject(err);
            resolve(rows);
          }
        )
        .close()
    );
    if (visitor) {
      await new Promise((resolve, reject) => {
        DatabaseConnection()
          .run(
            `UPDATE visitor SET count = count + 1 WHERE ip = ?`,
            [req.cookies.uiv],
            (err) => {
              if (err) reject(err);
              resolve();
            }
          )
          .close();
      });
    }
  } else {
    const id = uuidv4();
    res.cookie("uiv", id, { maxAge: 31536000000 });
    await new Promise((resolve, reject) => {
      DatabaseConnection()
        .run(
          `INSERT INTO visitor (ip, count) VALUES (?, ?)`,
          [id, 1],
          (err) => {
            if (err) reject(err);
            resolve();
          }
        )
        .close();
    });
  }

  next();
};

module.exports = { VistorMiddleware };
