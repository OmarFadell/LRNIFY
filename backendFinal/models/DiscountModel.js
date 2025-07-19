const mongoose= require('mongoose')

const Schema = mongoose.Schema

const discountSchema = new Schema ({
    percentage :{
        type:Number,
        required:true
    },
    duration :{
        type:String,
        required:true
    },
    courseId :{
        type:String,
        required:true
    },
    country:{
        type:String,
        required: false
    },
    discountAdder: {
        type: String,
        requied: true
    },
   

    },{timestamps: true})

    module.exports = mongoose.model('Discount',discountSchema)