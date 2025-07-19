import { height } from '@mui/system';
import React,{useState,useEffect} from 'react';

import { CustomButton } from './CustomButton';
import './CoursePageHeader.css';
import homepage from './homepage.png'
import homevideo from './hmpgbgv.mp4'
import gradient from './gradient.png'
import axios from 'axios';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
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
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import StarIcon from '@mui/icons-material/Star';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import PaymentsIcon from '@mui/icons-material/Payments';
import { Link } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReportIcon from '@mui/icons-material/Report';



function CoursePageHeaderUnpub() {
    const [courseTitle,setCourseTitle] = useState("");
    const [totalHours,setTotalHours] = useState();
    const [rating,setRating] = useState();
    const [price,setPrice] = useState("");
    const [code,setCode] = useState("");
    const [courseOutline,setCourseOutline] = useState("");
    const [previewVideo,setPreviewVideo] = useState("");
    const [noOfViews,setNoOfViews] = useState("");
    const [active,setActive] = useState(false);
    const[edit,setedit] = useState(false)

    // const [subtitles,setSubtitles]=useState([])
    
    const [subtitles,setSubtitles] = useState([]);
    const creds = window.localStorage.getItem('credentials');
    console.log(creds.substring(1,25))

    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId');
    
    const published = params.get('pub');

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
          color: '#000000',
        },
        '& .MuiRating-iconHover': {
          color: '#D8D8D8',
        },
      });

    useEffect(() => {
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
    },[]);

    async function editCourse(){
    const res = await axios.put(`http://localhost:4000/api/courses/addPreview?courseId=${courseId}`, {totalHours:totalHours,rating:rating, price:price,title:courseTitle, Code:code,courseOutline:courseOutline,previewVideo:previewVideo,instructor:creds.substring(1,25)});
    console.log(res);
    }

    async function publish(){

        if(published=='true'){

            const res = await axios.put(`http://localhost:4000/api/courses/unPublish?courseId=${courseId}`);
             console.log(res);


        }else{
            
            const res = await axios.put(`http://localhost:4000/api/courses/publish?courseId=${courseId}`);
             console.log(res);
        }

    }


        
        
    

   
    
    const[country,setcountry] = useState('')
    console.log(country)
   
    return (
        <div>
            {published=='false' && <Box>
                <h1><ReportIcon sx={{color:'red',fontSize:50,mb:-2}}/> This course is unpublished and is not visible to trainees <button onClick={(e)=>{
                    publish()
                    window.location.href=`/instructorCoursePage?courseId=${courseId}&pub=${true}`
                }} style={{backgroundColor:'transparent',fontSize:30,fontFamily:'PT Sans',fontWeight:700,color:'#6C63F4',borderWidth:0,marginLeft:30}}>publish</button></h1>
                
            </Box>}
            {published=='true' && <Box>
                <h1><CheckCircleIcon sx={{color:'green',fontSize:50,mb:-2}}/> This course is published and is visible to trainees<button onClick={(e)=>{
                    publish()
                    window.location.href=`/instructorCoursePage?courseId=${courseId}&pub=${false}`
                }} style={{backgroundColor:'transparent',fontSize:30,fontFamily:'PT Sans',fontWeight:700,color:'#6C63F4',borderWidth:0,marginLeft:30}}>unpublish</button></h1>
            </Box>}
        <div className='headera'>
            
            
            <Stack
                    direction="column"
                    // divider={<Divider orientation="horizontal" flexItem />}
                    spacing={0}
                    sx={{ml:10,mt:-10}}
                    >
                        <Box>
            
                {edit==false && <h1 style={{textAlign:'left',fontSize:50,marginRight:1000}}>{code}: {courseTitle}</h1>}
                
                {edit == false && <p style={{marginTop:-30,fontSize:30,marginRight:700}} >{courseOutline}</p>}
                
                {edit == true && <List>
                    <ListItem>
                     <TextField sx={{minWidth:1000}} id="outlined-basic" label="Course title" defaultValue={courseTitle} onChange={(e)=>{setCourseTitle(e.target.value)}}  variant="outlined" />
                    </ListItem>
                    <ListItem>
                     <TextField sx={{minWidth:1000}} id="outlined-basic" label="Course Outline" defaultValue={courseOutline} onChange={(e)=>{setCourseOutline(e.target.value)}} variant="outlined" />
                    </ListItem>
                </List>}
                
                

                
               

                
              

            {/*  */}
            </Box>
            <Box> 
            <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={3}
                    sx={{ml:10,mt:0}}
                    >

                        
                      <Box> 
                      {edit == false && <h2 style={{fontSize:50,fontWeight:400}}> <QueryBuilderIcon sx={{fontSize:40}} style={{marginTop:'0.1rem'}}/> {totalHours}  Hours</h2>}
                        {edit == true && 
                        <List>
                    <ListItem>
                     <TextField sx={{minWidth:100}} id="outlined-basic" onChange={(e)=>{setTotalHours(e.target.value)
                    console.log(totalHours)}} label="Hours" type='number' defaultValue={totalHours}  variant="outlined" />
                    </ListItem>
                    
                </List>}
                {edit == false && <h3 style={{marginTop:-40,fontWeight:400,fontSize:25,color:'black',textAlign:'center'}}>{subtitles.length} Subtitles</h3>} </Box>
                        <Box> {edit == false && <h2 style={{fontSize:50,fontWeight:400}} ><PaymentsIcon sx={{fontSize:40}}/> EGP {price}  </h2>}
                        {edit == true && 
                        <List>
                    <ListItem>
                     <TextField sx={{minWidth:100}} id="outlined-basic" label="Price" onChange={(e)=>{setPrice(e.target.value)}} defaultValue={price}  variant="outlined" />
                    </ListItem>
                    
                </List>} </Box>






                    </Stack>
                
                
                 </Box>

                 <Box>

                            {edit == true && <button onClick={(e)=>{setedit(false)
                            editCourse()}} style={{backgroundColor:'#6C63F4',fontFamily:'PT Sans',fontSize:30,borderColor:'white',borderWidth:0,color:'white',minWidth:200,marginLeft:800}}>submit</button>}
                            {edit == false && <button onClick={(e)=>{setedit(true)}} style={{backgroundColor:'#6C63F4',fontFamily:'PT Sans',fontSize:30,borderColor:'white',borderWidth:0,color:'white',minWidth:200,marginLeft:800}}>Edit Course</button>}

                 </Box>

            
            </Stack>

            <Card className='card1' sx={{ maxWidth: 1000,color:'#FFFFFF',borderRadius:0,boxShadow:0.3 }} >
      <CardContent>
      
      <ReactPlayer className='player' width="500px" height="270px"  url= {previewVideo} />
      <Box sx={{ml:0,mt:5}}>
      {edit == true && 
                    
                     <TextField sx={{minWidth:400}} id="outlined-basic" label="Preview Video" defaultValue={previewVideo} onChange={(e)=>{setPreviewVideo(e.target.value)}}  variant="outlined" />}
                    
      
                </Box>
      
      </CardContent>
        </Card>
            
            
          
           
        </div>
        </div>
    )
}

export default CoursePageHeaderUnpub
