import { useState } from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useEffect} from "react";
import axios from 'axios';


const RateInstructor = () => {
    const [comment, setComment] = useState('')
    const [rating, setRating] = useState('')
    const [instructorUsername, setInstructorUsername] = useState('')
    const [error, setError] = useState(null)
    const [instructors, setInstructors]=useState([])
    const [userAnswer, submitAnswer] = useState([]);
    const [data, setData] = useState([]);
    const [answerAvailable, changeAnswerState] = useState(false);
    const [answers, setAnswers] = useState({});
    let [grade, setGrade] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const review={instructorUsername,comment,rating}

        const response = await fetch('/api/instructor/instructorReview', {
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
            setComment('')
            setRating('')
            setInstructorUsername('')

            console.log('new Instructor review added:', json)
          }
        }

        useEffect(()=> {
          axios.get('http://localhost:4000/api/Instructor').then(res => {
              console.log(res)
              const instructors = res.data
              setInstructors(instructors)
        })

        },{});

        const handleChange = (event) => {
          setInstructorUsername(event.target.value);
          console.log(instructorUsername)
        };


        return (

            <form className="create" onSubmit={handleSubmit}> 
              <h3>Add Your Instructor's Rating and Review</h3>
                   
        
              <label>Review:</label>
              <input 
                type="String" 
                onChange={(e) => setComment(e.target.value)} 
                value={comment}
              />
        
              <label>Rating:</label>
              <input 
                type="number" 
                onChange={(e) => setRating(e.target.value)} 
                value={rating} 
              />

            <label>Instructor Username:</label>
            <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">select instructor</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={instructorUsername}
                label="select instructor"
                onChange={handleChange}
              >
          {instructors.map((instructor) => (

            <MenuItem value = {instructor._id}> {instructor.username}</MenuItem>

                ))};
            </Select>
          </FormControl>
        </Box>
        
              <button>Add Instructor Feedback</button>
              {error && <div className="error">{error}</div>}
            </form>
          )
        }
        
        export default RateInstructor
