const courseService = require('../services/courseService');

const courseController = {
    createCourse: async (req, res) => {
        const courseData = req.body;
        const newCourse = await courseService.createCourse(courseData);
        if (newCourse) {
            res.status(201).json(newCourse);
        } else {
            res.status(500).json({ message: 'Failed to create course' });
        }
    },
    getCourseById: async (req, res) => {
        const courseId = parseInt(req.params.courseId);
        const course = await courseService.getCourseById(courseId);
        if (course) {
            res.json(course);
        } else {
            res.status(404).json({ message: `Course with ID ${courseId} not found` });
        }
    },
    // Implement other controller methods similarly...
};

module.exports = courseController;