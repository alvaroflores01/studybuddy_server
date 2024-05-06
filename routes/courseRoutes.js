const express = require('express');
const courseController = require('../controllers/courseController');

const router = express.Router();

// Define routes
router.post('/', courseController.createCourse);
router.get('/:courseId', courseController.getCourseById);
// Implement other routes similarly...

module.exports = router;