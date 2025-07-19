const IndividualTrainee = require('../models/IndividualTraineeModel')
const CreditCardModel = require('../models/CreditCardModel')
const mongoose = require("mongoose")
var bcrypt = require('bcrypt');



// const createTrainee= async (req,res) =>{
//   const {country,username,firstName,lastName,password,gender,email,wallet}= req.body
 
//   // add trainee to db
//   try{
// const traine= await  IndividualTrainee.create({country,username,firstName,lastName,password,gender,email,wallet})
//  res.status(200).json(traine)
// } 
//  catch(error){
//  res.status(400).json({error: error.message})
//   }
// }
const createTrainee = async (req, res) => {
  const {country,username,firstName,lastName,password,gender,email,wallet}= req.body
  const user= await IndividualTrainee.findOne({email});
  const user2= await IndividualTrainee.findOne({username});

  if(!user && !user2){
  try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = await  IndividualTrainee.create({country,username,firstName,lastName,password:hashedPassword,gender,email,wallet})
      // const token = createToken(user.name);
      // res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(200).json(user)
  } catch (error) {
      res.status(400).json({ error: error.message })
  }
}else if(user){
  res.status(400).json({ message: "email" })

}else{
  res.status(400).json({ message: "username" })

}
}


//select country
const updateCopCountry = async(req,res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(400).json({error:"No Such ID"});
    }

    try{
        const result = await IndividualTrainee.findOneAndUpdate({_id:id},{...req.body});
        const newRecord = await IndividualTrainee.findById({_id:id});
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


    const {wallet} = req.body;
  //   console.log(country);
    try{
      const individualTrainee = await IndividualTrainee.create({wallet})
      res.status(200).json(individualTrainee);

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


const takecreditcarddetails = async (req,res)=>
{
const number= req.body.number;
const cvv= req.body.cvv;
const expiryDate= req.body.expiryDate;
const holderName= req.body.holderName;

try{
  const creditcard= await  CreditCardModel.create( {number,cvv,expiryDate,holderName})
 res.status(200).json(creditcard)
}

catch(error){
  res.status(400).json({error: error.message})
   }


}


module.exports ={
selectCountry,
updateCopCountry,
takecreditcarddetails,
createTrainee

}