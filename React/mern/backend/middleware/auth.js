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
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();

    } catch (error) {
        return next (new ErrorResponse('You must log in to access this ressource', 401));
    }
}

// admin middleware
exports.isAdmin = (req, res, next) =>{
    if (req.user.role === 0){
        return next (new ErrorResponse('Access denied, you must be an admin', 401));
    }
    next();

}



//////////////////////////////////////////////////////////////////////

// const User = require("../models/user");
// const jwt = require("jsonwebtoken");

// exports.loginBefore = async (req, res, next) => {
//   const tokenFind = () => {
//     try {
//       // check if token found in cookies
//       if (req.cookies.token) {
//         // console.log(req.cookies.token);
//         return req.cookies.token;
//       }
//       // check if token found body
//       if (req.body.token) {
//         return req.body.token;
//       }
//       //check if token found in header
//       if (req.header("Authorization")) {
//         return req.header("Authorization").replace("Bearer ", "");
//       }
//     } catch (error) {
//     //   console.log(error);
//     }
//   };
//   const token = tokenFind();

//   if (token) {
//     // decoding the token with scerect key
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // asign to a var
//     const found = await User.findById(decoded.id);

//     if (found) {
//       return res.status(200).redirect("/dashboard");
//     } else {
//   return res.status(400).redirect("/login");
// }
//   }
//   next();
// };