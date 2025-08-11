const mysql = require("mysql2/promise");
const { logError, logSucces } = require("../Functions/ConsoleLogger");
module.exports = async () => {
  try {
    const db = await mysql.createConnection({
        host: "",
        user: "",
        password: "",
        database: "",
        port: 3306,
    });
    logSucces("[BDD] Connexion MySQL établie");
    return db;
  } catch (err) {
    logError("[BDD] Erreur de connexion MySQL");
    return null;
  }
};