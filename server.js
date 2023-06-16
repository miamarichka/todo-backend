const app = require('./app');
const mongoose = require('mongoose');

require('dotenv').config();
const { DB_HOST, PORT } = process.env;

mongoose.connect(DB_HOST)
    .then(() => app.listen(PORT, () => {
    console.log("Server running")
    console.log("Database connection successful")
    }))
    .catch(error => {
        console.log(error);
        process.exit(1);
})