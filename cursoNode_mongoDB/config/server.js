const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
const app = express();

// gerador de views(códigos html)
app.set("view engine", "ejs");

// pesquisa de páginas
app.set("views", "./app/views");

// bodyParser funciona como um middlewhere
app.use(bodyParser.urlencoded({ extended: true }));

// diretório para fazer os requireds, inclusões de rotas
consign()
  .include("app/routes")
  .then("config/db.js")
  .then("app/models")
  .into(app);

module.exports = app;
