npm init
npm i express nodemon morgan mongoose

change the scipt to that
 "scripts": {
    "start": "nodemon app.js"
  },

make app.js file then start the server by this code
const express = require('express')
    const app = express()
    let dotenv = require('dotenv').config()
    // console.log(dotenv);
    const port = process.env.PORT;

    app.get('/', (req, res) => {
    res.send('Hello World!')
    })

    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })



create a new database ,collection and cluster in mongodb atlas
then, connect the express server with the mongodb using the mongooose
    mongoose.connect(process.env.DATABASE,{
        useNewUrlParser : true,
        useUnifiedTopology : true,
        useCreateIndex : true
    })
    .then(()=>{console.log("DB Connected");})
    .catch((err)=>{console.log(err);})

concept of routes and controller

bicrypt is used for hashing in the password and retrieval of password also

 app -> route -> controller

make model or schema for user
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required : [true, 'Please add a Name'],
        maxlength: 32
    },
 
    email: {
        type: String,
        trim: true,
        required : [true, 'Please add a E-mail'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid E-mail'
        ]
 
    },
 
    password: {
        type: String,
        trim: true,
        required : [true, 'Please add a Password'],
        minlength: [6, 'password must have at least six(6) characters'],
        match: [
            /^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]+$/,
            'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and a special characters'
        ]
    },
 
    role: {
        type: Number,
        default: 0,
   
    },
 
  }, {timestamps: true});

  ////////////////////////////////////////////////////////////////////


  userSchema.pre('save', async function save(next) {
    if (!this.isModified('password')) return next();
    try {
      const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
      this.password = await bcrypt.hash(this.password, salt);
      return next();
    } catch (err) {
      return next(err);
    }
  });

  // verify password
  userSchema.methods.comparePassword = async function(yourPassword){
    return await bcrypt.compare(yourPassword, this.password);
  }

// mongoose.model('User',userSchema);
module.exports = User = mongoose.model('user', userSchema)

///////////////////////////////////////////

install the postman app and check the routes and behaviour of routes
    
signup with post req
signin with post req

const User = require('../models/user')

exports.signin = async(req,res,next)=>{
  try {
    let email = req.body["email"];
    let password = req.body["password"];

    if(!email || !password){
        res.status(400).json({
            status : false,
            message : "Incomplete credentials"
        })
    }

    let userExist = await User.findOne({email});
    if(!userExist){
        return res.status(400).json({
            sucess : false,
            message : "Email already exists"
        })
    }

  

     // verify user password
    const isMatched = await userExist.comparePassword(password);
    if (!isMatched){
        res.status(400).json({
            status : false,
            message : "Invalid credentials Password doesn't match"
        })
    }

    res.status(201).json({
        status:true,
        message : "User logged in"
    })
  } catch (error) {
    res.status(400).json({
        status : false,
        message : error.message
    })
  }  
} 

exports.signup = async(req,res,next)=>{
    let email = req.body["email"];
    let userExist = await User.findOne({email});

    if(userExist){
        return res.status(400).json({
            sucess : false,
            message : "Email already exists"
        })
    }
    
    try {
        let user = await User.create(req.body);
        res.status(201).json({
            status : true,
            user
        })
    } catch (error) {
        res.status(400).json({
            status : false,
            message : error.message
        })
    }
} 

exports.check= async(req,res,next)=>{
   res.send("djfjf");
} 


/////////////////////////////////////////////

Theory on json web tokens

JSON Web Tokens (JWT) are a compact and self-contained way to represent information between parties as a JSON object. They are often used for authentication and authorization purposes in web applications and APIs. JWTs consist of three parts: a header, a payload, and a signature, all of which are encoded as a string and separated by dots.

Here's how JWTs are typically used:

Authentication: JWTs are commonly used for user authentication. When a user logs in, the server generates a JWT containing user information (payload) and signs it with a secret key (signature). The JWT is then sent to the client, which stores it, usually in a browser's local storage or a cookie.

Authorization: JWTs can carry information about user roles, permissions, and other details. This information can be used by the server to determine what actions a user is allowed to perform.

