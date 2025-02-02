const { BahaaEduConnection } = require("../../utils/databaseConection");

class Grades {
  constructor(grade) {
    this.grade = grade;
  }
  GetAll() {
    const sql = "SELECT * FROM Grade";
    return new Promise((resolve, reject) => {
      BahaaEduConnection()
        .all(sql, (err, row) => {
          if (err) reject(err);
          resolve(row);
        })
        .close();
    });
  }
  Create() {
    const sql = "INSERT INTO Grade (grade_name) VALUES (?)";
    return new Promise((resolve, reject) => {
      BahaaEduConnection()
        .run(sql, [this.grade.grade_name], (err, row) => {
          if (err) reject(err);
          resolve(row);
        })
        .close();
    });
  }
  Update() {
    const sql = "UPDATE Grade SET grade_name = ? WHERE id = ?";
    return new Promise((resolve, reject) => {
      BahaaEduConnection()
        .run(sql, [this.grade.grade_name, this.grade.id], (err, row) => {
          if (err) reject(err);
          resolve(row);
        })
        .close();
    });
  }
  Delete() {
    const sql = "DELETE FROM Grade WHERE id = ?";
    return new Promise((resolve, reject) => {
      BahaaEduConnection()
        .run(sql, [this.grade.id], (err, row) => {
          if (err) reject(err);
          resolve(row);
        })
        .close();
    });
  }

  GetGradeName() {
    const { grade } = this;
    const sql =
      "SELECT Grade.grade_name FROM User INNER JOIN Grade ON User.grade_id = Grade.id WHERE User.id = ?";
    return new Promise((resolve, reject) => {
      BahaaEduConnection()
        .get(sql, [grade.student_id], (err, row) => {
          if (err) reject(err);
          resolve(row);
        })
        .close();
    });
  }
}

module.exports = Grades;
