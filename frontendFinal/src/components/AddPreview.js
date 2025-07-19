import React, { Component, useState } from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';  
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';


const AddPreview = () => {
  

        const [active,setActive] = useState(false);
    

        return (
            <div>

            <Box sx={{marginBottom: 2}}>
            <Button variant="contained"
            onClick={() => setActive(true)}
            margin="normal"
            padding="normal"
            >Add/Change Preview Video</Button>
            {/* margin */}
            </Box>


                <form>
                
        { active == true && <TextField
          id="outlined-helperText"
          label="Preview Video Link"
          defaultValue=""
          helperText="Insert a Youtube Video link"
        /> }
                </form>
            </div>
        )
    
}

export default AddPreview