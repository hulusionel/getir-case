const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const db = require('./db')();
const cors = require('cors');
const port = process.env.PORT || 3000

const mainController = require('./controllers/mainController');
const errorHandler = require('./helpers/errorHandler');
const requestChecker = require('./middleware/requestChecker');

require('dotenv').config();

app.use(cors());
app.use(bodyparser.json())
app.use(express.urlencoded({ extended: false }));

// Main controller for endpoint
app.use('/', requestChecker.verifyParams, requestChecker.verifyTypes, mainController);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    errorHandler.notFound(res);
});

// production error handler
app.use((err, req, res, next) => {
    errorHandler.badRequest(res, err);
});

// Starts app to listen to the selected port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});

module.exports = app;