const { body, validationResult } = require("express-validator");

module.exports = (server) => {
  server.get("/add-noticia", (req, res) => {
    res.render("sessao/addNoticia", { error: {}, contentExists: {} });
  });

  server.post(
    "/home/noticia-salva",
    body("titulo", "titulo é obrigatório").notEmpty(),
    body("resumo", "resumo é obrigatório").notEmpty(),
    body("autor", "autor é obrigatório").notEmpty(),
    body("conteudo", "conteudo é obrigatório").notEmpty(),
    body("resumo", "Resumo deve ter entre 10 e 100 caracteres").isLength({
      min: 10,
      max: 100,
    }),
    body("data_noticia").notEmpty().isDate({ format: "YYYY-MM-DD" }),
    (req, res) => {
      const noticia = req.body;
      const errors = validationResult(req);
      const connection = server.config.db();
      const noticiaModel = server.app.models.homeModel;

      if (!errors.isEmpty()) {
        res.render("sessao/addNoticia", {
          error: errors.array(),
          contentExists: noticia,
        });
        return;
      }

      noticiaModel.salvarNoticia(noticia, connection, (err, result) => {
        res.redirect("/");
      });
    }
  );
};
