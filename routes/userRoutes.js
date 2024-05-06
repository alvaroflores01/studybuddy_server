const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Define routes
router.post('/', userController.createUser);
router.get('/:userId', userController.getUserById);
router.put('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);

module.exports = router;
