const User = require('../models/user');


exports.signup = async(req,res,next) => {
    // console.log(req.body);
    let email = req.body["email"];

    let user = await User.findOne({email});
    if(user){
       return res.status(400).json({
        status : false,
        message : "Email already exist! Try another one"
       }) 
    }

    try {
        let user = await User.create(req.body);
        res.status(201).json({
            status : true,
            user
        })
    } catch (error) {
        return res.status(400).json({
            status : false,
            message : error.message
        }) 
    }
} 

exports.signin = async(req,res,next) => {
    // console.log(req.body);
    let email = req.body["email"];
    let password = req.body["password"];

  
    
    if(!email||!password){
        return res.status(400).json({
            status : false,
            message : "Please write email and password correctly"
        })
    }

    let user = await User.findOne({email});

    if(user){
        const isMatched = await user.comparePassword(password);
        if (!isMatched){
          return res.status(400).json({
            status : false,
            message : "Invalid credentials"
          }) 
        }
        else{
            return res.status(201).json({
                status : true,
                message : "Logged in"
            }) 
        }
    }
    else{
        return res.status(400).json({
            status : false,
            message : "No user found with this email"
        })
    }

} 