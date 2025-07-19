const mongoose= require('mongoose')

const Schema = mongoose.Schema

const adminSchema = new Schema ({
    userId :{
        type:Number,
        required:false
    },
    username :{
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true
    },
   

    },{timestamps: true})

    module.exports = mongoose.model('Admin',adminSchema)