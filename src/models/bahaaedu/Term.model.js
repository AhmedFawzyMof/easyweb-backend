const { BahaaEduConnection } = require("../../utils/databaseConection");
class TermModel {
  constructor(term) {
    this.term = term;
  }

  SetTerm() {
    return new Promise((resolve, reject) => {
      const sql = "UPDATE CurrentTerm SET term_id = ?";
      BahaaEduConnection()
        .run(sql, [this.term], (err) => {
          if (err) reject(err);
          resolve();
        })
        .close();
    });
  }
  GetCurrentTerm() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM CurrentTerm";
      BahaaEduConnection()
        .get(sql, (err, row) => {
          if (err) reject(err);
          resolve(row);
        })
        .close();
    });
  }
}

module.exports = TermModel;
