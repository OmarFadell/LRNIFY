import Adminform from "../Adminform"
import Instructorform from "../Instructorform"
import CopTrainee from"../CopTraine"
import { Link } from 'react-router-dom';
import {Component} from 'react';
import { Button } from "@mui/material";
import 'react-dropdown/style.css';
import {variables} from '../Variables'
import { Box } from "@mui/material";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useEffect } from "react";
import axios from "axios";
import ReviewCourse from "./ReviewCourse";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Card} from "@mui/material";
//import './Adminhome.css'
const AdminHome=()=>{

        const[pagenum,setPagenum] = useState(-1)
        const[courses,setCourses] = useState([])
        const[courseId,setCourseId] = useState()
        useEffect(()=> {
            axios.get('http://localhost:4000/api/courses/getAll').then(res => {
                console.log(res)
                const courses = res.data
                setCourses(courses)
          })
  
          },{});

          const handleChange = (event) => {
            //const name = event.target.getAttribute("name");
            console.log(event.target.value)
            setCourseId(event.target.value)
            //console.log(event.currentTarget.getAttribute("data--name"))
            // console.log(instructor)
             
            
  
          };
       

    return (
        <div >
            <h1>Welcome</h1>

            <div>
            {/* <h1 style={{fontFamily:'PT Sans', fontWeight:'400', color:'blue'}} >  */}

            <List>
          <ListItem disablePadding>
                    <Button size="small" sx={{fontSize:20,alignSelf:'center'}} onClick={(e) => {setPagenum(0)}}>Add new admin</Button>
            
          </ListItem>
          <ListItem disablePadding>
                    <Button size="small" sx={{fontSize:20,alignSelf:'center'}} onClick={(e) => {setPagenum(1)}}>Add new instructor</Button>
            
          </ListItem>
          <ListItem>
                    <Button size="small" sx={{fontSize:20,alignSelf:'center'}} onClick={(e) => {setPagenum(2)}}>Add new corporate student</Button>

          </ListItem>
          <ListItem>
                    <Button size="small" sx={{fontSize:20,alignSelf:'center'}} onClick={(e) => window.location.href=`/adminprobs`}>Reports</Button>

          </ListItem>
          <ListItem>
                    <Button size="small" sx={{fontSize:20,alignSelf:'center'}}  onClick={(e) => {setPagenum(3)}} >Define Discount</Button>

          </ListItem>
        </List>

                    
                
                    {/* <Button size="small" onClick={handleAdmin()}>hi</Button>
                    <Button size="small" onClick={handleAdmin()}>hi</Button> */}


        {/* </h1> */}

        </div>

        <div style={{marginTop:30}}>


            
                <Box sx={{ml:30}}>

                {pagenum == 0 && <Adminform/>}
                {pagenum == 1 && <Instructorform/>}
                {pagenum == 2 && <CopTrainee/>}
                {pagenum == 3 && <div>
                    <Card sx={{ minWidth: 600, minHeight:500, boxShadow: 4, alignItems:'center' }} className='login'>
                    <ReviewCourse/>
                    
                    
                    </Card>
                    
                    
                    
                    
                    </div>}

                </Box>

            


                </div>
            
            {/* <td>
           
                                        
                                            <Link to={`/AdminReport/`}> Reports </Link>
                                        </td>
                                        */}
        </div>

    )
}

export default AdminHome