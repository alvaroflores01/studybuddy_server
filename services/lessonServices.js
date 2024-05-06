const dbConfig = require("../config/dbconfig");
const oracledb = require('oracledb');
// Service methods
const lessonService = {
  createLesson: async (lessonData) => {
    let connection;
    try {
      connection = await oracledb.getConnection(dbConfig);
      const result = await connection.execute(
        `INSERT INTO LESSONS (LESSON_ID, LESSON_NAME, LESSON_PROGRESS, LAST_ACCESSED, COURSE_ID) VALUES (:lessonId, :lessonName, :lessonProgress, :lastAccessed, :courseId)`,
        lessonData
      );
      return result.rowsAffected === 1 ? lessonData : null;
    } catch (error) {
      console.error('Error creating lesson:', error);
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

  getLessonById: async (lessonId) => {
    let connection;
    try {
      connection = await oracledb.getConnection(dbConfig);
      const result = await connection.execute(
        `SELECT * FROM LESSONS WHERE LESSON_ID = :lessonId`,
        [lessonId]
      );
      return result.rows.length ? result.rows[0] : null;
    } catch (error) {
      console.error('Error getting lesson by ID:', error);
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

module.exports = lessonService;
