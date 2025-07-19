const CorporateTrainee = require('../models/CorporateTraineeModel')
const mongoose = require("mongoose")
const Cop = require('../models/CorporateTraineeModel')

//select country
const updateCopCountry = async(req,res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(400).json({error:"No Such ID"});
    }

    try{
        const result = await CorporateTrainee.findOneAndUpdate({_id:id},{...req.body});
        const newRecord = await CorporateTrainee.findById({_id:id});
        res.status(200).json(newRecord);

    }
    catch(error)
    {
        res.status(400).json({error:error});
    }

}
const selectCountry = async(req,res)=>{


// if(!mongoose.Types.ObjectId.isValid(id))
//   {
//       return res.status(404).json({error: "No guest with that ID"})
//   }


    const {corporateName} = req.body;
  //   console.log(country);
    try{
      const corporateTrainee = await CorporateTrainee.create({corporateName})
      res.status(200).json(corporateTrainee);

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


const createTrainee= async (req,res) =>{
  const {corporateName,country}= req.body
 
  // add Trainee to db
  try{
const cop= await  Cop.create({corporateName,country})
 res.status(200).json(cop)
} catch(error){
 res.status(400).json({error: error.message})
  }
}


module.exports ={
selectCountry,
updateCopCountry,
createTrainee

}