const express = require('express');

const router = express.Router();
const userModel = require('../models/UserModel.js');
const {
  GetProfile,UpdateProfile,DeleteAccount,AllUsers,CreateUser, FollowProfile, UnFollowProfile, CreatePost, DeletePost
} = require('../controllers/userProfileController.js')

router.post('/',CreateUser);
router.get('/',AllUsers);
router.get('/:id', GetProfile);
router.patch('/:id',UpdateProfile);
router.delete('/:id', DeleteAccount);



router.patch('/follow/:id',FollowProfile);
router.patch('/unfollow/:id',UnFollowProfile);

router.patch('/createPost/:id',CreatePost);
router.patch('/deletePost/:id',DeletePost);

// router.get('/', getWorkouts);
// router.get('/:id',getWorkout);
// router.post('/', createWorkout );
// router.delete('/:id', deleteWorkout)
// // The PATCH HTTP method is used to modify the values of the resource properties
// router.patch('/:id', updateWorkout)

module.exports = router


// router.get('/:id', (req, res) => {
    // res.json({
    //     message: `get data of one user`
    // })
// })

// flow abhi kuch aisa hai
// server.js se route bnao declear kro
// usko router / filename.js m usko define krdo
// connect a atlas db
// make a schemas and modal


// userRoutes 
  // - get Profile 
  // - patch Profile
  // - delete account 
