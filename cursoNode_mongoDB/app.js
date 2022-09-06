const server = require("./config/server.js");

/* 
  Express framework NodeJS para app web
  EJS cira páginas html utilizando JS
  NODEMON escuta as mudanças no servidor e reinicia automaticamente
  NPM Gerenciador de pacotes JS.
  CommonJS é um formato de arquitetura, formato de código
  Consign é um modulo de inclusão de módulos/autoload???????????????????
*/

/*

Estas linhas de códigos não são mais necessárias por causo do consign!
// Página home
require("./app/routes/home")(server);
// Página Tecnologias
require("./app/routes/tecnologia")(server);
// Página Beleza
require("./app/routes/beleza")(server);
// Página Modas
require("./app/routes/moda")(server);
 */
server.listen(4444, () => console.log("O servidor esta rodando!"));
