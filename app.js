/*jshint esversion: 6 */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const config = require('./config/database');

//Database Connection
mongoose.connect(config.database);

//Confirm connection to the database

mongoose.connection.on('connected', () => {

  console.log('Connect to Database ' +config.database);

});

//Display Database Connection Error

mongoose.connection.on('error', (err) => {

  console.log('Database Error: ' + err);

});

const app = express();

const users = require('./routes/users');
const lists = require('./routes/lists');

//Port Number
const port = process.env.PORT || 8080;

// configure our app to handle CORS requests

app.use(cors());

//Set Static Folder

app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware

app.use(bodyParser.json());

//Passport Middleware

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/lists', lists);

//Index Route

app.get('/', (req, res) => {

  res.send('Invalid Endpoint');

});

app.get('*', (req, res) => {

  res.sendFile(path.join(__dirname, 'public/index.html'));

});

app.listen(port, () => {

  console.log('Server started on port '+ port);

});
