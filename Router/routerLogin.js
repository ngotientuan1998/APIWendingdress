

const express = require('express');
const userModel = require('../model/modelUser');

const router = express.Router();
const mongoose = require('mongoose');

const uri = process.env.LINK;

router.post('/list_user', async (req, res) => {
  await mongoose.connect(uri);
  console.log("db connect")
  let user = await userModel.findOne({ email: req.body.email });
  console.log("connect 1")
  if (user) {


    if (user && user.password === req.body.password) {
      console.log("Đăng nhập thành công");
      user.password = null;
      res.status(200);
      res.send({ user });
      console.log(user);
    } else {
      console.log("Mật khẩu không chính xác");
      res.status(401).json({ message: "Sai tên đăng nhập hoặc mật khẩu" });
    }

  } else {
    console.log(user);

    console.log("lỗi")
    res.status(401).send({ msg: "không tồn tại user" })
  }


})

router.put('/changepass', async (req, res) => {
  try {
    await mongoose.connect(uri);
    let user=await userModel.find()
  } catch (error) {
    console.log(error);
  }
})


module.exports = router;


