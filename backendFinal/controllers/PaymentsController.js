const Payments= require('../models/PaymentsModel')
const mongoose = require("mongoose")
const { db } = require('../models/AdminModel')

const CorporateTraineeRequests = require('../models/CorporateTraineeRequests')
var bcrypt = require('bcrypt');

// create new admin
const AddPayment = async (req,res) =>{

  const{TraineeId,CourseId,Amount} = req.body

  try{

    const payment = await Payments.create({TraineeId,CourseId,Amount});
    res.status(200).json(payment)
  }catch{
    res.status(400).json('error')

  }
}

const getPaymentByIdAndCourse = async(req,res) =>{

  TraineeId = req.query.TraineeId
  CourseId = req.query.CourseId

  try{
    const payment = Payments.find({TraineeId:TraineeId,CourseId:CourseId})
    res.status(200).json(payment)
  }catch{
    res.status(400).json(error)
  }


}


 module.exports= {AddPayment,getPaymentByIdAndCourse}

