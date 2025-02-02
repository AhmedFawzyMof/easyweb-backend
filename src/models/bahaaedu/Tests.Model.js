const { BahaaEduConnection } = require("../../utils/databaseConection");
const fs = require("fs");

class Tests {
  constructor(tests) {
    this.tests = tests;
  }

  static async getTests(studentId, grade) {
    return new Promise((resolve, reject) => {
      const currentDate = new Date();
      const egyptTime = new Date(
        currentDate.toLocaleString("en-US", { timeZone: "Africa/Cairo" })
      );
      const formattedDateTime = egyptTime
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");

      BahaaEduConnection()
        .all(
          `SELECT Tests.id, Tests.test_name, Tests.cover, Tests.created_at, Tests.expire_date, (SELECT test_id FROM UserTestResult WHERE UserTestResult.user_id = ?) AS SOLVED_TEST FROM Tests LEFT JOIN UserTestResult ON UserTestResult.test_id = Tests.id WHERE Tests.id IS NOT SOLVED_TEST AND Tests.created_at <= ? AND Tests.expire_date >= ? AND Tests.grade_id = ? LIMIT 4`,
          [studentId, formattedDateTime, formattedDateTime, grade],
          (err, rows) => {
            if (err) reject(err);
            resolve(rows);
          }
        )
        .close();
    });
  }

  static async getAllTests(studentId, grade, limit) {
    return new Promise((resolve, reject) => {
      const currentDate = new Date();
      const formattedDateTime = currentDate
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");

      const Limit = parseInt(limit);
      const Offset = Limit - 30;

      BahaaEduConnection()
        .all(
          `SELECT Tests.id, Tests.test_name, Tests.cover, Tests.created_at, Tests.expire_date, (SELECT test_id FROM UserTestResult WHERE UserTestResult.user_id = ?) AS FT FROM Tests LEFT JOIN UserTestResult ON UserTestResult.test_id = Tests.id WHERE Tests.id IS NOT FT AND Tests.id AND Tests.created_at <= ? AND Tests.expire_date >= ? AND Tests.grade_id = ? LIMIT ? OFFSET ?`,
          [
            studentId,
            formattedDateTime,
            formattedDateTime,
            grade,
            Limit,
            Offset,
          ],
          (err, rows) => {
            if (err) reject(err);
            resolve(rows);
          }
        )
        .close();
    });
  }

