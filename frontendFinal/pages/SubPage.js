import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState} from 'react';
import axios, * as others from 'axios';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { CustomButton } from '../CustomButton';
import MenuItem from '@mui/material/MenuItem';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Select from '@mui/material/Select';
import {Link} from 'react-router-dom'
import { useEffect } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ReactPlayer from 'react-player'

function SubPage() {
  const params = new URLSearchParams(window.location.search);
    const subtitleId = params.get('subtitleId');
    const courseId = params.get('courseId');
    // console.log(subtitleId)
    
  const[video,setVideo] = useState("");
  const[VideoDesc, setVideoDesc] = useState("");
  const[body,setBody] = useState("");
  const[title,setTitle] = useState("");
  const [SubCourseID,setSubCourseID] = useState()
  const[subs,setSubtitles]=useState([])
  const creds = window.localStorage.getItem('credentials');
  console.log(creds.substring(1,25))
  const[notes,setNotes] = useState('')

  const writenotes = async() =>{

    const res = await axios.post('http://localhost:4000/sendfile',{notes:notes});


}

    useEffect(() => {

      axios.get(`http://localhost:4000/api/subtitles/getSubById?subId=${subtitleId}`).then(res => {
 
                 setTitle(res.data.title)
                 setBody(res.data.body)
                 setVideo(res.data.video)
                 setVideoDesc(res.data.VideoDesc)
                 console.log(res.data.courseId)
                 setSubCourseID(res.data.courseId)
 
                 
 
             }).catch(err =>{
                 console.log(err)
             })

             axios.get(`http://localhost:4000/api/subtitles/getSubByCourse?courseId=${courseId}`).then(res => {
                const subtitles = res.data
                // console.log(subtitles)
                setSubtitles(subtitles)
                console.log(subs)
            }).catch(err =>{
                console.log(err)
            })

          
     },[]);

     async function ViewSub(){
      const res = await axios.post('http://localhost:4000/api/progress/createProgress', {TraineeId:creds.substring(1,25),CourseId:courseId,SubtitleId:subtitleId,Viewed:true});
          console.log(res);
     }
   
    
  return (

    <div>

    <Stack direction="row" sx={{mt:5,ml:10}} spacing={2}>
    <Box>
        
        <Card sx={{minHeight:800,minWidth:400 , boxShadow:3}}>
            <List>
              <h1>Course Subtitles</h1>
              {
                subs.map((sub)=>(

                  <ListItemButton id={sub._id} selected={sub._id == subtitleId ? true : false} sx={{fontSize:30}} onClick={(e) => window.location.href=`/SubPage?subtitleId=${sub._id}&courseId=${courseId}`} >

                    {sub.title}
                    <Divider />
                  </ListItemButton>
                  





                ))
              }
            </List>
  
  
     
        </Card>
        </Box>
      <Box>
      <Card sx={{minHeight:800,minWidth:1400,maxHeight:800,maxWidth:1400, boxShadow:3,overflow:'auto'}}>
        <h1 style={{color:'#6C63F4',fontSize:50,textAlign:'left',marginLeft:80}}>{title}</h1>
        <Box sx={{ml:10}}>
        <ReactPlayer className='player' width="1200px" height="500px" onStart={(e)=>{ViewSub()}} url= {video} />
        </Box>
        <h1 style={{fontSize:40,fontWeight:400}}>{VideoDesc}</h1>
        <Box sx={{ml:4}}>
        <TextField
          id="outlined-multiline-static"
          label="Notes"
          multiline
          rows={4}
          defaultValue="write your notes"
          sx={{minWidth:1200}}
          onChange={(e)=>{setNotes(e.target.value)}}
        />
        <Box sx={{ml:120,mt:3,mb:3}}> 
        <CustomButton className = 'btns' 
                buttonStyle = 'btn--outline'
                buttonSize= 'btn--large'
                onClick={(e)=>{writenotes()}}
                >
                   Save notes
                </CustomButton>
                </Box>
        </Box>
        <Divider/>
        <p style={{fontSize:30,marginLeft:60,marginRight:60,textAlign:'justify'}}>{body}</p>



   
      </Card>
        





      </Box>
      
      
    </Stack>

    
  
    </div>
  
    )
}

export default SubPage;