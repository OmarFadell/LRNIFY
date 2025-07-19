const Instructor= require('../models/InstructorModel')
const mongoose = require("mongoose")
const InstructorModel = require('../models/InstructorModel')
const Subtitles = require('../models/SubtitlesModel')

//create subtitle

const CreateSubtitle = async (req,res) => {
  //  const courseId = req.query.courseId;
    const {courseId, video, body, title,VideoDesc} = req.body;

    try{
        const subtitle = await Subtitles.create({courseId, video, body, title, VideoDesc})
        res.status(200).json(subtitle)

    }
    catch(err){
        res.status(400).json(res)
    }
}
const getSubByCourse = async(req,res) => {
    const courseId = req.query.courseId;
    if(courseId){
        const result = await Subtitles.find({courseId:String(courseId)});
        res.status(200).json(result)
    }else{
        res.status(400).json(res)
    }
}

const getSubById = async(req,res) => {
    const subId = req.query.subId;
    if(subId){
        const result = await Subtitles.findById(mongoose.Types.ObjectId(subId));
        res.status(200).json(result)
    }else{
        res.status(400).json(res)
    }
}

const change = async(req,res) =>{
    const subId = req.query.subId;
    if(subId){
        Subtitles.findByIdAndUpdate(mongoose.Types.ObjectId(subId),req.body).then(function(){
            Subtitles.findById(mongoose.Types.ObjectId(subId)).then(function(Subtitles){
                res.send(Subtitles)
            })
        })

    }else{
        res.status(400).json(res)
    }
}

module.exports = {
    CreateSubtitle,
    getSubByCourse,
    getSubById,
    change
}