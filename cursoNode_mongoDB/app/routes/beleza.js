module.exports = (server) => {
  server.get("/beleza", (req, res) => {
    res.render("sessao/beleza");
  });
};
