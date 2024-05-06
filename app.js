const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const lessonRoutes = require('./routes/lessonRoutes');
const flashcardRoutes = require('./routes/flashcardRoutes');
const cors = require('cors');


dotenv.config();
//Middleware setup
app.use(express.json());
//Routes setup
app.use('/api/users', userRoutes);




module.exports = app;