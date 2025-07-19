import axios from 'axios';
import Button from '@mui/material/Button';
import './SubtitlePage.css';
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
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';



//import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
const { useState,useEffect } = require("react");



const StudentSubtitles = () => {
    const params = new URLSearchParams(window.location.search);
    const subtitleId = params.get('subtitleId');
    const courseId = params.get('courseId');
    console.log(subtitleId)

    const[subcourseId,setsubCourseId] = useState("");
    const [subtitles,setSubtitles] = useState([]);
    const[video,setVideo] = useState("");
    const[VideoDesc, setVideoDesc] = useState("");
    const[body,setBody] = useState("");
    const[title,setTitle] = useState("");
    const [courseTitle,setCourseTitle] = useState("");
    const [totalHours,setTotalHours] = useState("");
    const [rating,setRating] = useState("");
    const [price,setPrice] = useState("");
    const [code,setCode] = useState("");
    const [courseOutline,setCourseOutline] = useState("");
    const [previewVideo,setPreviewVideo] = useState("");
    const [noOfViews,setNoOfViews] = useState("");
    const [active,setActive] = useState(false);
   // const [subtitles,setSubtitles] = useState([]);


   const[notes, setNotes]= useState("");


   const notesHandler = (e) =>{
    console.log(e.target.value);

    setNotes(e.target.value);
    }

const writenotes = async() =>{

    const res = await axios.post('http://localhost:4000/sendfile',{notes:notes});


}

    useEffect(() => {
     axios.get(`http://localhost:4000/api/subtitles/getSubById?subId=${subtitleId}`).then(res => {

                setTitle(res.data.title)
                setBody(res.data.body)
                setVideo(res.data.video)
                setVideoDesc(res.data.VideoDesc)

                

            }).catch(err =>{
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
            })
            .catch(err => {
                console.log(err)
            })
    },[]);

    async function PutSubtitle(){
        let subreq = {subcourseId,video,body,title,VideoDesc}
        fetch(`http://localhost:4000/api/subtitles/?subId=${subtitleId}`, {
            method: 'PUT',
            body: JSON.stringify(subreq),
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            }   
        })
    }
    function handleSubmit(){
        PutSubtitle();
        setActive(false)
    }


    return(
        <body>

           
    
            <div class="header">
            <h2 >{code}: {courseTitle} </h2>
            <p>{courseOutline}</p>
            <h1>{title}</h1>
            
            
            </div>
            <    Box sx={{marginBottom: 2}}>
            {/* <Button variant="contained"
            onClick={() => setActive(true)}
            margin="normal"
            padding="normal"
            >Add/Change Subtitle Video</Button> */}
            <form>
                
                
                { active == true && <TextField
                  id="prev"
                  label=" Video Link"
                  
                  helperText="Insert a Youtube Video link"
                  value={video}
                  onChange={(e)=> setVideo(e.target.value)}

                /> }
                { active == true && <TextField
                  id="prev"
                  label="Video Description"
                  
                  helperText="Add video description"
                  value={VideoDesc}
                  onChange={(e)=> setVideoDesc(e.target.value)}

                /> }

                
                 
                    { active == true && <Button variant="contained"
                    onClick={() => handleSubmit()}
                    margin="normal"
                    padding="normal"
                    >Submit</Button>
           
                }


<label htmlFor="name">NOOOOOOOOTES:</label>
                <input type="text" name="name" id="name" onChange={notesHandler}/>

            </form>

            <button onClick={writenotes}>DOWNLOAD PDF</button>

            </Box>
        


            
            <div class="content">
            
            <div class="subBody">

            <p>{body}</p>

            </div>

            <div class="video">
            <ReactPlayer url= {video} />
                <h1>Video Description:</h1>
                <h1> {VideoDesc} </h1>

            </div>

  
  
 
            </div>

              
        <div className="Subtitles">

        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List >

        {subtitles.map((subtitle) => (


          <ListItem disablePadding>
            <ListItemButton key={subtitle._id}
            onClick={() => window.location.href=`/Subtitle?subtitleId=${subtitle._id}&courseId=${courseId}`}>

           {subtitle.title}
            </ListItemButton>
          </ListItem>



        ))}

        </List>
      </nav>
    </Box>








            
     
        </div>




</body>
       )
   







    




}
export default StudentSubtitles;