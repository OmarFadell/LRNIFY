import { useState } from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useEffect, useRef} from "react";
import axios from 'axios';
import { ListItem,List, TextField } from '@mui/material';


const ReviewCourse = () => {
    const [Code, setCode] = useState('')
    const [comment, setComment] = useState('')
    const [rating, setRating] = useState('')
    const [instructor, setInstructor] = useState('')
    const [error, setError] = useState(null)
    const [courses,setCourses] = useState([])
    const [courseId, setCourseId] = useState()
    const[discpercent,setdiscpercent] = useState()
    const[discDuration,setDiscDuration] = useState()

    const id = useRef('')

    async function postDisc(){
      const res = await axios.post(`http://localhost:4000/api/courses/discount?courseId=${courseId}`, {percentage:discpercent,duration:discDuration, courseId:courseId,discountAdder:'Admin'});
      console.log(res);
      // setOpenDisc(false)
  }
  const creds = window.localStorage.getItem('credentials');
  

    const handleSubmit = async (e) => {
        e.preventDefault()
        const review={Code,comment,rating,instructor}

        const response = await fetch('/api/courses/review', {
            method: 'POST',
            body: JSON.stringify(review),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          const json = await response.json()
          if (!response.ok) {
            setError(json.error)
          }
          if (response.ok) {
            setError(null)
            setCode('')
            setComment('')
           // setCommentId('')
            setRating('')
            setInstructor('')

            console.log('new course review added:', json)
          }
        }
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
          setCode(event.target.value)
          //console.log(event.currentTarget.getAttribute("data--name"))
          console.log(instructor)
           
          

        };

        return (

            

            <List>

            <ListItem>
            <label>Course Code:</label>
              <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">select instructor</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Code}
                label="select instructor"
                onChange={handleChange}
              >
          {courses.map((course) => (
            
            <MenuItem value={course._id} onClick={(e)=>{setCourseId(course._id)
              console.log(course._id)
            }} > {course.Code}</MenuItem>
            

                ))};
            </Select>
          </FormControl>
        </Box>
            </ListItem>
            <ListItem>
            < TextField sx={{minWidth:150,ml:2}} id="outlined-basic" label="Discount" variant="outlined" type='number' onChange={(e)=>{setdiscpercent(e.target.value)}} /> 

            </ListItem>
            <ListItem>
            < TextField sx={{minWidth:150,ml:2}} id="outlined-basic" label="Duration" variant="outlined" onChange={(e)=>{setDiscDuration(e.target.value)}}  /> 

            </ListItem>
              <ListItem>
                <button onClick={(e)=>{postDisc()}}>submit</button>
              </ListItem>


            </List>
              
          )
        }
        
        export default ReviewCourse
