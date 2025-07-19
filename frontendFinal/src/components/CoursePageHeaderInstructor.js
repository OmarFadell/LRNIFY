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



function CoursePageHeaderInstructor() {
    const [courseTitle,setCourseTitle] = useState("");
    const [totalHours,setTotalHours] = useState("");
    const [rating,setRating] = useState();
    const [price,setPrice] = useState("");
    const [code,setCode] = useState("");
    const [courseOutline,setCourseOutline] = useState("");
    const [previewVideo,setPreviewVideo] = useState("");
    const [noOfViews,setNoOfViews] = useState("");
    const [active,setActive] = useState(false);
    // const [subtitles,setSubtitles]=useState([])
    
    const [subtitles,setSubtitles] = useState([]);

    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId');

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

   
    
    const[country,setcountry] = useState('')
    console.log(country)
   
    return (
        <div className='headera'>
            
            <Stack
                    direction="column"
                    // divider={<Divider orientation="horizontal" flexItem />}
                    spacing={0}
                    sx={{ml:10,mt:-10}}
                    >
                        <Box>
            
                <h1 style={{textAlign:'left',fontSize:50,marginRight:1000}}>{code}: {courseTitle}</h1>
                <p style={{marginTop:-30,fontSize:30}} >{courseOutline}</p>
                
                

                
               

                
              

            {/*  */}
            </Box>
            <Box> 
            <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={3}
                    sx={{ml:10,mt:0}}
                    >

                        <Box>  <h2 style={{fontSize:50,fontWeight:400,textAlign:'center'}} > <StarIcon sx={{fontSize:40}}/> {rating } </h2>
                        
                        <h3 style={{marginTop:-40,fontWeight:400,fontSize:25,color:'black'}}>{noOfViews} Views</h3>
                          </Box>
                        <Box> <h2 style={{fontSize:50,fontWeight:400}}> <QueryBuilderIcon sx={{fontSize:40}} style={{marginTop:'0.1rem'}}/> {totalHours}  Hours</h2>
                        <h3 style={{marginTop:-40,fontWeight:400,fontSize:25,color:'black',textAlign:'center'}}>{subtitles.length} Subtitles</h3> </Box>
                        <Box>  <h2 style={{fontSize:50,fontWeight:400}} ><PaymentsIcon sx={{fontSize:40}}/> EGP {price}  </h2> </Box>






                    </Stack>
                
                
                 </Box>

            
            </Stack>
            
            
          
           
        </div>
    )
}

export default CoursePageHeaderInstructor
