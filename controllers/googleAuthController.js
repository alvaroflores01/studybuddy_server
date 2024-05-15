const authService = require('../services/googleAuthService');

const authController = {
    getUser: async (req, res) => {
        // console.log("Running Auth Controller");
        const  tokenInfo = await authService.getToken(req.body.code);
        // console.log(`Token info ${tokenInfo} . @authController/getUser`);
        if (tokenInfo) {
            // console.log(tokenInfo);
            res.json(tokenInfo);
        } else {
            res.status(404).json({ message: `authController did not receive token from authService.getToken` });
        }
        
    },

    refreshToken: async (req, res) => {
        const { credentials } = await authService.refreshToken(req.body.refreshToken);
        if (credentials) {
            res.json(credentials);
        } else {
            res.status(404).json({ message: `authController did not receive credentials from authService.refreshToken` });
        }
    },
    // Implement other controller methods similarly...
};

module.exports = authController;