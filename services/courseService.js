const dbConfig = require("../config/dbconfig");
const oracledb = require('oracledb');
// Service methods
const courseService = {
  createCourse: async (courseData) => {
    let connection;
    try {
      connection = await oracledb.getConnection(dbConfig);
      const result = await connection.execute(
        `INSERT INTO COURSES (COURSE_ID, COURSE_NAME, COURSE_PROGRESS, LAST_ACCESSED, USER_ID) VALUES (:courseId, :courseName, :courseProgress, :lastAccessed, :userId)`,
        courseData
      );
      return result.rowsAffected === 1 ? courseData : null;
    } catch (error) {
      console.error('Error creating course:', error);
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

  getCourseById: async (courseId) => {
    let connection;
    try {
      connection = await oracledb.getConnection(dbConfig);
      const result = await connection.execute(
        `SELECT * FROM COURSES WHERE COURSE_ID = :courseId`,
        [courseId]
      );
      return result.rows.length ? result.rows[0] : null;
    } catch (error) {
      console.error('Error getting course by ID:', error);
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

  // Implement other CRUD operations similarly...
};

module.exports = courseService;
