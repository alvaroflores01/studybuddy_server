const lessonService = require('../services/lessonService');

const lessonController = {
    createLesson: async (req, res) => {
        const lessonData = req.body;
        const newLesson = await lessonService.createLesson(lessonData);
        if (newLesson) {
            res.status(201).json(newLesson);
        } else {
            res.status(500).json({ message: 'Failed to create lesson' });
        }
    },
    getLessonById: async (req, res) => {
        const lessonId = parseInt(req.params.lessonId);
        const lesson = await lessonService.getLessonById(lessonId);
        if (lesson) {
            res.json(lesson);
        } else {
            res.status(404).json({ message: `Lesson with ID ${lessonId} not found` });
        }
    },
    // Implement other controller methods similarly...
};

module.exports = lessonController;
