const mongoose = require('mongoose');

var jobSchema = new mongoose.Schema({
    nameJob:{
        type:String,
        required:true,
    },
    dateStart:{
        type:Date,
        required:true,
    },
    endEnd:{
        type:Date,
        required:true,
    },
    statusJob:{
        type:Boolean,
        default:false,
        required:true,
    },
    descriptionJob:{
        type:String,
        require:true
    },
    name:{
        type:String,
        
    }
});

module.exports = mongoose.model('job', jobSchema);