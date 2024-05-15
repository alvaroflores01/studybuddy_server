const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Define routes
// router.post('/', userController.fetchUserCourses);
router.post('/valid', userController.fetchUser);
router.get('/:userId', userController.fetchUserCourses);
// router.put('/:userId', userController.updateUser);
// router.delete('/:userId', userController.deleteUser);


module.exports = router;
