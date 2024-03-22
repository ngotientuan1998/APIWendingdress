const express = require('express');
const jobModel = require('../model/modeJob');

const router = express.Router();
const mongoose = require('mongoose');

const env = require('dotenv').config();
const uri = process.env.LINK;

router.get('/list_job', async (req, res) => {
    await mongoose.connect(uri);

    let jobs = await jobModel.find();

    console.log(jobs);

    res.send(jobs);
})

router.post('/add_job', async (req, res) => {
    try {
        await mongoose.connect(uri);
        let job = req.body;
        await jobModel.create(job);
    } catch (error) {
        console.error(error);
        res.status(500).send('Lỗi');
    }
});

router.put('/update_job/:id', async(req,res)=>{
    try {
        await mongoose.connect(uri);
        let idJob=req.params.id;
        let updatedData = req.body;
        let updatedJob = await jobModel.findByIdAndUpdate(idJob, updatedData, { new: true });

        if (updatedJob) {
            res.status(200).send("Thành công");
        } else {
            res.status(404).send("Không tìm thấy công việc");
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Lỗi');
    }
})

router.delete('/delete_job/:id', async(req,res)=>{
    try {
        let idJob=req.params.id;
        let deleteJob=await jobModel.findByIdAndDelete(idJob);
        if (!deleteJob) {
            return res.status(404).json({ message: 'Không tìm thấy job' });
        }
        
        res.json({ message: 'Đã xóa thành công', deleteJob });
    } catch (error) {
        console.log(error);
        res.status(500).send('Lỗi');
    }
})

module.exports=router;


