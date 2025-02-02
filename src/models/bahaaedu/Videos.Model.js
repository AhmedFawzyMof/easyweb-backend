const { BahaaEduConnection } = require("../../utils/databaseConection");

class VideosModel {
  constructor(video) {
    this.video = video;
  }
  getAll() {
    const { video } = this;
    let offset = video.limit - 30;

    return new Promise((resolve, reject) => {
      BahaaEduConnection()
        .all(
          "SELECT * FROM Videos WHERE grade_id = ? AND term_id = ? LIMIT ? OFFSET ?",
          [video.stage, video.term, 30, offset],
          (err, rows) => {
            if (err) reject(err);
            resolve(rows);
          }
        )
        .close();
    });
  }

  GetAllVideos() {
    const { grade_id, limit } = this.video;
    return new Promise((resolve, reject) => {
      const Limit = parseInt(limit);
      const Offset = Limit - 30;
      const inputs = [grade_id, Limit, Offset];
      //   if (grade !== 9) {
      //     inputs.push(term);
      //   }
      const sql = `
          SELECT Videos.id, Videos.title, Videos.link FROM Videos WHERE Videos.grade_id = ? ${
            grade_id !== 9 ? "AND Videos.term_id = ?" : ""
          } LIMIT ? OFFSET ?`;
      BahaaEduConnection()
        .all(sql, inputs, (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        })
        .close();
    });
  }

  Create() {
    const { video } = this;

    const sql = `INSERT INTO Videos(title, link, grade_id, term_id) VALUES(?, ?, ?, ?)`;
    return new Promise((resolve, reject) => {
      BahaaEduConnection()
        .run(
          sql,
          [video.title, video.link, video.grade_id, video.term_id],
          (res, err) => {
            if (err) reject(err);
            return resolve(res);
          }
        )
        .close();
    });
  }

  Update() {
    const { video } = this;

    const sql = `UPDATE Videos SET title = ?, link = ?, grade_id = ?, term_id = ? WHERE id = ?`;
    return new Promise((resolve, reject) => {
      BahaaEduConnection()
        .run(
          sql,
          [video.title, video.link, video.grade_id, video.term_id, video.id],
          (err, res) => {
            if (err) reject(err);
            return resolve(res);
          }
        )
        .close();
    });
  }

  async Delete() {
    const { video } = this;

    const sql = `DELETE FROM Videos WHERE id = ?`;
    return new Promise((resolve, reject) => {
      BahaaEduConnection()
        .run(sql, [video.id], (err, res) => {
          if (err) reject(err);
          return resolve(res);
        })
        .close();
    });
  }

