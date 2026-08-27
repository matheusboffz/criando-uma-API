const express = require('express');
const cors = require('cors');

const app = express();

// Libera o acesso para o Frontend consumir a API sem bloqueios de CORS
app.use(cors());

// Rota para consultar a data e hora
app.get('/api/datetime', (req, res) => {
  const agora = new Date();
  res.json({
    data: agora.toLocaleDateString('pt-BR'),
    hora: agora.toLocaleTimeString('pt-BR')
  });
});

// Define a porta dinâmica para o Render ou a porta 3000 localmente
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});