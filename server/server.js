const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const orderRoutes=require('./routes/order')
const dotenv = require('dotenv')

const app=express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
dotenv.config()

app.use('/order',orderRoutes)

app.listen(4000,()=>{
    console.log('SERVER RUNNING!')
})