const express = require('express');  //server package
const morgan = require('morgan'); // used to log http requests in console   
const bodyParser = require('body-parser') //used to parse incoming request bodies in a middleware

const app = express(); // create an instance of express 

// Bodyparser middleware
app.use(bodyParser.urlencoded( {extended: false} ))
app.use(bodyParser.json());


//set up Port for server
const PORT = process.env.PORT || 8080;
app.use(morgan('tiny')); //Log HTTP requests to your console

// Routes
app.get('/', (req, res) => {
    res.send('Pong');
})

//Activate Server
app.listen(PORT, console.log(`Server active on port ${PORT}`));