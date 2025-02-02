const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const path = require("path");

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(express.static("public"));
app.use("/", require("./routes/main.router"));
// eshopper-website
app.use("/api/v1", require("./routes/eshopper/Index.route"));
app.use("/api/v1/products", require("./routes/eshopper/Products.route"));
app.use("/api/v1/category", require("./routes/eshopper/Categories.route"));
app.use("/api/v1/order", require("./routes/eshopper/Orders.route"));
app.use("/api/v1/user", require("./routes/eshopper/Users.route"));
// eshopper-website
// talgtna-website
app.use("/talgtna/api", require("./routes/talgtna/Index.route"));
app.use("/talgtna/api/company", require("./routes/talgtna/Companies.route"));
app.use("/talgtna/api/products", require("./routes/talgtna/Products.route"));
app.use("/talgtna/api/category", require("./routes/talgtna/Categories.route"));
app.use("/talgtna/api/order", require("./routes/talgtna/Orders.route"));
app.use("/talgtna/api/user", require("./routes/talgtna/Users.route"));
// talgtna-website
// alhayah-website
app.use("/elhayatgroup", require("./routes/alhayatgroup/router"));
// alhayah-website
// bahaaedu
app.use("/bahaaapi/student", require("./routes/bahaaedu/Student.Router"));
app.use("/bahaaapi/tests", require("./routes/bahaaedu/Tests.Router"));
app.use(
  "/bahaaapi/public_tests",
  require("./routes/bahaaedu/PublicTests.Router")
);
app.use("/bahaaapi/homeworks", require("./routes/bahaaedu/Homeworks.Router"));
app.use("/bahaaapi/questions", require("./routes/bahaaedu/Questions.Router"));
app.use("/bahaaapi/teacher", require("./routes/bahaaedu/Teacher.Router"));
app.use("/bahaaapi/grades", require("./routes/bahaaedu/Grades.Router"));
app.use("/bahaaapi/videos", require("./routes/bahaaedu/Videos.Router"));
// bahaaedu
app.get("*", (req, res, next) => {
  if (req.path.startsWith("/eshopper")) {
    res.sendFile(
      path.resolve(__dirname, "..", "public/eshopper/frontend", "index.html")
    );
  } else if (req.path.startsWith("/talgtna")) {
    res.sendFile(
      path.resolve(__dirname, "..", "public/talgtna/frontend", "index.html")
    );
  } else if (req.path.startsWith("/bahaaedu")) {
    res.sendFile(path.join(__dirname, "..", "public/bahaaedu", "index.html"));
  } else {
    next();
  }
});

app.listen(port, () => console.log(`http://localhost:${port}`));
