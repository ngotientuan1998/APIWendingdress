const express=require('express');
const router=express.Router();

const userModel=require('../model/modelUser');
const mongoose=require('mongoose');

const uri=process.env.LINK;

router.get('/list_user', async(req, res)=>{
    await mongoose.connect(uri);

    let users=userModel.find();
    
})