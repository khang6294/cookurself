const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')



app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Errors handling middleware
app.use((error,req,res,next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message:message})
});


//Database connection
mongoose.connect('mongodb+srv://khang:GvVWiyfYeSZ889V@cluster0-g4j7c.mongodb.net/cookurself?retryWrites=true')
    .then(result => {
        app.listen(8080)
    })
    .catch(err => console.log(err))
