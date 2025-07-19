const mongoose= require('mongoose')

const Schema = mongoose.Schema

const reportsSchema = new Schema ({

    CreatorId :{
        type:String,
        required:false
    },
    
    reportType :{
        type:String,
        required:true
    },
    title :{
        type:String,
        required:false
    },
    body:{
        type:String,
        required: true
    },

    status:{
        type:String,
        required:true
    },
    seen:{
        type:String,
        required:true
    },

    CourseCode:{
        type: String,
        required: true
    },AdminFollowUp:{
        type: String,
        required:false
    }
   
   

    },{timestamps: true})

    module.exports = mongoose.model('Reports',reportsSchema)