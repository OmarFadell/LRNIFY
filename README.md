# LRNIFY

The purpose of the project, is to create a complete Online Learning System. An Online
Learning System is a web application through which individuals can attend pre-recorded
courses online. Existing web applications include but are not limited to Coursera, Udemy,
LinkedIn Learning, Great Learning and Udacity.

![Frontpage](https://user-images.githubusercontent.com/116273404/210757481-8a54e599-7a6c-496e-8373-fbc278031b25.jpg)


# Course
Advanced Computer Lab (CSEN 704/ DMET 706), Winter 2022

# Overview
This project will follow the Agile Methodology; meaning it will be split into Sprints, with
each Sprint lasting a set amount of time and a fully functioning version of the project
with the specified System Requirements should be submitted and will be evaluated.

#  Objectives
• Learn how to properly use the Agile Methodology to plan out a project and develop
the software.

• Learn the process of following a given set of System Requirements to develop a
software.

• Learn to research and master the use of the MERN Stack.
• Learn how to work together as a team on GitHub.

## Motivation
After the pandemic the need for online courses has risen and people have now found it easier to take courses from the comfort of their homes. So we have decided to help them get the best education there is no matter where they are.

## Build Status
Current bugs/errors that need addressing:

-Alot of white spaces

-No visible feedback to user

-Navigation is irreverable in alot of pages

-Website is not easily learnable and not quite efficient 

-Overall Ux is not yet user satisfying  

-Not all buttons aresymmetric 

-UI is not proffesional at this point

-Recieving an email to change a forgotten password does not always work

-Instructor viewing his/her ratings and reviews is not wokring 

-The refund made by a trainee is not reflected in instructors wallet/balance/money owed

-Instructor/trainees can not follow up on unresolved problems 


## Code Style
#### MVC
![MVC](https://user-images.githubusercontent.com/116273404/210782319-9c5ece8e-9aa0-45f0-a21d-96a644476750.svg)

• Background

MVC is short for Model, View, and Controller. MVC is a popular way of organizing your code. The big idea behind MVC is that each section of your code has a purpose, and those purposes are different. Some of your code holds the data of your app, some of your code makes your app look nice, and some of your code controls how your app functions.

MVC is a way to organize your code’s core functions into their own, neatly organized boxes. This makes thinking about your app, revisiting your app, and sharing your app with others much easier and cleaner.

• The parts of MVC

-Model: Model code typically reflects real-world things. This code can hold raw data, or it will define the essential components of your app. For instance, if you were building a To-do app, the model code would define what a “task” is and what a “list” is – since those are the main components of a todo app. 

-View: View code is made up of all the functions that directly interact with the user. This is the code that makes your app look nice, and otherwise defines how your user sees and interacts with it.

-Controller: Controller code acts as a liaison between the Model and the View, receiving user input and deciding what to do with it. It’s the brains of the application, and ties together the model and the view.

#### Camel Case Naming Convention 
  • Used in naming Controllers/Models/Routes/Frontend Pages and also functions(almost all the code if not all follows the CamelCase convetion)
  -camelCase is the practice of writing phrases without spaces or punctuation. The format indicates the separation of words with a single capitalized letter.



<!-- We used standard coding and programming styles.
All variables must be declared with const before they are used. We mostly declare the variable at the beginning of the function. 
All names start with a letter.
We always use ‘//’ in start of comments.  -->

## Screenshots

![App Screenshot] https://drive.google.com/drive/folders/1vzDKhIPt6b-0jQs3ldiouV-q0d9DfgAH?usp=share_link



## Tech/Framework Used
While working on this project we have used MERN Stackk (MongoDB,
Express JS, React JS and Node JS) to help us develop and release this version .

![mern](https://user-images.githubusercontent.com/116273404/210753720-317571d9-237a-4542-8d3e-d19ed1dffec6.jpg)

## Features
• As a Guest you can SignUp to start LRNING!
  - View and accept thewebsite refund/payment policy
![SignUp page](https://user-images.githubusercontent.com/116273404/210760703-eb5b6a87-8f98-42ec-ab92-47db6eff3151.jpg)

• Select Country

• View Titles of Courses available including totalhours,prices and ratings 

![view courses](https://user-images.githubusercontent.com/116273404/210764034-81aaba18-600a-45fd-8b60-b74e57bf2254.jpg)

• Filter Courses Based on subject and or rating and based on prices

![filterCourses](https://user-images.githubusercontent.com/116273404/210765230-d524f91a-5e19-428c-9dbf-98a74ab04caf.jpg)

• Search For a Certain Course
![Search](https://user-images.githubusercontent.com/116273404/210765375-68b02fce-1d4a-43ce-bbab-d29c60c2e275.jpg)

• Choose course and View details 
- View a preview video of course and outline
![view course](https://user-images.githubusercontent.com/116273404/210767446-cc22d114-7a82-46bc-9c30-d8609139a579.jpg)

• View most popular Courses
![popular courses](https://user-images.githubusercontent.com/116273404/210766278-16737028-3acc-47cd-a868-a08a69beb72c.jpg)



#### As An Admin You Can
•  Login/Logout
![Signin as admin](https://user-images.githubusercontent.com/116273404/210762191-ab51fb69-8ccd-4744-bf08-8e1d22f6335a.jpg)

•  Add Another Admin or create an Instructor or Corporate Trainee
![Add instructor](https://user-images.githubusercontent.com/116273404/210762603-4966a3ee-bfe6-4f08-8aa6-7b4e48d2f93d.jpg)

• View Reported Problems  and mark them as "resolved" or pending

• Refund an amount to a trainee's wallet

• View courses requests from corporate trainees

• Grant coprporate trainees access to specific courses

• Set a promotion for specific or all courses

#### As An Instructor You Can
• Login/Logout
![instructor login](https://user-images.githubusercontent.com/116273404/210763436-4ee57298-6d51-495d-b34d-54c84d8c26c3.jpg)

• Select Country

• Create A Course
   • Upload video link from Youtube as a previewto the course
![create a course](https://user-images.githubusercontent.com/116273404/210763264-45f33a99-363f-4fb3-ab14-ead7484b87b5.jpg)

• View Titles of Courses available including totalhours,prices and ratings 

![view courses](https://user-images.githubusercontent.com/116273404/210764034-81aaba18-600a-45fd-8b60-b74e57bf2254.jpg)

• Upload video link from Youtube under each subtitle and enter a short description of the video

• Filter Courses Based on subject and or rating and based on prices

![filterCourses](https://user-images.githubusercontent.com/116273404/210765230-d524f91a-5e19-428c-9dbf-98a74ab04caf.jpg)

• Search For a Certain Course
![Search](https://user-images.githubusercontent.com/116273404/210765375-68b02fce-1d4a-43ce-bbab-d29c60c2e275.jpg)

• Create a multiple choice exam and set invisible answers

• Choose course and View details 
- View a preview video of course and outline
![view course](https://user-images.githubusercontent.com/116273404/210767446-cc22d114-7a82-46bc-9c30-d8609139a579.jpg)

• View most popular Courses
![popular courses](https://user-images.githubusercontent.com/116273404/210766278-16737028-3acc-47cd-a868-a08a69beb72c.jpg)

• View amount owed per month
![amount owed to inst](https://user-images.githubusercontent.com/116273404/210766577-2d2a45dc-5727-464e-b8b5-e1a8474dc6ec.jpg)

• View my courses and search/filter them

![inst viewing his courses](https://user-images.githubusercontent.com/116273404/210767043-ec7b5cfb-ada7-4e28-89c1-c891b363836c.jpg)

•View my ratings and reviews

• Editing  mini biographyor email

![inst editing info](https://user-images.githubusercontent.com/116273404/210767753-c298036a-8bb4-40e0-b3d8-41b746d95ca6.jpg)

• Define a Promotion for the coursesyou give

• Change Password
![change password](https://user-images.githubusercontent.com/116273404/210772546-8dd8a4fc-1807-441d-9b49-8c0ed5a22304.jpg)

• Recieve an email to change forgotton password




#### As An Individual Trainee You Can
•  Login/Logout
![trainee signin](https://user-images.githubusercontent.com/116273404/210773474-16ce11d8-ddca-4fe6-82f2-74bbb1315835.jpg)

• Select Country

• View Titles of Courses available including totalhours,prices and ratings 

![view courses](https://user-images.githubusercontent.com/116273404/210764034-81aaba18-600a-45fd-8b60-b74e57bf2254.jpg)

• Filter Courses Based on subject and or rating and based on prices

![filterCourses](https://user-images.githubusercontent.com/116273404/210765230-d524f91a-5e19-428c-9dbf-98a74ab04caf.jpg)

• Search For a Certain Course
![Search](https://user-images.githubusercontent.com/116273404/210765375-68b02fce-1d4a-43ce-bbab-d29c60c2e275.jpg)

• Choose course and View details 
- View a preview video of course and outline
![view course](https://user-images.githubusercontent.com/116273404/210767446-cc22d114-7a82-46bc-9c30-d8609139a579.jpg)


• View most popular Courses
![popular courses](https://user-images.githubusercontent.com/116273404/210766278-16737028-3acc-47cd-a868-a08a69beb72c.jpg)

•Enter Credit Card Details
  -Pay for a Course
![enter credit card](https://user-images.githubusercontent.com/116273404/210773962-572499b6-b8ab-40f5-890d-5eef1bd4c6cf.jpg)

• Open All Items inside a registered Course including videos and exercises
![view course](https://user-images.githubusercontent.com/116273404/210767446-cc22d114-7a82-46bc-9c30-d8609139a579.jpg)

• Change Password
![change password](https://user-images.githubusercontent.com/116273404/210772546-8dd8a4fc-1807-441d-9b49-8c0ed5a22304.jpg)

• Recieve an email to change forgotton password

•Rate an instructor and or Course
![rate instructor](https://user-images.githubusercontent.com/116273404/210774702-bb6e7224-93ad-426e-94bb-db1b34797545.jpg)

• Solve a multiple choice exercise and submiting answers  

•See exercise grade and right answers

• See Progress in Course
![view course](https://user-images.githubusercontent.com/116273404/210767446-cc22d114-7a82-46bc-9c30-d8609139a579.jpg)

• Recieve Certificate as pdf after completing course via email and download as pdf from website
![Certificate](https://user-images.githubusercontent.com/116273404/210775543-6e1ae033-dced-4ac0-83cb-abb8246aba4d.jpg)

• Write notes whilewatching Video and download them as pdf

• Request Refund / Report Problem with course
![request refund](https://user-images.githubusercontent.com/116273404/210775844-3f25e9e1-4bda-43ff-9909-f5108f9f11f3.jpg)


• See a list of all courses enrolled in on my profile
  - View amount available in wallet from refunded courses

![inst viewing his courses](https://user-images.githubusercontent.com/116273404/210767043-ec7b5cfb-ada7-4e28-89c1-c891b363836c.jpg)

• See all previously reported problems and their statuses and follow up on unreolved problems

#### As A Corporate Trainee You Can
•  Login/Logout
![trainee signin](https://user-images.githubusercontent.com/116273404/210773474-16ce11d8-ddca-4fe6-82f2-74bbb1315835.jpg)

• Select Country

• View Titles of Courses available including totalhours and ratings 

![view courses](https://user-images.githubusercontent.com/116273404/210764034-81aaba18-600a-45fd-8b60-b74e57bf2254.jpg)

• Filter Courses Based on subject and or rating 

![filterCourses](https://user-images.githubusercontent.com/116273404/210765230-d524f91a-5e19-428c-9dbf-98a74ab04caf.jpg)

• Search For a Certain Course
![Search](https://user-images.githubusercontent.com/116273404/210765375-68b02fce-1d4a-43ce-bbab-d29c60c2e275.jpg)

• Choose course and View details 
- View a preview video of course and outline
![view course](https://user-images.githubusercontent.com/116273404/210767446-cc22d114-7a82-46bc-9c30-d8609139a579.jpg)

• View most popular Courses
![popular courses](https://user-images.githubusercontent.com/116273404/210766278-16737028-3acc-47cd-a868-a08a69beb72c.jpg)

• Open All Items inside a registered Course including videos and exercises
![view course](https://user-images.githubusercontent.com/116273404/210767446-cc22d114-7a82-46bc-9c30-d8609139a579.jpg)

• Change Password
![change password](https://user-images.githubusercontent.com/116273404/210772546-8dd8a4fc-1807-441d-9b49-8c0ed5a22304.jpg)

• Recieve an email to change forgotton password

•Rate an instructor and or Course
![rate instructor](https://user-images.githubusercontent.com/116273404/210774702-bb6e7224-93ad-426e-94bb-db1b34797545.jpg)

• Solve a multiple choice exercise and submiting answers  

•See exercise grade and right answers

• See Progress in Course
![view course](https://user-images.githubusercontent.com/116273404/210767446-cc22d114-7a82-46bc-9c30-d8609139a579.jpg)

• Recieve Certificate as pdf after completing course via email and download as pdf from website
![Certificate](https://user-images.githubusercontent.com/116273404/210775543-6e1ae033-dced-4ac0-83cb-abb8246aba4d.jpg)

• Write notes whilewatching Video and download them as pdf


• See a list of all courses enrolled in on my profile

![inst viewing his courses](https://user-images.githubusercontent.com/116273404/210767043-ec7b5cfb-ada7-4e28-89c1-c891b363836c.jpg)

• Report a problemwith a course

• See all previously reported problems and their statuses and follow up on unreolved problems

•Request Access to a course



## Code Examples
-This method simply gets the most viewed courses to show to the user by calling the database and getting the most popular from it.
const mostViewedCourses= async(req,res)=>
{
    const courses = await Courses.find({}).sort({noOfViews: -1})
    res.status(200).json(courses.slice(0,3))

}

-This function takes the rating and the review from the user and inserts it in the database.

const createReview= async (req,res) =>{

    const rating = req.body.rating;
    const instructor = req.body.instructor;
    const comment = req.body.comment;
    const Code = req.body.Code;
     // const commentId = req.body.commentId;
    try{
      const reviewCourses= await  ReviewCoursesModel.create( {Code,comment,rating,instructor})
     res.status(200).json(reviewCourses)
    }
    catch(error){
      res.status(400).json({error: error.message})
       }
  
  }


  -This method here gets us all courses available in our database.

  
const getCourses = async (req,res)=> {
    console.log('Course Get All');
    const courses = await Courses.find({}).sort({createdAt: -1});
res.status(200).json("test");
}


-Here this method returns all the courses taken by a single trainee. It takes the id of the trainee and returns his/her courses.

const getTraineeCourses = async(req,res)=>{
  const traineeID= req.body.traineeID

  try{
    const result = await Trainee.findById(mongoose.Types.ObjectId(traineeID)).populate("courses")
  res.status(200).json(result.courses)
  }
  catch(error){
    res.status(400).json({error: error.message})
     }
   
}

- By taking the trainee's id and course id this function adds a request for that trainee to get access to this course.

const post= async(req,res)=>{
  const traineeID=req.body.traineeID
  const courseID=req.body.courseID

  try{
    const reviewCourses= await  CorporateTraineeRequests.create( {traineeID,courseID})
   res.status(200).json(reviewCourses)
  }
  catch(error){
    res.status(400).json({error: error.message})
     }
    
}
-This method filters the courses available by a certain title taken from the user.

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


- In this part of the code we are filtering the course by it's price. By taking the price from the user we get all courses with that price and return it.

        const filterCoursePrice = async (req,res) => {

    const price = req.body.price;

    var query ={price:price}
    const courses = await Courses.find(query).sort({createdAt: -1})
    res.status(200).json(courses)

    if(!courses)

    {
        return res.status(404).json({error: "No Course with that ID"})

    }
    }

    -Here we're filtering the courses by taking from the user the rating and subject they are searching for and returning all courses with that criteria. 

    const filterCourse = async (req,res) => {

    const rating = req.body.rating;
    const subject = req.body.subject;
    if (rating == null || rating =="")
    {
    var query ={subject:subject}
    const courses = await Courses.find(query).sort({createdAt: -1})
    res.status(200).json(courses)
    }
    else if (subject == null || subject =="")
    {
        var query ={rating:rating}
        const courses = await Courses.find(query).sort({createdAt: -1})
        res.status(200).json(courses)
    } 
    else{
        var query ={rating:rating,subject : subject}
        const courses = await Courses.find(query).sort({createdAt: -1})
        if (!courses)
        {
            return res.status(404).json({error: "No Course with that ID"})

        }else{
        res.status(200).json(courses)
    }
    }

}

- By taking the title/instructor of the course the user is searching for we gofilter the courses that have that title or are given by that instructor and return them.

const getByTitleOrInstructor = async (req,res)=>{
    const title = req.body.title;

    var query = {title:title}
    const courses = await Courses.find(query).sort({createdAt: -1})

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

- We take the id of course and returnthe one course with that id.

const getOneCourse = async(req,res) => 
{
          
    const courseId = req.query.courseId;
    // check if userId is not empty
    if(courseId){
    const result = await Courses.findById(mongoose.Types.ObjectId(courseId));
    const x= result.noOfViews ;
    const y= x+1
    await Courses.findByIdAndUpdate(mongoose.Types.ObjectId(courseId),{noOfViews: y},{new:true})

    res.status(200).json(result);
    }else{
        res.status(400).json({error:"invalid course"})
    }
}

## Installations
To be ale to use and edit this project these are the things you need to install with recommended links for them:

-VS code using https://code.visualstudio.com/download Choose what suits your OS

-Node using nodejs.org Choose what suits your OS

-Nodemon https://www.npmjs.com/ Search for the package

-Express https://www.npmjs.com/ Search for the package

-Mongoose https://www.npmjs.com/ Search for the package

-React https://www.npmjs.com/ Search for the package

-Git https://www.npmjs.com/ Search for the package

-Axios https://www.npmjs.com/ Search for the package

-Postman https://www.postman.com/downloads/ Choose what suits your OS

## API Reference


#### Get all Courses

http
  
  GET /api/courses/getAll
  | Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| ` `        | ` ` | *Required*. Nothing required to access api. |



#### Get all Instructors
http

  GET /api/instructor/getInstructors
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| ` ` | ` ` | *Required*. Nothing required to access api |


#### Get all Exams
http

 GET /api/exam/getExamsbyInst/${id}

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | *Required*.  ID of Instructor to fetch Exam. |


#### Get all Countries
http

  GET /api/countries/getCountries
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|    ` `    |   ` `    | *Required*. Nothing required to access api |

#### Get Progress BY ID and Course
http

 GET /api/payments/getPaymentByIdAndCourse/${traineeID}/${CourseId}

   
  | Parameters             | Type     | Description                |
| :--------               | :------- | :------------------------- |
| `traineeID` `CourseId` | `string` | *Required*. ID of trainee and course to fetch progress .|


#### Admin Gets Courses Requests
http
GET /api/admin/getCorporateTraineeRequests/${traineeID}/${CourseId}

  | Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `traineeID` `courseID` | `string` | *Required*. Trainee and Course IDS  to fetch requests.|


#### Admin Login
http

  Post /api/admin/AdminLogin
  | Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` `password` | `string` | *Required*. Username and password of admin to login.|



#### Get all Subtitles
http

  GET /api/subtitle/getSubByCourse/${CourseId}
  | Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `courseID` | `string` | *Required*. ID of course to fetch subtitle. |


#### Get all Courses by Descending order 
http

  GET /api/courses/getCoursesbyIdDec
  | Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| ` ` | ` ` | *Required*.Nothing required to access API |


#### Post Review

http
  
  Post /api/courses/createReview/${userid}

    | Parameter | Type     | Description                |
| ` userid`     `instructor` `comment` `Code`     | `string ` | *Required*. UserID,instructor username, review,course code required to post review. |
| :-------- | :------- | :------------------------- |
|                 `rating`                       | `number`   |  *Required*  Rating required to post review.  |

#### Get all Courses by Ascending Order 
http

  GET /api/courses/getCoursesbyIdAsc
  | Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| ` ` | ` ` | *Required*.Nothing required to access API |


#### Get Instructor by ID

http
  
  GET /api/instructor/getInstructorbyId/${id}
  
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | *Required*. Id of instructor to fetch instructor.|

#### Get Free Courses

http

  GET /api/courses/getFreeCourses
  
  | Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| ` ` | ` ` | *Required*.Nothing required to access API |

#### Filter Courses by the instructor teaching them

http

  GET /api/courses/getCoursesByInstructor/${id}
  
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | *Required*. Id of instructor to fetch courses given by him/her.|

####  Filtered Courses
http

  POST /api/courses/filterCourseInstructor
  
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | *Required*. Username of instructor to fetch course.|

#### Get Course Sale

http

  GET /api/courses/getPromo/${id}
  
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | *Required*. Id of course to fetch sale.|

#### Get Course By Code

http

  GET /api/courses/getCoursesByCode
  
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Code`      | `string` | *Required*. Code of course to fetch course.|


#### Get Course Reviews

http

  GET /api/courses/getReviewsByID/${id}
  
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | *Required*. Code of course to fetch course reviews.|



#### Add Preview

http

  PUT /api/courses/addPreview/${id}
  
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `courseId`      | `string` | *Required*. ID of course to add course preview video.|

#### Get Trainee by Username

http

  GET /api/trainee/getTraineeByusername
  
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username` | `string` | *Required*. Username of trainee to fetch trainee. |

#### Get Trainee by ID

http

  GET /api/trainee/getTraineeByID/${id}
  
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ID` | `string` | *Required*. ID of trainee to fetch trainee. |

#### Get Trainee by ID

http

  PUT /api/trainee/payWithWallet/${id}
  
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ID`  `price` | `string`  `number` | *Required*. ID of trainee and course price required to pay with wallet. |

#### Get Trainee Courses

http

  GET /api/trainee/getTraineeCourses/${id}
  
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | *Required*. Id of trainee to fetch his/her Courses.|

#### Post credit card details

http

  Post /api/trainee/post/${traineeID}/${courseID}
  
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `traineeID`    `courseID`  | `string` | *Required*. Id of trainee and course to register him/her for Course.|


#### Get MCQ for a certain Exam

http

  GET /api/exam/getMCQ/${id}
  
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | *Required*. Id of exam to fetch MCQ. |

#### Get Exams of A Certain Course

http

  GET /api/exam/getExamsbyCourse/${id}
  
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | *Required*. Id of course to fetch exams. |




## Tests

• We used Postman to test our backend APIs. Used the Tests tab in our requests, folders, and collections to write tests that will execute when Postman receives a response from the API we sent the request to. When you add tests to a folder or Collection, they will execute after each request inside it.

-To write our first test script, we opened a request in Postman, then selected the Tests tab. Entered the following JavaScript code:

pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});

   -This code uses the pm library to run the test method. The text string will appear in the test output. The function inside the test represents an assertion. Postman tests can use Chai Assertion Library BDD syntax, which provides options to optimize how readable your tests are to you and your collaborators. In this case, the code uses BDD chains to.have to express the assertion.

   -This test checks the response code returned by the API. If the response code is 200, the test will pass, otherwise it will fail.

   - After sending every API we selected send and went to the Test Results tab in the response area.
-While creating/posting we also used to return the object we wish to create as a response to see if created correctly.

API EXAMPLES:

| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
| GET /api/courses/getAll      | empty | All details of all available courses. |


| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    GET /api/instructor/getInstructors     | empty | All details of all available instructors. |

 
| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    GET /api/countries/getCountries    | empty | All available countries. |

| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    GET /api/questions/getQuestions    | question id | The question with that id. |


| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    GET /api/questions/getQuestionsByExamId    | exam id | All questions in the exam with that exam id. |

| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    PUT /api/reportStudent/setResolved    | report id | Setting report status as resolved for the report having that report id. |


| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    PUT /api/reportStudent/setSeen    | report id | Marks the report with that report id as seen. |


| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    GET /api/reportStudent/getAllbyCreator    | Creator id | All reports created by the user having that creator id . |



| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    GET /api/reportStudent/getAllRefunds    | empty | All reports having report type 'refund'. |



| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    GET /api/reportStudent/getAllTechnical    | empty | All reports having report type 'technical'. |


| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    GET /api/reportStudent/getAllFinancial    | empty | All reports having report type 'financial'. |


| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    GET /api/reportStudent/getAllOther    | empty | All reports having report type 'other'. |



| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    GET /api/reportStudent/getAllCourseRequest    | empty | All reports having report type 'courseRequest'. |


| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    GET /api/reportStudent/getByID    | report id | The report having that id. |

| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    POST /api/countries/    | countryName, Currency |newly posted country in country table |

| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    POST /api/payments/AddPayment    | TraineeID, CourseID,Amount | a new payment record for an individual student paying for a course |

| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    GET /api/payments/getPaymentByIdAndCourse    | TraineeID, CourseID | a payment record that matched the corresponding parameters |

| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    POST /api/progress/createProgress    | TraineeId,CourseId,SubtitleId,Viewed,Percentage | updates trainee progress count |

| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    GET /api/progress/getProgress    | TraineeID, CourseID | gets progress of this trainee in that course |

| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    POST /api/registeredCourse/createReg    | CourseId,TraineeId,CourseName | assigns a student to a course |


| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    GET /api/registeredCourse/createReg    | CourseId,TraineeId | checks if a student is assigned to a course |

| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    POST /api/subtitles/CreateSubtitle    | courseId, video, body, title,VideoDesc | posts a new subtitle to a course |


| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    GET /api/subtitles/getSubByCourse    | courseId | gets all subtitles for a course |


| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    GET /api/subtitles/getSubById    | subID | gets a specific subtitle by id |


| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    PUT /api/subtitles/change    | subID,courseId, video, body, title,VideoDesc | updates/changes in a subtitle  |


| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    GET /api/trainee/login    | username , password | Logs in the user with the given credentials |

| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    POST /api/trainee/   | country,username,firstName,lastName,password,gender,email,wallet | Creates / signs up a trainee on the website |

| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    GET /api/trainee/logout    | empty | Logs out the currently logged in user |

| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    POST /api/trainee/sendemail    | Email | Sends an email to the provided email with a link to reset password |


| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    PUT /api/trainee/resetpassword    | password, userid | resets the password of a user given his/her userid and a new password  |


| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    POST /api/courses/addDiscount    | id, discount, year, month, day | defines a discount for a given course id for a specific period of time|

| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    POST /api/admin/  | username,password | creates an admin |

| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    POST /api/instructor/  | username,password,email | creates an instructor |

| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    POST /api/CorporateTrainee/CreateTrainee | corporateName,country | creates a corporate trainee  |

| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    GET /api/courses/byRating | Rating | get courses with a specific rating  |

| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    GET /api/courses/bySubject | Subject | get courses with a specific subject  |

| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    GET /api/courses/byTitle | Title | get courses with a specific Title  |

| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    PUT /api/courses/publish | courseId | publishes a course with a specific ID  |

| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    POST /api/courses/discount | courseId | Applies a discount on a course with a specific ID  |

| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    POST /api/courses/createReport | CreatorId,reportId,reportType,body,status,seen,CourseCode | Creates a report on a course  |

| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    GET /api/courses/getCoursesByCode | Empty | Gets all Courses with a certain code  |

| API | BODY     |  EXPECTED OUTPUT                       |
| :-------- | :------- | :-------------------------------- |
|    GET /api/courses/getByTitleAndInstructor | Empty | Gets all Courses with a specific title and instructor  |




## How To Use

- To run system one has to install the node modules using the "npm install" command in both the frontendFinal and backendFinal folders
- Now that everything is set up all you have to do is use "npm start" at the backenedFinal folder and wait until you see "Connected to db && listening on port XXXX"
-Now your backend is up and working
-Now go to the frontendFinal folder and run the "npm start" command 
-The sysem is now ready for use!!!

-To change between folders use "cd [foldername]" command
-To exit said folder use "cd .." command

## Credits
Special thanks to "The Net Ninja" youtube channel it really helped us get this project up and running 
Below you can find a link to his playlist on mern:
https://www.youtube.com/watch?v=98BzS5Oz5E4&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE

We also found this channel helpful
- https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA

• Some of the videos that got us through as well
- https://www.youtube.com/playlist?list=PLZlA0Gpn_vH_uZs4vJMIhcinABSTUH2bY

- https://www.youtube.com/playlist?list=PLZlA0Gpn_vH-0FlQnruw2rd1HuiYJHHkm

- https://www.youtube.com/playlist?list=PLZlA0Gpn_vH_NT5zPVp18nGe_W9LqBDQK

- https://www.youtube.com/playlist?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h

- https://dev.to/salarc123/mern-stack-authentication-tutorial-part-1-the-backend-1c57



## License

[MIT](https://choosealicense.com/licenses/mit/)



## Contributing

Contributions are always welcome!

We enthusiastically can not wait to hear your feedbacks and suggestions on how we could improve this project and take it to the next level @ sarah7amr@gmail.com. Our frontend needs drastic improving and fine tuning if you are the person for that or know of someone contact us ASAP! Using the webite and interacting would be greatly appreciated. Spread the word  and let's have fun LRNing!




