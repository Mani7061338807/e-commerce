const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        requitred:true 
    },
    textarea:{
        type:String,
        required:true
    }
},{timestamps:true})

mongoose.model('Contact',contactSchema)