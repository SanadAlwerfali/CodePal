const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.json());

const OPENAI_API_KEY = 'LLM_API_KEY'; 

app.post('/api/explain', async (req, res) => {
//   const { code, language } = req.body;

//   try {
//     const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
//       prompt: `Explain the following ${language} code:\n\n${code}`,
//       max_tokens: 100,
//       n: 1,
//       stop: null,
//       temperature: 0.5,
//     }, {
//       headers: {
//         'Authorization': `Bearer ${OPENAI_API_KEY}`,
//         'Content-Type': 'application/json'
//       }
//     });

//     res.json(response.data.choices[0].text);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Something went wrong' });
//   }
    const { code, language } = req.body;
    res.json(`This is a mock explanation for the given ${language} code.`);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
