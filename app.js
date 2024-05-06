const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');
const cors = require('cors');


dotenv.config();
//Middleware setup
app.use(express.json());
app.use('/api/users', userRoutes);
//Routes setup



module.exports = app;