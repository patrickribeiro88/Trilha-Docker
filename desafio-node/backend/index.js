const express = require("express");
const mysql = require("mysql2");

const app = express();

const conn = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "senha123",
  database: "meubanco"
});

app.get("/api", (req, res) => {
  conn.query("SELECT 1 + 1 AS resultado", (err, results) => {
    if (err) {
      return res.json({ mensagem: "Erro no banco: " + err.message });
    }
    res.json({ mensagem: "API Node.js funcionando. MySQL conectado. Resultado: " + results[0].resultado });
  });
});

app.listen(3000, () => {
  console.log("API rodando na porta 3000");
});