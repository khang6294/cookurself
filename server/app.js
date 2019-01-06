const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const api = require('./api')
const path = require('path')
const multer = require('multer')
const port = process.env.PORT || 8080;
app.use(bodyParser.json()); // application/json
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', express.static(path.join(__dirname,'../uploads'))); //handling static images

//Handling images uploaded

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads');
    },
    filename: (req, file, cb) => {
      cb(null, new Date().toISOString() + '-' + file.originalname);
    }
});
  
const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

app.use(
    multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// api routes
app.use('/api',api)

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
        app.listen(port)
    })
    .catch(err => console.log(err))
