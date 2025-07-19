const Trainee= require('../models/TraineeMode.js')
const mongoose = require("mongoose")
const nodemailer = require("nodemailer");
const { findOneAndUpdate, findByIdAndUpdate } = require('../models/TraineeMode.js');
 const CorporateTraineeRequests = require('../models/CorporateTraineeRequests')
 const CreditCards = require('../models/CreditCardModel')
var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const nodemailer = require("nodemailer");


const maxAge = 3 * 24 * 60 * 60;
const createToken = (name) => {
    return jwt.sign({ name }, 'supersecret', {
        expiresIn: maxAge
    });
};
//create trainee
const createTrainee = async (req, res) => {
  const {country,username,firstName,lastName,password,gender,email,wallet,corporateName,Type}= req.body
  const user= await Trainee.findOne({email});
  const user2= await Trainee.findOne({username});

  if(!user && !user2){
  try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = await  Trainee.create({country,username,firstName,lastName,password:hashedPassword,gender,email,wallet,corporateName,Type})
      
      res.status(200).json(user)
  } catch (error) {
      res.status(400).json({ error: error.message })
  }
}else if(user){
  res.send({ message: "email" })

}else{
  res.send({ message: "username" })

}
}



const login = async (req, res) => {

  //  const {username,password} = req.body;
   const username = req.query.username
   const password = req.query.password

  const checkUser = await Trainee.findOne({username:username});
  //console.log(checkUser)
  if(checkUser){

    if(await bcrypt.compare(password,checkUser.password)){
      const token = createToken(checkUser.username);
      const result = await Trainee.findOne({username:username})
      // res.send({message:"hello"})
      res.status(200).json(result);
  }else{
      res.status(400).json("Incorrect Password")
  }
} else{
    res.send({message: "nonexistent"})
  }


  


}

const logout = async (req, res) => {

  
    
    res.clearCookie('jwt');
    
    res.end();
    
}

/*              7AGTYYYYYYYYY               */

// const changePassword = async (req, res) => {
//   const {name, password}= params.body;
//   try{
//       const user = await Trainee.findOne({name});
//       user.password=password;
//       findOneAndUpdate({name},user);
//       res.send({message: "Password Successfully Changed"});
  
//   }
  
//   catch{
//       res.send({message: "Password Change Failed"});
//   }
  
//   }

  
  
  const sendEmail =async(req,res) => {

    const{email}=req.body;
    
    const user= await Trainee.findOne({email});

    if (user){

      // const id = user.
      const url = `http://localhost:3000/resetPassword?userid=${user._id}`
      let mailTransporter=nodemailer.createTransport({
        port: 587,
        secure: false,
        service: "hotmail",
        auth:{user: "aclsender@outlook.com",
        pass: "Acl123$%"}
        
      });
      
      let info = await mailTransporter.sendMail({
        from: "aclsender@outlook.com", // sender address
        to: email, // list of receivers
        subject: "Password Change", // Subject line
        text: url // plain text body
      //  html: '<a href=url>Click here to reset your password</a>'
      });
      
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      res.send({message: "Sent Successfully"});
    } else{
      res.send({message:"none"})
    }
      
     
}

const changePassword = async (req, res) => {
  const {password, userid} = req.body;
  if(mongoose.Types.ObjectId(userid)){
      const user = await Trainee.findById(mongoose.Types.ObjectId(userid));
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);   
      user.password=hashedPassword;
        const filter = {email : user.email};
        const update= {password : hashedPassword};
     const doc = await Trainee.findOneAndUpdate(filter, update,{
        returnOriginal: false
    //   }).then(function(){
    //     userModel.findOne({email: email}).then(function(userModel){
    //       res.send(userModel)
    //     })
      });
      //doc = await Character.findOne(filter);
    res.send(doc);

    }else{
      res.status(400).json(res);
    }
  
  }
const print =async(req,res) => {
  console.log(req.body.email);
  res.send({email: req.body.email});


}
  const updateCopCountry = async(req,res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(400).json({error:"No Such ID"});
    }

    try{
        const result = await Trainee.findOneAndUpdate({_id:id},{...req.body});
        const newRecord = await Trainee.findById({_id:id});
        res.status(200).json(newRecord);

    }
    catch(error)
    {
        res.status(400).json({error:error});
    }

}

