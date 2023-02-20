const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
require("./db/conn");

const port = process.env.PORT || 3000;
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/booking", (req, res) => {
  res.render("booking");
});

app.listen(port, () => {
  console.log(`Listening to port no. ${port}`);
});
