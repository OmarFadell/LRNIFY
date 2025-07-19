const mongoose= require('mongoose')

const Schema = mongoose.Schema

const creditCardSchema = new Schema ({
    number :{
        type:String,
        required:true
    },
    cvv :{
        type:String,
        required:true
    },
    expiryDate :{
        type:String,
        required:true
    },
    holderName:{
        type:String,
        required: true
    },
   

    },{timestamps: true})

    module.exports = mongoose.model('CreditCard',creditCardSchema)