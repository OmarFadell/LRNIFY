import * as React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import './CoursePage.css';
import Addpreview from '../AddPreview.js'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';  
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import ReactPlayer from 'react-player'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import CoursePageHeaderUnpub from '../CoursePageHeaderUnPub';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Container} from 'react-bootstrap'
import { fontFamily } from '@mui/system';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import { CustomButton } from '../CustomButton';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import CoursePageHeader from '../CoursePageHeader';
import Modal from '@mui/material/Modal';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const { useState,useEffect } = require("react");






//import 'bootstrap/dist/css/bootstrap.min.css';
//import { set } from 'mongoose';

const NewCoursePage = () => {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId');
    console.log("course"+ courseId)

    const creds = window.localStorage.getItem('credentials');
  console.log(creds.substring(1,25))
   // console.log(courseId);
    const [courseTitle,setCourseTitle] = useState("");
    const [totalHours,setTotalHours] = useState("");
    const [rating,setRating] = useState("");
    const [price,setPrice] = useState("");
    const [code,setCode] = useState("");
    const [courseOutline,setCourseOutline] = useState("");
    const [previewVideo,setPreviewVideo] = useState("");
    const [noOfViews,setNoOfViews] = useState("");
    const [active,setActive] = useState(false);
    const [subtitles,setSubtitles] = useState([]);
    //--------------------------------------------------------
    // to edit video and video desc
    const [subactive, setSubactive] = useState(false);
    const[video,setVideo] = useState("");
    const[videodesc, setVideoDesc] = useState("");
    const[tbcsubID,settbcSubID] = useState("");
    const[subcourseId,setsubCourseId] = useState("");
    const[body,setBody] = useState("");
    const[title,setTitle] = useState("");
    const [open, setOpen] = useState();
    const [openEx,setExOpen] = useState(false)
    const [openModal, setOpenModal] = React.useState(false);
    const[openrepModal,setOpenrepModal] = useState(false);
    const handleOpen = () => setOpenModal(false);
    const handleClose = () => setOpenModal(false);
    const handlerepClose = () => setOpenrepModal(false);
    const handleExClose = () => setExOpen(false);
    
    const[currentSub,setCurrentSub] = useState(false);
    const [subbed,setSubbed] = useState(false)
    //--------------------------------------------------------
    const[questions,setQuestions] = useState([])
    const[opened,setOpened] = useState(0)
    const[subCount,setSubcount] = useState()
    const[Qopen,setQOpen] = useState();
    const[currentQSub,setCurrentQSub] = useState(false);
    const[toggleContent,setToggleContent] = useState(false)
    const[click, setClick] = useState(false);
    const[toggleReviews,setToggleReviews] = useState(true)
    const[reviews,setReviews] = useState([])
    const[tabnum,setTabnum] = useState(0)
    //---------------------------------------------------------

    const [Exams,setExams] = useState([])
    const [ExamId,setExamId] = useState('')
    const [ExamCourseCode, setExamCourseCode ] = useState('')
    const [ExamYear, setExamYear] = useState()
    const [ExamTitle,setExamTitle] = useState('')
    //---------------------------------------------------------------

    const[TitleSub,setTitleSub] = useState()
    const[BodySub,setBodySub] = useState()
    const[SubVideo,setSubVideo] = useState()
    const[subviddesc,setsubviddesc] = useState()
    //-------------------------------------------------------------------
    const[instructorId,setInstructorid]=useState(creds.substring(1,25))
    const[courses,setCourses] = useState([])
    //===========DISC MODAL ==========================================
    const [openDisc, setOpenDisc] = React.useState(false);
    const handleDiscOpen = () => setOpenDisc(true);
    const handleDiscClose = () => setOpenDisc(false);
    const [discpercent,setdiscpercent] = useState()
    const [discDuration,setDiscDuration] = useState()
    const[modalpage,setModalpage] = useState(0)
    const [reportBody,setReportBody] = useState('')
    const[reportTitle,setReportTitle] = useState()



    
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 600,
      height:800,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };
    async function ReportOther(){

        const res = await axios.post('http://localhost:4000/api/reportStudent/createRepStu', {CreatorId:creds.substring(1,25),reportType:'other',title:reportTitle,body:reportBody,status:'pending',CourseCode:code.toUpperCase()});
        console.log(res);
  
      }

    async function RequestRefund(){

        const res = await axios.post('http://localhost:4000/api/reportStudent/createRepStu', {CreatorId:creds.substring(1,25),reportType:'refund',title:'refund request',body:reportBody,status:'pending',CourseCode:code.toUpperCase()});
        console.log(res);
  
      }
      async function ReportTech(){

        const res = await axios.post('http://localhost:4000/api/reportStudent/createRepStu', {CreatorId:creds.substring(1,25),reportType:'technical',title:reportTitle,body:reportBody,status:'pending',CourseCode:code.toUpperCase()});
        console.log(res);
  
      }
      async function ReportFin(){

        const res = await axios.post('http://localhost:4000/api/reportStudent/createRepStu', {CreatorId:creds.substring(1,25),reportType:'financial',title:reportTitle,body:reportBody,status:'pending',CourseCode:code.toUpperCase()});
        console.log(res);
  
      }

    async function postExam(){
        // e.preventDefault()
            setExOpen(false)
            // setNewCourse(false)
        console.log("instructorId:"+instructorId)
    
        const Exam = {examId:ExamId,instructorId:instructorId, courseCode:code,year:ExamYear, examTitle:ExamTitle}
        console.log(Exam);
        const response = await fetch('http://localhost:4000/api/exam/createEx', {
          method: 'POST',
          body: JSON.stringify(Exam),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const json = await response.json()
        const exams = await axios.get(`http://localhost:4000/api/exam/getExamsbyCourse?courseId=${code}`).then(res => {
            console.log(code)
            const quesitons = res.data
            console.log(quesitons)
             setQuestions(quesitons)
           
        })
        .catch(err => {
            console.log(err)
        })
    
    
    
    }


    


    function handleClick(value) {
        if (currentSub == false){

            setOpen(value);
            setCurrentSub(true);
        }else if(open==value){
            setOpen(0);
            setCurrentSub(false)
        }else{
            setOpen(value);
            setCurrentSub(false)

        }
    };

    function handleQClick(value) {
        if (currentQSub == false){

            setQOpen(value);
            setCurrentQSub(true);
        }else if(Qopen==value){
            setQOpen(0);
            setCurrentQSub(false)
        }else{
            setQOpen(value);
            setCurrentQSub(false)

        }
    };



    async function getSub(code){
        console.log('hena')
        // const res = await axios.get(`http://localhost:4000/api/subtitles/getSubByCourse?courseId=${courseId}`).then(res => {
        //     const subtitles = res.data
        //     console.log(subtitles)
        //     setSubtitles(subtitles)
        // }).catch(err =>{
        //     console.log(err)
        // })
    }


            async function postSub(){

                const res = await axios.post(`http://localhost:4000/api/subtitles/`, {courseId:courseId,video:SubVideo, body:BodySub,title:TitleSub, VideoDesc:subviddesc});
                console.log(res);
                const sub = await axios.get(`http://localhost:4000/api/subtitles/getSubByCourse?courseId=${courseId}`).then(res => {
            const subtitles = res.data
            console.log(subtitles)
            setSubtitles(subtitles)
        }).catch(err =>{
            console.log(err)
        })
                
            }

            async function postDisc(){
                const res = await axios.post(`http://localhost:4000/api/courses/discount`, {percentage:discpercent,duration:discDuration, courseId:courseId,discountAdder:creds.substring(1,25)});
                console.log(res);
                setOpenDisc(false)
            }

            
  

        useEffect(() => {
            const creds = window.localStorage.getItem('credentials');
            console.log(creds.substring(1,25))

            axios.get(`http://localhost:4000/api/courses/getbyins?instructorId=${creds.substring(1,25)}`).then(res => {
            
            const courses = res.data
            console.log(courses)
            setCourses(courses)
        })
        .catch(err => {
            console.log(err)
        })

            
            axios.get(`http://localhost:4000/api/courses/getCourse?courseId=${courseId}`).then(res => {
                
                console.log(res)
                setCourseTitle(res.data.title);
                setTotalHours(res.data.totalHours);
                setRating(res.data.rating);
                setPrice(res.data.price);
                setCode(res.data.Code);
                setCourseOutline(res.data.courseOutline);
                setPreviewVideo(res.data.previewVideo);
                setNoOfViews(res.data.noOfViews);
                axios.get(`http://localhost:4000/api/exam/getExamsbyCourse?courseId=${res.data.Code}`).then(res => {
            console.log(code)
            const quesitons = res.data
            console.log(quesitons)
             setQuestions(quesitons)
           
        })
        .catch(err => {
            console.log(err)
        })
        axios.get(`http://localhost:4000/api/courses/getReviewsByID?Code=${res.data.Code}`).then(res => {
            console.log(code)
            const reviews = res.data
            // console.log(quesitons)
            setReviews(reviews)
           
        })
        .catch(err => {
            console.log(err)
        })
            })
            .catch(err => {
                console.log(err)
            })
            axios.get(`http://localhost:4000/api/registeredCourse/CheckCourse?TraineeId=${creds.substring(1,25)}&CourseId=${courseId}`).then(res => {
                
                if (res.data.message == 'empty' || res.data.length < 1) {
                        // setSubbed(false)
                }
            })
            .catch(err => {
                console.log(err)
            })
            

            axios.get(`http://localhost:4000/api/subtitles/getSubByCourse?courseId=${courseId}`).then(res => {
                const subtitles = res.data
                console.log(subtitles)
                setSubtitles(subtitles)
            }).catch(err =>{
                console.log(err)
            })

            axios.get(`http://localhost:4000/api/progress/getProgress?TraineeId=${creds.substring(1,25)}&CourseId=${courseId}`).then(res => {
                console.log('opened: '+res.data.length)
                setOpened(res.data.length)
                console.log(res.data)
            }).catch(err =>{
                console.log(err)
            })

            

        },[]);

        // function onedit(){
        //     setOneSub(this.subtitle);
        //     console.log(oneSub);
        // }
        
        async function updatePreview()
        {
            let course = {totalHours,price,courseTitle,code,courseOutline,previewVideo}
            fetch(`http://localhost:4000/api/courses/addPreview?courseId=${courseId}`, {

            method: 'PUT',
            body: JSON.stringify(course),
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            }})
            
        }
      
        function handleSubmit(){
            updatePreview();
            setActive(false);
            console.log(previewVideo);
            
        }

        

        function getSub(id){

            axios.get(`http://localhost:4000/api/subtitles/getSubById?subId=${id}`).then(res => {

                console.log(res)
                setsubCourseId(res.data.courseId);
                setVideo(res.data.video);
                setBody(res.data.body);
                setTitle(res.data.title);
                setVideoDesc(res.data.videodesc);
                settbcSubID(id);

            }).catch(err =>{
                console.log(err)
            })

        }

        async function PutSubtitle(){
            let subreq = {subcourseId,video,body,title,videodesc}
            fetch(`http://localhost:4000/api/subtitles/?subId=${tbcsubID}`, {
                method: 'PUT',
                body: JSON.stringify(subreq),
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }   
            })
        }

        const Item = styled(Paper)(({ theme }) => ({
            backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            // ...theme.typography.body2,
            // padding: theme.spacing(1),
            // textAlign: 'center',
            // color: theme.palette.text.secondary,
          }));
          const StyledRating = styled(Rating)({
            '& .MuiRating-iconFilled': {
              color: '#000000',
            },
            '& .MuiRating-iconHover': {
              color: '#D8D8D8',
            },
          });
        
        
        return(
            
          <>
          
            <body>
                
                 {/* //////////////////////////////////////////////////////////////////////////COURSE PAGE///////////////////////////////////////////////////////////////////////////////// */}


            <CoursePageHeaderUnpub/>
            

            
        


        
       
           <Box>
            
           
    
      
                <Box>
                <button onClick={(e)=>{setOpenModal(true)}}  style={{backgroundColor:'transparent',borderWidth:0,fontSize:30,fontFamily:'PT Sans',color:'black', fontWeight:700,minWidth:200,marginLeft:150,marginTop:20}} > <AddCircleIcon sx={{color:'#6C63F4'}}/> Add new Subtitle</button>
                <button onClick={(e)=>{setExOpen(true)}} style={{backgroundColor:'transparent',borderWidth:0,fontSize:30,fontFamily:'PT Sans',color:'black', fontWeight:700,minWidth:200,marginLeft:150,marginTop:20}} > <AddCircleIcon sx={{color:'#6C63F4'}}/> Add new exercise set</button>
                <button onClick={(e)=>{setOpenDisc(true)}} style={{backgroundColor:'transparent',borderWidth:0,fontSize:30,fontFamily:'PT Sans',color:'black', fontWeight:700,minWidth:200,marginLeft:150,marginTop:20}} > <AddCircleIcon sx={{color:'#6C63F4'}}/> Define a promotion</button>
                <button onClick={(e)=>{setOpenrepModal(true)}} style={{backgroundColor:'transparent',borderWidth:0,fontSize:30,fontFamily:'PT Sans',color:'black', fontWeight:700,minWidth:200,marginLeft:150,marginTop:20}} > <AddCircleIcon sx={{color:'#6C63F4'}}/> Report a problem</button>
                <Stack
         direction="row"
         divider={<Divider orientation="vertical" flexItem />}
         spacing={5}
         sx={{ml:10,mt:10}}
         >
         <Box> {subtitles.map((subtitle) => (
     
     

     
     <List
     sx={{  width: '100%', minWidth:750, bgcolor: 'background.paper',
     borderRadius: 2, borderColor:'#000000',
     p: 2,
 }}
 component="nav"
 aria-labelledby="nested-list-subheader"
 //   subheader={
     // <ListSubheader component="div" id="nested-list-subheader">
     //   Subtitles
     // </ListSubheader>
     //   }
     >
<ListItemButton value = {subtitle._id}
onClick = {() => handleClick(subtitle._id)}>
<ListItem sx={{fontWeight:400,fontFamily:'PT Sans'}}>{subtitle.title}</ListItem>
{open == subtitle._id ? <ExpandLess /> : <ExpandMore />}
</ListItemButton>
<Collapse in={open == subtitle._id} timeout="auto" unmountOnExit>
<List component="div" disablePadding>
<ListItem>
 
{/* <ReactPlayer  url= {subtitle.video} />
<Divider variant="inset" component="li"/> */}
<Link to = '/'  onClick={(e) => window.location.href=`/SubPage?subtitleId=${subtitle._id}&courseId=${subtitle.courseId}`}>

<button style={{maxWidth:'100%',color:'#995DFE', fontSize:20 ,position:'relative',background:'transparent',border:'none',marginLeft:20}}  >  {subtitle.VideoDesc} </button>

</Link>




</ListItem>
</List>
</Collapse>
</List>

))}
</Box>




                         {/* <Box></Box> */}
     <Box> {questions.map((ques) => (
                     
                     

                     
                     <List
                     sx={{  width: '100%', minWidth:750, bgcolor: 'background.paper',
                     borderRadius: 2, borderColor:'#000000',
                     p: 2,
                 }}
                 component="nav"
                 aria-labelledby="nested-list-subheader"
                 //   subheader={
                     // <ListSubheader component="div" id="nested-list-subheader">
                     //   Subtitles
                     // </ListSubheader>
                     //   }
                     >
         <ListItemButton value = {ques._id}
             onClick = {() => handleQClick(ques._id)}>
             <ListItem sx={{fontWeight:400,fontFamily:'PT Sans'}}>{ques.examTitle}</ListItem>
             {Qopen == ques._id ? <ExpandLess /> : <ExpandMore />}
         </ListItemButton>
         <Collapse in={Qopen == ques._id} timeout="auto" unmountOnExit>
             <List component="div" disablePadding>
             <ListItem>
                 
             
             <Link to = '/search' className='nav-links' onClick={(e) => window.location.href=`/viewExam?examID=${ques.examId}`}>

             <button style={{maxWidth:'100%',color:'#995DFE', fontSize:20 ,position:'relative',background:'transparent',border:'none',marginLeft:20}}  > {ques.year} {ques.courseCode} {ques.examTitle} </button>
             </Link>
             
             
             </ListItem>
             </List>
         </Collapse>
         </List>
         
         ))}
     </Box>
         
             

         </Stack>


</Box>
    {/* </Box> */}




    </Box> 
    <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
           <Box  sx={{mt:20,ml:3}}>
            <h1 style={{marginBottom:40,fontWeight:400,textAlign:'left'}} >Create new subtitle</h1>
            <List>
                <ListItem>
                <TextField sx={{minWidth:500}} id="outlined-basic" label="Title"  onChange={(e)=>{setTitleSub(e.target.value)}}  variant="outlined" />
                </ListItem>
                <ListItem>
                <TextField sx={{minWidth:500}} id="outlined-basic" label="Body"  onChange={(e)=>{setBodySub(e.target.value)}}  variant="outlined" />
                </ListItem>
                <ListItem>
                <TextField sx={{minWidth:500}} id="outlined-basic" label="video"  onChange={(e)=>{setSubVideo(e.target.value)}}  variant="outlined" />
                </ListItem>
                <ListItem>
                <TextField sx={{minWidth:500}} id="outlined-basic" label="Video description"  onChange={(e)=>{setsubviddesc(e.target.value)}}  variant="outlined" />
                </ListItem>
                <ListItem>
                <button onClick={(e)=>{
                    postSub()
                    getSub(courseId)
                    setOpenModal(false)

                }} style={{backgroundColor:'#6C63F4',fontFamily:'PT Sans',fontSize:30,borderColor:'white',borderWidth:0,color:'white',minWidth:200,marginTop:30,marginLeft:300}}>Post subtitle</button>
                </ListItem>
            </List>
            </Box>
        



        </Box>
        </Modal>
        <Modal
        open={openEx}
         onClose={handleExClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Box sx={{mt:20,ml:0}}>
                                  <Typography  sx={{mt:2,ml:5,fontFamily:'PT Sans',fontWeight:700,fontSize:40,mb:5}} color="text.primary">
                                     Create new exercise set
                                     </Typography>
        <CardContent>

                                
                                <List>
                                <ListItem>
                                  <TextField sx={{minWidth:500,ml:0, mt:0}}
                                  
                                  id="outlined"
                                  label="Exam title"
                                  defaultValue={ExamTitle}
                                  // helperText="Please Enter a Valid Username"
                                   onChange={(e)=>{setExamTitle(e.target.value)}}
                              />
                                  </ListItem>
                                  <ListItem>
                                  <TextField sx={{minWidth:500,ml:0, mt:0}}
                                  //error
                                  id="outlined-error"
                                  label="ExamID"
                                //   defaultValue={}
                                  // helperText="Please Enter a Valid Username"
                                   onChange={(e)=>{setExamId(e.target.value)
                                // console.log(CourseTitle)    
                                }}
                              />
                                  </ListItem>
                                  
                                  <ListItem>
                                  <TextField sx={{minWidth:500,ml:0, mt:0}}
                                  //error
                                  id="outlined-error"
                                  label="Year"
                                  defaultValue={ExamYear}
                                  // helperText="Please Enter a Valid Username"
                                   onChange={(e)=>{setExamYear(e.target.value)}}
                              />
                                  </ListItem>
                                 
                                 
                                  
                                
                                </List>
                              <CardActions>
                                  <button  onClick={(e)=>{postExam()
                                setExOpen(false)}} style={{backgroundColor:'#6C63F4',borderWidth:0,color:'white',fontSize:25,minWidth:200,marginTop:20,marginLeft:300}}>Create exercise</button>
                                   {/* <Button sx={{position:'fixed',mb:2,mt:7}} size="small">Learn More</Button>  */}
                              </CardActions>
                              </CardContent>
                              </Box>
        </Box>
      </Modal>
    
      <Modal
        open={openDisc}
        onClose={handleDiscClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <List sx={{mt:20}}>
            <ListItem sx={{mb:0}}>
                <h1>Define discount</h1>
            </ListItem>
            <ListItem>
            <TextField sx={{minWidth:500,ml:0, mt:0}}
                                  //error
                                  id="outlined"
                                  label="Discount Percentage"
                                  defaultValue={discpercent}
                                  helperText="please select from 0 to 100"
                                  // helperText="Please Enter a Valid Username"
                                   onChange={(e)=>{setdiscpercent(e.target.value)}}
                              />
            </ListItem>
            <ListItem>
            <TextField sx={{minWidth:500,ml:0, mt:0}}
                                  //error
                                  id="outlined"
                                  label="Discount Duration"
                                  defaultValue={discDuration}
                                  // helperText="Please Enter a Valid Username"
                                   onChange={(e)=>{setDiscDuration(e.target.value)}}
                              />
            </ListItem>
            <ListItem>
                  <button onClick={(e)=>{postDisc()}}  style={{backgroundColor:'#6C63F4',borderWidth:0,fontSize:30,fontFamily:'PT Sans',color:'white', fontWeight:700,minWidth:200,marginLeft:300,marginTop:60}} > Confirm</button>
            </ListItem>
          </List>
        </Box>
      </Modal>
      <Modal
        open={openrepModal}
        onClose={handlerepClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {modalpage != 0 && modalpage!= 10 && <button onClick={(e)=>{setModalpage(0)}} style={{backgroundColor:'transparent',borderWidth:0,minWidth:300,minHeight:50,color:'#6C63F4',fontFamily:'PT Sans',fontSize:25,marginLeft:-100,marginTop:0}}> <ArrowBackIcon sx={{fontSize:20}}/>  Back</button>}

          {modalpage == 0 && <Box sx={{ml:10,mt:20}}>
          <Typography id="modal-modal-title" sx={{fontSize:40,fontFamily:'PT Sans',fontWeight:700}} component="h2">
           Hello, how can we help?
          </Typography>
          <List sx={{mt:10,ml:6}}>
            {(opened/subtitles.length) * 100 <= 50 && <ListItem>
            {/* <button onClick={(e)=>{setModalpage(1)}} style={{backgroundColor:'#6C63F4',borderWidth:0,minWidth:300,minHeight:50,color:'white',fontFamily:'PT Sans',fontSize:20}}>Request a refund</button> */}

            </ListItem>}
            <ListItem>
            <button onClick={(e)=>{setModalpage(2)}} style={{backgroundColor:'#6C63F4',borderWidth:0,minWidth:300,minHeight:50,color:'white',fontFamily:'PT Sans',fontSize:20}}>Report a technical problem</button>
              </ListItem>
              <ListItem>
              <button onClick={(e)=>{setModalpage(3)}} style={{backgroundColor:'#6C63F4',borderWidth:0,minWidth:300,minHeight:50,color:'white',fontFamily:'PT Sans',fontSize:20}}>Report a financial problem</button>
              </ListItem>
              <ListItem>
            <button onClick={(e)=>{setModalpage(4)}} style={{backgroundColor:'#6C63F4',borderWidth:0,minWidth:300,minHeight:50,color:'white',fontFamily:'PT Sans',fontSize:20}}>Other</button>
              </ListItem>
          </List>
          </Box>}
            {modalpage == 1 && <Box sx={{mt:30}}>
            

              <h1 style={{marginBottom:70}}>Please specify a reason for your request</h1>
              <TextField sx={{minWidth:600,ml:0}}
                id="outlined-multiline-static"
                label="Reason"
                multiline
                rows={4}
                onChange={(e)=>{setReportBody(e.target.value)}}
                // defaultValue="Default Value"
              />
              <button onClick={(e)=>{setModalpage(10)
              RequestRefund()}} style={{backgroundColor:'#6C63F4',borderWidth:0,minWidth:300,minHeight:50,color:'white',fontFamily:'PT Sans',fontSize:20,marginTop:70,marginLeft:300}}>Submit</button>





              
              
              
              </Box>}

                {modalpage==10 && <Box>
                  <CheckCircleOutlineIcon sx={{color:'green',fontSize:300,ml:19,mt:10}}/>
                  <h1 style={{fontSize:60,color:'green'}}>Report sent!</h1>
                  <h1>Thank you for your feedback!</h1>
                  <h1 style={{marginTop:-20}}> our admins will get back to you shortly.</h1>
                  <button onClick={handlerepClose} style={{backgroundColor:'black',borderWidth:0,minWidth:300,minHeight:50,color:'white',fontFamily:'PT Sans',fontSize:20,marginLeft:140,marginTop:50}}>Proceed</button>






                </Box>}


                {modalpage==2 && <Box sx={{mt:20,ml:-2}}>

                  <List>
                    <ListItem>
                      <h1>Please specify your problem</h1>
                    </ListItem>
                    <ListItem>
                    <TextField sx={{minWidth:600,mt:0}}
                    id="outlined"
                    label="Title"
                    onChange={(e)=>{setReportTitle(e.target.value)}}
                    // defaultValue="Default Value"
                  />

                    </ListItem>
                    
                    <ListItem>
                    <TextField sx={{minWidth:600,ml:0}}
                id="outlined-multiline-static"
                label="Reason"
                multiline
                rows={4}
                onChange={(e)=>{setReportBody(e.target.value)}}
                // defaultValue="Default Value"
              />       
                    </ListItem>
                    <ListItem>
                    <button onClick={(e)=>{ ReportTech()
                      setModalpage(10)}} style={{backgroundColor:'#6C63F4',borderWidth:0,minWidth:300,minHeight:50,color:'white',fontFamily:'PT Sans',fontSize:20,marginTop:70,marginLeft:300}}>Submit</button>
                    </ListItem>
                  </List>
                
                 

                  
                  
                  
                  
                  </Box>}

                  {modalpage==3 && <Box sx={{mt:20,ml:-2}}>
                    <List>
                    <ListItem>
                      <h1>Please specify your problem</h1>
                    </ListItem>
                    <ListItem>
                    <TextField sx={{minWidth:600,mt:0}}
                    id="outlined"
                    label="Title"
                    onChange={(e)=>{setReportTitle(e.target.value)}}
                    // defaultValue="Default Value"
                  />

                    </ListItem>
                    
                    <ListItem>
                    <TextField sx={{minWidth:600,ml:0}}
                id="outlined-multiline-static"
                label="Reason"
                multiline
                rows={4}
                onChange={(e)=>{setReportBody(e.target.value)}}
                // defaultValue="Default Value"
              />       
                    </ListItem>
                    <ListItem>
                    <button onClick={(e)=>{ ReportFin()
                      setModalpage(10)}} style={{backgroundColor:'#6C63F4',borderWidth:0,minWidth:300,minHeight:50,color:'white',fontFamily:'PT Sans',fontSize:20,marginTop:70,marginLeft:300}}>Submit</button>
                    </ListItem>
                  </List>
                


                    
                    
                    </Box>}
                    {modalpage==4 && <Box sx={{mt:20,ml:-2}}>
                    <List>
                    <ListItem>
                      <h1>Please specify your problem</h1>
                    </ListItem>
                    <ListItem>
                    <TextField sx={{minWidth:600,mt:0}}
                    id="outlined"
                    label="Title"
                    onChange={(e)=>{setReportTitle(e.target.value)}}
                    // defaultValue="Default Value"
                  />

                    </ListItem>
                    
                    <ListItem>
                    <TextField sx={{minWidth:600,ml:0}}
                id="outlined-multiline-static"
                label="Reason"
                multiline
                rows={4}
                onChange={(e)=>{setReportBody(e.target.value)}}
                // defaultValue="Default Value"
              />       
                    </ListItem>
                    <ListItem>
                    <button onClick={(e)=>{ ReportOther()
                      setModalpage(10)}} style={{backgroundColor:'#6C63F4',borderWidth:0,minWidth:300,minHeight:50,color:'white',fontFamily:'PT Sans',fontSize:20,marginTop:70,marginLeft:300}}>Submit</button>
                    </ListItem>
                  </List>
                


                    
                    
                    </Box>}
          
                
                
        </Box>
        
      </Modal>



   
            

{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
</body>



</>  
       )
   


}

export default NewCoursePage;