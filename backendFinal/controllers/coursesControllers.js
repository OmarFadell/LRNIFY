const Courses= require('../models/CoursesModel')
const mongoose = require("mongoose")
const ReviewCoursesModel = require('../models/ReviewCoursesModel')
//////////////////////////////////////////////////
const CountryDiscountModel = require('../models/CountryDiscountModel')
const instructormodel = require('../models/InstructorModel')
const Discounts = require('../models/DiscountModel')
const registeredCourses = require('../models/RegisteredCourseModel')
const { argv } = require('process')
const { findOne, findById, findByIdAndUpdate } = require('../models/CoursesModel')
//////////////////////////////////////////////////


// Course review
const createReview= async (req,res) =>{
    const userid = req.body.userid;
    const rating = req.body.rating;
    const instructor = req.body.instructor;
    const comment = req.body.comment;
    const Code = req.body.Code;
     // const commentId = req.body.commentId;
    try{
        const find = await ReviewCoursesModel.find({userid:userid})
        if(find.length!=  1){
            const course = await Courses.findOne({Code:Code})
            console.log(course.rating)
            const avg = course.rating
            const reviews = await ReviewCoursesModel.find({Code:Code})
            const count = reviews.length
            // console.log('hena')
            console.log(reviews.length);
            const rate = count*avg;
            const newrate = rate + rating;
            const tobeposted = newrate/(count+1);
            course.rating = Math.round(tobeposted,2);
            const newcourse = await Courses.findByIdAndUpdate(mongoose.Types.ObjectId(course.id),course);
            const reviewCourses= await  ReviewCoursesModel.create( {Code,comment,rating,instructor,userid})
            
            res.status(200).json(reviewCourses)
        }else{
            res.send({message:'already rated'})
        }
      
    }
    catch(error){
      res.status(400).json({error: error.message})
       }
  
  }

//get all courses

const getCourses = async (req,res)=> {
    console.log('Course Get All');
    const courses = await Courses.find({}).sort({createdAt: -1});
res.status(200).json("test");
}

// get all courses codes
const getCodes = async (req,res)=> {
    console.log('code Get All');
    const codes = await Courses.find({},{Code:1,_id:0});
res.status(200).json(codes[0]);
}

//get a single course by id
const getCourse = async (req,res)=>{
    const {id } = req.params


    if(!mongoose.Types.ObjectId.isValid(id))
{
    return res.status(404).json({error: "No Course with that ID"})
}

    const course= await Courses.findById(id)

    if(!course){
        return res.status(404).json({error:"No Course availabe with that ID."})
    }

    res.status(200).json(course)
}

const getOneCourse = async(req,res) => {
          
    const courseId = req.query.courseId;
    // check if userId is not empty
    if(courseId){
    const result = await Courses.findById(mongoose.Types.ObjectId(courseId));
    const x = result.noOfViews;
    const y = x+1;
    await Courses.findByIdAndUpdate(mongoose.Types.ObjectId(courseId),{noOfViews: y}, {new:true})
    res.status(200).json(result);
    }else{
        res.status(400).json({error:"invalid course"})
    }
}

const mostViewedCourses = async(req,res) => {
    const courses = await Courses.find({published:true}).sort({noOfViews: -1})
    res.status(200).json(courses.slice(0,3))
}

//get all courses sorted by Subject Dec
const getCoursesbySubjectDec = async (req,res)=> {
    const courses = await Courses.find({}).sort({Subject: -1})

res.status(200).json(courses)
}

// get course by title or instructor
const getByTitleOrInstructor = async (req,res)=>{
    const title = req.query.title;

    if (title == ''){
        try{
            const list = await Courses.find({published:true})
            res.status(200).json(list)
        }catch(err){
            res.status(500).json({message: err.message})
        }
    }else{

    
    var query = {title:title}
    const courses = await Courses.find({title: { $regex: '.*' + title + '.*' },published:true}).sort({createdAt: -1})

    if(courses.length==0)
    {
        var query ={instructor:title}
        const courses = await Courses.find(query).sort({createdAt: -1})
         return res.status(200).json(courses)

    }
    if(courses.length==0)
    {
        return  res.status(404).json({error:"No Courses Found"})
    }

    return res.status(200).json(courses)
    }

}

const getByTitleAndInstructor = async (req,res)=>{
    const title = req.query.title;
    const instructor = req.query.instructorId

    if (title == ''){
        try{
            const list = await Courses.find()
            res.status(200).json(list)
        }catch(err){
            res.status(500).json({message: err.message})
        }
    }else{

    
    var query = {title:title}
    const courses = await Courses.find({title: { $regex: '.*' + title + '.*' },instructorId:instructor}).sort({createdAt: -1})

    if(courses.length==0)
    {
        var query ={instructor:title}
        const courses = await Courses.find(query).sort({createdAt: -1})
         return res.status(200).json(courses)

    }
    if(courses.length==0)
    {
        return  res.status(404).json({error:"No Courses Found"})
    }

    return res.status(200).json(courses)
    }

}

