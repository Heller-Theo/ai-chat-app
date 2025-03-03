const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

mongoose.set('debug', true);
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

const chatRoute = require('./routes/chat');
app.use('/chat', chatRoute);

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
