const { DatabaseConnection } = require("../../config/index");

module.exports = class ProjectModel {
  constructor(project) {
    this.project = project;
  }

  async GetProjects() {
    return await new Promise((resolve, reject) => {
      DatabaseConnection()
        .all(`SELECT * FROM projects`, (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        })
        .close();
    });
  }
};
