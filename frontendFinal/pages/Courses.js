import axios from 'axios';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';  
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PostRequest from "../PostRequest";
import React, {useEffect} from "react";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
const { useState } = require("react");

const Courses = () => { 
    const [courses,setCourses] = useState([]);
    const params = new URLSearchParams(window.location.search);
    const instructorId = params.get('instructorId');
    console.log(instructorId);

   
    useEffect(() => {
        axios.get(`http://localhost:4000/api/courses/getbyins?instructorId=${instructorId}`).then(res => {
            
            const courses = res.data
            console.log(courses)
            setCourses(courses)
        })
        .catch(err => {
            console.log(err)
        })
    },[]);

    return(
        <div className="CoursesList">
            {/* <Box sx={{marginBottom: 2}}>
            <Button variant="contained"
            onClick={getCourses}
            margin="normal"
            padding="normal"
            >Load Courses</Button>
            {/* margin */}
            {/* </Box>  */}
                      
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Code</StyledTableCell>
            <StyledTableCell align="center">Title</StyledTableCell>
            <StyledTableCell align="center">Total Hours</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center">Course Outline</StyledTableCell>
            <StyledTableCell align="center">Preview Video</StyledTableCell>
            <StyledTableCell align="center">noOfViews</StyledTableCell>
            <StyledTableCell align="center">noOfBuyers</StyledTableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((course) => (
            <TableRow
            hover
            sx={{
                "&:hover":{
                cursor: "pointer",
                backgroundColor: "#f5f5f5",
                width: "100%"
                }
            }}
             onClick={() => window.location.href=`/coursePage?courseId=${course._id}`}
              key={course._id}

              >
              <TableCell align="center">{course.Code}</TableCell>
              <TableCell align="center">{course.title}</TableCell>
              <TableCell align="center">{course.totalHours}</TableCell>
              <TableCell align="center">{course.price}</TableCell>
              <TableCell align="center">{course.courseOutline}</TableCell>
              <TableCell align="center">{course.previewVideo}</TableCell>
              <TableCell align="center">{course.noOfViews}</TableCell>  
              <TableCell align="center">{course.noOfBuyers}</TableCell>  
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <h1> insert new Course:</h1>
          <PostRequest/>
        </div>

    )



}


export default Courses;


