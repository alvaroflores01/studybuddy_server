const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');
const cors = require('cors');


dotenv.config();
//Middleware setup
app.use(express.json());
//Routes setup
app.use('/api/users', userRoutes);




module.exports = app;