  async Ditails() {
    const { video } = this;
    const passRate = await new Promise((resolve, reject) => {
      BahaaEduConnection()
        .get(
          "SELECT COUNT(*) AS number_of_pass, (SELECT COUNT(*) FROM VideoResult WHERE video_id = ?) AS total_students FROM VideoResult WHERE video_id = ? AND result >= 50;",
          [video.id, video.id],
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
          "SELECT AVG(result) AS average_result FROM VideoResult WHERE video_id = ?",
          [video.id],
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
    if (video.type === "questions") {
      const questionsConnected = await new Promise((resolve, reject) => {
        BahaaEduConnection()
          .all(
            "SELECT question_id FROM ConnectQuestions WHERE video_id = ?",
            [video.id],
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
            "SELECT User.id, User.username, Grade.grade_name, VideoResult.result FROM VideoResult INNER JOIN User ON VideoResult.user_id = User.id INNER JOIN Grade ON User.grade_id = Grade.id WHERE video_id = ?",
            [video.id],
            (err, rows) => {
              if (err) reject(err);
              resolve(rows);
            }
          )
          .close();
      });
    }

    const video_link = await new Promise((resolve, reject) => {
      BahaaEduConnection()
        .get("SELECT link FROM Videos WHERE id = ?", [video.id], (err, row) => {
          if (err) reject(err);
          if (row == undefined) reject("معرف الفيديو غير صالح");
          resolve(row);
        })
        .close();
    });

    return {
      passRate,
      avgGrade,
      data,
      video_link,
    };
  }

  async getVideoQuestions() {
    const { video } = this;

    const solved_videos = new Promise((resolve, reject) => {
      BahaaEduConnection()
        .all(
          "SELECT id FROM VideoHistory WHERE video_id = ? AND user_id = ?",
          [video.id, video.student_id],
          (err, rows) => {
            if (err) reject(err);
            resolve(rows);
          }
        )
        .close();
    });
    const solved = await solved_videos;
    let video_questions = [];
    if (solved.length === 0) {
      const questions_ids = new Promise((resolve, reject) => {
        BahaaEduConnection()
          .all(
            "SELECT question_id FROM ConnectQuestions WHERE video_id = ?",
            [video.id],
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

      video_questions = await new Promise((resolve, reject) => {
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
    const video_ditails = await new Promise((resolve, reject) => {
      BahaaEduConnection()
        .get("SELECT * FROM Videos WHERE id = ?", [video.id], (err, row) => {
          if (err) reject(err);
          resolve(row);
        })
        .close();
    });

    if (solved.length !== 0) {
      Object.assign(video_ditails, { isSolved: true });
    }

    return {
      video_ditails,
      video_questions,
    };
  }

  async getVideoQuestionsForAnswer() {
    const { video } = this;

    const solved_videos = new Promise((resolve, reject) => {
      BahaaEduConnection()
        .all(
          "SELECT id FROM VideoHistory WHERE user_id = ?",
          [video.student_id],
          (err, rows) => {
            if (err) reject(err);
            resolve(rows);
          }
        )
        .close();
    });
    const solved = await solved_videos;
    if (solved.length > 0) {
      return new Error("video is already solved");
    }
    const questions_ids = new Promise((resolve, reject) => {
      BahaaEduConnection()
        .all(
          "SELECT question_id FROM ConnectQuestions WHERE video_id = ?",
          [video.id],
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
    const { video } = this;
    const sql = `INSERT INTO VideoAnswers(user_id, question_id, text_answer, choice_answer, is_right, video_id) VALUES(?, ?, ?, ?, ?, ?)`;
    return new Promise((resolve, reject) => {
      const stmt = BahaaEduConnection().prepare(sql);
      for (const answer of video.answers) {
        stmt.run(
          [
            answer.student_id,
            answer.question_id,
            answer.text_answer,
            answer.choice_answer,
            answer.isRight,
            answer.video_id,
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
      resolve();
    });
  }

  addResult() {
    const { video } = this;
    const currentDate = new Date();
    const egyptTime = new Date(
      currentDate.toLocaleString("en-US", { timeZone: "Africa/Cairo" })
    );
    const formattedDateTime = egyptTime.toISOString().slice(0, 19);

    const AddToHistorySql = `INSERT INTO VideoHistory(video_id, user_id) VALUES(?, ?)`;
    new Promise((resolve, reject) => {
      BahaaEduConnection()
        .run(AddToHistorySql, [video.id, video.studentId], (res, err) => {
          if (err) reject(err);
          return resolve(res);
        })
        .close();
    });

    const AddToResultSql = `INSERT INTO VideoResult(video_id, user_id, result, public, submitted_at) VALUES(?, ?, ?, ?, ?)`;
    return new Promise((resolve, reject) => {
      BahaaEduConnection()
        .run(
          AddToResultSql,
          [video.id, video.studentId, video.result, 0, formattedDateTime],
          (res, err) => {
            if (err) reject(err);
            return resolve(res);
          }
        )
        .close();
    });
  }

  async Answers() {
    const { video } = this;

    const published = await new Promise((resolve, reject) => {
      BahaaEduConnection()
        .get(
          "SELECT public FROM VideoResult WHERE video_id = ? AND user_id = ?",
          [video.id, video.student_id],
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

    const videoQuestionsIds = await new Promise((resolve, reject) => {
      BahaaEduConnection()
        .all(
          `SELECT Questions.id FROM ConnectQuestions INNER JOIN Questions ON ConnectQuestions.question_id = Questions.id WHERE video_id = ?`,
          [video.id],
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
          `SELECT id, question_id, text_answer, choice_answer, is_right FROM VideoAnswers WHERE video_id = ? AND user_id = ?`,
          [video.id, video.student_id],
          (err, rows) => {
            if (err) reject(err);
            resolve(rows);
          }
        )
        .close();
    });

    const videoAnswers = await new Promise((resolve, reject) => {
      BahaaEduConnection()
        .all(
          `SELECT Questions.id, Questions.question, Questions.grade_id, Questions.term_id, Questions.bank, Questions.image, QuestionChoices.the_choice, QuestionChoices.is_right_choice, QuestionTextAnswers.the_answer From Questions LEFT JOIN QuestionChoices ON QuestionChoices.question_id = Questions.id LEFT JOIN QuestionTextAnswers ON QuestionTextAnswers.question_id = Questions.id  WHERE Questions.id IN (${videoQuestionsIds
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

    return { videoAnswers, studentAnswers, published };
  }
}

module.exports = VideosModel;
