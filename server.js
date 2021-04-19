// TODO: visit https://expressjs.com/
require('dotenv').config()
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;
try {
    mongoose.connect(uri,
        {useNewUrlParser: true, useUnifiedTopology: true},
        () => console.log('connected to db'));
} catch (err) {
    console.log('failed to connect to db')
}
// mongoose.connect(
//     'mongodb://localhost:27017/whiteboard',
//     {useNewUrlParser: true, useUnifiedTopology: true});

// Configures CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)
require('./controllers/quiz-attempts-controller')(app)

app.listen(process.env.PORT || 4000)