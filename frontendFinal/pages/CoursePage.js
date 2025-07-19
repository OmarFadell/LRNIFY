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
import CoursePageHeaderUnpaid from '../CoursePageHeaderUnPaid';
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

const { useState,useEffect } = require("react");






//import 'bootstrap/dist/css/bootstrap.min.css';
//import { set } from 'mongoose';

const CoursePage = () => {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId');
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
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    const[currentSub,setCurrentSub] = useState(false);
    const [subbed,setSubbed] = useState(true)
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

    const[RateNum,setRateNum] = useState()
    const[comment,setComment] = useState()

    //------------------------------------------------------

    const[modalpage,setModalpage] = useState(0)
    const[reportBody,setReportBody] = useState()
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

    async function ReportOther(){

      const res = await axios.post('http://localhost:4000/api/reportStudent/createRepStu', {CreatorId:creds.substring(1,25),reportType:'other',title:reportTitle,body:reportBody,status:'pending',CourseCode:code.toUpperCase()});
      console.log(res);

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

            async function PostRating(){
                const res = await axios.post('http://localhost:4000/api/courses/createReview', {userid:creds.substring(1,25),rating:RateNum,comment:comment,Code:code});
                console.log(res);
                getRatings();


            }

            async function getRatings(){

                axios.get(`http://localhost:4000/api/courses/getReviewsByID?Code=${code}`).then(res => {
                    console.log(code)
                    const reviews = res.data
                    // console.log(quesitons)
                    setReviews(reviews)
                   
                })
                .catch(err => {
                    console.log(err)
                })
                
            }
  
       

        useEffect(() => {
            const creds = window.localStorage.getItem('credentials');
            console.log(creds.substring(1,25))

           

            
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
                         setSubbed(false)
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
          { subbed == false && 
            <body>
                
                 {/* //////////////////////////////////////////////////////////////////////////COURSE PAGE///////////////////////////////////////////////////////////////////////////////// */}


            <CoursePageHeaderUnpaid/>
            <nav className='navbar1'>
            <div className='navbar-container'>
                
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                
                <li className='nav-item1'>
                  
                <button onClick={(e)=>{setToggleContent(true) 
                    setToggleReviews(false)}} className='nav-links1'>Course Content</button>
                </li>
                

                  <li className='nav-item'>
                  <button className='nav-links1' onClick={(e)=>{setToggleReviews(true)
                     setToggleContent(false)}}>Reviews</button>
                </li>
                
                
                </ul>
                

                <div>
        
        
      </div>

            </div>
            <Card className='card1' sx={{ maxWidth: 1000,color:'#FFFFFF',borderRadius:0,boxShadow:0.3 }} >
      <CardContent>
      
      <ReactPlayer className='player' width="500px" height="270px"  url= {previewVideo} />
      <Box sx={{ml:-5,mt:5}}>
      <Link to = '/' onClick={(e) => window.location.href=`/indPayCourse?courseId=${courseId}`}>
        
      <CustomButton className = 'btns' 
                buttonStyle = 'btn--signin'
                buttonSize= 'btn--largesignin'
                // onClick={signup}
                
                
                >
                Register
                </CustomButton>
                </Link>
                </Box>
      
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>


        </nav>
       
           {toggleContent == true && <Box>
            
           
    
      
                <Box>
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
       >
        <ListItem sx={{fontWeight:400,fontFamily:'PT Sans'}}>{subtitle.title}</ListItem>
        {open == subtitle._id ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {/* <Collapse in={open == subtitle._id} timeout="auto" unmountOnExit> */}
        
      {/* </Collapse> */}
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
                        >
                        <ListItem sx={{fontWeight:400,fontFamily:'PT Sans'}}>{ques.examTitle}</ListItem>
                        {Qopen == ques._id ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    
                    </List>
                    
                    ))}
                </Box>
                    
                        

                    </Stack>

  
    </Box>
    {/* </Box> */}




    </Box> }

    { toggleReviews == true && 
        <Box>

<List sx={{ width: '100%', maxWidth: 1800,ml:10, bgcolor: 'background.paper' }}>
<ListItem>
        <h1>Overall Rating: {rating}</h1>
    </ListItem>
    <ListItem alignItems="flex-start">
    <StyledRating style={{marginLeft:'5em',marginTop:'-0.9rem',fontSize:'30px'}}
                name="customized-color"
                readOnly
                value={rating}
                precision={1}
                icon={<StarIcon fontSize="inherit" />}
                emptyIcon={<StarIcon fontSize="inherit" />}
        

            />

    </ListItem>
    
    </List>

    { reviews.map((rev) => (
        <List sx={{ width: '100%', maxWidth: 1800,ml:10, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{minWidth:70,minHeight:70,mr:5,mt:2}} alt="Anon" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText  primary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline',fontSize:30,fontFamily:'PT Sans', fontWeight:700 }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Anonymous
              </Typography>
              {" — "} {<StyledRating style={{marginLeft:'0',marginTop:'-0.9rem',fontSize:'30px'}}
                name="customized-color"
                readOnly
                value={rev.rating}
                precision={1}
                icon={<StarIcon fontSize="inherit" />}
                emptyIcon={<StarIcon fontSize="inherit" />}
        

            />}
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
             
              
              <Typography
                sx={{ display: 'inline',fontSize:40,fontWeight:400, fontFamily:'PT Sans' }}
                component="span"
                variant="body2"
                color="text.primary"
              >

                {rev.comment}
              </Typography>
             
            </React.Fragment>
          } />
        <Divider variant="inset" component="li" />
      </ListItem>
      </List>
))}
      
    
      
      
    




        </Box>





    }

            

{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
</body>
}

{ subbed == true && 
 <body>
    <CoursePageHeader/>
    <nav className='navbar1'>
            <div className='navbar-container'>
                
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                
                <li className='nav-item1'>
                  
                <button onClick={(e)=>{setTabnum(0)}} className='nav-links1'>Course Content</button>
                </li>
                

                  <li className='nav-item'>
                  <button className='nav-links1' onClick={(e)=>{setTabnum(1)}}>Reviews</button>
                </li>
                {/* <li className='nav-item'>
                  <button className='nav-links1' onClick={(e)=>{setTabnum(2)}}>Actions</button>
                </li> */}
                
                
                </ul>
                

                <div>
        
        
      </div>

            </div>
           


        </nav>
 

 
 <Card className='card1' sx={{ maxWidth: 1000,color:'#FFFFFF',borderRadius:0,boxShadow:0.3 }} >
<CardContent>
<ReactPlayer className='player' width="500px" height="270px"  url= {previewVideo} />

<p style={{color:'black',fontSize:25,marginBottom:1,marginLeft:10}}>progress: {(opened/subtitles.length) * 100}%</p>
<LinearProgress variant='determinate' sx={{minHeight:40,mt:2,borderRadius:3}} color="secondary"  value={(opened/subtitles.length) * 100} />

<Box sx={{ml:0,mt:0}}>
                      {/* <Link to='/' }> */}
                       <CustomButton className = 'btns' 
                buttonStyle = 'btn--signin'
                buttonSize= 'btn--largereport'
                onClick={(e)=>{setOpenModal(true) }}
                >
                Report a problem
                </CustomButton>   
                {/* </Link> */}
                </Box>
        
</CardContent>
<CardActions>
{/* <Button size="small">Learn More</Button> */}
</CardActions>
</Card>



   {tabnum==0 &&  <Box>
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
<Link to = '/search' className='nav-links' onClick={(e) => window.location.href=`/SubPage?subtitleId=${subtitle._id}&courseId=${subtitle.courseId}`}>

<button style={{maxWidth:'100%',color:'#995DFE', fontSize:20 ,position:'relative',background:'transparent',border:'none',marginLeft:20}}  >  {subtitle.VideoDesc}</button>
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
                 
             
             <Link to = '/search' className='nav-links' onClick={(e) => window.location.href=`/Exam2?examID=${ques.examId}`}>

             <button style={{maxWidth:'100%',color:'#995DFE', fontSize:20 ,position:'relative',background:'transparent',border:'none',marginLeft:20}}  > {ques.year} {ques.courseCode} {ques.examTitle} </button>
             </Link>
             
             
             </ListItem>
             </List>
         </Collapse>
         </List>
         
         ))}
     </Box>
         
             

         </Stack>


</Box>}
{tabnum==1 && <Box sx={{mr:100}}>
    
    <Box>

<List sx={{ width: '100%', maxWidth: 1800,ml:10, bgcolor: 'background.paper' }}>
<ListItem>
        <h1>Overall Rating: {rating}</h1>

    </ListItem>
    <ListItem>

        {<Box>
            <h1>Rate this course</h1>
            <TextField sx={{minWidth:200,ml:2, mb:2}} id="outlined-basic" type="number" onChange={(e)=>{setRateNum(e.target.value)}} InputProps={{
        inputProps: { 
            max: 5, min: 0 
        }
    }}  label="Rating" variant="outlined" /> 
            <TextField sx={{minWidth:500,ml:2, mb:2,mr:5}} id="outlined-basic" label="Comment" onChange={(e)=>{setComment(e.target.value)}} variant="outlined" /> 
            
            <CustomButton className = 'btns' 
                buttonStyle = 'btn--signin'
                buttonSize= 'btn--large'
                 onClick={(e)=>{PostRating()}}
                >
                Post Rating
                </CustomButton>   
            
            
            </Box>}



    </ListItem>

    <ListItem alignItems="flex-start">
    <StyledRating style={{marginLeft:'5em',marginTop:'-0.9rem',fontSize:'30px'}}
                name="customized-color"
                readOnly
                value={rating}
                precision={1}
                icon={<StarIcon fontSize="inherit" />}
                emptyIcon={<StarIcon fontSize="inherit" />}
        

            />

    </ListItem>
    
    </List>

    { reviews.map((rev) => (
        <List sx={{ width: '100%', maxWidth: 1800,ml:10, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{minWidth:70,minHeight:70,mr:5,mt:2}} alt="Anon" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText  primary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline',fontSize:30,fontFamily:'PT Sans', fontWeight:700 }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Anonymous
              </Typography>
              {" — "} {<StyledRating style={{marginLeft:'0',marginTop:'-0.9rem',fontSize:'30px'}}
                name="customized-color"
                readOnly
                value={rev.rating}
                precision={1}
                icon={<StarIcon fontSize="inherit" />}
                emptyIcon={<StarIcon fontSize="inherit" />}
        

            />}
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
             
              
              <Typography
                sx={{ display: 'inline',fontSize:40,fontWeight:400, fontFamily:'PT Sans' }}
                component="span"
                variant="body2"
                color="text.primary"
              >

                {rev.comment}
              </Typography>
             
            </React.Fragment>
          } />
        <Divider variant="inset" component="li" />
      </ListItem>
      </List>
))}
      
    
      
      
    




        </Box>

    </Box>}

    <Modal
        open={openModal}
        onClose={handleClose}
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
            <button onClick={(e)=>{setModalpage(1)}} style={{backgroundColor:'#6C63F4',borderWidth:0,minWidth:300,minHeight:50,color:'white',fontFamily:'PT Sans',fontSize:20}}>Request a refund</button>

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
                  <button onClick={handleClose} style={{backgroundColor:'black',borderWidth:0,minWidth:300,minHeight:50,color:'white',fontFamily:'PT Sans',fontSize:20,marginLeft:140,marginTop:50}}>Proceed</button>






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



 


</body>




}
</>  
       )
   


}

export default CoursePage;