const userService = require('../services/userService');

const userController = {

    fetchUser: async (req,res) => {
        const {firstName, lastName, email} = req.body;
        // console.log(`${firstName}, ${lastName}, ${email}`);
        const existingUser = await userService.userExists(email);

        if (!existingUser) {
            await userService.createUser({firstName: firstName, lastName: lastName, email: email});
            
        } 
        //Fetch user data
        const userData = await userService.fetchUserData(email);
        // console.log(`userData: ${userData} @userController, fetchUser`)
        res.status(200).json(userData);
    },

    fetchUserCourses: async (req, res) => {
        const userId = parseInt(req.params.userId);
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


module.exports = userController;
