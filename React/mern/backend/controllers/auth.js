const User = require('../models/user')

const ErrorResponse = require('../utils/errorResponse');


exports.signup = async(req,res,next)=>{
    let email = req.body["email"];
    let userExist = await User.findOne({email});

    // if(userExist){
    //     return res.status(400).json({
    //         sucess : false,
    //         message : "Email already exists"
    //     })
    // }
    
    try {
        let user = await User.create(req.body);
        res.status(201).json({
            status : true,
            user
        })
    } catch (error) {
      console.log(error);
        next(error);
    }
} 

exports.check= async(req,res,next)=>{
   res.send("djfjf");
} 

exports.signin = async(req,res,next)=>{
    try {
      // console.log(req.body);
      // console.log("ssssss");
      let email = req.body.email;
      // console.log("sdff");
      let password = req.body["password"];
  
      if(!email || !password){
        return  next(new ErrorResponse('E-mail and password are required', 400))
      }
  
      let userExist = await User.findOne({email});
      if(!userExist){
        return  next(new ErrorResponse('Invalid credentials', 400))
      }
  
    
       // verify user password
      const isMatched = await userExist.comparePassword(password);
      if (!isMatched){
        return  next(new ErrorResponse('Invalid credentials', 400))
      }
      
      // const token = await userExist.jwtGenerateToken();
      // res.status(201).json({
      //     status:true,
      //     message : "User logged in",
      //     userExist,
      //     token
      // })
      // res.status(201).json({
      //     status:true,
      //     token
      // })
  
      generateWebToken(userExist,200,res);
    } catch (error) {
        console.log(error);
       
        next(new ErrorResponse('Cannot log in, check your credentials', 400))
    }  
} 

exports.userProfile = async(req,res,next) => {
    
    const user = await User.findById(req.user.id);
    res.status(200).json({
        sucess: true,
        user
    });

}

exports.logout = async(req,res,next)=>{
   res.clearCookie('token');
   res.status(201).json({
    status : true,
    message : "Logout successfully"
   })
}

exports.singleUser = async(req,res,next)=>{
    try {
      const userById = User.findById(req.params.id);
      console.log(userById);
      res.status(200).json({
        status : true,
        message : "User found"
      })
    } catch (error) {
      next(error)
    }  
} 

const generateWebToken = async (user,statusCode,res)=>{
    const token = await user.jwtGenerateToken();

    const options = {
        httpOnly: true,
        expires: new Date(Date.now() + process.env.EXPIRE_TOKEN)
    };

    res
    .status(statusCode)
    .cookie('token', token, options )
    .json({success: true, token})
}