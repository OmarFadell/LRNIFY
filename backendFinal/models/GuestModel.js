const mongoose= require('mongoose')

const Schema = mongoose.Schema

const guestSchema = new Schema ({
    country :{
        type:String,
        required:false
    },
  
   

    },{timestamps: true})

    module.exports = mongoose.model('Guest', guestSchema)