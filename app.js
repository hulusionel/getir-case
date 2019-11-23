const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const db = require('./db')();
const cors = require('cors');
const port = process.env.PORT || 3000

const mainController = require('./controllers/mainController');
const errorHandler = require('./helpers/errorHandler');

require('dotenv').config();
app.use(cors());
app.use(bodyparser.json())
app.use(express.urlencoded({ extended: false }));


app.use('/', mainController);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    errorHandler.notFound(res);
});

// production error handler
app.use(function (err, req, res, next) {
    errorHandler.badRequest(res, err);
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});