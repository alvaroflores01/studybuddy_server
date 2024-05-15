const express = require('express');
const googleAuthController = require('../controllers/googleAuthController');

const router = express.Router();

// Define routes
router.post('/google', googleAuthController.getUser);
router.post('/google/refresh-token', googleAuthController.refreshToken);
// Implement other routes similarly...

module.exports = router;