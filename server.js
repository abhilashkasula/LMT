const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const view = require("ejs");

const PORT = process.env.PORT || 8080;
const app = new express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static("build"));
app.set("views", __dirname + "/build");
app.engine("html", view.renderFile);
app.set("view engine", "html");

app.get("*", (req, res) => {
  res.render("index.html");
});

app.listen(PORT, () => console.log("server is running on - ", PORT));
