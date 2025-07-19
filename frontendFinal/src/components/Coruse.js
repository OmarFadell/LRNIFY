import {tsContructorType} from '@babel/types';
import React,{Component} from 'react';
import {variables} from './Variables'
import { useState } from 'react';
// import { Button,ButtonToolbar} from 'react-bootstrap';
import {EditDepModal} from './EditDepModal';
import { Box } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import SearchFilterBar from './SearchFilterBar';
import CardItem from './CardItem';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { styled } from '@mui/material/styles';  
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search'
import OutlinedInput from '@mui/material/OutlinedInput';
import Slider from '@mui/material/Slider';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
export default class Coruse extends Component{
    constructor(props){

        super(props);
        this.state = {
            courses:[],
            subject:"",
            rating:0,
            filterCourseRating :false,
            title:"",
            filterTitle:false,
            filterInstructor:false,
            filterPrice:false,
            reset:true,
            price:0,
            instructor:"",
            editModalShow:false,
            filterbyMostViewed:false,
            params : "",
            instructorId : "",
            StyledRating: ""

            // const params = new URLSearchParams(window.location.search);
            // const courseId = params.get('courseId');

        }
    }
    refreshList(){
        
        const params = new URLSearchParams(window.location.search);
        const search = params.get('search');
        console.log(search)

        if (this.state.filterInstructor)
        {
            
           
                this.setState({

                    filterInstructor:false
                });
            
                fetch(variables.API_URL+'courses/filterCourseInstructor',
                    {
                        
                        method:'POST',
                        headers:{
                            'Accept':'application/json',
                            'Content-Type': "application/json; charset=utf-8",
                        },
                        body:JSON.stringify({
                            instructor:this.state.instructor,
                        })
                    })
                    .then(res=>res.json())
                    .then((result)=>{
                        this.setState({courses:result});

                    },(error)=>{
                        alert('Failed');
                    })
                    ;
                    console.log('filterd');
            }
            else if(this.state.filterPrice)
            {
                this.setState({
                    filterPrice:false
                });

                fetch(variables.API_URL+'courses/filterCoursePrice',
                    {
                        
                        method:'POST',
                        headers:{
                            'Accept':'application/json',
                            'Content-Type': "application/json; charset=utf-8",
                        },
                        body:JSON.stringify({
                            price:this.state.price,
                        })
                    })
                    .then(res=>res.json())
                    .then((result)=>{
                        this.setState({courses:result});

                    },(error)=>{
                        alert('Failed');
                    })
                    ;
                    console.log('filterd');
            }
            else if(this.state.filterTitle)
            {
                this.setState({
                    filterTitle:false
                });

                fetch(variables.API_URL+'courses/filterCourseTitle',
                    {
                        
                        method:'POST',
                        headers:{
                            'Accept':'application/json',
                            'Content-Type': "application/json; charset=utf-8",
                        },
                        body:JSON.stringify({
                            title:this.state.title,
                        })
                    })
                    .then(res=>res.json())
                    .then((result)=>{
                        this.setState({courses:result});

                    },(error)=>{
                        alert('Failed');
                    })
                    ;
                    console.log('filterd');
            }
            else if(this.state.filterCourseRating)
            {
                this.setState({
                    filterCourseRating:false
                });

                fetch(variables.API_URL+'courses/filterCourse',
                    {
                        
                        method:'POST',
                        headers:{
                            'Accept':'application/json',
                            'Content-Type': "application/json; charset=utf-8",
                        },
                        body:JSON.stringify({
                            rating:this.state.rating,
                            subject:this.state.subject
                        })
                    })
                    .then(res=>res.json())
                    .then((result)=>{
                        this.setState({courses:result});

                    },(error)=>{
                        alert('Failed');
                    })
                    ;
                    console.log('filterd');
            }
                            
        else if(this.state.reset){
            fetch(variables.API_URL+'courses/getAll')
            .then(response=>response.json())
            .then(data => {
                this.setState({courses:data});
            });
        }
        else if(this.state.filterbyMostViewed)
        {
            fetch(variables.API_URL+'courses/mostViewedCourses')
            .then(response=> response.json())
            .then(data => {
                this.setState({courses:data});
            } );
        }
    }
    componentDidMount(){
        this.refreshList();
    }
    changeSubject = (e)=>{
        this.setState({subject:e.target.value});
    }
    changeRating = (e)=>{
        this.setState({rating:e.target.value});
    }
    changePrice = (e)=>{
        this.setState({price:e.target.value});
    }
    changeInstructor =(e)=>{
        this.setState({instructor:e.target.value});
    }
    changeTitle =(e)=>{
        this.setState({title:e.target.value});
    }
    addClick(){
        this.setState({
           reset:true,
            instructor:"",
            title:"",
            price:"",
            Rating : "",
            Subject : ""
        },this.refreshList());
        this.refreshList();
        console.log(this.state.rating);
    }
    createClick(){
        this.setState({
            reset:false
        });

        if (this.state.instructor!="")
        {
        this.setState({
            filterInstructor:true
        });
        }else if (this.state.price!="")
        {
            this.setState({
                filterPrice:true
            });
        }
        else if (this.state.title!="")
        {
            this.setState({
                filterTitle:true
            });
        }else if(this.state.rating!="" || this.state.subject!="")
        {
            this.setState({
                filterCourseRating:true
            });
        }
        else {
            this.setState({
             filterbyMostViewed:true
            })
        }

//////
     



//////
        this.refreshList();

        // fetch(variables.API_URL+'Depratment',
        // {
            
        //     method:'POST',
        //     headers:{
        //         'Accept':'application/json',
        //         'Content-Type': "application/json; charset=utf-8",
        //     },
        //     body:JSON.stringify({
        //         subject:this.state.subject
        //     })
        // })
        // .then(res=>res.json())
        // .then((result)=>{
        //     alert(result);
        //     this.refreshList();
        // },(error)=>{
        //     alert('Failed');
        // })
        // ;
    }

    
    filterTitleOrInstructor(){
        const titleVal = this.state.title;
        fetch(variables.API_URL+'courses/getCourseByTitleorInst',
                    {
                        
                        method:'POST',
                        headers:{
                            'Accept':'application/json',
                            'Content-Type': "application/json; charset=utf-8",
                        },
                        body:JSON.stringify({
                            title:this.state.title
                                                })
                    })
                    .then(res=>res.json())
                    .then((result)=>{
                        this.setState({courses:result});

                    },(error)=>{
                        alert('Failed');
                    })
                    ;
        
    }
    render(){

        const {
            deps, CourseID,courseTitle,CoursePrice,
            CourseSubtitles,
            totalHours,
            exercisesDetails,
            courseOutline,
            noOfViews,
            noOfBuyers,            
            courses,
            subject,
            rating,
            modalTitle,
            filterCourseRating,
            title,
            instructor,
            price,
            filterTitle,
            filterInstructor,
            filterPrice,
            editModalShow,
            drawerWidth = 240
        } = this.state; 
        const StyledRating = styled(Rating)({
            '& .MuiRating-iconFilled': {
              color: '#000001',
            },
            '& .MuiRating-iconHover': {
              color: '#123456',
            },
          });
          const Item = styled(Paper)(({ theme }) => ({
            backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            ...theme.typography.body2,
            // padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
          }));
          
       
        let editModalClose=()=>this.setState({editModalShow:false});

        return(
            <>
            






                {/* <SearchFilterBar/> */}
            <div>
                
                    <button type='button' className='btn btn-primary m-2 float-end'
                    
                    onClick={()=>this.addClick()}
                    >
                    reset
                    </button>
<br></br>
                    <span className='input-group-text'>Search With Title or Instructor</span>

                    <input type='text' className='form-control' value={title}
                                        onChange={this.changeTitle}
                                        ></input>
                    <button type='button' className='btn btn-primary m-2 float-end'
                    onClick={()=>this.filterTitleOrInstructor()}
                    >
                    Search
                    </button>

                    <Box>
                        
                    <Grid container rowSpacing={3} columnSpacing={10} 
                    
                            direction="row"
                            justifyContent="center"
                            alignItems="center">
                        {courses.map(
                            dep=> (
                                
                                <Grid item rowSpacing={10} >
                                <Item>
                                        
                    <Card sx={{ minWidth:345, minHeight:390 ,maxWidth: 345, maxHeight:390 }}>
                        <CardMedia
                            sx={{ minHeight: 140 }}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
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
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                        </Card>
                        </Item>
                        </Grid>
                                     
                                    ))} 




                        {/* <Grid item xs={6}>
                        <Item>2</Item>
                        </Grid>
                        <Grid item xs={6}>
                        <Item>3</Item>
                        </Grid>
                        <Grid item xs={6}>
                        <Item>4</Item>
                        </Grid> */}
                    </Grid>
                    

                                    


                    </Box>

                    
              
                    <div className='input-group mb-3'>
                                        <span className='input-group-text'>Subject</span>
                                        <input type='text' className='form-control' value={subject}
                                        onChange={this.changeSubject}
                                        ></input>

                                        <span className='input-group-text'>Rating</span>
                                        <input type='number' min='0' max='5' className='form-control' value={rating}
                                        onChange={this.changeRating}
                                        ></input>
                                        
                                        <span className='input-group-text'>Price</span>
                                        <input type='number' min='0' className='form-control' value={price}
                                        onChange={this.changePrice}
                                        ></input>
                                    
                                        <button type="button" className='btn btn-primary float-start' onClick={()=>this.createClick()}>Filter</button> 
                                        <button type="button" className='btn btn-primary float-start'onClick={()=>this.createClick()} >Most Viewed Courses </button> 


                    </div>
            </div>
            </>
        );
    }
}