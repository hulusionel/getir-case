const mongoose = require('mongoose');
require('dotenv').config();
module.exports = () => {
    mongoose.connect(process.env.db_connection, { useUnifiedTopology: true, useNewUrlParser: true });
    mongoose.connection.on('open', () => {
        console.log('MongoDB:Connection');
    });
    mongoose.connection.on('error', (error) => {
        console.log('MongoDB:ERROR');
    })
}

