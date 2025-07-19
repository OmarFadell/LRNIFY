const Admin= require('../models/AdminModel')
const mongoose = require("mongoose")
const { db } = require('../models/AdminModel')
const AdminModel = require('../models/AdminModel')
const CorporateTraineeRequests = require('../models/CorporateTraineeRequests')
var bcrypt = require('bcrypt');

// create new admin
const createAdmin= async (req,res) =>{
  const {username,password}= req.body
  
  const user2= await Admin.findOne({username});

  if(!user2){
  try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = await  Admin.create({username,password:hashedPassword})
      
      res.status(200).json(user)
  } catch (error) {
      res.status(400).json({ error: error.message })
  }
}else{
  res.send({ message: "alreadyexist" })

}
}

const AdminLogin= async (req,res) =>{
  
const username = req.query.username
  const password = req.query.password

  const checkUser = await Admin.findOne({username:username});
 // console.log(checkUser)
  if(checkUser){

    if(await bcrypt.compare(password,checkUser.password)){
      // const token = createToken(checkUser.username);
      // res.cookie('jwtInstructor', token, { httpOnly: true, maxAge: maxAge * 1000 });
      // res.status(200).json('Welcome!'+checkUser.username);
      const result = await Admin.findOne({username:username})
      // res.send({message:"hello"})
      res.status(200).json(result);
  }else{
      res.status(400).json("Incorrect Password")
  }
} else{
    res.send({message: "nonexistent"})
  }



 
}

const getCorporateTraineeRequests = async(req,res)=>{

  try{
    const result = await CorporateTraineeRequests.find().populate("traineeID").populate("courseID")
   
  res.status(200).json(result)
  }
  catch(error){
    res.status(400).json({error: error.message})
     }
   
}
 module.exports= {createAdmin,AdminLogin,getCorporateTraineeRequests}

