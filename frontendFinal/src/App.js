import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Routes,NavLink} from 'react-router-dom';
import SolveExam from './components/SolveExam';
import './App.css';
import Home from './components/pages/home'
import axios from 'axios';
import Courses from './components/pages/Courses';
import Coruse from './components/Coruse';
// import ICFP from './components/pages/ICFP'
import AdminHome from './components/pages/AdminHome';
// import CourseSearch from './components/pages/CourseSearch';
import PostRequest from './components/PostRequest';
import Postform from './components/postform';
import Exam from './components/pages/Exam';
import Exam2 from './components/pages/Exam2';
import Quiz from './components/pages/Quiz';
import Exam4 from './components/pages/CreateQuestion';
import Exam3 from './components/pages/Exam3';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from '@mui/material';
import AcceptTerms from './components/pages/AcceptTerms';
import InstructorRatingsAndReviews from './components/pages/InstructorRatingsAndReviews';
import ReviewCourse from './components/pages/ReviewCourse';
import RateInstructor from './components/pages/RateInstructor';
import TraineeSignUp from './components/logins/TraineeSignUp';
import GetInstructors from './components/pages/GetInstructors';
import CoursePage from './components/pages/CoursePage';
import InstructorProfile from './components/pages/InstructorProfile';
import SubtitlePage from './components/pages/SubtitlePage';
import StudentCoursePage from './components/pages/StudentCoursePage';
// import StudentSubtitles from './components/pages/StudentSubtitles';
import ChangePassword from './components/logins/ChangePassword';
import SignUp from './components/logins/SignUp';
import ResetPassword from './components/logins/ResetPassword';
import LoginForm from './components/logins/LoginForm';
import InstructorSignUp from './components/logins/InstructorSignUp';
import InstructorLogin from './components/logins/InstructorLogin';
import SearchFilterBar from './components/SearchFilterBar';
import AdminReport from './components/pages/AdminReport';
import Instructorpg from './components/pages/InstructorPage';
import StudentNavbar from './components/pages/StudentNavbar';
import ViewExam from './components/pages/ViewExam';
import IndPayCourse from './components/pages/IndPayCourse';
import StudentSeesInstructorpg from './components/pages/StudentSeesInstructorPage';
import DonePayment from './components/pages/donePayment';
import TraineeHeroSection from './components/TraineeHeroSection';
import Footer from './components/Footer';
import SubPage from './components/pages/SubPage';
import NewCoursePage from './components/pages/NewCoursePage';
import UserProfile from './components/pages/UserProfile';
import Download from './components/pages/Download';
import DataTable from './components/pages/DataTable';
import AdminLogin from './components/logins/AdminLogin';
import AdminViewProbs from './components/pages/AdminViewProbs';
import AdminNavbar from './components/AdminNavbar';
import RequestMade from './components/pages/RequestMade';
import StudentSubtitles from './components/pages/PDF';
// import { useState } from 'react';
import InstructorNavbar from './components/pages/InstructorNavbar';
function Post() {
  return (<></>) ;
}
const api = axios.create({
  baseURL : `http://localhost:4000/api/courses`
})


