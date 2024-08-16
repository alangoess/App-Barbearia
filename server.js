const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const db = new sqlite3.Database('./serviços/agendar/database.db'); // Salvar os dados no arquivo 'database.db'

app.use(bodyParser.json());

// Servir arquivos estáticos da pasta atual
app.use(express.static(path.join(__dirname)));

// Criar a tabela, se ainda não existir
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users (nome TEXT, telefone INTEGER, hora INTEGER)");
});

// Rota para receber os dados do formulário
app.post('/submit', (req, res) => {
    const { nome, telefone, hora } = req.body;

    // Inserir dados na tabela
    db.run(`INSERT INTO users(nome, telefone, hora) VALUES(?, ?, ?)`, [nome, telefone, hora], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Dados inseridos com sucesso!" });
    });
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});