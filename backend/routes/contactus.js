const express = require('express')
const mongoose = require('mongoose')
const Contact = mongoose.model('Contact')
const router = express.Router()

router.post('/Contactus',(req,res)=>{
    const {fullname,email,textarea}= req.body
    if(!fullname ||!email || !textarea){
        res.status(422).json({error:"please add the fields"})
    }
    const contact = new Contact({
        fullname,
        email,
        textarea
    })
    contact.save().then(result=>{
        res.json({contact:result})
    })
    .catch(err=>{
        console.log(err)
    })
})
module.exports = router