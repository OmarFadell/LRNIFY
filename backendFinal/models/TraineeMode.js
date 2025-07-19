const mongoose= require('mongoose')

const Schema = mongoose.Schema

const traineeSchema = new Schema ({
   
    country :{
        type:String,
        required:false
    },
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
    },corporateName :{
        type:String,
        required:true
    }, wallet :{
        type:Number,
        required:true
    },Type:{
        type: String,
        required: true
    },courses:{
        type: mongoose.Schema.Types.Array,
        ref:"Courses",
        required:false
    }


   

    },{timestamps: true})

    module.exports = mongoose.model('Trainee',traineeSchema)