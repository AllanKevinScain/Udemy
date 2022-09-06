module.exports = (server) => {
  server.get("/", (req, res) => {
    // Este DB é o nome do arquivo que está sendo exportado em server.js
    const connection = server.config.db();
    const noticiasModel = server.app.models.homeModel;

    noticiasModel.getNoticias(connection, (err, result) => {
      err ? res.send(err) : res.render("sessao/home", { noticias: result });
    });
  });
};
