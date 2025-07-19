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

import Stack from '@mui/material/Stack';

import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import CoursePageHeader from '../CoursePageHeader';
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
const { useState,useEffect } = require("react");





//import 'bootstrap/dist/css/bootstrap.min.css';
//import { set } from 'mongoose';

const StudentCoursePage = () => {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId');
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
    const[currentSub,setCurrentSub] = useState(false);
    const [subbed,setSubbed] = useState(true)
    //--------------------------------------------------------
    const[questions,setQuestions] = useState([])
    const[opened,setOpened] = useState(0)
    const[subCount,setSubcount] = useState()
    const[Qopen,setQOpen] = useState();
    const[currentQSub,setCurrentQSub] = useState(false);


    


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
            })
            .catch(err => {
                console.log(err)
            })
            axios.get(`http://localhost:4000/api/registeredCourse/CheckCourse?TraineeId=${creds.substring(1,25)}&CourseId=${courseId}`).then(res => {
                
                if (res.data.message == 'empty'){
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
        
        
        return(
            
            
            <body>
            <CoursePageHeader/>
       
            
            <Card className='card1' sx={{ maxWidth: 1000,color:'#FFFFFF',borderRadius:0,boxShadow:0.3 }} >
      <CardContent>
      <ReactPlayer className='player' width="500px" height="270px"  url= {previewVideo} />
      
        <p style={{color:'black',fontSize:25,marginBottom:1,marginLeft:10}}>progress:</p>
        <LinearProgress variant='determinate' sx={{minHeight:40,mt:2,borderRadius:3}} color="secondary"  value={(opened/subtitles.length) * 100} />
        {/* </Typography> */}
        {/* {subbed==true && <CustomButton className = 'btns' 
                buttonStyle = 'btn--signin'
                buttonSize= 'btn--largesignin'
                // onClick={signup}
                
                
                >
                Register
                </CustomButton>} */}
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
           
    
      
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
                            
                        
                        <Link to = '/search' className='nav-links' onClick={(e) => window.location.href=`/solveExam?examID=${ques.examId}`}>

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




   

            


</body>
       )
   


}

export default StudentCoursePage;