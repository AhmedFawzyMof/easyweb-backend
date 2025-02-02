const { BahaaEduConnection } = require("../../utils/databaseConection");

class PublicTests {
  constructor(tests) {
    this.tests = tests;
  }

  static async getAllTests(studentPhone, grade, limit) {
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
          `SELECT PublicTests.id, PublicTests.test_name, PublicTests.cover, PublicTests.created_at, PublicTests.expire_date, (SELECT test_id FROM TempUserResult WHERE TempUserResult.phone = ?) AS FT FROM Tests LEFT JOIN TempUserResult ON TempUserResult.test_id = PublicTests.id WHERE PublicTests.id IS NOT FT AND PublicTests.id AND PublicTests.created_at <= ? AND PublicTests.expire_date >= ? AND PublicTests.grade_id = ? LIMIT ? OFFSET ?`,
          [
            studentPhone,
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
    const formattedDateTime = egyptTime.toISOString().slice(0, 19);

    const solved_test = new Promise((resolve, reject) => {
      BahaaEduConnection()
        .all(
          "SELECT TempUserResult.id FROM TempUserResult LEFT JOIN PublicTests ON PublicTests.id = TempUserResult.test_id WHERE TempUserResult.test_id = ? AND TempUserResult.phone = ? OR PublicTests.expire_date >= ? ",
          [test.test_id, test.student_phone, formattedDateTime],
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
          "SELECT question_id FROM ConnectQuestions WHERE publictest_id = ?",
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
    const formattedDateTime = egyptTime.toISOString().slice(0, 19);

    const solved_test = new Promise((resolve, reject) => {
      BahaaEduConnection()
        .all(
          "SELECT TempUserResult.id FROM TempUserResult LEFT JOIN PublicTests ON PublicTests.id = TempUserResult.test_id WHERE TempUserResult.test_id = ? OR PublicTests.expire_date >= ? ",
          [test.test_id, formattedDateTime],
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
          "SELECT question_id FROM ConnectQuestions WHERE publictest_id = ?",
          [test.test_id],
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

    const sql = `INSERT INTO TempUserAnswers(name, phone, question_id, text_answer, choice_answer, is_right, test_id) VALUES(?, ?, ?, ?, ?, ?, ?)`;
    return new Promise((resolve, reject) => {
      BahaaEduConnection()
        .run(
          sql,
          [
            test.name,
            test.phone,
            test.questionId,
            test.text_answer,
            test.choice_answer,
            test.isRight,
            test.id,
          ],
          (_, err) => {
            if (err) reject(err);
            return resolve();
          }
        )
        .close();
    });
  }
  addResult() {
    const test = this.tests;

    const sql = `INSERT INTO TempUserResult(test_id, name, phone, result, public) VALUES(?, ?, ?, ?, ?)`;
    return new Promise((resolve, reject) => {
      BahaaEduConnection()
        .run(
          sql,
          [test.id, test.student_name, test.student_phone, test.result, 0],
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
          "SELECT * FROM PublicTests WHERE grade_id = ? LIMIT ? OFFSET ?",
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

    const sql = `INSERT INTO PublicTests(test_name, grade_id, term_id, created_at, expire_date) VALUES(?, ?, ?, ?, ?)`;
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
          ],
          (res, err) => {
            if (err) reject(err);
            return resolve(res);
          }
        )
        .close();
    });
  }

  Delete() {
    const test = this.tests;
    const sql = `DELETE FROM PublicTests WHERE id = ?`;
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

    const sql = `UPDATE PublicTests SET test_name = ?, grade_id = ?, term_id = ?, created_at = ? WHERE id = ?`;
    return new Promise((resolve, reject) => {
      BahaaEduConnection()
        .run(
          sql,
          [
            test.test_name,
            test.grade_id,
            test.term_id,
            test.created_at,
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
  CheckUser() {
    const test = this.tests;

    const sql = `SELECT * FROM TempUserResult WHERE test_id = ? AND name = ? OR phone = ?`;
    return new Promise((resolve, reject) => {
      BahaaEduConnection()
        .get(
          sql,
          [test.id, test.student_name, test.student_phone],
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
          "SELECT COUNT(*) AS number_of_pass, (SELECT COUNT(*) FROM TempUserResult WHERE test_id = ?) AS total_students FROM TempUserResult WHERE test_id = ? AND result >= 50;",
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
          "SELECT AVG(result) AS average_result FROM TempUserResult WHERE test_id = ?",
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
            "SELECT question_id FROM ConnectQuestions WHERE publictest_id = ?",
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
            "SELECT TempUserResult.name, TempUserResult.phone, Grade.grade_name, TempUserResult.result FROM TempUserResult INNER JOIN PublicTests ON TempUserResult.test_id = PublicTests.id INNER JOIN Grade ON PublicTests.grade_id = Grade.id WHERE test_id = ?",
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

    const testQuestionsIds = await new Promise((resolve, reject) => {
      BahaaEduConnection()
        .all(
          `SELECT Questions.id FROM ConnectQuestions INNER JOIN Questions ON ConnectQuestions.question_id = Questions.id WHERE publictest_id = ?`,
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
          `SELECT id, question_id, text_answer, choice_answer, is_right FROM TempUserAnswers WHERE test_id = ? AND phone = ?`,
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

    return { testAnswers, studentAnswers };
  }
}

module.exports = PublicTests;
