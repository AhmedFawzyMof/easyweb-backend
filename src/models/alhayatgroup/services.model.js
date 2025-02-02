const { ElhayaGroupConnection } = require("../../utils/databaseConection");

const services = {
  GetHomeServices: () => {
    return new Promise((resolve, reject) => {
      ElhayaGroupConnection()
        .all(`SELECT * FROM services LIMIT 4`, [], (err, rows) => {
          if (err) reject(err);
          rows.forEach((service) => {
            service.thumbnail = service.thumbnail.replace("static", "");
          });
          resolve(rows);
        })
        .close();
    });
  },
  AddService: (service) => {
    return new Promise((resolve, reject) => {
      const slug = service.name.replace(" ", "-");
      ElhayaGroupConnection()
        .run(
          "INSERT INTO services(name, slug, nameAr, thumbnail, description, descriptionAr) VALUES(?, ?, ?, ?, ?, ?)",
          [
            service.name,
            slug,
            service.nameAr,
            service.thumbnail,
            service.description,
            service.descriptionAr,
          ],
          (err) => {
            if (err) reject(err);
            resolve();
          }
        )
        .close();
    });
  },
  GetAllServices: async () => {
    return new Promise((resolve, reject) => {
      ElhayaGroupConnection()
        .all(`SELECT * FROM services`, [], (err, rows) => {
          if (err) reject(err);
          rows.forEach((service) => {
            service.thumbnail = service.thumbnail.replace("static", "");
          });
          resolve(rows);
        })
        .close();
    });
  },
  GetServiceBySlug: async (slug) => {
    return new Promise((resolve, reject) => {
      ElhayaGroupConnection()
        .get(`SELECT * FROM services where slug = ?;`, slug, (err, rows) => {
          if (err) reject(err);
          rows.forEach((service) => {
            service.thumbnail = service.thumbnail.replace("static", "");
          });
          resolve(rows);
        })
        .close();
    });
  },
  DeleteService: async (id) => {
    return new Promise((resolve, reject) => {
      ElhayaGroupConnection()
        .run("DELETE FROM `services` WHERE id = ?", [id], (err) => {
          if (err) reject(err);
          resolve();
        })
        .close();
    });
  },
};

module.exports = services;
