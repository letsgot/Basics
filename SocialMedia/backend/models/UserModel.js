const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
    
    userName : {
       type : String,
       unique : true,
       required : true
    },
    followers : {
        type : Array,
        required : true
    },
    following : {
        type : Array,
        required : true
    },
    posts : {
        type : Array,
        required : true
    }
},{ timestamps : true })

module.exports = mongoose.model('users',userSchema);

// uniqueId String ,
// followers [],
// following [],
// post [] String,
// details {},
