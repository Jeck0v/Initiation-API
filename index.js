// npm install express
// npm init -y  
// node index.js

const express = require('express');
const app = express();
app.get('/', (req, res) => {
    console.log(req.query.name);
  res.send('Salut, monde du développement !');
});
app.get('/hello', (req, res) => {
    const name = req.query.name;
    res.send(`Hello, ${name}!`);
});
app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});

