const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const api = require('./api')
const path = require('path')
const multer = require('multer')
const helmet = require('helmet');
const compression = require('compression')
const port = process.env.PORT || 8080;



const MONGODB_URI = 
`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0-g4j7c.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true`

app.use(bodyParser.json()); // application/json
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', express.static(path.join(__dirname,'../uploads'))); //handling static images

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname,'..', 'client/build')))
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname ,'..', '/client/build/index.html'))
})

app.use(helmet()); //secure response header
app.use(compression()); // compressing assests

//Handling images uploaded

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads');
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
    // res.setHeader('Access-Control-Allow-Credentials', true)
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
mongoose.connect(MONGODB_URI)
    .then(result => {
        app.listen(port)
    })
    .catch(err => console.log(err))
