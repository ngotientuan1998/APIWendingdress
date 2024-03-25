

const express = require('express');
const userModel = require('../model/modelUser');

const router = express.Router();
const mongoose = require('mongoose');

const uri = process.env.LINK;

router.get('/list_user', async (req, res) => {
    await mongoose.connect(uri);

    let user = await userModel.find();

    console.log(user);

    res.send(user);
})


module.exports=router;


