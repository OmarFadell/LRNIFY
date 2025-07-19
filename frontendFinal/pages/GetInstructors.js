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

const GetInstructors = () => { 
    const [instructors,setInstructors] = useState([]);
    
    const getInstructors =  async () => {
         await axios.get('http://localhost:4000/api/Instructor').then(
        (res) => { 
            const instructors = res.data
            console.log(instructors)
            setInstructors(instructors)
            
        }
         );
    }

    return(

        // visualize authors in a table map over authors
        <div className="InstructorsList">
            <Box sx={{marginBottom: 2}}>
            <Button variant="contained"
            onClick={getInstructors}
            margin="normal"
            padding="normal"
            >Load Instructors</Button>
            {/* margin */}
            </Box>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">usserId</StyledTableCell>
            <StyledTableCell align="center">username</StyledTableCell>
            <StyledTableCell align="center">country</StyledTableCell>
            <StyledTableCell align="center">rating</StyledTableCell>
            <StyledTableCell align="center">email</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {instructors.map((instructor) => (
            <TableRow
            hover
            sx={{
                "&:hover":{
                cursor: "pointer",
                backgroundColor: "#f5f5f5",
                width: "100%"
                }
            }}
            onClick={() => window.location.href=`/inspg?instructorId=${instructor._id}`}
              key={instructor._id}

              >
              <TableCell align="center">{instructor.usserId}</TableCell>
              <TableCell align="center">{instructor.username}</TableCell>
              <TableCell align="center">{instructor.country}</TableCell>
              <TableCell align="center">{instructor.rating}</TableCell>
              <TableCell align="center">{instructor.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          
        </div>
                



            


        )
    }
    export default GetInstructors;