const setCountryToken = async (req, res) => {
  const {country} = req.body
  res.cookie('country', country, { httpOnly: true, maxAge: maxAge * 1000 });
  res.status(400).json(req.cookies)
}


const selectCountry = async(req,res)=>{


  // if(!mongoose.Types.ObjectId.isValid(id))
  //   {
  //       return res.status(404).json({error: "No guest with that ID"})
  //   }
  
  
      const {wallet} = req.body;
    //   console.log(country);
      try{
        const Trainee = await Trainee.create({wallet})
        res.status(200).json(Trainee);
  
      }
      catch(error)
      {
  
        res.status(400).json({error: error.message})
  
      }
    //   // const guest = await Guest.create({"country": country},{
    //   //     ...req.body
    //   // })
  
    // if(!guest){
    //   return res.status(400).json({error:'no such guest'})
    // }
  
    // res.status(200).json(guest)
  }

  //request access to this course
const post= async(req,res)=>{
  const traineeID=req.body.traineeID
  const courseID=req.body.courseID

  try{
    const requests= await  CorporateTraineeRequests.create( {traineeID,courseID})
   res.status(200).json(requests)
  }
  catch(error){
    res.status(400).json({error: error.message})
     }
    
}

  const takecreditcarddetails = async (req,res)=>
{
const number= req.body.number;
const cvv= req.body.cvv;
const expiryDate= req.body.expiryDate;
const holderName= req.body.holderName;

try{
  const creditcard= await  CreditCards.create( {number,cvv,expiryDate,holderName})
 res.status(200).json(creditcard)
}

catch(error){
  res.status(400).json({error: error.message})
   }


}
  
  
const getCountryToken = async (req, res) => {
  res.status(400).json(req.cookies.try)
}
const addingCourseToTrainee= async (req,res)=>{
  const traineeID = req.body.traineeID
  const courseID= req.body.courseID
  
  if(traineeID){
    const result = await Trainee.updateOne({_id: traineeID},
      {$push:{courses: mongoose.Types.ObjectId(courseID)}})
  const trainee= await Trainee.findById(traineeID)
    res.status(200).json(trainee);
  
    }
  
    else{
        res.status(400).json({error:"invalid course"})
    }
  //63a0c70d0d30e428a3009425
  
  }
  const getTraineeCourses = async(req,res)=>{
    const traineeID= req.body.traineeID
  
    try{
      const result = await Trainee.findById(mongoose.Types.ObjectId(traineeID)).populate("courses")
    res.status(200).json(result.courses)
    }
    catch(error){
      res.status(400).json({error: error.message})
       }
     
  }

  const getTraineeByID = async(req,res) => {
    const traineeId = req.query.traineeId
    if(traineeId){
      const result = await Trainee.findById(mongoose.Types.ObjectId(traineeId));
      res.status(200).json(result);
    
    } else{
      res.status(400).json(res)
    }
    
  }

  const getTraineeByusername = async(req,res) => {
    const username = req.query.username
    if(username){
      const result = await Trainee.findOne({username:username})
      res.status(200).json(result);
    
    } else{
      res.status(400).json(res)
    }
    
  }

  const payWithWallet = async(req,res)=>{
    const traineeID= req.query.traineeId
    const price = req.query.price
  
    try{
      const result = await Trainee.findOne({_id:traineeID})

      console.log(result)
      if (result.wallet>=price){
        result.wallet = result.wallet - price;
       const newtrainee = await Trainee.findOneAndUpdate({_id:traineeID},result) 
       res.status(200).json(newtrainee)
      }else{
        res.status(400).json('insuff')
      }

    }
    catch(error){
      res.status(400).json({error: error.message})
       }
     
  }


  
  
  ////////////////////////////////////////////




module.exports= {
  
  createTrainee,
  changePassword,
  sendEmail,
  selectCountry,
  updateCopCountry,
  takecreditcarddetails,
  createTrainee,
  login,
  logout,
  print,
  setCountryToken,
  getCountryToken,
  post,
  addingCourseToTrainee,
  getTraineeCourses,
  getTraineeByID,
  getTraineeByusername,
  takecreditcarddetails,
  payWithWallet
  
}
