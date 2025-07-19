const Guest = require('../models/GuestModel')
const mongoose = require("mongoose")

//select country

const selectCountry = async(req,res)=>{


// if(!mongoose.Types.ObjectId.isValid(id))
//   {
//       return res.status(404).json({error: "No guest with that ID"})
//   }


    const {country} = req.body;
  //   console.log(country);
    try{
      const guest = await Guest.create({country})
      res.status(200).json(guest);

    }
    catch(error)
    {

      res.status(400).json({error: error.message})

    }
  //   // const guest = await Guest.create({"country": country},{
  //   //     ...req.body
  //   // })

  // if(!guest){
  //   return res.status(400).json({error:'no such guest'})
  // }

  // res.status(200).json(guest)
}

module.exports ={
selectCountry

}