Stateless Communication: Since JWTs are self-contained, the server does not need to store session information. This makes JWTs suitable for stateless communication, which is more scalable and can be advantageous in microservices architectures.

Single Sign-On (SSO): JWTs can be used to implement Single Sign-On across multiple applications or services. Once a user logs in to one application, they can use the same JWT to authenticate to other applications within the same SSO ecosystem.

Data Exchange: JWTs can be used to securely exchange information between different parties. For example, a user might request access to a third-party service using their JWT, and the service can verify the JWT's authenticity and extract relevant information from it.

Here's a simple example of how JWTs might be used in a web application:

User Login:

User enters their credentials (username/password) on the login page.
The server validates the credentials and generates a JWT containing user information (such as user ID and roles).
The JWT is signed using a secret key known only to the server.
Token Usage:

The server sends the JWT back to the client.
The client stores the JWT in local storage or a cookie.
For subsequent requests, the client includes the JWT in the request header.
Server Verification:

On each request, the server receives the JWT from the request header.
The server verifies the JWT's signature using the secret key.
If the signature is valid, the server extracts the user information from the JWT and processes the request accordingly.
It's important to handle JWTs securely. The secret key used for signing should be kept secret, and proper measures should be taken to prevent token tampering and security vulnerabilities. Additionally, JWTs should have an expiration time (in the payload) to mitigate the risk of long-lived tokens.

//////////////////////////////////////////////

generate a json web token in user model

  // get json web token 

  const jwt = require('jsonwebtoken');

  userSchema.methods.jwtGenerateToken = function(){
    return jwt.sign(
      {
        id : this.id
      },
      process.env.JWT_SECRET,
      {
        expiresIn :3600
      }
    )
  }

in user controller inspect of passing user to the server pass the jwt generated token of that user

    const token = await userExist.          jwtGenerateToken();
    // res.status(201).json({
    //     status:true,
    //     message : "User logged in",
    //     userExist,
    //     token
    // })
    res.status(201).json({
        status:true,
        token
    })

/////////////////////////////////////////

each time user is signin this token in save in a cookie in local storage for that we 

install cookie-parser
cookie parser is a middleware so 



////////////////////////////////////////

for logout the user just clear the cookie 
for that make a function of logout in the controller.js and clr the cookie by using this code

exports.logout = async(req,res,next)=>{
   res.clearCookie('token');
   res.status(201).json({
    status : true,
    message : "Logout successfully"
   })
}


now, make the middleware folder inside that make error.js file  for custom error
const errorHandler = (err,req,res,next)=>{
   res.status(500).json({
    status : false,
    error : err.message
   })
}

module.exports = errorHandler;

in app.js import that 

app.use(errorHandler); after routes line



///////////////////////////////////////////////////////

userProfile ka route
route bnega getme ka 

jaha b user.js usko auth .js kr liya taki aasani ho 

userProfile wala route tabhi accessible jb user logged in ho for that 

const {isAuthenticated} = require('../middleware/auth')  // in router / auth.js

router.get("/getme", isAuthenticated, userProfile);


is Auuthenticated ek middleware hai isko middleware folder m auth.js bna k is Authenticated function bnaya check ho rha hai user is logged in or not by using jwt token 

const jwt = require('jsonwebtoken');
const User = require("../models/user");
const ErrorResponse = require('../utils/errorResponse');


// check if user is authenticated
exports.isAuthenticated = async (req, res, next) =>{

    const {token} = req.cookies;

    // make sure token exists
    if (!token){
        return next (new ErrorResponse('You must log in to access this ressource', 401));
    }

    try {
        //verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);  // verification of token
        req.user = await User.findById(decoded.id);
        next();

    } catch (error) {
        return next (new ErrorResponse('You must log in to access this ressource', 401));
    }
}


userPrfile route b like 

exports.userProfile = async(req,res,next) => {
    
    const user = await User.findById(req.user.id);
    res.status(200).json({
        sucess: true,
        user
    });

}



