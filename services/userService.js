const dbConfig = require("../config/dbconfig");
const oracledb = require('oracledb');

// Service methods
const userService = {
  userExists: async(email) => {
    // console.log(`aserService.userExists: email is ${email}`);
    // console.log("Running userService.userExists");
    let connection;
    try {
      connection = await oracledb.getConnection(dbConfig);
      const result = await connection.execute(
        `SELECT * FROM USERS WHERE email = :email`, [email]
      );
      if (result.rows.length === 0) {
        console.log('user does not exist')
        return false
      }
      console.log('user does exist');
      return true;
    } catch (error) {
      console.log(`Error validating user: ${error}`);
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
    let connection;
    const { firstName, lastName, email } = userInfo;
    try {
      connection = await oracledb.getConnection(dbConfig);
      const result = await connection.execute(
        `INSERT INTO users (FIRST_NAME, LAST_NAME, EMAIL) VALUES (:firstName, :lastName, :email)` , 
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
