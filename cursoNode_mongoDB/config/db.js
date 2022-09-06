const mysql = require("mysql2");
const connMySQL = () => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "portal_noticias",
    port: 3306,
  });

  console.log("Uma conexão com o Mysql foi estabelecida!");

  return connection;
};

module.exports = () => {
  return connMySQL;
};
