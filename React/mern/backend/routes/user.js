const express = require('express');

const router = express.Router();
const {signin,signup,logout,check,singleUser} = require('../controllers/user')

// // Home page route.
// router.get("/", function (req, res) {  //this route go to  8000/get/
//   res.send("Wiki home page");
// });

// Home page route.
router.post("/signup",signup);

router.post("/signin",signin)

router.get("/logout",logout)

router.get("/check",check);

router.get("/user/:id",singleUser);

module.exports = router;