  async getTestQuestions() {
    const test = this.tests;
    const currentDate = new Date();
    const egyptTime = new Date(
      currentDate.toLocaleString("en-US", { timeZone: "Africa/Cairo" })
    );
    const formattedDateTime = egyptTime
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");

    const solved_test = new Promise((resolve, reject) => {
      BahaaEduConnection()
        .all(
          "SELECT UserTestResult.id FROM UserTestResult LEFT JOIN Tests ON Tests.id = UserTestResult.test_id WHERE UserTestResult.test_id = ? AND UserTestResult.user_id = ? OR Tests.expire_date >= ? ",
          [test.test_id, test.student_id, formattedDateTime],
          (err, rows) => {
            if (err) reject(err);
            resolve(rows);
          }
        )
        .close();
    });
    const solved = await solved_test;
    if (solved.length > 0) {
      return new Error("Test is already solved");
    }
    const questions_ids = new Promise((resolve, reject) => {
      BahaaEduConnection()
        .all(
          "SELECT question_id FROM ConnectQuestions WHERE test_id = ?",
          [test.id],
          (err, rows) => {
            if (err) reject(err);
            resolve(rows);
          }
        )
        .close();
    });
    const ids = [];
    for (const question of await questions_ids) {
      ids.push(question.question_id);
    }

    return new Promise((resolve, reject) => {
      const sql = `SELECT Questions.id, Questions.question, Questions.image, QuestionChoices.the_choice, (SELECT count(QuestionTextAnswers.id) From QuestionTextAnswers WHERE QuestionTextAnswers.question_id = Questions.id ) as number_of_inputs From Questions LEFT JOIN QuestionChoices ON QuestionChoices.question_id = Questions.id LEFT JOIN QuestionTextAnswers ON QuestionTextAnswers.question_id = Questions.id WHERE Questions.id IN (${ids.join(
        ","
      )})`;
      BahaaEduConnection()
        .all(sql, (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        })
        .close();
    });
  }
  async getTestQuestionsForAnswer() {
    const test = this.tests;

    const currentDate = new Date();
    const egyptTime = new Date(
      currentDate.toLocaleString("en-US", { timeZone: "Africa/Cairo" })
    );
    const formattedDateTime = egyptTime
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");

    const solved_test = new Promise((resolve, reject) => {
      BahaaEduConnection()
        .all(
          "SELECT UserTestResult.id FROM UserTestResult LEFT JOIN Tests ON Tests.id = UserTestResult.test_id WHERE UserTestResult.test_id = ? AND UserTestResult.user_id = ? OR Tests.expire_date >= ? ",
          [test.test_id, test.student_id, formattedDateTime],
          (err, rows) => {
            if (err) reject(err);
            resolve(rows);
          }
        )
        .close();
    });
    const solved = await solved_test;
    if (solved.length > 0) {
      return new Error("Test is already solved");
    }

    const questions_ids = new Promise((resolve, reject) => {
      BahaaEduConnection()
        .all(
          "SELECT question_id FROM ConnectQuestions WHERE test_id = ?",
          [test.id],
          (err, rows) => {
            if (err) reject(err);
            resolve(rows);
          }
        )
        .close();
    });
    const ids = [];
    for (const question of await questions_ids) {
      ids.push(question.question_id);
    }

    return new Promise((resolve, reject) => {
      const sql = `SELECT Questions.id, Questions.question, Questions.image, QuestionChoices.the_choice, QuestionChoices.is_right_choice, QuestionTextAnswers.the_answer From Questions LEFT JOIN QuestionChoices ON QuestionChoices.question_id = Questions.id LEFT JOIN QuestionTextAnswers ON QuestionTextAnswers.question_id = Questions.id WHERE Questions.id IN (${ids.join(
        ","
      )})`;
      BahaaEduConnection()
        .all(sql, (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        })
        .close();
    });
  }
  addAnswers() {
    const test = this.tests;
    const sql = `INSERT INTO UserAnswerTest(user_id, question_id, text_answer, choice_answer, is_right, test_id) VALUES(?, ?, ?, ?, ?, ?)`;
    return new Promise((resolve, reject) => {
      const stmt = BahaaEduConnection().prepare(sql);
      for (const answer of test.answers) {
        stmt.run(
          [
            answer.student_id,
            answer.question_id,
            answer.text_answer,
            answer.choice_answer,
            answer.isRight,
            answer.test_id,
          ],
          (err) => {
            if (err) {
              stmt.finalize();
              return reject(err);
            }
          }
        );
      }
      stmt.finalize();
      return resolve();
    });
  }
  addResult() {
    const test = this.tests;
    const currentDate = new Date();
    const egyptTime = new Date(
      currentDate.toLocaleString("en-US", { timeZone: "Africa/Cairo" })
    );
    const formattedDateTime = egyptTime.toISOString().slice(0, 19);

    const sql = `INSERT INTO UserTestResult(test_id, user_id, result, public, submitted_at) VALUES(?, ?, ?, ?, ?)`;
    return new Promise((resolve, reject) => {
      BahaaEduConnection()
        .run(
          sql,
          [test.id, test.studentId, test.result, 0, formattedDateTime],
          (res, err) => {
            if (err) reject(err);
            return resolve(res);
          }
        )
        .close();
    });
  }

  getAll() {
    const test = this.tests;
    let offset = test.limit - 30;

    return new Promise((resolve, reject) => {
      BahaaEduConnection()
        .all(
          "SELECT * FROM Tests WHERE grade_id = ? LIMIT ? OFFSET ?",
          [test.stage, 30, offset],
          (err, rows) => {
            if (err) reject(err);
            resolve(rows);
          }
        )
        .close();
    });
  }

  async Create() {
    const test = this.tests;

    test.cover = "/test/" + test.cover;

    const sql = `INSERT INTO Tests(test_name, cover, grade_id, term_id, created_at, expire_date) VALUES(?, ?, ?, ?, ?, ?)`;
    return new Promise((resolve, reject) => {
      BahaaEduConnection()
        .run(
          sql,
          [
            test.test_name,
            test.cover,
            test.grade_id,
            test.term_id,
            test.created_at,
            test.expire_date,
          ],
          (res, err) => {
            if (err) reject(err);
            return resolve(res);
          }
        )
        .close();
    });
  }

  async Delete() {
    const test = this.tests;
    const testData = new Promise((resolve, reject) => {
      BahaaEduConnection()
        .get("SELECT cover FROM Tests WHERE id = ?", [test.id], (err, row) => {
          if (err) reject(err);
          return resolve(row);
        })
        .close();
    });

    const { cover } = await testData;
    if (cover !== "") {
      fs.unlink("./public" + cover, (err) => {
        if (err) {
          console.error("Error deleting the file:", err);
        } else {
          console.log("File deleted successfully");
        }
      });
    }
    const sql = `DELETE FROM Tests WHERE id = ?`;
    return new Promise((resolve, reject) => {
      BahaaEduConnection()
        .run(sql, [test.id], (err, res) => {
          if (err) reject(err);
          return resolve(res);
        })
        .close();
    });
  }

  Update() {
    const test = this.tests;

    const sql = `UPDATE Tests SET test_name = ?, grade_id = ?, term_id = ?, created_at = ?, expire_date = ? WHERE id = ?`;
    return new Promise((resolve, reject) => {
      BahaaEduConnection()
        .run(
          sql,
          [
            test.test_name,
            test.grade_id,
            test.term_id,
            test.created_at,
            test.expire_date,
            test.id,
          ],
          (err, res) => {
            if (err) reject(err);
            return resolve(res);
          }
        )
        .close();
    });
  }

