const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Diz ao Node para servir os arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal que entrega o seu index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});