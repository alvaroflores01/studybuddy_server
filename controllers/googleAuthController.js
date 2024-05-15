const authService = require('../services/googleAuthService');

const authController = {
    getUserInfo: async (req, res) => {
        const code = req.body.code;
        const token = await authService.getToken(code);
        const payload = await authService.verifyToken(token.id_token);
        if (payload) {
            res.status(200).json({ email: payload.email, firstName: payload.given_name, lastName: payload.family_name});
        } else {
            res.status(404).json({ message: `Failed to get payload @authController` });
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