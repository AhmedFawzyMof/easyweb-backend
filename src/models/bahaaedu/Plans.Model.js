const { BahaaEduConnection } = require("../../utils/databaseConection");

class Plans {
  constructor(plans) {
    this.plans = plans;
  }

  savePlan() {
    const { plans } = this;

    return new Promise((resolve, reject) => {
      BahaaEduConnection()
        .run(
          "INSERT INTO plans (plan, user, subject) VALUES (?, ?, ?)",
          [plans.plan, plans.user, plans.subject],
          (err) => {
            if (err) reject(err);
            resolve();
          }
        )
        .close();
    });
  }

  getPlans() {
    const { plans } = this;

    return new Promise((resolve, reject) => {
      BahaaEduConnection()
        .all(
          "SELECT id, user, subject FROM plans WHERE user = ?",
          [plans.student_id],
          (err, rows) => {
            if (err) reject(err);
            resolve(rows);
          }
        )
        .close();
    });
  }

  Delete() {
    const { plans } = this;

    return new Promise((resolve, reject) => {
      BahaaEduConnection()
        .run("DELETE FROM Plans WHERE id = ?", [plans.id], (err) => {
          if (err) reject(err);
          resolve("success");
        })
        .close();
    });
  }

  getPlan() {
    const { plans } = this;

    return new Promise((resolve, reject) => {
      BahaaEduConnection()
        .get("SELECT plan FROM plans WHERE id = ?", [plans.id], (err, row) => {
          if (err) reject(err);
          resolve(row);
        })
        .close();
    });
  }

  Edit() {
    const { plans } = this;

    return new Promise((resolve, reject) => {
      BahaaEduConnection()
        .run(
          "UPDATE plans SET plan = ? WHERE id = ?",
          [plans.plan, plans.id],
          (err) => {
            if (err) reject(err);
            resolve("success");
          }
        )
        .close();
    });
  }
}

module.exports = Plans;
