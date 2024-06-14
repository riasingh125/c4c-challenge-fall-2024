import express from 'express';
import axios from 'axios';

const router = express.Router();
const apiKey = process.env.GOOGLE_API_KEY;

console.log('Google API Key:', apiKey); // Log the API key to ensure it's being read

router.post('/', async (req, res) => {
  const { text, targetLang } = req.body;
  if (!text || !targetLang) {
    return res.status(400).send('Bad Request: Missing text or targetLang parameter');
  }

  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

  try {
    const response = await axios.post(url, {
      q: text,
      target: targetLang
    });
    const translation = response.data.data.translations[0].translatedText;
    res.json({ translatedText: translation });
  } catch (error) {
    console.error('Error translating text:', error.response ? error.response.data : error.message); // Log the full error
    res.status(500).send('Translation failed');
  }
});

export default router;
