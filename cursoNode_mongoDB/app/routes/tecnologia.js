module.exports = (server) => {
  server.get("/tecnologia", (req, res) => {
    res.render("sessao/tecnologia");
  });
};
