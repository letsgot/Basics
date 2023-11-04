const mongoose = require('mongoose');
const UserModel = require('../models/UserModel')

const AllUsers = async (req, res) => {
    try {
        let allUsers = await UserModel.find();
        res.status(200).json({
            allUsers,
            message: "This is api/userProfile"
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

const CreateUser = async (req, res) => {
    const { userName, followers, following,posts } = req.body;
    try {
        const user = await UserModel.create({ userName, followers, following,posts });
        res.status(200).json({
            user,
            message: "user created successfully"
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

const DeleteAccount = async(req,res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({
            message: 'Invalid Id'
        })
    }

    let user = await UserModel.findByIdAndDelete(id);
    if (user===null) {
        return res.status(404).json({
          message: 'User Not found'
        })
    }

    res.status(201).json({
        user,
        message: `user deleted`
    })
}

const GetProfile = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({
            message: 'Invalid Id'
        })
    }

    let user = await UserModel.findById(id);
    if (user===null) {
        return res.status(404).json({
          message: 'user Not found'
        })
    }

    res.status(201).json({
        user,
        message: `get data of one user`
    })
}

const FollowProfile = async(req,res) => {
    console.log(req.params);
    const  currUserId  = req.params.id;
    const followUserId = req.body.id;

    if (!mongoose.Types.ObjectId.isValid(currUserId)||!mongoose.Types.ObjectId.isValid(followUserId)) {
        res.status(404).json({
            message: `Invalid Id's`
        })
    }
    
    let currUser = await UserModel.findByIdAndUpdate(
        { _id: currUserId }, 
        { $push: { following:  followUserId } }
    );
    let followUser = await UserModel.findByIdAndUpdate(
        { _id: followUserId }, 
        { $push: { followers:  currUserId } }
    );
 

    

    if (currUser===null||followUser==null) {
        return res.status(404).json({
          message: 'user Not found'
        })
    }

    // currUser.following.push(followUserId);
    // followUser.followers.push(currUserId);


    // let currUserForFetch = await UserModel.findById(currUserId);
    // let followUserForFetch = await UserModel.findById(followUserId);
 

    

    // if (currUserForFetch===null||followUserForFetch==null) {
    //     return res.status(404).json({
    //       message: 'user Not found'
    //     })
    // }

    // currUserForFetch.following.push(followUserId);
    // followUserForFetch.followers.push(currUserId);

    // let currUser = await UserModel.findByIdAndUpdate(currUserId,
    //     {
            
    //     }
    // );

    res.status(201).json({
        currUser,
        followUser,
        message: `follow a user successfull`
    })
    
}

const UnFollowProfile = async(req,res) => {
    // console.log(req.body.id);
    const currUserId  = req.params.id;
    const unFollowUserId = req.body.id;

    console.log(currUserId);

    if (!mongoose.Types.ObjectId.isValid(currUserId)||!mongoose.Types.ObjectId.isValid(unFollowUserId)) {
        res.status(404).json({
            message: `Invalid Id's`
        })

    }

    let currUser = await UserModel.findByIdAndUpdate(
        { _id: currUserId }, 
        { $pull: { following:  unFollowUserId } },
        { safe: true, multi:true }
    );
    let unFollowUser = await UserModel.findByIdAndUpdate(
        { _id: unFollowUserId }, 
        { $pull: { followers:  currUserId } },
        { safe: true, multi:true }
    );


    if (currUser===null||unFollowUser==null) {
        return res.status(404).json({
          message: 'user Not found'
        })
    }


    res.status(201).json({
        currUser,
        unFollowUser,
        message: `unfollow a user successfull`
    })
    
}

const CreatePost = async(req,res)=>{
    const currUserId  = req.params.id;
    const postData = req.body;

    
    if (!mongoose.Types.ObjectId.isValid(currUserId)) {
        res.status(404).json({
            message: `Invalid Id`
        })

    }

    if(Object.keys(postData).length === 0){
        res.status(404).json({
            message: `Invalid Information, kindly fill all required details`
        })
    }

    if(!postData.id||!postData.title||!postData.description){
        return res.status(404).json({
            message: 'Improper data'
        })
    }



    let currUser = await UserModel.findByIdAndUpdate(
        { _id: currUserId }, 
        { $push: { posts:  postData } },
        { safe: true, multi:true }
    );

    if (currUser===null) {
        return res.status(404).json({
          message: 'user Not found'
        })
    }


    res.status(201).json({
        currUser,
        message: `You created a post successfully`
    })
}

const DeletePost = async(req,res)=>{
    const currUserId  = req.params.id;
    const postData = req.body;

    
    if (!mongoose.Types.ObjectId.isValid(currUserId)) {
        res.status(404).json({
            message: `Invalid Id`
        })

    }

    if(Object.keys(postData).length === 0){
        res.status(404).json({
            message: `Invalid Information, kindly fill all required details`
        })
    }

    if(!postData.id){
        return res.status(404).json({
            message: 'Improper data'
        })
    }



    let currUser = await UserModel.findByIdAndUpdate(
        { _id: currUserId }, 
        { $pull: { posts:  {id : postData.id} } },
        { safe: true, multi:true }
    );

    if (currUser===null) {
        return res.status(404).json({
          message: 'user Not found'
        })
    }


    res.status(201).json({
        currUser,
        message: `You deleted a post successfully`
    })
}


const UpdateProfile = async(req,res) => {
    console.log(req.body);
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({
            message: 'Invalid Id'
        })
    }

    let user = await UserModel.findByIdAndUpdate(id ,
        {...req.body}
        );
    if (user===null) {
        return res.status(404).json({
          message: 'user Not found'
        })
    }

    res.status(201).json({
        user,
        message: `user updated`
    })
}

module.exports = {
   CreateUser,GetProfile,UpdateProfile,DeleteAccount,AllUsers,FollowProfile,UnFollowProfile,CreatePost,DeletePost
}

// login page 
// jwt == authentication  
// ui 

// like 

