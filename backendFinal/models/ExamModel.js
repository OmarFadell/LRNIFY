const mongoose= require('mongoose')

const Schema = mongoose.Schema

const examSchema = new Schema ({
    examId :{
        type:String,
        required:true
    },
    instructorId :{
        type:String,
        required:true
    },
    courseCode :{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required: true
    },examTitle:{
        type:String,
        required:true
    }
   

    },{timestamps: true})

    module.exports = mongoose.model('Exam',examSchema)