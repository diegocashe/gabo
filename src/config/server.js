// dependences
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const AppRoutes = require('./appRoutes');

// init
const app = express();

// settings
const corsOptions = {
    origin: 'localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.set('port', process.env.PORT || 8080);

// middlewares
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(morgan('dev')); // method information
app.use(cors())

// routes
app.use(express.static('public'))
AppRoutes(app)

module.exports = { app };
