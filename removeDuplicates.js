const express = require('express');
const app = express();
const port = 3000;

// Função para remover duplicatas
function removeDuplicates(inputArray) {
  return Array.from(new Set(inputArray));
}

// Rota para remover duplicatas
app.get('/remove-duplicates', (req, res) => {
  const inputArray = [1, 2, 2, 3, 4, 4, 5];
  const uniqueArray = removeDuplicates(inputArray);
  res.json({ uniqueArray });
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});