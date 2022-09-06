module.exports = () => {
  this.getNoticias = (connection, callBack) => {
    connection.query("select * from noticias", callBack);
  };

  this.getNoticia = (connection, callBack) => {
    connection.query("select * from noticias where idnoticias = 1", callBack);
  };

  this.salvarNoticia = (noticia, connection, callBack) => {
    connection.query("insert into noticias set ? ", noticia, callBack);
  };

  return this;
};
