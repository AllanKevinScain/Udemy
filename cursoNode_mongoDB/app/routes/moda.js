module.exports = (server) => {
  server.get("/moda", (req, res) => {
    res.render("sessao/moda");
  });
};
