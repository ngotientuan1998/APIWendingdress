

const express = require('express');
const userModel = require('../model/modelUser');

const router = express.Router();
const mongoose = require('mongoose');

const uri = process.env.LINK;

router.post('/login', async (req, res) => {
    await mongoose.connect(uri);
  console.log("db connect")
  let user = await userModel.findOne({ email: req.body.email });
  console.log("connect 1")
  if (user) {


    console.log(user);
    if (user && user.password === req.body.password) {
      console.log("Đăng nhập thành công");
      user.password = null;
      res.status(200);
      res.send({ user });
      console.log(user);
    }else {
      res.status(401);
    }

  } else {
    console.log(user);

    console.log("lỗi")
    res.status(401).send({ msg: "không tồn tại user" })
  }


})

module.exports = router;


