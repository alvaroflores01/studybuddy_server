const userService = require('../services/userService');

const userController = {
    fetchUser: async (req,res) => {
        console.log(req.body);
        const email = req.body.email;
        const found = await userService.userExists(email);
        console.log(`User: ${email}, exists: ${found}`);
    },

    fetchUserCourses: async (req, res) => {
        const userId = parseInt(req.params.userId);
        // const userId = 1;
        // console.log(userId);
        const userCourses = await userService.fetchUserCourses(userId);
        if (userCourses) {
            res.status(200).json(userCourses);
            
        } else {
            res.status(404).json({ message: `User with ID ${userId} not found` });
        }
    }, 
    
    fetchUserInfoWithGoogleToken: async() => {
        
    }
};
    // createUser: (req, res) => {
    //     const userData = req.body;
    //     const newUser = userService.createUser(userData);
    //     res.status(201).json(newUser);
    // },
    // getUserById: (req, res) => {
    //     const userId = parseInt(req.params.userId);
    //     const user = userService.getUserById(userId);
    //     if (user) {
    //         res.json(user);
    //     } else {
    //         res.status(404).json({ message: `User with ID ${userId} not found` });
    //     }
    // },
    // updateUser: (req, res) => {
    //     const userId = parseInt(req.params.userId);
    //     const newData = req.body;
    //     const updatedUser = userService.updateUser(userId, newData);
    //     if (updatedUser) {
    //         res.json(updatedUser);
    //     } else {
    //         res.status(404).json({ message: `User with ID ${userId} not found` });
    //     }
    // },
    // deleteUser: (req, res) => {
    //     const userId = parseInt(req.params.userId);
    //     const deletedUser = userService.deleteUser(userId);
    //     if (deletedUser) {
    //         res.json(deletedUser);
    //     } else {
    //         res.status(404).json({ message: `User with ID ${userId} not found` });
    //     }
    // },
// };

module.exports = userController;
