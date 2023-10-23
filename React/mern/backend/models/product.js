const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required : [true, 'Please add a product Name'],
        maxlength: 32
    },
    

 
  }, {timestamps: true});


// mongoose.model('User',userSchema);
module.exports = User = mongoose.model('product', productSchema)