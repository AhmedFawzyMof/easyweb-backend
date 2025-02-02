const express = require("express");
const router = express.Router();
const { DatabaseConnection } = require("../config/index");

router.get("/", async (req, res) => {
  if (!req.cookies.lang) {
    res.cookie("lang", "en");
  }
  const Projects = await new Promise((resolve, reject) =>
    DatabaseConnection()
      .all(`SELECT * FROM projects`, (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      })
      .close()
  );
  res.render("index", { projects: Projects, lang: req.cookies.lang });
});

router.get("/ar", async (req, res) => {
  res.cookie("lang", "ar");
  res.redirect("/");
});

router.get("/en", async (req, res) => {
  res.cookie("lang", "en");
  res.redirect("/");
});

router.post("/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  DatabaseConnection()
    .run(
      "INSERT INTO `contact_us` (`name`,`email`,`phone`,`message`) VALUES(?,?,?,?)",
      [name, email, phone, message],
      function (err) {
        if (err) {
          console.log(err);
        }
      }
    )
    .close();

  res.redirect("/");
});

module.exports = router;
