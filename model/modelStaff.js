const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var modelStaff = new mongoose.Schema({
    nameStaff:{
        type:String,
        required:true,
       
    },
    email:{
        type:String,
        required:true,
       
    },
    phonenumber:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        required:true,
    },
    address:{
        type: String,
        require:true,
    }
});

//Export the model
module.exports = mongoose.model('Staff', modelStaff);