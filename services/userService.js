const dbConfig = require("../config/dbconfig");
const oracledb = require('oracledb');

// Service methods
const userService = {

  //Returns boolean depending if email was found in database
  userExists: async(email) => {
    let connection;
    try {
      connection = await oracledb.getConnection(dbConfig);
      const result = await connection.execute(
        `SELECT * FROM USERS WHERE email = :email`, [email]
      );
      if (result.rows.length === 0) {
        return false
      }
      return true;
    } catch (error) {
      console.log(`Error verifying user in DB: ${error}`);
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (error) {
          console.error('Error closing connection:', error);
        }
      }
  }},

  createUser: async(userInfo) => {
    console.log("Attempting to create user");
    let connection;
    const { firstName, lastName, email } = userInfo;
    try {
      connection = await oracledb.getConnection(dbConfig);
      const result = await connection.execute(
        `INSERT INTO Users (user_id, first_name, last_name, email)
        VALUES (users_seq.NEXTVAL, :firstName, :lastName, :email)` , 
        [firstName, lastName, email], 
        { autoCommit: true }
      );
      console.log(`USER CREATED : ${email}`)
      // return result.rows.length ? result.rows : null;
    } catch (error) {
      console.error('Error Creating User:', error);
      return null;
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (error) {
          console.error('Error closing connection:', error);
        }
      }
    }
  },

  fetchUserCourses: async (userId) => {
    let connection;
    // userId = 1;
    try {
      connection = await oracledb.getConnection(dbConfig);
      const result = await connection.execute(
        `SELECT * FROM COURSES WHERE USER_ID = :userId` , [userId]
      );
      return result.rows.length ? result.rows : null;
    } catch (error) {
      console.error('Error getting courses by user ID:', error);
      return null;
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (error) {
          console.error('Error closing connection:', error);
        }
      }
    }
  },
  // createUser: async (userData) => {
  //   let connection;
  //   try {
  //     connection = await oracledb.getConnection(dbConfig);
  //     const result = await connection.execute(
  //       `INSERT INTO USERS (USER_ID, FIRST_NAME, LAST_NAME, EMAIL, USERNAME, PASSWORD) VALUES (:userId, :firstName, :lastName, :email, :username, :password)`,
  //       userData
  //     );
  //     return result.rowsAffected === 1 ? userData : null;
  //   } catch (error) {
  //     console.error('Error creating user:', error);
  //     return null;
  //   } finally {
  //     if (connection) {
  //       try {
  //         await connection.close();
  //       } catch (error) {
  //         console.error('Error closing connection:', error);
  //       }
  //     }
  //   }
  // },

  // getUserById: async (userId) => {
  //   let connection;
  //   try {
  //     connection = await oracledb.getConnection(dbConfig);
  //     const result = await connection.execute(
  //       `SELECT * FROM USERS WHERE USER_ID = :userId`,
  //       [userId]
  //     );
  //     return result.rows.length ? result.rows[0] : null;
  //   } catch (error) {
  //     console.error('Error getting user by ID:', error);
  //     return null;
  //   } finally {
  //     if (connection) {
  //       try {
  //         await connection.close();
  //       } catch (error) {
  //         console.error('Error closing connection:', error);
  //       }
  //     }
  //   }
  // },

  // Implement other CRUD operations similarly...
};

module.exports = userService;
