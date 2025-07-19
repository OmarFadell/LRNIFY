import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function CustomizedTables() {
  const params = new URLSearchParams(window.location.search);
const traineeId = params.get('traineeId');
  const[reports,setreports]=useState()

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
      
              
            },[]);


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1500,minHeight:800 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align="right">Course code</StyledTableCell>
            <StyledTableCell align="right">Report body</StyledTableCell>
            <StyledTableCell align="right">Report type</StyledTableCell>
            <StyledTableCell align="right">Seen</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reports.map((row) => (
            <StyledTableRow key={row._id}>
             
              <StyledTableCell align="right">{row.title}</StyledTableCell>
              <StyledTableCell align="right">{row.CourseCode}</StyledTableCell>
              <StyledTableCell align="right">{row.body}</StyledTableCell>
              <StyledTableCell align="right">{row.reportType}</StyledTableCell>
              <StyledTableCell align="right">{row.seen}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}