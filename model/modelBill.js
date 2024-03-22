const mongoose = require('mongoose'); 

var billSchema = new mongoose.Schema({
    idCustomer:{
        type:ObjectId,
        require:true
    },
    idStaff:{
        type:ObjectId,
        require:true
    },
    dateBuy:{
        type:Date,
        require:true
    },
    arrayService:{
        type:Array,
        require:true
    },
    totalAmout:{
        type:Number,
        require:Number
    }
});

module.exports = mongoose.model('Bill', billSchema);