  async Ditails() {
    const test = this.tests;
    const passRate = await new Promise((resolve, reject) => {
      BahaaEduConnection()
        .get(
          "SELECT COUNT(*) AS number_of_pass, (SELECT COUNT(*) FROM UserTestResult WHERE test_id = ?) AS total_students FROM UserTestResult WHERE test_id = ? AND result >= 50;",
          [test.id, test.id],
          (err, row) => {
            if (err) reject(err);
            if (row == undefined)
              reject("اسم المستخدم أو كلمة المرور غير صالحة");
            resolve(row);
          }
        )
        .close();
    });

    const avgGrade = await new Promise((resolve, reject) => {
      BahaaEduConnection()
        .get(
          "SELECT AVG(result) AS average_result FROM UserTestResult WHERE test_id = ?",
          [test.id],
          (err, row) => {
            if (err) reject(err);
            if (row == undefined)
              reject("اسم المستخدم أو كلمة المرور غير صالحة");
            resolve(row);
          }
        )
        .close();
    });

    let data = {};
    if (test.type === "questions") {
      const questionsConnected = await new Promise((resolve, reject) => {
        BahaaEduConnection()
          .all(
            "SELECT question_id FROM ConnectQuestions WHERE test_id = ?",
            [test.id],
            (err, rows) => {
              if (err) reject(err);
              resolve(rows);
            }
          )
          .close();
      });

      const ids = [];

      for (const question of questionsConnected) {
        ids.push(question.question_id);
      }

      data = await new Promise((resolve, reject) => {
        BahaaEduConnection()
          .all(
            `SELECT Questions.id, Questions.question, Questions.grade_id, Questions.term_id, Questions.bank, Questions.image, QuestionChoices.the_choice, QuestionChoices.is_right_choice, QuestionTextAnswers.the_answer From Questions LEFT JOIN QuestionChoices ON QuestionChoices.question_id = Questions.id LEFT JOIN QuestionTextAnswers ON QuestionTextAnswers.question_id = Questions.id  WHERE Questions.id IN (${ids.join(
              ","
            )})`,
            [],
            (err, row) => {
              if (err) reject(err);
              resolve(row);
            }
          )
          .close();
      });
    } else {
      data = await new Promise((resolve, reject) => {
        BahaaEduConnection()
          .all(
            "SELECT User.id, User.username, Grade.grade_name, UserTestResult.result FROM UserTestResult INNER JOIN User ON UserTestResult.user_id = User.id INNER JOIN Grade ON User.grade_id = Grade.id WHERE test_id = ?",
            [test.id],
            (err, rows) => {
              if (err) reject(err);
              resolve(rows);
            }
          )
          .close();
      });
    }

    return {
      passRate,
      avgGrade,
      data,
    };
  }

  async Answers() {
    const test = this.tests;

    const published = await new Promise((resolve, reject) => {
      BahaaEduConnection()
        .get(
          "SELECT public FROM UserTestResult WHERE test_id = ? AND user_id = ?",
          [test.id, test.student_id],
          (err, row) => {
            if (err) reject(err);
            if (row.public !== 1) {
              reject("لا يمكنك الوصول للنتيجة لانها غير منشورة");
            }
            resolve(row);
          }
        )
        .close();
    });

    const testQuestionsIds = await new Promise((resolve, reject) => {
      BahaaEduConnection()
        .all(
          `SELECT Questions.id FROM ConnectQuestions INNER JOIN Questions ON ConnectQuestions.question_id = Questions.id WHERE test_id = ?`,
          [test.id],
          (err, rows) => {
            if (err) reject(err);
            resolve(rows);
          }
        )
        .close();
    });

    const studentAnswers = await new Promise((resolve, reject) => {
      BahaaEduConnection()
        .all(
          `SELECT id, question_id, text_answer, choice_answer, is_right FROM UserAnswerTest WHERE test_id = ? AND user_id = ?`,
          [test.id, test.student_id],
          (err, rows) => {
            if (err) reject(err);
            resolve(rows);
          }
        )
        .close();
    });

    const testAnswers = await new Promise((resolve, reject) => {
      BahaaEduConnection()
        .all(
          `SELECT Questions.id, Questions.question, Questions.grade_id, Questions.term_id, Questions.bank, Questions.image, QuestionChoices.the_choice, QuestionChoices.is_right_choice, QuestionTextAnswers.the_answer From Questions LEFT JOIN QuestionChoices ON QuestionChoices.question_id = Questions.id LEFT JOIN QuestionTextAnswers ON QuestionTextAnswers.question_id = Questions.id  WHERE Questions.id IN (${testQuestionsIds
            .map((question) => question.id)
            .join(",")})`,
          [],
          (err, rows) => {
            if (err) reject(err);
            resolve(rows);
          }
        )
        .close();
    });

    return { testAnswers, studentAnswers, published };
  }
}

module.exports = Tests;
