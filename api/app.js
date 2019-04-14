// Load express module
const express = require('express');
// Initialize app
const app = express();
// Initialize port
const port = 4000 || process.env.PORT;
// Initialize paths
const path = require('path');

// Initialize public directory
app.use(express.static(path.join(__dirname, 'public')));

// Mongoose connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://salitha:salitha94@ds111622.mlab.com:11622/node_api');
const db = mongoose.connection;

// Check for DB connection
db.once('open', function(){
    console.log("Connected to MongoDB successfully!");
});
db.on('error', function(){
    console.log(err);
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initialize CORS middleware
const cors = require('cors');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

// export Routes 
const users = require('./routes/router');
app.use('/api', users);

// Route for home
app.get('/', function(req, res){
    res.send('Hello from Server');
})

app.listen(process.env.PORT || 5000, function(){
    console.log('server started...');
})
