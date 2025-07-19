const mongoose= require('mongoose')

const Schema = mongoose.Schema

const reviewCoursesSchema = new Schema ({
    Code :{
        type:String,
        required:true
    },
    comment :{
        type:String,
        required:true
    },
    commentId :{
        type:Number,
        required:false
    },
    rating:{
        type:Number,
        required: true
    },
      // instructor giving this courses username
      instructor:{
        type:String,
        required:false
    },userid:{
        type:String,
        required: true
    }
   

    },{timestamps: true})

    module.exports = mongoose.model('ReviewCourses',reviewCoursesSchema)