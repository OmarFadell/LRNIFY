const mongoose= require('mongoose')

const Schema = mongoose.Schema

const PaymentSchema = new Schema ({
    TraineeId :{
        type:String,
        required:false
    },
    CourseId :{
        type:String,
        required:true
    },
    Amount :{
        type:Number,
        required:true
    },
   

    },{timestamps: true})

    module.exports = mongoose.model('Payments',PaymentSchema)