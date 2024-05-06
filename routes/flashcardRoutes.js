const express = require('express');
const flashcardController = require('../controllers/flashcardController');

const router = express.Router();

// Define routes
router.post('/', flashcardController.createFlashcard);
router.get('/:flashcardId', flashcardController.getFlashcardById);
// Implement other routes similarly...

module.exports = router;
