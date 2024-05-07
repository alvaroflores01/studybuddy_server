const app = require('./app'); //Import the Express app
const port = process.env.PORT || 4000;
const oracledb = require('oracledb');
const dbConfig = require('./config/dbconfig');
// Test database connection
async function testConnection() {
    try {
      // Establish connection to the database
      const connection = await oracledb.getConnection(dbConfig);
      console.log('Database connection successful');
      // Release the connection
      await connection.close();
    } catch (error) {
      console.error('Error connecting to database:', error.message);
    }
  }
  
  // Call the function to test the database connection
  // testConnection();
//Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localchost:${port}`);
    testConnection();
});