const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();
const PORT = 3000;

app.get('/scrape', async (req, res) => {
  try {
    const url = 'https://XXXXXXX.com';
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const title = $('title').text();
    const metaDescription = $('meta[name="description"]').attr('content');
    res.json({ title, metaDescription });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur détecter' });
  }
});
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
