const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()
const routerService = require('./Router/routerService')
const routerJob = require('./Router/routerJob')
const routerLogin = require('./Router/routerLogin')
const routerUser= require('./Router/routerUser')
const port = process.env.PORT || 3000
const app = express()
app.use('/Service',routerService)
app.use('/Job',routerJob)
app.use('/Login',routerLogin)
app.use('/User',routerThongke)

app.listen(port,()=>{       
    console.log(`Server running on the port ${port}`)
})




