const mongoose= require('mongoose')

const Schema = mongoose.Schema

const corporateTraineeRequestsSchema = new Schema ({
    traineeID :{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Trainee",
        required:true
    },
    courseID :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Courses",
        required:true
    },
   
  
   

    },{timestamps: true})

    module.exports = mongoose.model('CorporateTraineeRequests',corporateTraineeRequestsSchema)