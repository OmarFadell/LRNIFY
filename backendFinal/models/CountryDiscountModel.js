const mongoose= require('mongoose')

const Schema = mongoose.Schema

const countryDiscountSchema = new Schema ({
    name :{
        type:String,
        required:true
    },
   
    discount :{
        type:Number,
        required:true
    },


    },{timestamps: true})

    module.exports = mongoose.model('CountryDiscount', countryDiscountSchema)