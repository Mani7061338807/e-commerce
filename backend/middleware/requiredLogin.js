const jwt = require('jsonwebtoken');
const JWT_SECRET = "5kjrhgihsuhfhgishkgnfoiajf"
const User = require('../model/userModel')
const momgoose  = require('mongoose')
module.exports = (req,res,next)=>{
   const {authorization} = req.headers;
   if(!authorization){
       return res.status(401).json({message:"you must be login"})
   }
   const token = authorization.replace("Bearer ","");
   jwt.verify(token,JWT_SECRET,(err,payload)=>{
       if(err){
           return res.status(401).json({message:"you must be login"})
       }
       const {_id} = payload;
       User.findById(_id).then(userData=>{
           req.user = userData
           next()
       })
   })
}