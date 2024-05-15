const dbConfig = require("../config/dbconfig");
const oracledb = require('oracledb');
const axios = require('axios');
const { OAuth2Client } = require('google-auth-library');
require('dotenv').config();

// Service methods
const authService = {
  getToken: async (code) => {
    const oAuth2Client = new OAuth2Client(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        'postmessage',
    );
    try {
        const {tokens} = await oAuth2Client.getToken(code);
        // console.log(`Tokens:${tokens.access_token} @authService/getToken`);
        if (tokens) {
          // console.log(`Running IF TOKENS @ authService/getToken`)
          const userInfo = await  axios.get('https://www.googleapis.com/oauth2/v3/userinfo', { headers: { Authorization: `Bearer ${tokens.access_token}` } }
          );
          // const tokenInfo = await oAuth2Client.getTokenInfo(tokens.access_token);
          // console.log(userInfo.data);
          return userInfo.data;
        }
        
        // return response;
    } catch {
        console.log("Error at authService (getToken)");
        return null;
    }
  },
  

  refreshToken: async (refreshToken) => {
    try {
        const user = new UserRefreshClient(
            process.env.GOOGLE_CLIENT_ID,
            process.env.GOOGLE_CLIENT_SECRET, 
            refreshToken);
        return await user.refreshAccessToken();
    } catch (error) {
      console.error('Error getting refresh token:', error);
      return null;
    } 
  },

  // Implement other CRUD operations similarly...
};

module.exports = authService;