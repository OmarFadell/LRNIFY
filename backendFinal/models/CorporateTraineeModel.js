const mongoose= require('mongoose')

const Schema = mongoose.Schema

const corporateTraineeSchema = new Schema ({
    corporateName :{
        type:String,
        required:true
    },
    country :{
        type:String,
        required:false
    },
  
   
   

    },{timestamps: true})

    module.exports = mongoose.model('CorporateTrainee', corporateTraineeSchema)