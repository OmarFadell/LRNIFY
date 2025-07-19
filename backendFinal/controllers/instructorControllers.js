
const Instructor= require('../models/InstructorModel')
const mongoose = require("mongoose")
const InstructorModel = require('../models/InstructorModel')
const ReviewInstructors = require('../models/ReviewInstructorsModel')
const ReviewCoursesModel = require('../models/ReviewCoursesModel')
const nodemailer = require("nodemailer");
const { findOneAndUpdate, findByIdAndUpdate } = require('../models/TraineeMode.js');
var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60;
const createToken = (name) => {
    return jwt.sign({ name }, 'supersecret', {
        expiresIn: maxAge
    });
};
//create instructor
// const createInstructor= async (req,res) =>{
//     const {usserId,username,password,country,rating,biography,email}= req.body
   
//     // add instructor to db
//     try{
// const instructor= await  Instructor.create( {usserId,username,password,country,rating,biography,email})
//    res.status(200).json(instructor)
//  } 
//    catch(error){
//    res.status(400).json({error: error.message})
//     }
// }

const GetInstructorReviews = async(req,res) =>{
  const instructorUsername = req.query.instructorUsername;
  if(instructorUsername){
    
    const review = await ReviewInstructors.find({instructorUsername:String(instructorUsername)})
    res.status(200).json(review)
   }else{
      res.status(400).json({error:"Instructor ID is required"})
  }

}

const login = async (req, res) => {

  // const {username,password} = req.params;
  const username = req.query.username
  const password = req.query.password

  const checkUser = await InstructorModel.findOne({username:username});
 // console.log(checkUser)
  if(checkUser){

    if(await bcrypt.compare(password,checkUser.password)){
      const token = createToken(checkUser.username);
      // res.cookie('jwtInstructor', token, { httpOnly: true, maxAge: maxAge * 1000 });
      // res.status(200).json('Welcome!'+checkUser.username);
      const result = await InstructorModel.findOne({username:username})
      // res.send({message:"hello"})
      res.status(200).json(result);
  }else{
      res.status(400).json("Incorrect Password")
  }
} else{
    res.send({message: "nonexistent"})
  }


  


}


//get ratings and reviews of instructors courses
//Sarah
const getRatingsReviews= async (req,res)=>
{ 
  const id = req.query.id
  
  if(!mongoose.Types.ObjectId.isValid(id))
  {
      return res.status(404).json({error: "No Instructors with that ID"})
  }

  const instructor= await Instructor.findById(id)

  if(!instructor)
  {
    return res.status(404).json({error:"No Instructors availabe with that ID."})
  }

  var query ={instructor:instructor.username}

  const reviews = await ReviewCoursesModel.find(query).sort({createdAt: -1})


  res.status(200).json(reviews)



}

const GetInstructorRating = async(req,res) =>{
  const instructorUsername = req.query.instructorUsername;
  var AccRate = 0;
  var i = 0;
  if(instructorUsername){
    
    const review = await ReviewInstructors.find({instructorUsername:String(instructorUsername)})

    for (i = 0; i<review.length; i++){

      AccRate+= review.data.rating;


    }


    res.status(200).json(AccRate)
   }else{
      res.status(400).json({error:"Instructor ID is required"})
  }

}

const createInstructor = async (req, res) => {
  const {username,password,email}= req.body
  const user= await InstructorModel.findOne({email});
  const user2= await InstructorModel.findOne({username});

  if(!user && !user2){
  try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = await  InstructorModel.create({country:'Undefined',username,usserId:0,rating:1,password:hashedPassword,biography:'Create a Biography for your students',email,firstSignin:true})
      
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

const secondsignin = async(req,res)=> {

  const instructorId = req.query.instructorId

  try{
    const instructor = await InstructorModel.findById(mongoose.Types.ObjectId(instructorId))
    instructor.firstSignin = false;
    const newInstructor = await InstructorModel.findByIdAndUpdate(mongoose.Types.ObjectId(instructorId),instructor)
    res.status(200).json(newInstructor)
  }catch{
    res.status(400).json('error')
  }


}



//select country
const updateCopCountry = async(req,res) =>{
  const {id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(id))
  {
      return res.status(400).json({error:"No Such ID"});
  }

  try{
      const result = await Instructor.findOneAndUpdate({_id:id},{...req.body});
      const newRecord = await Instructor.findById({_id:id});
      res.status(200).json(newRecord);

  }
  catch(error)
  {
      res.status(400).json({error:error});
  }

}

const selectCountry = async(req,res)=>{


  // if(!mongoose.Types.ObjectId.isValid(id))
  //   {
  //       return res.status(404).json({error: "No guest with that ID"})
  //   }
  
  
      const {userId,username,password,rating,biography,email} = req.body;
    //   console.log(country);
      try{
        const instructor = await Instructor.create({userId,username,password,rating,biography,email})
        res.status(200).json(instructor);
  
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

  const getInstructors = async (req,res)=> {
    const Instructors = await Instructor.find({});
    res.status(200).json(Instructors);
}

const getInstructorbyId = async(req,res) => {
  const instructorId = req.query.instructorId
  if(instructorId){
    const result = await InstructorModel.findById(mongoose.Types.ObjectId(instructorId));
    res.status(200).json(result);
  
  } else{
    res.status(400).json(res)
  }
  
}






const changeBio = async(req,res,next) => {
  const instructorId = req.query.instructorId;
  if(instructorId){
    InstructorModel.findByIdAndUpdate(mongoose.Types.ObjectId(instructorId),req.body).then(function(){
      InstructorModel.findById(mongoose.Types.ObjectId(instructorId)).then(function(InstructorModel){
        res.send(InstructorModel)
      })
      
    })
  }else{
    res.status(400).json(res);
  }
}

const createInstructorReview= async (req,res)=>{
  const rating = req.body.rating;
  const instructorUsername = req.body.instructorUsername;
  const comment = req.body.comment;
  const userid = req.body.userid
   // const commentId = req.body.commentId;

    try{

      const find = await ReviewInstructors.find({userid:userid})
      if(find.length!=1){
        
        const instructor = await InstructorModel.findOne({_id:instructorUsername});
        const avg = instructor.rating
        const reviews = await ReviewInstructors.find({instructorUsername:instructorUsername})
        const count = reviews.length;
        const rate = count*avg;
        const newrate = rate + rating;
        const tobeposted = newrate/(count+1);
        instructor.rating = Math.round(tobeposted,2);
        const newinst = await InstructorModel.findByIdAndUpdate(mongoose.Types.ObjectId(instructor.id),instructor)
        const reviewInstructors= await ReviewInstructors.create( {instructorUsername,comment,rating,userid})

        
        
        
       
        res.status(200).json(reviewInstructors)

      } else{
        res.send({message: "already rated"})
      }
    }
     catch(error){
    res.status(400).json({error: error.message})
     }

}



  
module.exports= {
  createInstructor,
  updateCopCountry,
  selectCountry,
  getInstructors,
  getInstructorbyId,
  changeBio,
  GetInstructorReviews,
  createInstructorReview,
  GetInstructorRating,
  getRatingsReviews,
  login,
  secondsignin

  
}