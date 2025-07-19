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
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search'
import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
const { useState,useEffect } = require("react");



//import 'bootstrap/dist/css/bootstrap.min.css';
//import { set } from 'mongoose';

const Instructorpg = () => {
    const params = new URLSearchParams(window.location.search);
    const instructorId = params.get('instructorId');
    console.log(instructorId);
    const[usserId, setUsserId] = useState("");
    const[username, setUsername] = useState("");
    const[Country, setCountry] = useState("");
    const[rating, setRating] = useState("");
    const[password, setpassword] = useState("");
    const[biography, setbiography] = useState("");
    const[email, setEmail] = useState("");
    const[active, setActive] = useState(false);
    const[activeEmail, setActiveEmail] = useState(false);
    const[ratings, setRatings] = useState([]);
    const[click, setClick] = useState(false);
    const[button, setButton] = useState(true);
    const [open, setOpen] = React.useState(false);
    const [Eopen, setEOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [countries,setCountries]= useState([]);
    const [search,setSearch] = useState('')
    const [goToLink,setGoToLink] = useState('')
    const[courses,setCourses] = useState([])
    // const[toggleCourses,setToggleCourses] = useState(false)
    const[newCourse,setNewCourse] = useState(false)
    const[macHeight,setMacHeight] = useState()
    const [subtitles, setsubtitles] = useState('')
    const [totalHours, settotalHours]= useState()
    const [price, setprice] = useState()
    const [Code, setCode] = useState('')
    const [CourseTitle, setCourseTitle] = useState("")
    const [courseId,setcourseId]= useState('')
    const [exercisesDetails, setexercisesDetails] = useState('0')
    const [courseOutline, setcourseOutline] = useState('')
    const [previewVideo, setpreviewVideo] = useState('0')
    const [noOfViews, setnoOfViews] = useState(0)
    const [noOfBuyers, setnoOfBuyers] = useState(0)
    const [instructor, setinstructor] = useState(instructorId)
    const [TogCourses,setTogCourses] = useState(false)
    const [TogRating,setTogRating] = useState(true)
    const [TogExams,setTogExams] = useState(false)
    const [Exams,setExams] = useState([])
    const [ExamId,setExamId] = useState('')
    const [ExamCourseCode, setExamCourseCode ] = useState('')
    const [ExamYear, setExamYear] = useState()
    const [ExamTitle,setExamTitle] = useState('')
    const [searchterm,setSearchTerm] = useState('')
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const [sort,setSort] = useState()
    const openMenu = Boolean(anchorEl);
    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
      setAnchorEl(null);
    };

    const handleChange = event => {
      setSearch(event.target.value);
      console.log(search)
      // window.location.href=`?search=${search}`
    }



    function toggleCourses(){
        setTogCourses(true)
        setTogRating(false)
        setTogExams(false)
    }
    
    function toggleRating(){
        setTogCourses(false)
        setTogRating(true)
        setTogExams(false)
    }
    
    function toggleExams(){
        setTogCourses(false)
        setTogRating(false)
        setTogExams(true)
    }
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
    function AddNew(){
        if (newCourse == false){
            setOpen(true)
            setNewCourse(true)
            
        } else{
            setNewCourse(false)
            
        }
    }
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleEClose = () => setEOpen(false);

    const handletitle= (e) =>{
        
        // console.log(e.target.value);
        setCourseTitle(e.target.value);
      }
    
    async function postCourse(){
        // e.preventDefault()
        setOpen(false)
        setNewCourse(false)
    console.log("instructorId:"+instructorId)
 
    const course = {totalHours:totalHours,rating:0, price:price,title:CourseTitle, Code:Code, courseOutline:courseOutline, previewVideo:previewVideo, noOfViews:0, noOfBuyers:0, instructor:instructorId,published:false}
    console.log(course);
    const response = await fetch('http://localhost:4000/api/courses/', {
      method: 'POST',
      body: JSON.stringify(course),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

   setOpen(false)

  }

  async function postExam(){
    // e.preventDefault()
        setOpen(false)
        setNewCourse(false)
    console.log("instructorId:"+instructorId)

    const Exam = {examId:ExamId,instructorId:instructorId, courseCode:ExamCourseCode,year:ExamYear, examTitle:ExamTitle}
    console.log(Exam);
    const response = await fetch('http://localhost:4000/api/exam/createEx', {
      method: 'POST',
      body: JSON.stringify(Exam),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()



}

    async function searchCourse(){

      axios.get(`http://localhost:4000/api/courses/getByTitleAndInstructor?instructorId=${instructorId}&title=${searchterm}`).then(res => {
            
      const courses = res.data
      console.log(courses)
      setCourses(courses)
  })
  .catch(err => {
      console.log(err)
  })
}

  async function searchAsc(){

    axios.get(`http://localhost:4000/api/courses/getCoursesbyPriceAndInsAsc?instructorId=${instructorId}`).then(res => {
          
    const courses = res.data
    console.log(courses)
    setCourses(courses)
})
.catch(err => {
    console.log(err)
})
  }


async function searchDec(){

  axios.get(`http://localhost:4000/api/courses/getCoursesbyPriceAndInsDec?instructorId=${instructorId}`).then(res => {
        
  const courses = res.data
  console.log(courses)
  setCourses(courses)
})
.catch(err => {
  console.log(err)
})
      


    }


    

  

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
          color: '#000000',
        },
        '& .MuiRating-iconHover': {
          color: '#D8D8D8',
        },
      });


  

        useEffect(() => {
            axios.get(`http://localhost:4000/api/Instructor/getInstructorbyId?instructorId=${instructorId}`).then(res => {
                console.log(res)
                setUsserId(res.data.usserId);
                setUsername(res.data.username);
                setCountry(res.data.country);
                setRating(res.data.rating);
                setbiography(res.data.biography);
                setEmail(res.data.email);
                setpassword(res.data.password);
                }).catch(err => {
                    console.log(err)
                })
                axios.get(`http://localhost:4000/api/exam/getExamsByIns?instructorId=${instructorId}`).then(res => {
            
                const Exams = res.data
                console.log(Exams)
                setExams(Exams)
            })
            .catch(err => {
                console.log(err)
            })
            axios.get(`http://localhost:4000/api/courses/getbyins?instructorId=${instructorId}`).then(res => {
            
            const courses = res.data
            console.log(courses)
            setCourses(courses)
        })
        .catch(err => {
            console.log(err)
        })

            axios.get(`http://localhost:4000/api/Instructor/GetInstructorReviews?instructorUsername=${instructorId}`).then(res => {
                const ratings = res.data;    
                setRatings(ratings);
                console.log(res.data);
        
                }).catch(err =>{
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
        
          // return focus to the button when we transitioned from !open -> open
          const prevOpen = React.useRef(open);
          React.useEffect(() => {
            if (prevOpen.current === true && open === false) {
              anchorRef.current.focus();
            }
        
            prevOpen.current = open;
          }, [open]);
        
          const handleClick = () => setClick(!click);
        
          const closeMobileMenu = () => setClick(false);
        
          const showButton = () => {
            if(window.innerWidth <= 960){
              setButton(false);
            } else{
              setButton(true);
            }
          };
        
          useEffect(() => {
            showButton()
          }, [])
          window.addEventListener('resize', showButton);
        
        
        

      
        
        
        
        return(
            
            
            <body>
            <InsPageHeader/>
           {/* ///////////////////////////////////////////// NAVIGATION //////////////////////////////////////////////////////////// */}
           <>
           <nav className='navbar1'>
            <div className='navbar-container'>
            
                
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                
                <li className='nav-item1'>
                  
                <button onClick={(e)=>{toggleCourses()}} className='nav-links1'>Courses</button>
                </li>
                

                  <li className='nav-item'>
                  <button className='nav-links1' onClick={(e)=>{toggleRating()}}>Reviews</button>
                </li>
                
                <li className='nav-item'>
                <button className='nav-links1' onClick={(e)=>{toggleExams()}}>Exams</button>
                </li>
                
                </ul>
               {TogCourses==true && 
               <div >
                <Button sx={{mr:10,fontFamily:'PT Sans',fontWeight:700,fontSize:20,mt:0.3,color:'#6C63F4'}}
            id="basic-button"
            aria-controls={openMenu ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? 'true' : undefined}
            onClick={handleMenuClick }
          >
            Sort
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleMenuClose }
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem sx={{fontFamily:'PT Sans',fontWeight:700,fontSize:20,mt:0.3, color:'black'}} onClick={(e)=>{setAnchorEl(null)
            searchAsc()
            
            
            }  }>Ascending</MenuItem>
            <MenuItem sx={{fontFamily:'PT Sans',fontWeight:700,fontSize:20,mt:0.3, color:'black'}} onClick={(e)=>{setAnchorEl(null)
            searchDec()}  }>Descending</MenuItem>
            
          </Menu>
               <OutlinedInput
            id="outlined-adornment-weight"
            style= { {borderRadius: 60} }
            sx={{mr:-75,minWidth:600}}
            onChange = {(e)=>{
              setSearchTerm(e.target.value)}}
            value={searchterm}
            endAdornment={<InputAdornment position="end"><button className='button' onClick={(e) => {searchCourse()}}><SearchIcon/></button></InputAdornment>}
            />
            
            </div>
          
          }

          {TogCourses==true && 
          
          <div >
          
        </div>
          
          
          }
                

                <div>
        
        
      </div>

            </div>


        </nav>
     
    
    </>
    {/* ///////////////////////////////////////////// NAVIGATION //////////////////////////////////////////////////////////// */}
    

    {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

    {TogCourses==true && <div>
      
          <Box sx={{ml:50,mt:15}}>
                        
                        <Grid container rowSpacing={3} columnSpacing={10} 
                        
                                direction="row"
                                justifyContent="left"
                                alignItems="left">
                            {courses.map(
                                dep=> (
                                    
                                    <Grid item rowSpacing={10} >
                                    <Item >
                                            
                        <Card  sx={{ minWidth:345, minHeight:390 ,maxWidth: 345, maxHeight:390, boxShadow:2 }}   key={dep._id} onClick={(e) => {window.location.href=`/instructorCoursePage?courseId=${dep._id}&pub=${dep.published}`}}>
                            {/* <CardMedia
                                sx={{ minHeight: 140 }}
                                image='hi'
                                title="green iguana"
                            /> */}
                            <CardContent>
                            <Typography gutterBottom variant="h5" sx={{mt:4}} component="div">
                                {dep.Code}
                                </Typography>
                                <Typography gutterBottom variant="h5" sx={{mt:0}} component="div">
                                {dep.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {dep.courseOutline}
                                </Typography>
                                <Typography variant="h6" color="text.primary">
                                {dep.totalHours} hours | <StyledRating 
                                style={{marginTop:'0.2rem',fontSize:'20px'}}
                                            name="customized-color"
                                            readOnly
                                            value={dep.rating}
                                            precision={1}
                                            icon={<StarIcon fontSize="inherit" />}
                                            emptyIcon={<StarIcon fontSize="inherit" />}
                                    
    
                                        />
                                </Typography>
                                <Typography variant="h6" sx={{mt:0}} color="text.primary">
                                Number of Views: {dep.noOfViews}
                                </Typography>
                                <Typography variant="h6" sx={{mt:0}} color="text.primary">
                                Number of Buyers: {dep.noOfBuyers}
                                </Typography>
                                <Typography variant="h6" sx={{mt:0}} color="text.primary">
                                Price: {dep.price}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                {/* <Button size="small">Share</Button> */}
                                 {/* <Button sx={{position:'fixed',mb:2,mt:7}} size="small">Learn More</Button>  */}
                            </CardActions>
                            </Card>
                            </Item>
                            
                            </Grid>
                                         
                                        ))} 
                                            <Grid item rowSpacing={10} >
                                    <Item >
                                            
                        <Card  sx={{ minWidth:345, minHeight:390 ,maxWidth: 345, maxHeight: macHeight, boxShadow:2 }}   >
                            {/* <CardMedia
                                sx={{ minHeight: 140 }}
                                image='hi'
                                title="green iguana"
                            /> */}
                            {newCourse==false && <CardContent>
                                
                                <Button size='small' onClick={(e)=>AddNew()} ><AddIcon sx={{fontSize:200,color:'purple'}} /></Button>
                             
                                <Typography variant="h4" sx={{mt:2}} color="text.primary">
                                Create new Course
                                </Typography>
                            </CardContent>}
                            
                            </Card>
                            </Item>
                            
                            </Grid>
                                        </Grid>
                                        <Modal
        open={open}
         onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={Modalstyle}>
                                  <Typography variant="h4" sx={{mt:2,ml:5}} color="text.primary">
                                     Create new Course
                                     </Typography>
        <CardContent>

                                
                                <List>
                                  <ListItem>
                                    
                                 
                                  </ListItem>
                                  <ListItem>
                                  <TextField sx={{minWidth:300,ml:0, mt:0}}
                                  //error
                                  id="outlined-error"
                                  label="Title"
                                  defaultValue={CourseTitle}
                                  // helperText="Please Enter a Valid Username"
                                   onChange={(e)=>{setCourseTitle(e.target.value)
                                console.log(CourseTitle)    
                                }}
                              />
                                  </ListItem>
                                  <ListItem>
                                  <TextField sx={{minWidth:300,ml:0, mt:0}}
                                  //error
                                  id="outlined-error"
                                  label="Course Code"
                                  defaultValue={Code}
                                  // helperText="Please Enter a Valid Username"
                                   onChange={(e)=>{setCode(e.target.value)}}
                              />
                                  </ListItem>
                                  <ListItem>
                                  <TextField sx={{minWidth:300,ml:0, mt:0}}
                                  //error
                                  id="outlined-error"
                                  label="Outline"
                                  defaultValue={courseOutline}
                                  // helperText="Please Enter a Valid Username"
                                   onChange={(e)=>{setcourseOutline(e.target.value)}}
                              />
                                  </ListItem>
                                  <ListItem>
                                  <TextField sx={{maxWidth:130,ml:0, mt:0}}
                                  //error
                                  id="outlined-error"
                                  label="Total hours"
                                  defaultValue={totalHours}
                                  // helperText="Please Enter a Valid Username"
                                  onChange={(e)=>{settotalHours(e.target.value)}}
                              />
                              <TextField sx={{maxWidth:150,ml:2, mt:0}}
                                  //error
                                  id="outlined-error"
                                  // type={Number}
                                  label="Price in EGP"
                                  defaultValue={price}
                                  // helperText="Please Enter a Valid Username"
                                  onChange={(e)=>{setprice(e.target.value)}}
                              />
                                  </ListItem>
                                  <ListItem>
                                  <TextField sx={{minWidth:300,ml:0, mt:0}}
                                  //error
                                  id="outlined-error"
                                  label="Preview Video"
                                  defaultValue={previewVideo}
                                  // helperText="Please Enter a Valid Username"
                                   onChange={(e)=>{setpreviewVideo(e.target.value)}}
                              />
                                  </ListItem>
                                  
                                
                                </List>
                              <CardActions>
                                  <Button size="small" onClick={(e)=>{
                                  postCourse()}} sx={{ml:12,mb:1,mt:-2}}>Create Course</Button>
                                   {/* <Button sx={{position:'fixed',mb:2,mt:7}} size="small">Learn More</Button>  */}
                              </CardActions>
                              </CardContent>
        </Box>
      </Modal>
          </Box>
    
        </div>}

        {TogRating==true && <div>


            
            {ratings.map((rating) => (


                
            <Card  sx={{ maxWidth:1000 ,minHeight:250 , maxHeight: macHeight, boxShadow:6,ml:60,mt:5,maxHeight:100 }}   >
                            {/* <CardMedia
                                sx={{ minHeight: 140 }}
                                image='hi'
                                title="green iguana"
                            /> */}
                            <CardContent>
                                <List>
                                    <ListItem>
                                    <Typography variant="h4" sx={{mt:-1,fontFamily:'PT Sans',mr:2,fontSize:30}} color="text.primary">
                                        {rating.rating}/5
                                    </Typography>
                                <Typography variant="h4" sx={{mt:-4,fontFamily:'PT Sans'}} color="text.primary">
                                    
                                <StyledRating style={{marginLeft:'0em',marginTop:'2rem',fontSize:'25px'}}
                                    name="customized-color"
                                    readOnly
                                    value={rating.rating}
                                    precision={1}
                                    icon={<StarIcon fontSize="inherit" />}
                                    emptyIcon={<StarIcon fontSize="inherit" />}
                            
                                />
                                </Typography>


                                    </ListItem>

                                    <ListItem>
                                    <Divider />
                                    </ListItem>

                                    <ListItem>
                                    <Typography variant="h4" sx={{mt:0,fontFamily:'PT Sans',mr:2,fontSize:30}} color="text.primary">
                                        {rating.comment}
                                    </Typography>
                                    </ListItem>
                                </List>
                            </CardContent>
                            
                            </Card>
            
                ))}
            
            
            
            
            
            
            
            
            </div>}
            {TogExams==true && <div>
          <Box sx={{ml:50,mt:15}}>
                        
                        <Grid container rowSpacing={3} columnSpacing={10} 
                        
                                direction="row"
                                justifyContent="left"
                                alignItems="left">
                            {Exams.map(
                                dep=> (
                                    
                                    <Grid item rowSpacing={10} >
                                    <Item >
                                            
                        <Card  sx={{ minWidth:345, minHeight:390 ,maxWidth: 345, maxHeight:390, boxShadow:2 }}   key={dep._id} onClick={(e) => window.location.href=`/viewExam?examID=${dep.examId}`}>
                            {/* <CardMedia
                                sx={{ minHeight: 140 }}
                                image='hi'
                                title="green iguana"
                            /> */}
                            <CardContent>
                                <Typography gutterBottom variant="h5" sx={{mt:10}} component="div">
                                {dep.year} {dep.examTitle}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                Course Code: {dep.courseCode}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                ExamID: {dep.examId}
                                </Typography>
                            
                            </CardContent>
                            <CardActions>
                                {/* <Button size="small">Share</Button> */}
                                 {/* <Button sx={{position:'fixed',mb:2,mt:7}} size="small">Learn More</Button>  */}
                            </CardActions>
                            </Card>
                            </Item>
                            
                            </Grid>
                                         
                                        ))} 
                                            <Grid item rowSpacing={10} >
                                    <Item >
                                            
                        <Card  sx={{ minWidth:345, minHeight:390 ,maxWidth: 345, maxHeight: macHeight, boxShadow:2 }}   >
                            {/* <CardMedia
                                sx={{ minHeight: 140 }}
                                image='hi'
                                title="green iguana"
                            /> */}
                            {newCourse==false && <CardContent>
                                
                                <Button size='small' onClick={(e)=>AddNew()} ><AddIcon sx={{fontSize:200,color:'purple'}} /></Button>
                             
                                <Typography variant="h4" sx={{mt:2}} color="text.primary">
                                Create new Exam
                                </Typography>
                            </CardContent>}
                            
                            </Card>
                            </Item>
                            
                            </Grid>
                                        </Grid>
                                        <Modal
        open={Eopen}
         onClose={handleEClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={Modalstyle}>
                                  <Typography variant="h4" sx={{mt:2,ml:5}} color="text.primary">
                                     Create new Exam
                                     </Typography>
        <CardContent>

                                
                                <List>
                                <ListItem>
                                  <TextField sx={{minWidth:300,ml:0, mt:0}}
                                  
                                  id="outlined"
                                  label="Exam title"
                                  defaultValue={ExamTitle}
                                  // helperText="Please Enter a Valid Username"
                                   onChange={(e)=>{setExamTitle(e.target.value)}}
                              />
                                  </ListItem>
                                  <ListItem>
                                  <TextField sx={{minWidth:300,ml:0, mt:0}}
                                  //error
                                  id="outlined-error"
                                  label="ExamID"
                                  defaultValue={CourseTitle}
                                  // helperText="Please Enter a Valid Username"
                                   onChange={(e)=>{setExamId(e.target.value)
                                console.log(CourseTitle)    
                                }}
                              />
                                  </ListItem>
                                  <ListItem>
                                  <Box sx={{ minWidth: 300 }}>
                                  <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">select course code</InputLabel>
                                    <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={ExamCourseCode}
                                      label="select instructor"
                                      onChange={(e)=>{setExamCourseCode(e.target.value)}}
                                    >
                                {courses.map((course) => (

                                  <MenuItem value = {course.Code}> {course.Code}</MenuItem>

                                      ))};
                                  </Select>
                                </FormControl>
                              </Box>
                                  </ListItem>
                                  <ListItem>
                                  <TextField sx={{minWidth:300,ml:0, mt:0}}
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
                                  <Button size="small" onClick={(e)=>{postExam()}} sx={{ml:12,mb:-1,mt:2}}>Create Exam</Button>
                                   {/* <Button sx={{position:'fixed',mb:2,mt:7}} size="small">Learn More</Button>  */}
                              </CardActions>
                              </CardContent>
        </Box>
      </Modal>
          </Box>
    
        </div>}

            
           

            

           
    






            

</body>
       )
   


}

export default Instructorpg;