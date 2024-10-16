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
    db.run("CREATE TABLE IF NOT EXISTS users (nome TEXT, telefone INTEGER, hora INTEGER, data TEXT)");
});

// Rota para receber os dados do formulário
app.post('/submit', (req, res) => {
    const { nome, telefone, hora, data} = req.body;
    
    db.get('SELECT nome from users WHERE nome = ?', [nome], (err, row) => {
        if(err){
            return res.status(500).json({error: err.message});
        } if(row){
          return res.status(400).json({error: 'ERRO! NOME JÁ EXISTE NA TABELA'});

        }

    // Inserir dados na tabela
    db.run(`INSERT INTO users(nome, telefone, hora, data) VALUES(?, ?, ?, ?)`, [nome, telefone, hora, data], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Dados inseridos com sucesso!" });
    });
  });
});

app.get('/dados', (req, res) => {
    db.all('SELECT nome, telefone, hora, data FROM users ORDER BY data ASC', (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});


app.delete('/delete', (req, res) => {
   const {nome} = req.body;

   db.run('DELETE FROM users WHERE nome = ?', [nome], function(err){
    if(err){
        return res.status(500).json({error: err.message});
    }
    if(this.changes === 0){
        return res.status(400).json({message: "Usuário não encontrado!"});
    }
    res.json({message: "Usuário deletado com sucesso!"});

   });
});

// Rota para servir a página agendar
app.get('./page-agendar/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', './page-agendar/index.html'));
});

app.get('./historico/historico.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', './historico/historico.html'));
});


// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
