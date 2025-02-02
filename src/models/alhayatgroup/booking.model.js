const { ElhayaGroupConnection } = require("../../utils/databaseConection");

function changeDateFormat(cdate) {
  let timestamp = Date.parse(cdate);
  let date = new Date(timestamp);
  let output = date.toISOString().slice(0, 10).replace(/-/g, "/");
  return output;
}

const booking = {
  AddBooking: (book) => {
    return new Promise((resolve, reject) => {
      const createdAt = new Date();
      ElhayaGroupConnection()
        .run(
          "INSERT INTO booking (name, email, phone, gender, religion, service, date, `created_at`) VALUES(?, ?, ?, ?, ?, ?, ?, ?)",
          [
            book.name,
            book.email,
            book.phone,
            book.gender,
            book.religion,
            book.service,
            book.date,
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
  GetAllBooking: () => {
    return new Promise((resolve, reject) => {
      ElhayaGroupConnection()
        .all(`SELECT * FROM booking`, [], (err, rows) => {
          if (err) reject(err);
          rows.forEach((book) => {
            const newDate = changeDateFormat(book.date);
            book.date = newDate;
          });
          resolve(rows);
        })
        .close();
    });
  },
  DeleteBooking: async (id) => {
    return new Promise((resolve, reject) => {
      ElhayaGroupConnection()
        .run("DELETE FROM `booking` WHERE id = ?", [id], (err) => {
          if (err) reject(err);
          resolve();
        })
        .close();
    });
  },
};

module.exports = booking;
