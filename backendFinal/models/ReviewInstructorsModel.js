const mongoose= require('mongoose')

const Schema = mongoose.Schema

const reviewInstructorsSchema = new Schema ({
    instructorUsername :{
        type:String,
        required:true
    },
    comment :{
        type:String,
        required:true
    },
 
    rating:{
        type:Number,
        required: true
    },userid:{
        type:String,
        required:true
    }
   

    },{timestamps: true})

    module.exports = mongoose.model('ReviewInstructors',reviewInstructorsSchema)