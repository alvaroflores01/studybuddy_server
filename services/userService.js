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
      // console.log(result.rows);
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
    // console.log("Attempting to create user");
    let connection;
    const { firstName, lastName, email } = userInfo;
    try {
      connection = await oracledb.getConnection(dbConfig);
      const result = await connection.execute(
        `INSERT INTO Users (first_name, last_name, email)
        VALUES (:firstName, :lastName, :email)` , 
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

  fetchUserData: async (email) => {
    let connection;

    try {
      // console.log("Fetch user data service running")
      // console.log(email);
      connection = await oracledb.getConnection(dbConfig);
      const result = await connection.execute(
        `  SELECT json_object(
          'user_email' VALUE u.email,
          
          'courses' VALUE json_arrayagg(
              json_object(
                  'course_id' VALUE c.course_id,
                  'course_name' VALUE c.course_name,
                  
                  'lessons' VALUE (
                      
                      SELECT json_arrayagg(
                          json_object(
                              'lesson_id' VALUE l.lesson_id,
                              'lesson_name' VALUE l.lesson_name,
                              
                              --START OF FLASHCARDS
                              'flashcards' VALUE (
                                  SELECT json_arrayagg(
                                      json_object(
                                          'flashcard_id' VALUE f.flashcard_id,
                                          'question' VALUE f.question,
                                          'answer' VALUE f.answer
                                      )
                                  )
                                  FROM flashcards f
                                  WHERE f.lesson_id = l.lesson_id
                              )
                          ) FORMAT JSON
                      
                      
                      ) 
                      --END OF SELECT FOR LESSONS
                      FROM lessons l
                      WHERE l.course_id = c.course_id            
                  ) FORMAT JSON
                  --END OF VALUES FOR LESSONS
                  
              ) FORMAT JSON
          ) FORMAT JSON
          
      ) AS json_output
      FROM users u
      JOIN courses C on c.user_id = u.email
      WHERE u.email = :email
      GROUP BY u.email` , [email]
      );
      return result.rows.length ? result.rows : null;
    } catch (error) {
      console.error('Error getting courses by user email:', error);
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


};

module.exports = userService;
