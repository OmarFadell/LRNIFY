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
import Modal from '@mui/material/Modal';
import { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import { ListItemButton } from '@mui/material';


// export default function BasicCard() {
 function AdminViewProbs({Login, error}) {
  // const params = new URLSearchParams(window.location.search);
  // const ExamID = params.get('examID');
    

  const[click, setClick] = useState(false);
  const[pagenum, setpagenum] = useState(0)
  const[refunds,setRefunds] = useState([])
  const[tech,settech] = useState([])
  const[fin,setfin] = useState([])
  const[other,setother] = useState([])
  const[crID,setcrID] = useState()
  const[crtype,setcrType] = useState()
  const[crtitle,setcrtitle] = useState()
  const[crbody,setcrbody] = useState()
  const[crstatus,setcrstatus] = useState()
  const[crcode,setcrcode] = useState('')
  const[seen,setseen] = useState()
  const[probid,setprobid] = useState()
  const[reqs,setReqs] = useState([])    
  const[courseId,setCourseid] = useState()
  const[courseTitle,setCourseTitle] = useState()
    const Style = {
      position: 'absolute' ,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };

  
    useEffect(() => {

      axios.get(`http://localhost:4000/api/reportStudent/getAllCourseRequest`).then(res => {
      
        const quesitons = res.data
        console.log(quesitons)
        setReqs(quesitons)
       
    })
    .catch(err => {
        console.log(err)
    })
    axios.get(`http://localhost:4000/api/reportStudent/getAllRefunds`).then(res => {
      
    const quesitons = res.data
    console.log(quesitons)
    setRefunds(quesitons)
   
})
.catch(err => {
    console.log(err)
})

    axios.get(`http://localhost:4000/api/reportStudent/getallTech`).then(res => {
       
        const quesitons = res.data
        console.log(quesitons)
        settech(quesitons)
       
    })
    .catch(err => {
        console.log(err)
    })
    
    axios.get(`http://localhost:4000/api/reportStudent/getallFin`).then(res => {
       
        const quesitons = res.data
        console.log(quesitons)
        setfin(quesitons)
       
    })
    .catch(err => {
        console.log(err)
    })
    axios.get(`http://localhost:4000/api/reportStudent/getallOther`).then(res => {
       
        const quesitons = res.data
        console.log(quesitons)
        setother(quesitons)
       
    })
    .catch(err => {
        console.log(err)
    })
    
      
         
    
      
  },[]);

  async function getProb(value){
    axios.get(`http://localhost:4000/api/reportStudent/getByID?id=${value}`).then(res => {

          setcrID(res.data.CreatorId)
          setcrType(res.data.reportType)
          setcrtitle(res.data.title)
          setcrbody(res.data.body)
          setcrstatus(res.data.status)
          setcrcode(res.data.CourseCode)
          setseen(res.data.seen)
          setprobid(res.data._id)
          console.log(res.data._id)
          // giveAccess()
       
       
    })
    .catch(err => {
        console.log(err)
    })

  }

  async function ProbSeen(value){
    axios.put(`http://localhost:4000/api/reportStudent/setSeen?reportId=${value}`).then(res => {

       console.log(res)
    })
    .catch(err => {
        console.log(err)
    })

  }
  async function ProbResolved(value){
    axios.put(`http://localhost:4000/api/reportStudent/setResolved?reportId=${value}`).then(res => {

       console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
    getProb(value)

  }

  async function Refund(value){
    axios.post(`http://localhost:4000/api/reportStudent/refund?id=${value}`).then(res => {

       console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
    getProb(value)

  }

  async function Pay(){
   
    const reg2={courseID:courseId,traineeID:crID}
    const reg = await fetch('/api/trainee/addingCourseToTrainee', {
      method: 'PUT',
      body: JSON.stringify(reg2),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(reg)
    

}
  


  async function giveAccess(){
    const pay = await axios.get(`http://localhost:4000/api/courses/getCoursesByCode?code=${crcode.toUpperCase()}`).then(res => {
      setCourseid(res.data._id)
      setCourseTitle(res.data.title)
       axios.post(`http://localhost:4000/api/registeredCourse/AddbyCode?code=${crcode.toUpperCase()}&traineeId=${crID}`);
      console.log(res);
      Pay()
       
   
   
})
.catch(err => {
    console.log(err)
})
    
  }



  return (
   <div>

        <Stack
        direction="column"
        divider={<Divider orientation="horizontal" flexItem />}
        spacing={2}
      >
        <Box sx={{width:'100vh',minWidth:300,ml:70,mt:4,backgroundColor:'light grey'}}>
        <nav className='navbar1'>
            <div >
            
                
                <div className='menu-icon'>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                
                <li className='nav-item1'>
                  
                <button  className='nav-links1' onClick={(e)=>{setpagenum(0)}}>Refunds</button>
                </li>
                

                  <li className='nav-item'>
                  <button className='nav-links1' onClick={(e)=>{setpagenum(1)}} >Technical</button>
                </li>
                <li className='nav-item'>
                  <button className='nav-links1' onClick={(e)=>{setpagenum(2)}} >Financial</button>
                </li>
                <li className='nav-item'>
                <button className='nav-links1' onClick={(e)=>{setpagenum(3)}} >Other</button>
                </li>
                <li className='nav-item'>
                <button className='nav-links1' onClick={(e)=>{setpagenum(4)}} >Course Requests</button>
                </li>
                
                </ul>

                </div>
            

        </nav>
        </Box>
        
        <Box>
        <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
          <Box sx={{height:'100vh',minWidth:300}}>
           { pagenum == 1 && <List>
              
              {tech.map(
                        req=>(

              <List>
              <ListItemButton sx={{fontSize:30,fontWeight:700,fontFamily:'PT Sans'}} key={req.id} onClick={(e)=>{
                ProbSeen(req._id)
                getProb(req._id)}}>
                {req.title}
              </ListItemButton>
              <p style={{marginLeft:30}}>{req.createdAt}</p>
              </List>

                        ))}

            </List>}
            { pagenum == 4 && <List>
              
              {reqs.map(
                        req=>(

              <List>
              <ListItemButton sx={{fontSize:30,fontWeight:700,fontFamily:'PT Sans'}} key={req.id} onClick={(e)=>{
                ProbSeen(req._id)
                getProb(req._id)}}>
                {req.title}
              </ListItemButton>
              <p style={{marginLeft:30}}>{req.createdAt}</p>
              </List>

                        ))}

            </List>}
            { pagenum == 0 && <List>
              
              {refunds.map(
                        req=>(

              <List>
              <ListItemButton sx={{fontSize:30,fontWeight:700,fontFamily:'PT Sans'}} key={req.id} onClick={(e)=>{
                ProbSeen(req._id)
                getProb(req._id)}}>
                {req.title}
              </ListItemButton>
              <p style={{marginLeft:30}}>{req.createdAt}</p>
              </List>

                        ))}

            </List>}
            { pagenum == 2 && <List>
              
              {fin.map(
                        req=>(

              <List>
              <ListItemButton sx={{fontSize:30,fontWeight:700,fontFamily:'PT Sans'}} key={req.id} onClick={(e)=>{
                ProbSeen(req._id)
                getProb(req._id)}}>
                {req.title}
              </ListItemButton>
              <p style={{marginLeft:30}}>{req.createdAt}</p>
              </List>

                        ))}

            </List>}
            { pagenum == 3 && <List>
              
              {other.map(
                        req=>(

              <List>
              <ListItemButton sx={{fontSize:30,fontWeight:700,fontFamily:'PT Sans'}} key={req.id} onClick={(e)=>{
                ProbSeen(req._id)
                getProb(req._id)}}>
                {req.title}
              </ListItemButton>
              <p style={{marginLeft:30}}>{req.createdAt}</p>
              </List>

                        ))}

            </List>}






          </Box>
           <Box>
           {pagenum==1 &&<Card sx={{ minWidth: 1400, minHeight:700, boxShadow: 4, mt:15,ml:10, boxshadow:2, alignItems:'center' }} className='login'>

            <h1>{crtitle}</h1>
            <h2>{crtype}</h2>
            <h3>Creator: {crID}</h3>
            <h3>{crbody}</h3>
            <h3>{crstatus}</h3>
            <h3>{seen}</h3>
            <h3>{crcode}</h3>
            <TextField sx={{minWidth:600,ml:0}}
                id="outlined-multiline-static"
                label="Reason"
                multiline
                rows={4}
                // onChange={(e)=>{setReportBody(e.target.value)}}
                // defaultValue="Default Value"
              />

            <button onClick={(e)=>{ProbResolved(probid)
            setcrstatus('resolved')}}>set Resolved</button>

          </Card>}
          {pagenum==2 &&<Card sx={{ minWidth: 1400, minHeight:700, boxShadow: 4, mt:15,ml:10, boxshadow:2, alignItems:'center' }} className='login'>

            <h1>{crtitle}</h1>
            <h2>{crtype}</h2>
            <h3>Creator: {crID}</h3>
            <h3>{crbody}</h3>
            <h3>{crstatus}</h3>
            <h3>{seen}</h3>
            <h3>{crcode}</h3>
            <TextField sx={{minWidth:600,ml:0}}
                id="outlined-multiline-static"
                label="Reason"
                multiline
                rows={4}
                // onChange={(e)=>{setReportBody(e.target.value)}}
                // defaultValue="Default Value"
              />

            <button onClick={(e)=>{ProbResolved(probid)
            setcrstatus('resolved')}}>set Resolved</button>

          </Card>}
          {pagenum==3 &&<Card sx={{ minWidth: 1400, minHeight:700, boxShadow: 4, mt:15,ml:10, boxshadow:2, alignItems:'center' }} className='login'>

            <h1>{crtitle}</h1>
            <h2>{crtype}</h2>
            <h3>Creator: {crID}</h3>
            <h3>{crbody}</h3>
            <h3>{crstatus}</h3>
            <h3>{seen}</h3>
            <h3>{crcode}</h3>
            <TextField sx={{minWidth:600,ml:0}}
                id="outlined-multiline-static"
                label="Reason"
                multiline
                rows={4}
                // onChange={(e)=>{setReportBody(e.target.value)}}
                // defaultValue="Default Value"
              />

            <button onClick={(e)=>{ProbResolved(probid)
            setcrstatus('resolved')}}>set Resolved</button>

          </Card>}
          {pagenum==4 &&<Card sx={{ minWidth: 1400, minHeight:700, boxShadow: 4, mt:15,ml:10, boxshadow:2, alignItems:'center' }} className='login'>

<h1>{crtitle}</h1>
<h2>{crtype}</h2>
<h3>Creator: {crID}</h3>
<h3>{crbody}</h3>
<h3>{crstatus}</h3>
<h3>{seen}</h3>
<h3>{crcode}</h3>
<TextField sx={{minWidth:600,ml:0}}
    id="outlined-multiline-static"
    label="Reason"
    multiline
    rows={4}
    // onChange={(e)=>{setReportBody(e.target.value)}}
    // defaultValue="Default Value"
  />

<button onClick={(e)=>{giveAccess()
setcrstatus('resolved')}}>give access</button>

</Card>}
          {pagenum==0 &&<Card sx={{ minWidth: 1400, minHeight:700, boxShadow: 4, mt:15,ml:10, boxshadow:2, alignItems:'center' }} className='login'>

<h1>{crtitle}</h1>
<h2>{crtype}</h2>
<h3>Creator: {crID}</h3>
<h3>{crbody}</h3>
<h3>{crstatus}</h3>
<h3>{seen}</h3>
<h3>{crcode}</h3>
<TextField sx={{minWidth:600,ml:0}}
    id="outlined-multiline-static"
    label="Reason"
    multiline
    rows={4}
    // onChange={(e)=>{setReportBody(e.target.value)}}
    // defaultValue="Default Value"
  />

<button onClick={(e)=>{Refund(probid)
setcrstatus('resolved')}}>Refund</button>

</Card>}
          
            

            
            
            </Box>


      </Stack>

        </Box>
        




       
      </Stack>

        





   </div>
    

  );
}

export default AdminViewProbs;