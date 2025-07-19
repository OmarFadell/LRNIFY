import React, { Component,useState,useEffect } from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';
import './CoursePage.css';
import Addpreview from '../AddPreview.js'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';  
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import ReactPlayer from 'react-player'
//import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
//import { set } from 'mongoose';
import './InstructorProfile.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Courses from './Courses';


const InstructorProfile = () => { 
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
    

    

    useEffect(()=> {
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

        axios.get(`http://localhost:4000/api/Instructor/GetInstructorReviews?instructorUsername=${instructorId}`).then(res => {
        const ratings = res.data;    
        setRatings(ratings);
        console.log(res.data);

        }).catch(err =>{
            console.log(err)
        })
        },[]);

    async function updateBio(){
        let instructor = {usserId,username,password,Country,rating,biography,email}
        fetch(`http://localhost:4000/api/Instructor/changeBio?instructorId=${instructorId}`,{method: 'PUT',
        body: JSON.stringify(instructor),
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
        }})
        setActive(false);
        setActiveEmail(false);


    }
        return(
            <>
            
            <div class = "header1">
                <h1>{username}</h1>
                {active == false && <p>{biography}</p>}
                {active == true && <TextField
                  id="biography"
                  label="Biography"
                  //defaultValue={biography}
                  helperText="Edit Biography"
                  value={biography}
                  onChange={(e)=> setbiography(e.target.value)}
                  />}
                {active == true && <Button variant="contained"
                onClick={() =>updateBio()}
                margin="normal"
                padding="normal"
                >Submit</Button>  }

                {active == false && <Button variant="contained"
            onClick={() => setActive(true)}
            margin="normal"
            padding="normal"
            >Edit info</Button>
                }
            </div>

            <div class = "info">
                <h2>{Country}</h2>
                <h2>rating: {rating}</h2>
                {activeEmail == true && <TextField
                  id="email"
                  label="E-mail"
                  //defaultValue={biography}
                  helperText="Edit E-mail"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  />}
                   {activeEmail == true && <Button variant="contained"
                onClick={() =>updateBio()}
                margin="normal"
                padding="normal"
                >Submit</Button>  }
                <h2>E-mail: {email}</h2>
                {activeEmail == false && <Button variant="contained"
            onClick={() => setActiveEmail(true)}
            margin="normal"
            padding="normal"
            >Edit Email</Button>
                }


            </div>
            <div className='reviews'>
            <h1>Reviews</h1>
             {/* <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}> */}
      <nav aria-label="main mailbox folders"> 
        <List >

        {ratings.map((rating) => (


          <ListItem>
           

           {rating.comment}
            
           {rating.rating}/5
           
          </ListItem>
 ))}

        </List>
      </nav>
        {/* </Box> */}
            </div>
            <h1>courses</h1>
            <Courses/>
            <Button variant="contained"
            onClick={() => window.location.href=`/Exam3`}
            margin="normal"
            padding="normal"
            >Manage Exams</Button>
            </>
        )

        
    
}
export default InstructorProfile;