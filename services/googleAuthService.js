const dbConfig = require("../config/dbconfig");
const oracledb = require('oracledb');
const axios = require('axios');
const { OAuth2Client } = require('google-auth-library');
require('dotenv').config();

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'postmessage',
);
// Service methods
const authService = {
  getToken: async (code) => {
    try {
        const { tokens } = await client.getToken(code);
        if (tokens) {
          return tokens;
        }
        
    } catch {
        console.log("Error at authService (getToken)");
        return null;
    }
  },  
  verifyToken: async(idToken) => {
    // console.log("Running verify")
    const ticket = await client.verifyIdToken({idToken: idToken, audience: process.env.GOOGLE_CLIENT_ID });
    const payload = ticket.getPayload();
    return payload;
    // console.log(payload);
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

};

module.exports = authService;