const userService = require('../services/userService');

const userController = {
    createUser: (req, res) => {
        const userData = req.body;
        const newUser = userService.createUser(userData);
        res.status(201).json(newUser);
    },
    getUserById: (req, res) => {
        const userId = parseInt(req.params.userId);
        const user = userService.getUserById(userId);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: `User with ID ${userId} not found` });
        }
    },
    updateUser: (req, res) => {
        const userId = parseInt(req.params.userId);
        const newData = req.body;
        const updatedUser = userService.updateUser(userId, newData);
        if (updatedUser) {
            res.json(updatedUser);
        } else {
            res.status(404).json({ message: `User with ID ${userId} not found` });
        }
    },
    deleteUser: (req, res) => {
        const userId = parseInt(req.params.userId);
        const deletedUser = userService.deleteUser(userId);
        if (deletedUser) {
            res.json(deletedUser);
        } else {
            res.status(404).json({ message: `User with ID ${userId} not found` });
        }
    }
};

module.exports = userController;