const sortByPrice = async (req,res) => {

    const sort = req.query.sort

    if (sort == 'asc'){

        try{
            const courses = await Courses.find({published:true}).sort({price:1})
            
            
                res.send(courses)
            
        }catch(err){
            res.status(500).json({message: err.message})
        }
        
    }else{
        try{
            const courses = await Courses.find({published:true}).sort({price:-1})
            
                res.send(courses)
        
        }catch(err){
            res.status(500).json({message: err.message})
        }
    }
    }

//get all courses sorted by Subject Asc
const getCoursesbySubjectAsc = async (req,res)=> {
    const courses = await Courses.find({}).sort({subject: 1})
res.status(200).json(courses)
}


//get all courses sorted by price Dec
const getCoursesbyPriceDec = async (req,res)=> {
    const courses = await Courses.find({}).sort({price: -1})

res.status(200).json(courses)
}

//get all courses sorted by price Asc
const getCoursesbyPriceAsc = async (req,res)=> {
    const courses = await Courses.find({}).sort({price: 1})

res.status(200).json(courses)
}
const getCoursesbyPriceAndInsAsc = async (req,res)=> {
    const instructorId = req.query.instructorId
    const courses = await Courses.find({instructor:instructorId}).sort({price: 1})

res.status(200).json(courses)
}

const getCoursesbyPriceAndInsDec = async (req,res)=> {
    const instructorId = req.query.instructorId
    const courses = await Courses.find({instructor:instructorId}).sort({price: -1})

res.status(200).json(courses)
}
const getFreeCourses = async (req,res)=> {
    const courses = await Courses.find({price:0})

res.status(200).json(courses)
}

//get all courses sorted by id Dec
const getCoursesbyIdDec = async (req,res)=> {
    const courses = await Courses.find({}).sort({courseId: -1})

res.status(200).json(courses)
}

//get all courses sorted by id Asc
const getCoursesbyIdAsc = async (req,res)=> {
    const courses = await Courses.find({}).sort({courseId: 1})

res.status(200).json(courses)
}



//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


const addDiscount = async (req,res) => {
    const {id, discount, year, month, day } = req.body
    const temp=req.price;

    if(!mongoose.Types.ObjectId.isValid(id))
{
    return res.status(404).json({error: "No Course with that ID"})
}

    const course= await Courses.findById(id)

    if(!course){
        return res.status(404).json({error:"No Course availabe with that ID."})
    }
    price=req.price*(1-(req.discount)/100);
    
    const promotionDate = new Date(year, month, day, 11, 59, 59, 0);
    const currentDate= new Date();
    //HENA 3YZ B2A AFDL A CHECK ENY WITHIN THAT TIME.......AKID KATEBHA 8LT LOL
    // while(promotionDate > currentDate){

    // }
    if(currentDate>promotionDate){
        price=temp;
    }
    res.status(200).json({message:"Discount Added Successfully"});

}

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////














const filterCourse = async (req,res) => {

    const rating = req.query.rating;
    
        const courses = await Courses.find({rating: Number(rating),published:true}).sort({createdAt: -1})
        res.status(200).json(courses)
    } 
    




//filter by price

const filterCoursePrice = async (req,res) => {

    const price = req.body.price;

    var query ={price:price}
    const courses = await Courses.find(query).sort({createdAt: -1})
    res.status(200).json(courses)

    if(!courses)

    {
        return res.status(404).json({error: "No Course with that ID"})

    }

    // filter by title
    }
    const filterCourseTitle = async (req,res) => {

        const title = req.body.title;
    
        var query ={title:title}
        const courses = await Courses.find(query).sort({createdAt: -1})
        res.status(200).json(courses)
    
        if(!courses)
    
        {
            return res.status(404).json({error: "No Course with that ID"})
    
        }
        }

    // filter by instructor





