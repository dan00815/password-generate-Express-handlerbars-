const express = require("express");
const app = express();
const port = 3000;
const { engine } = require("express-handlebars");
const generatePWD_function = require("./generate");

app.use(express.static("public"));
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const options = req.body;
  const PWDResult = generatePWD_function(options);
  res.render("index", { PWDResult, options, showResult: true });
});

app.listen(port, () => {
  console.log("連線成功");
});
