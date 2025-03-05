const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

// Hugging Face API URL
const HUGGING_FACE_API_URL = 'https://api-inference.huggingface.co/models/gpt2';
const API_KEY = process.env.HUGGING_FACE_API_KEY;

// Post request to chat route
router.post('/chat', async (req, res) => {
    const { message } = req.body;
    try {
        const response = await axios.post(
            HUGGING_FACE_API_URL, 
            {
                inputs: message,
                parameters: {
                    max_length: 150, // Set token limit here
                },
            },
            { 
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                }
            }
        );

        const aiReply = response.data[0]?.generated_text || 'Sorry, no reply from AI.';
        res.json({ reply: aiReply });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;