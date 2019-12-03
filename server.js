const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const view = require("ejs");
const handlers = require("./src/handlers/handlers");
const { logger } = require("./src/utils/utils");

const PORT = process.env.PORT || 8080;
const app = new express();

app.use(logger);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static("build"));
app.set("views", __dirname + "/build");
app.engine("html", view.renderFile);
app.set("view engine", "html");

app.post("/student-login", handlers.studentLogin);
app.post("/admin-login", handlers.adminLogin);
app.post("/add-book", handlers.addBook);
app.post("/assign-book", handlers.assignBook);

app.get("/books", handlers.getBooks);
app.get("/studentBooks", handlers.getStudentBooks);

app.get("*", (req, res) => {
  res.render("index.html");
});

app.listen(PORT, () => console.log("server is running on - ", PORT));
