module.exports = (server) => {
  server.get("/noticia", (req, res) => {
    // Este DB é o nome do arquivo que está sendo exportado em server.js
    const connection = server.config.db();
    const noticiaModel = server.app.models.homeModel;

    noticiaModel.getNoticia(connection, (err, result) => {
      err ? res.send(err) : res.render("sessao/noticia", { noticia: result });
    });
  });
};
