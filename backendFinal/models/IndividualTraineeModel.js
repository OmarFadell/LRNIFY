const mongoose= require('mongoose')

const Schema = mongoose.Schema

const individualTraineeSchema = new Schema ({
   
   
   
   
    username :{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    gender:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    wallet :{
        type:Number,
        required:true
    },
    country :{
        type:String,
        required:false
    }
  
   

    },{timestamps: true})

    module.exports = mongoose.model('IndividualTrainee', individualTraineeSchema)