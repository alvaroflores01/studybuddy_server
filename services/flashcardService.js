const dbConfig = require("../config/dbconfig");
const oracledb = require('oracledb');
// Service methods
const flashcardService = {
  createFlashcard: async (flashcardData) => {
    let connection;
    try {
      connection = await oracledb.getConnection(dbConfig);
      const result = await connection.execute(
        `INSERT INTO FLASHCARDS (FLASHCARD_ID, QUESTION, ANSWER, LASTACCESSED, FLASHCARD_PROGRESS, LESSON_ID) VALUES (:flashcardId, :question, :answer, :lastAccessed, :flashcardProgress, :lessonId)`,
        flashcardData
      );
      return result.rowsAffected === 1 ? flashcardData : null;
    } catch (error) {
      console.error('Error creating flashcard:', error);
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

  getFlashcardById: async (flashcardId) => {
    let connection;
    try {
      connection = await oracledb.getConnection(dbConfig);
      const result = await connection.execute(
        `SELECT * FROM FLASHCARDS WHERE FLASHCARD_ID = :flashcardId`,
        [flashcardId]
      );
      return result.rows.length ? result.rows[0] : null;
    } catch (error) {
      console.error('Error getting flashcard by ID:', error);
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

module.exports = flashcardService;
