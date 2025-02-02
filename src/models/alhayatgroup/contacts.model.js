const { ElhayaGroupConnection } = require("../../utils/databaseConection");

const contacts = {
  GetAllContacts: async () => {
    return new Promise((resolve, reject) => {
      ElhayaGroupConnection()
        .all(`SELECT * FROM contacts`, [], (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        })
        .close();
    });
  },
  DeleteContacts: async (id) => {
    return new Promise((resolve, reject) => {
      ElhayaGroupConnection()
        .run("DELETE FROM `contacts` WHERE id = ?", [id], (err) => {
          if (err) reject(err);
          resolve();
        })
        .close();
    });
  },
  AddContacts: async (contact) => {
    return new Promise((resolve, reject) => {
      const createdAt = new Date();
      ElhayaGroupConnection()
        .run(
          "INSERT INTO `contacts` (`name`,`email`,`phone`,`comment`, `created_at`) VALUES(?,?,?,?,?)",
          [
            contact.name,
            contact.email,
            contact.phone,
            contact.message,
            createdAt,
          ],
          (err) => {
            if (err) reject(err);
            resolve();
          }
        )
        .close();
    });
  },
};

module.exports = contacts;
