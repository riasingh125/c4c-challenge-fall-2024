import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TranslatePage = () => {
  const [language, setLanguage] = useState('');
  const [originalText, setOriginalText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  useEffect(() => {
    // Save the original text when the component mounts
    setOriginalText(document.getElementById('content').innerText);
  }, []);

  const handleLanguageChange = async (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);

    if (selectedLanguage) {
      console.log("Selected language:", selectedLanguage);
      try {
        const response = await axios.post('http://localhost:4000/translate', {
          text: originalText,
          targetLang: selectedLanguage,
        });
        console.log("Translation response:", response.data);
        setTranslatedText(response.data.translatedText);
        document.getElementById('content').innerText = response.data.translatedText;
      } catch (error) {
        console.error('Error translating text:', error);
        if (error.response) {
          console.error('Error response data:', error.response.data);
        }
      }
    } else {
      // Reset to original text if no language is selected
      setTranslatedText(originalText);
      document.getElementById('content').innerText = originalText;
    }
  };

  return (
    <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
      <label htmlFor="language">Choose a language:</label>
      <select id="language" onChange={handleLanguageChange}>
        <option value="">Select a language</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        {/* Add more languages as needed */}
      </select>
      {language && <p>Selected Language: {language}</p>}
      <div id="translatedContent">{translatedText}</div>
    </div>
  );
};

export default TranslatePage;
