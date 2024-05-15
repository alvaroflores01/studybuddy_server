const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const lessonRoutes = require('./routes/lessonRoutes');
const flashcardRoutes = require('./routes/flashcardRoutes');
const authRoutes = require('./routes/authRoutes');
// const cors = require('cors');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
//Middleware setup

app.use(express.json());
app.use(cors({
    Origins: ['http://localhost:5173'],
    Methods: ['GET', 'POST']
}))
//Routes setup
app.use('/user', userRoutes);
app.use('/auth', authRoutes);



module.exports = app;