const filterCourseInstructor = async (req,res) => 
{

    const instructor = req.body.instructor;

    var query ={instructor:instructor}
    const courses = await Courses.find(query).sort({createdAt: -1})
    res.status(200).json(courses)

    if(!courses)

    {
        return res.status(404).json({error: "No Course with that ID"})

    }
    }

    const getCoursesByInstructor = async(req,res) => {
          
        const instructorId = req.query.instructorId;
        // check if userId is not empty
        if(instructorId){
        const result = await Courses.find({instructor:String(instructorId)});
        res.status(200).json(result)
        }else{
            res.status(400).json({error:"Instructor ID is required"})
        }
    }

    const getCoursesByCode = async(req,res) => {
          
        const Code = req.query.code;
        // check if userId is not empty
        if(Code){
        const result = await Courses.find({Code:String(Code)});
        res.status(200).json(result)
        }else{
            res.status(400).json({error:"Instructor ID is required"})
        }
    }

    
    const getReviewsByID = async(req,res) => {
          
        const Code = req.query.Code;
        // check if userId is not empty
        if(Code){
        const result = await ReviewCoursesModel.find({Code:String(Code)});
        res.status(200).json(result)
        }else{
            res.status(400).json({error:"error"})
        }
    }

    const getCoursesByInstructorname = async(req,res) => {
          
        const name = req.query.instructorName;
        // check if userId is not empty
        
            if(name){

            
            const inst = await instructormodel.findOne({username: name})
            
            if (inst){
                const result = await Courses.find({instructor:String(inst.id)});
                res.status(200).json(result)

            }else{
                res.status(200).json([])
            }

            
    }
}
    
    const addPreview = async (req,res,next) => {
    
        const courseId = req.query.courseId;
        if(courseId){
            console.log(req.body)
            
            Courses.findByIdAndUpdate(mongoose.Types.ObjectId(courseId),req.body).then(function(){
                Courses.findById(mongoose.Types.ObjectId(courseId)).then(function(CoursesModel){
                res.send(CoursesModel);
            })
        });
        } else{
            res.status(400).json({error:"invalid course"})
        }
        
    }

    const createReport= async (req,res) =>{
        const CreatorId = req.body.CreatorId;
        const reportId = req.body.reportId;
        const reportType = req.body.reportType;
        const body = req.body.body;
        const status = req.body.status;
        const seen = "unseen";
        const CourseCode= req.body.CourseCode;
         
        try{
          const report= await  ReportsModel.create( {CreatorId,reportId,reportType,body,status,seen,CourseCode})
         res.status(200).json(report)
        }
        catch(error){
          res.status(400).json({error: error.message})
           }
      
      }


      const getReports = async (req,res)=> {
        console.log('Course Get All');
        const reports = await ReportsModel.find({}).sort({createdAt: -1});
    res.status(200).json(reports);
    }


    const findReportbyCreatorId = async (req,res) => {

        const CreatorId = req.body.CreatorId;
    
        var query ={CreatorId:CreatorId}
        const report = await ReportsModel.find(query).sort({createdAt: -1})
        res.status(200).json(report)
    
        if(!report)
    
        {
            return res.status(404).json({error: "No Report with that CreatorID"})
    
        }
    
    }

    const editBodyForReport = async (req,res) => {

        const reportId = req.body._id;
    
        const body = req.body.body;
        // var query ={_id:reportId}
        // const report = await ReportsModel.find(query).sort({createdAt: -1})
        // var obj =  await ReportsModel.find({_id:reportId});
        const report1= await ReportsModel.findOneAndUpdate(mongoose.Types.ObjectId(reportId),{body:req.body.body})
    
        if(!report1)
    
        {
            return res.status(404).json({error: "No Report with that CreatorID"})
    
        }
    
    
        
    
        res.status(200).json({result:report1});
    
    }

    const publish = async(req,res) =>{

        const courseId = req.query.courseId;
        try{
            const course = await Courses.findById(mongoose.Types.ObjectId(courseId))
            course.published = true
            const result = await Courses.findByIdAndUpdate(mongoose.Types.ObjectId(courseId),course)
            res.status(200).json(result)

        }catch{
            res.status(400).json(error)
        }


    }
    const unPublish = async(req,res) =>{

        const courseId = req.query.courseId;
        try{
            const course = await Courses.findById(mongoose.Types.ObjectId(courseId))
            course.published = false
            const result = await Courses.findByIdAndUpdate(mongoose.Types.ObjectId(courseId),course)
            res.status(200).json(result)

        }catch{
            res.status(400).json(error)
        }


    }
    
    const promotion = async(req,res) =>{


        const courseId = req.query.courseId

        const disc = await Discounts.find({courseId:courseId})

        if (disc.length ==1){

            try{

                const newDisc = await Discounts.findOneAndUpdate({courseId:courseId},req.body)
                res.status(200).json(req.body)
            }catch{

                res.status(400).json({error:error.message})

                

            }




        }else{
            try{

                const newDisc = await Discounts.create(req.body)
                res.status(200).json(newDisc)
            }catch{

                res.status(400).json("error")

                

            }

        }

        



    }


    const getPromo = async(req,res) =>{

        const courseId = req.query.courseId

        try{

            const promo = Discounts.find({courseId:courseId})
            res.status(200).json(promo)
        }catch{
            res.status(400).json('error')
        }


    }
    




module.exports= {
    getCourses,
        getCourse,
        getCoursesbyPriceDec,
        getCoursesbyPriceAsc,
        getCoursesbySubjectDec,
        getCoursesbySubjectAsc,
        getCoursesbyIdDec,
        getCoursesbyIdAsc,
        filterCourse,
        filterCoursePrice,
        filterCourseTitle,
        filterCourseInstructor,
        getByTitleOrInstructor,
        getCoursesByInstructor,
        getCodes,
        createReview,
        getCoursesByInstructor,
        addPreview,
        getOneCourse,
        addDiscount,
        mostViewedCourses,
        createReport,
        getReports,
        findReportbyCreatorId,
        editBodyForReport,
        getCoursesByInstructorname,
        sortByPrice,
        getReviewsByID,
        getFreeCourses,
        getByTitleAndInstructor,
        getCoursesbyPriceAndInsDec,
        getCoursesbyPriceAndInsAsc,
        publish,
        unPublish,
        promotion,
        getCoursesByCode,
        getPromo






    
}