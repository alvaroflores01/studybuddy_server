const express = require('express');
const lessonController = require('../controllers/lessonController');

const router = express.Router();

// Define routes
router.post('/', lessonController.createLesson);
router.get('/:lessonId', lessonController.getLessonById);
// Implement other routes similarly...

module.exports = router;