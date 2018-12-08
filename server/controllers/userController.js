const User = require('../models/userModel')
const bcrypt = require('bcryptjs')


module.exports = {
    signUp: (req,res,next) => {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
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
                res.status(201).json({
                    message: "Succesfully user created!",
                    user: result
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
        let user;
        User.findOne({email:email})
            .then(user => {
                if(!user){
                    const error = new Error('No user is found!')
                    error.statusCode = 411;
                    throw error;
                }
                user = user;
                bcrypt.compare(password,user.password)
                .then(matched => {
                    if(!matched){
                        const error = new Error('Wrong password!')
                        error.statusCode = 411;
                        throw error;
                    }
                    res.status(200).json({
                        message:'Succefully login!',
                        user: user
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