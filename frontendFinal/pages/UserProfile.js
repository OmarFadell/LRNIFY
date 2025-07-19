import * as React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import './CoursePage.css';
import Addpreview from '../AddPreview.js'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';  
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import TextField from '@mui/material/TextField';
import ReactPlayer from 'react-player'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import InsPageHeader from '../InsPageHeader';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { CustomButton } from '../CustomButton';
import './Navbar.css';
import AddIcon from '@mui/icons-material/Add';
import CardMedia from '@mui/material/CardMedia';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TraineePageHeader from '../TraineePageHeader';
import { Stack } from '@mui/system';
import ResetPassword from '../logins/ResetPassword';
//--------------------------------------------------------------
// import EnhancedTable from './UserProfileReport';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// import cover from './HTML5.jpg'
const { useState,useEffect } = require("react");

const params = new URLSearchParams(window.location.search);
const traineeId = params.get('traineeId');

//import 'bootstrap/dist/css/bootstrap.min.css';
//import { set } from 'mongoose';

const UserProfile = () => {
    const params = new URLSearchParams(window.location.search);
    const userid = params.get('traineeId');
    const [tabnum,setTabnum] = useState(0)
    const [courses,setCourses] = useState([])
    const[reports,setreports]=useState()

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontFamily:'PT Sans',
        fontSize:20
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        backgroundColor: theme.palette.common.white,
        fontFamily:'PT Sans',
        fontSize:20
      },
    }));
    
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
        backgroundColor: 'white',
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0,
      },
    }));
    




    
    const Modalstyle = {
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
    
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    // const handletitle= (e) =>{
        
    //     // console.log(e.target.value);
    //     setCourseTitle(e.target.value);
    //   }
    
    
  

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
          color: '#000000',
        },
        '& .MuiRating-iconHover': {
          color: '#D8D8D8',
        },
      });


  

        useEffect(() => {

          axios.get(`http://localhost:4000/api/reportStudent/getAllbyCreator?CreatorId=${traineeId}`).then(res => {
                  // console.log(code)
                  const reviews = res.data
                  // console.log(quesitons)
                  setreports(reviews)
                  console.log('beye7sal ya rayes')
                
              })
              .catch(err => {
                  console.log(err)
              })
      
      
          axios.get('http://localhost:4000/api/trainee/getTraineeByID', {params: {
            traineeId: traineeId
        
          }}).then(res => {
                  const info = res.data
                  console.log(info)
                  //  setWallet(res.data.wallet)
                  // setPersonalInfo(info)
                  }).catch(err => {
                      console.log(err)
                  })


                  axios.get(`http://localhost:4000/api/registeredCourse/getCoursesByTrainee?TraineeId=${traineeId}`).then(res => {
                            
                  console.log(res.data)
  
                  setCourses(res.data)
                  
              })
              .catch(err => {
                  console.log(err)
              })       
          },[]);



        
        
        const Item = styled(Paper)(({ theme }) => ({
            backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            ...theme.typography.body2,
            // padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
          }));

        
  

      
        
        
        
        return(
            
            
            <body>
            <TraineePageHeader/>
          
            <Stack direction="row" spacing={2}  divider={<Divider orientation="vertical" flexItem />} >

              <Box sx={{minHeight:1000,ml:10,mr:10}}>

              <List>
                  <ListItemButton onClick={(e)=>{setTabnum(0)}} selected={tabnum==0 ? true : false}>
                  <h1 style={{fontWeight:400,marginRight:2}}>My courses</h1>
                  </ListItemButton>
                  <ListItemButton onClick={(e)=>{setTabnum(1)}} selected={tabnum==1 ? true : false}>
                  <h1 style={{fontWeight:400,marginTop:-10}}>Security</h1>
                  </ListItemButton>
                  <ListItemButton onClick={(e)=>{setTabnum(2)}} selected={tabnum==1 ? true : false}>
                  <h1 style={{fontWeight:400,marginTop:-10}}>Reports</h1>
                  </ListItemButton>
                  

              </List>

              </Box>

              {tabnum==0 && <Box sx={{ml:50,mt:35}}>
                        
                        <Grid container rowSpacing={3} columnSpacing={10} sx={{ml:10,mt:5}}
                        
                                direction="row"
                                justifyContent="left"
                                alignItems="left">
                            {courses.map(
                                dep=> (
                                    
                                    <Grid item rowSpacing={10} >
                                    <Card  sx={{ minWidth:370, minHeight:330 ,maxWidth: 370, maxHeight:330, boxShadow:4,backgroundColor:'#6C63F4',borderColor:'white' }} onMouseEnter={(e)=>{console.log('hena')}}  key={dep._id} onClick={(e) => window.location.href=`/coursePage?courseId=${dep.CourseId}`}>
                           
                           <CardContent>
                               <Typography gutterBottom sx={{fontFamily:'PT Sans',fontWeight:700,fontSize:30,textAlign:'left',mt:10,color:'white'}} component="div">
                               {dep.CourseName}
                               </Typography>
                              
                              
                           </CardContent>
                           <CardActions>
                               {/* <Button size="small">Share</Button> */}
                                {/* <Button sx={{position:'fixed',mb:2,mt:7}} size="small">Learn More</Button>  */}
                           </CardActions>
                           </Card>
                            
                            </Grid>
                                         
                                        ))} 

</Grid>

              

              </Box>}

              { tabnum == 1 &&
                  <Box>
                    <h1 style={{marginLeft:-400,marginTop:100}}>Reset Password</h1>
                    <Box sx={{ml:20,mt:10}}>
                      <Link to='/' onClick={(e)=>{ window.location.href=`/resetpassword?userid=${userid}`}}>
                       <CustomButton className = 'btns' 
                buttonStyle = 'btn--signin'
                buttonSize= 'btn--largesignin'
                // onClick={changepassword}
                >
                Reset password
                </CustomButton>   
                </Link>
                </Box>



                  </Box>

              }

                { tabnum == 2 &&
                  <Box>
                   
                   <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 1500,minHeight:400,marginTop:5 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align="left">Course code</StyledTableCell>
            <StyledTableCell align="left">Report body</StyledTableCell>
            <StyledTableCell align="left">Report type</StyledTableCell>
            <StyledTableCell align="left">Seen</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reports.map((row) => (
            <StyledTableRow key={row._id}>
             
              <StyledTableCell align="left">{row.title}</StyledTableCell>
              <StyledTableCell align="left">{row.CourseCode}</StyledTableCell>
              <StyledTableCell align="left">{row.body}</StyledTableCell>
              <StyledTableCell align="left">{row.reportType}</StyledTableCell>
              <StyledTableCell align="left">{row.seen}</StyledTableCell>
              <StyledTableCell align="left">{row.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


                  </Box>

              }
              









            </Stack>
   

            
           

            

           
    






            

</body>
       )
   


}

export default UserProfile;