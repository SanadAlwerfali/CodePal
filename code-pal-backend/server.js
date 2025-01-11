const OpenAI = require("openai");
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const prompts = require('./prompts')
const app = express();
const PORT = 5001;
const OPENAI_API_KEY = require('../secret-key.json');

app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({ apiKey: OPENAI_API_KEY.API_KEY });


async function callOpenAI(prompt, userCode) {

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-16k",
    messages: [{ role: "system", content: `${prompt}\n \n ${userCode}` }],
    temperature: 0.3
  });
  console.log(JSON.stringify(response.choices[0].message.content));
  return (response.choices[0].message.content);
}

app.post('/api/explain', async (req, res) => {
  const { code, language } = req.body;
  try {
    const prompt = prompts.explain(language);
    const explain = await callOpenAI(prompt, code);
    res.json({ explain: explain.trim() });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Error in explaining your code" });
  }
});

app.post("/api/fix", async (req, res) => {
  const { code, language } = req.body;
  try {
    const prompt = prompts.fix(language);
    const fix = await callOpenAI(prompt, code);
    res.json({ fix: fix.trim() });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Error in fixing your code" });
  }
});

app.post("/api/style", async (req, res) => {
  const { code, language } = req.body;
  try {
    const prompt = prompts.style(language);
    console.log(prompt);
    const style = await callOpenAI(prompt, code);
    res.json({ style: style.trim() });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Error in styling your code" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
