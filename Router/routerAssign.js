const express = require('express');
const router = express.Router();

const modelAssign = require('../model/modelAssign');
const mongoose = require('mongoose');

const uri = process.env.LINK;




router.get('/list', async (req, res) => {
    try {
        await mongoose.connect(uri);
        let assigns = await modelAssign.find(); // Chờ cho truy vấn hoàn thành
        res.status(200).json(assigns); // Trả về dữ liệu từ kết quả của truy vấn
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' }); // Xử lý lỗi
    }
});


router.post('/add',async(req,res)=>{
    try {
        await mongoose.connect(uri);
        let assign=req.body;
        let result=await modelAssign.create(assign);
        
        if (result) {
            res.status(200).send(result);
        }else{
            res.status(401).json({
                mess:'Không thành công'
            })
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports= router;
