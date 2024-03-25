const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const routerService = require('./Router/routerService')
const routerJob = require('./Router/routerJob')
const routerLogin = require('./Router/routerLogin')
const routerThongke = require('./Router/routerThongke')
const port = process.env.PORT || 3000
const app = express()
app.use('/Service',routerService)
app.use('/Job',routerJob)
app.use('/Login',routerLogin)
app.use('/Thongke',routerThongke)

app.listen(port,()=>{       
    console.log(`Server running on the port ${port}`)
})
