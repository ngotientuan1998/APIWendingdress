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
        required:true,
    },
    descriptionJob:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model('Job', jobSchema);