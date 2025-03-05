const express = require('express');
const { OpenAI } = require('openai');
const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

router.post('/chat_openai', async (req, res) => {
    const { message } = req.body;
    try {
        const response = await openai.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: "user", content: message }],
            max_tokens: 150,
        });
        res.json({ reply: response.choices[0].message.content });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
