const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
    signUp: (req,res,next) => {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        User.findOne({email:email})
            .then(user => {
                if(user){
                    const error = new Error('Email is used!')
                    error.statusCode = 411;
                    throw error;
                }
                bcrypt.hash(password,12)
                    .then(hashedPass => {
                        const user = new User({
                            name: name,
                            email: email,
                            password: hashedPass
                        })
                        return user.save();
                    })
                    .then(result => {
                        res.status(201).json(result)
                    })
                    .catch(err => {
                        console.log(err)
                        if(!err.statusCode){
                            err.statusCode = 500;
                        }
                        next(err)
                    })
            })
            .catch(err => {
                console.log(err)
                if(!err.statusCode){
                    err.statusCode = 500;
                }
                next(err)
            })
        
    },
    login: (req,res,next) => {
        const email = req.body.email;
        const password = req.body.password;
        let userAuth;
        User.findOne({email:email})
            .then(user => {
                if(!user){
                    const error = new Error('No user is found!')
                    error.statusCode = 411;
                    throw error;
                }
                userAuth = user;
                bcrypt.compare(password,user.password)
                .then(matched => {
                    if(!matched){
                        const error = new Error('Wrong password!')
                        error.statusCode = 411;
                        throw error;
                    }
                    const token = jwt.sign(
                        {
                            userId: userAuth._id.toString(),
                            email: userAuth.email
                        },
                        'cookurselfsuperdoubledupersecrettokenbykennguyen',
                        { expiresIn: '1h' }
                    );
                    res.status(200).json({
                        token: token,
                        user: userAuth,
                        isAuth: true
                    })
                })
                .catch(err => {
                    console.log(err)
                    if(!err.statusCode){
                        err.statusCode = 500;
                    }
                    next(err)
                })
            })
            
    }
}