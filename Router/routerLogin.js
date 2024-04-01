

const express = require('express');
const userModel = require('../model/modelUser');

const router = express.Router();
const mongoose = require('mongoose');

const uri = process.env.LINK;

router.post('/login', async (req, res) => {
    await mongoose.connect(uri);
  console.log("db connect")
    let user = await userModel.findOne({email:req.body.email});
    console.log("connect 1")
  if(user){
    if(user.password==req.body.password){
        console.log("thanh cong");
        user.password=null;
        res.status(200)
        res.send({msg:"Login thành công"})
    }
    else{
      
        console.log("mật khẩu không chính xác")
        res.status(300)
        res.send({msg:"sai mật khẩu"})
    }
  } else{
    res.status(401)
    console.log("lỗi")
    res.send({msg:"không tồn tại user"})
  }
    
    
})


module.exports=router;


