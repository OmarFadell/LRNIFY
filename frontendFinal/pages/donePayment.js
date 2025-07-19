import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState} from 'react';
import axios, * as others from 'axios';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { CustomButton } from '../CustomButton';
import MenuItem from '@mui/material/MenuItem';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Modal from '@mui/material/Modal';
import Select from '@mui/material/Select';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


// export default function BasicCard() {
 function DonePayment() {
    


  return (
    <Card sx={{ minWidth: 1200, minHeight:700, boxShadow: 4, alignItems:'center' }} className='login'>

      <Box>
      <CheckCircleOutlineIcon sx={{color:'green',fontSize:300,ml:56,mt:10}}/>
      <h1 style={{color:'green',fontSize:60,marginTop:-10}}>Payment Successful!</h1>
      <h1 style={{color:'grey',fontSize:30,marginTop:-30}}>Begin your learning journey now!</h1>
      <Box sx={{ml:39,mt:10}}>
      <CustomButton className = 'btns' 
                buttonStyle = 'btn--beginnow'
                buttonSize= 'btn--largelogin'
                 onClick={(e)=>{window.location.href=`/`}}
                >
                Proceed
                </CustomButton>
                </Box>
      </Box> 
      
      

      
    </Card>

    

  );
}

export default DonePayment;