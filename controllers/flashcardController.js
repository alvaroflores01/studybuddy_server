const flashcardService = require('../services/flashcardService');

const flashcardController = {
    createFlashcard: async (req, res) => {
        const flashcardData = req.body;
        const newFlashcard = await flashcardService.createFlashcard(flashcardData);
        if (newFlashcard) {
            res.status(201).json(newFlashcard);
        } else {
            res.status(500).json({ message: 'Failed to create flashcard' });
        }
    },
    getFlashcardById: async (req, res) => {
        const flashcardId = parseInt(req.params.flashcardId);
        const flashcard = await flashcardService.getFlashcardById(flashcardId);
        if (flashcard) {
            res.json(flashcard);
        } else {
            res.status(404).json({ message: `Flashcard with ID ${flashcardId} not found` });
        }
    },
    // Implement other controller methods similarly...
};

module.exports = flashcardController;
