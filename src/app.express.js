// Correto (use import, NÃO require)
import express from 'express';

const app = express();
const PORT = 3000;

app.get('/hello', (req, res) => {
    res.json({
        message: "API REST com Node.js funcionando!"
    });
});

// Rota raiz só para teste (opcional)
app.get('/', (req, res) => {
    res.json({
        message: "Bem-vindo à API! Use /hello para testar.",
        status: "online"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});