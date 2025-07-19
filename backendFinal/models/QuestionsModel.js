const mongoose= require('mongoose')

const Schema = mongoose.Schema

const questionsSchema = new Schema ({
    questionsId :{
        type:Number,
        required:false
    },
  
    CreatorId :{
        type:String,
        required:true
    },

    examId :{
        type:String,
        required:true
    },

    question :{
        type:String,
        required:true
    },
    correctA:{
        type:String,
        required: false
    },
    a1 :{
        type:String,
        required: true
    },
    a2 :{
        type:String,
        required: true
    },
    a3:{
        type:String,
        required: true
    },
    a4:{
        type:String,
        required: true
    },




    },{timestamps: true})

    module.exports = mongoose.model('Questions',questionsSchema)