// const oracledb = require('oracledb');

class Flashcard {
    constructor(id, question, answer, rating, last_accessed) {
        this.id = id;
        this.question = question;
        this.answer = answer;
        this.rating = rating;
        this.last_accessed = last_accessed;
    }

    static async findFlashcards(userId) {
        let connection;
        try {
            connection = await oracledb.getConnection();
            const result = await connection.execute('SELECT * FROM Flashcards WHERE user = :userId', [userId]);
            return result.rows.map(row => new Flashcard(row[0],row[1],row[2],row[3],row[4],))
        } catch (error) {
            console.error('Error fetching flaschards:' , error);
            throw error;
        } finally {
            if (connection) {
                try {
                    await connection.close();
                } catch (error) {
                    console.error('Error closing connection: ', error);
                }
            }
        }
    };
}
