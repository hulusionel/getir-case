const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const db = require('./db')();

const port = process.env.PORT || 3000
const mainController = require('./controllers/mainController');
require('dotenv').config();

app.use(bodyparser.json())
app.use(express.urlencoded({ extended: false }));
app.use('/', mainController);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});