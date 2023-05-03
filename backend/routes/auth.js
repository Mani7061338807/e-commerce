const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = "5kjrhgihsuhfhgishkgnfoiajf"
const requireLogin = require('../middleware/requiredLogin')
const User = mongoose.model('User');

router.get('/h',requireLogin,(req,res)=>{
    res.send("hello user")
})
router.post('/signup',(req,res)=>{
   const {name,email,mobile,dateofbirth,password} = req.body;
   if(!name || !email|| !mobile|| !dateofbirth|| !password){
       return res.status(422).json({message:"please add all the fields:"})
   }
   User.findOne({email:email})
   .then((savedUser)=>{
       if(savedUser){
           return res.status(422).json({error:"user already exits with that email"})
       }
       bcrypt.hash(password,12).then((hashedpassword)=>{

        const user =  new User({
            name,
            email,
            mobile,
            dateofbirth,
            password:hashedpassword,
        });
        user.save()
        .then(()=>{
            res.send("user added");
        })
        .catch((err)=>{
            res.send("error",err)
        });

       })
       .catch((err)=>{
           res.send("error",err)
       })
   })
})

router.post('/signin',(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(422).json({message:"please add all the fields"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
       if(!savedUser){
           return res.status(422).json({error:"invalid email or password"}) 
       }
       bcrypt.compare(password,savedUser.password)
       .then(doMatch=>{
           if(doMatch){
               const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
               res.json({token})
            //    res.json("sign in scucessfully")
           }
           else{
              return  res.status(422).json({error:"invalid email or password"}) 
           }
       }).catch(err=>{
            console.log(err)
       })
       
    })
})

module.exports = router;