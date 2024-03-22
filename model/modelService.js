const mongoose = require('mongoose'); 

var serviceSchema = new mongoose.Schema({
    nameService:{
        type:String,
        required:true,
    },
    statusService:{
        type:Boolean,
        required:true,
    },
    descriptionService:{
        type:String,
        required:true,
    },
    priceService:{
        type: Number,
        required:true,
    }
});

module.exports = mongoose.model('Service', serviceSchema);