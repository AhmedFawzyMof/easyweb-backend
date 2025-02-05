const { DatabaseConnection } = require("../config/index");

const VistorMiddleware = async (req, res, next) => {
  let ip = req.ip;
  if (!req.ip) {
    ip = req.socket.remoteAddress;
  }

  const visitor = await new Promise((resolve, reject) =>
    DatabaseConnection()
      .get(`SELECT * FROM visitor WHERE ip = ?`, [ip], (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      })
      .close()
  );

  if (visitor) {
    await new Promise((resolve, reject) => {
      DatabaseConnection()
        .run(
          `UPDATE visitor SET count = count + 1 WHERE ip = ?`,
          [ip],
          (err) => {
            if (err) reject(err);
            resolve();
          }
        )
        .close();
    });
  } else {
    await new Promise((resolve, reject) => {
      DatabaseConnection()
        .run(
          `INSERT INTO visitor (ip, count) VALUES (?, ?)`,
          [ip, 1],
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