function App() {
  // const[IndTrainee,setIndTrainee] = useState(true)
  // const[CorpTrainee,setCorpTrainee] = useState(false)
  // const[Inst,setInst] = useState(false)
  // const[Admin,setAdmin] = useState(false)
  // const[user,setUser] = useState(false)
  // const[buttons,setButtons] = useState(true)

  const[usertype,setUsertype]=useState()

  

  
  useEffect(()=> {

    const user = window.localStorage.getItem('usertype');
    setUsertype(user);

    
    
    },[]);


  return (
    <>


    {
     <BrowserRouter>
      
      
      
      </BrowserRouter>

    }

    <BrowserRouter>

       {usertype!='trainee' && usertype!='instructor' && usertype!='admin' && <Navbar />}

       {usertype=='instructor' && <InstructorNavbar/>}
       
        {usertype=='trainee' && <StudentNavbar/>}
        {usertype=='admin' && <AdminNavbar/>}
        <Routes>

        <Route path="/coursePage">
        <CoursePage/>
        </Route>

        <Route path="/AdminLogin">
        <AdminLogin/>
        </Route>

        <Route path="/grid">
        <DataTable/>
        </Route>
        <Route path="/requestMade">
        <RequestMade/>
        </Route>

        
        <Route path="/AdminProbs">
        <AdminViewProbs/>
        </Route>

        <Route path="/studsub">
        <StudentSubtitles/>
        </Route>
        

        <Route path="/download">
        <Download/>
        </Route>

        <Route path="/inspg">
        <Instructorpg/>
        </Route>
        <Route path="/donePayment">
          <DonePayment/>
        </Route>

        <Route path="/viewExam">
        <ViewExam/>
        </Route>

        <Route path='/indPayCourse'>
          <IndPayCourse/>
        </Route>

        <Route path='/SubPage'>
          <SubPage/>
        </Route>

        
        <Route path="/solveExam">
        <SolveExam/>
        </Route>

        <Route path="/stuInsPg">
        <StudentSeesInstructorpg/>
        </Route>
        <Route path="/instructorCoursePage">
        <NewCoursePage/>
        </Route>

        <Route exact path="/User">
          <UserProfile/>
        </Route>        


        <Route exact path="/SignUp">
          <SignUp/>
        </Route>

        <Route exact path="/AdminReport">
          <AdminReport/>
        </Route>

        <Route exact path="/instructorSignUp">
          <InstructorSignUp/>
        </Route>

        <Route exact path="/login">
          <LoginForm/>
        </Route>

        <Route exact path ="/InstructorLogin">
          <InstructorLogin/>
        </Route>

        <Route exact path="/changepassword">
          <ChangePassword/>
        </Route>

        <Route exact path="/resetpassword">
          <ResetPassword/>
        </Route>

 
    

<Route exact path="/Courses" >
          <GetInstructors/>
        </Route>

<Route path='/StudentCoursePage'>
  <StudentCoursePage/>
</Route>

<Route path='/StudentCoursePage'>
          <StudentCoursePage/>
        </Route>

<Route path="/filter">
          <InstructorProfile/>
        </Route>

        <Route path="/StudentSubtitles">
          <StudentSubtitles/>
        </Route>

      
        <Route path="/Subtitle">
        <SubtitlePage/>
        </Route>


          <Route exact path="/" >
          <Home/>
          </Route>
        
        <Route exact path="/search">
          <SearchFilterBar/>
        </Route>


        <Route exact path="/Coruse" >
          <Coruse/>
        </Route>



        <Route exact path="/Courses" >
        <GetInstructors/>
        </Route>

        <Route exact path="/AdminHome" >
          <AdminHome/>
        </Route>

        <Route exact path="/Quiz" >
          <Quiz/>
        </Route>

        <Route exact path="/Postform" >
          <Postform/>
        </Route>


        <Route exact path="/Exam" >
          <Exam/>
        </Route>

        <Route exact path="/Exam2" >
          <Exam2/>
        </Route>

        <Route exact path="/Exam3" >
          <Exam3/>
        </Route>

         
   

        <Route exact path="/CreateQuestion/:id" >
          <Exam4/>
        </Route>
        
        <Route exact path="/review" >
          <InstructorRatingsAndReviews/>
        </Route>

        <Route exact path="/courseReview" >
          <ReviewCourse/>
        </Route>

        <Route exact path="/instructorReview" >
          <RateInstructor/>
        </Route>
        <Route exact path="/AcceptTerms" >
          <AcceptTerms/>
        </Route>

          {/* <Route path='/ICFP' exact component={ICFP}/> */}
          {/* <Route path='/AdminHome' exact component={AdminHome}/> */}
          {/* <Route path='/Browse'exact component={CourseSearch}/> */}
          {/* <Route path='/post' exact component={postform}/> */}
          {/* <Route path ='/courses' exact component={Courses}/> */}
        </Routes>
        {/* <Footer/> */}
    </BrowserRouter>
    </>
  );
}

export default App;
