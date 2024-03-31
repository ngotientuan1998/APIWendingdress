const express=require('express');
const customerModel=require('../model/modelCustomer');

const router=express.Router();
const mongoose=require('mongoose');

const env=require('dotenv').config();
const uri=process.env.LINK;

router.get('/list', async(req, res)=>{
    try {
        await mongoose.connect(uri);
        let data=customerModel.find();
        res.status(200).send(data);
        
    } catch (error) {
        console.log(error);
    }
});

router.post('/add',async(req,res)=>{
    try {
        await mongoose.connect(uri);
        let result=await customerModel.create(req.body);
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(401).json({
                mess:"Không thành công"
            })
        }
    } catch (error) {   
        console.log(error);
    }
});

router.put('/put/:id',async(req,res)=>{
    try {
        await mongoose.connect(uri);
        let id=req.params.id;
        let result=await customerModel.findByIdAndUpdate(id, req.body, {new:true});

        if (result) {
            res.status(200).send(response);
        } else {
            res.status(401).json({
                mess:'Không thành công'
            })
        }
    } catch (error) {
        console.log(error);
    }
});
module.exports=router;