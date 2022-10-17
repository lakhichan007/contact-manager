const express=require('express');
const dotenv = require('dotenv');
const mongoose=require('mongoose')
const cors=require('cors')
dotenv.config();

const port=process.env.PORT || 8000

const app=express()
const user=require('./routes/user');
const contacts=require('./routes/Contacts')
app.use(cors())
mongoose.connect("mongodb+srv://lakhichan007:12345@cluster7.luwegfp.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("sucessfully connected with Database")
}).catch((e)=>{
    console.log(e)
})
app.use('/',user)
app.use('/contact',contacts)

app.listen (port,()=>{
    console.log(`server is sunning at 8000`)
})