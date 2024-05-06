const app = require('./app'); //Import the Express app
const port = process.env.PORT || 4000;

//Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localchost:${port}`);
});