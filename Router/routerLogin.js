

const express = require('express');
const userModel = require('../model/modelUser');

const router = express.Router();
const mongoose = require('mongoose');

const uri = process.env.LINK;

router.post('/list_user', async (req, res) => {
    await mongoose.connect(uri);

    let user = await userModel.findOne({email:req.body.email});
  if(user){
    if(user.password==req.body.password){
        console.log("thanh cong");
        user.password=null;
        return res.send(user)

    }
    else{
        console.log("mật khẩu không chính xác")
        res.send({msg:"sai mật khẩu"})
    }
  } else{
    console.log("lỗi")
    res.send({msg:"không tồn tại user"})
  }
    
    
})


module.exports=router;


