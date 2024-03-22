const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var modelMannager = new mongoose.Schema({
    nameMannager:{
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
});

//Export the model
module.exports = mongoose.model('Manager', modelMannager);