const express = require('express');
const mongoose = require('mongoose');
const app = express();
// const cors = require('cors');
PORT = process.env.PORT || 5000;
require('dotenv').config();
require('./model/userModel');
require('./model/contausModel');
const uri = process.env.MONGO_URI;
app.get('/',(req,res)=>{
    res.send("hello..");
})

mongoose.connect(uri);

mongoose.connection.on('connected',()=>{
    console.log("mongoose connected..");
})

mongoose.connection.on('error',(err)=>{
    console.log("mongo connecting error...",err)
})

app.use(express.json());
app.use(require('./routes/auth'))
app.use(require('./routes/contactus'))

app.listen(PORT,()=>{
    console.log("server is running on port ",PORT);
})
 