const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const orderRoutes=require('./routes/order')
const dotenv = require('dotenv')
const path=require('path')

const app=express()

const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
dotenv.config()

app.use('/order',orderRoutes)

app.use(express.static(path.join(__dirname,'.','/client/build')))

if(process.env.NODE_ENV=='production'){
    app.use(express.static('client/build'))
}

app.listen(PORT,()=>{
    console.log('SERVER RUNNING!')
})