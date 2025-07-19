
const mongoose = require("mongoose")
const { db } = require('../models/Countries')
const Countries = require('../models/Countries')

const AddCountry= async (req,res) =>{
    const Name = req.body.Name;
    const Currency = req.body.Currency;
    const multi = req.body.multi
  
    try{
      const Country= await Countries.create( {Name,Currency,multi})
     res.status(200).json(Country)
    }
    catch(error){
      res.status(400).json({error: error.message})
       }
  
  }

  const getCountries = async (req,res)=> {

        const Country = await Countries.find({}).sort({createdAt: -1});
res.status(200).json(Country);
}

module.exports= {getCountries,AddCountry}