const express = require('express')
const HomeRoute = require("./api/routs/home")
const mongoose= require('mongoose');
const app = express();
const bodyparser = require("body-parser")

mongoose.connect("mongodb+srv://shivam:12345@cluster0.biznw86.mongodb.net/?retryWrites=true&w=majority");

mongoose.connection.on('error',err=>{
    console.log('connection failed');
});
mongoose.connection.on('Connected',connected=>{
    console.log('database is connected');
});

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())



app.use('/home',HomeRoute)
app.use((req,res,next)=>{
    res.status(200).json({
        message:"app is running sdlsadasdasojds"
    })
})

module.exports = app;
