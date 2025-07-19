const mongoose= require('mongoose')

const Schema = mongoose.Schema

const subtitlesSchema = new Schema ({
    
    courseId :{
        type:String,
        required:true
    },
    video :{
        type:Object,
        required:false
    },
    body:{
        type:String,
        required: true
    },
    title :{
        type:String,
        required: true
    },
    VideoDesc: {
        type: String,
        required: false
    }




    },{timestamps: true})

    module.exports = mongoose.model('Subtitles',subtitlesSchema)