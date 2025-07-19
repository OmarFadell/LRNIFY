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
import { CustomButton } from './CustomButton';
import MenuItem from '@mui/material/MenuItem';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Modal from '@mui/material/Modal';
import Select from '@mui/material/Select';


// export default function BasicCard() {
 function CopTrainee({Login, error}) {
    const [details, setDetails] = useState ({name:"", email:"", password:""});
    const[email, setEmail]= useState("");
    const[password, setPassword]= useState("");
    const [gender, setGender] = useState("");
    const[user, setUser]= useState({name:"", email:""});
    const[fname, setFname]= useState("");
    const[lname, setlname]= useState("");
    const[emailtaken,setEmailTaken] = useState(false)
    const[usertaken,setUserTaken] = useState(false)
    const[username, setUsername]= useState("");
    const[emailP, setEmailP]= useState("");
    const[corp,setCorp] = useState('')
    const [showPassword, setShowPassword] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };



    const [Fempty,setFEmpty] = useState(false);
    const [Lempty,setLEmpty] = useState(false);
    const [Gempty,setGEmpty] = useState(false);
    const [Eempty,setEEmpty] = useState(false);
    const [Uempty,setUEmpty] = useState(false);
    const [Pempty,setPEmpty] = useState(false);
    const [corpEmpty,setCorpEmpty] = useState(false);


    const submitHandler = e =>{
        e.preventDefault();
        Login(details);
    }

      
    const Modalstyle = {
      position: 'absolute' ,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };
    //   const print= async() =>{
    
      //     const res = await axios.post('http://localhost:8000/khalid', {email: emailP});
      //     console.log(res);
      //   }
      
      //   const handlePrint= (e) =>{
    //     console.log(e.target.value);
    //     setEmailP(e.target.value);
    //   }

      const changepasswordpage= async() =>{
    
        window.open('http://localhost:8000/LoginForm', '_blank', 'noopener,noreferrer');

      }
      const handleChange = (event) => {
        setGender(event.target.value);
      };

      const signup= async() =>{

        if (fname.trim().length == 0){
          setFEmpty(true);

        }else{
          setFEmpty(false);
        }
        
        if (lname.trim().length == 0){
          setLEmpty(true);

        } else{
          setFEmpty(false);
        }
        if(gender.trim().length == 0){

          setGEmpty(true);

        } else{
          setGEmpty(false);
        }
        if (corp.trim().length == 0){
          setCorpEmpty(true)
        }else{
          setCorpEmpty(false)
        }
        if (username.trim().length == 0){
            setUEmpty(true);
        } else{
          setUEmpty(false);
        }
        if( email.trim().length == 0){
          setEEmpty(true);
        }else{
          setEEmpty(false);
        }
        if (password.trim().length == 0 ){
          setPEmpty(true);
        } else{
          setPEmpty(false);
        }

        if (Fempty == false && Lempty == false && Gempty == false && Uempty == false && Eempty == false && Pempty == false ){

          const res = await axios.post('http://localhost:4000/api/trainee', {username: username, email: email, password: password, firstName: fname,
        lastName: lname,country:"Egypt", wallet: 0, gender:gender,Type:"corporate",corporateName:corp});
          console.log(res);
          
          if (res.data.message=="email"){
            setEmailTaken(true)
            setEEmpty(false)
          } else if(res.data.message == "username"){
            setUserTaken(true)
            setUEmpty(false)
          }else{
            handleOpen()
          }
        }
    
      }
    

      const handleUsername= (e) =>{
        console.log(e.target.value);
        setUsername(e.target.value);
      }
      const handleEmail= (e) =>{
        console.log(e.target.value);
        setEmail(e.target.value);
      }
      const handlePassword= (e) =>{
        console.log(e.target.value);
        setPassword(e.target.value);
      }
      const handleFirst= (e) =>{
        console.log(e.target.value);
        setFname(e.target.value);
      }
      const handleLast= (e) =>{
        console.log(e.target.value);
        setlname(e.target.value);
      }
      const handleCorp= (e) =>{
        console.log(e.target.value);
        setCorp(e.target.value);
      }


      const style = {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      };

  return (
    <Card sx={{ minWidth: 600, minHeight:500, boxShadow: 4, alignItems:'center' }} className='login'>
       
      <Avatar sx={{ ml: 35, mt:4 , mb:3, bgcolor: 'secondary.main'  }}>
            <GroupAddIcon/>
          </Avatar>
          <Typography component="h1" variant="h4">
            Add new Corporate Student
          </Typography>
          
      <CardContent>
      <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem >
      {Fempty == false && <TextField sx={{minWidth:150,ml:3}} id="outlined-basic" label="First Name" variant="outlined" onChange={handleFirst} />   }
      {Fempty == true &&  <TextField sx={{minWidth:150,ml:3}}
          error
          id="outlined-error"
          label="First name is required"
          defaultValue={fname}
          // helperText="First Name is Required"
          onChange={handleFirst}
        />
       }
      {Lempty == false && < TextField sx={{minWidth:150,ml:2}} id="outlined-basic" label="Last Name" variant="outlined" onChange={handleLast} />  }
      {Lempty == true &&  <TextField sx={{minWidth:150,ml:3}}
          error
          id="outlined-error"
          label="Last Name is required"
          defaultValue={lname}
          // helperText="Last Name is Required"
          onChange={handleLast}
        />
       }
      <FormControl sx={{minWidth:150,ml:2}}>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        {Gempty == false && <Select
        
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          label="Gender "
          onChange={handleChange}
          
        >
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"female"}>Female</MenuItem>
          
        </Select>}
        {Gempty == true && <Select
        error
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={gender}
        label="required"
        onChange={handleChange}
        
      >
        <MenuItem value={"male"}>Male</MenuItem>
        <MenuItem value={"female"}>Female</MenuItem>
        
      </Select>}
      </FormControl>
      </ListItem>
      <ListItem >
      </ListItem>
      <ListItem >
      { Uempty == false && usertaken == false && <TextField sx={{minWidth:500,ml:2, mb:2}} id="outlined-basic" label="Username" variant="outlined" onChange={handleUsername}/>   }
      {Uempty == true &&  <TextField sx={{minWidth:500,ml:2, mb:2}}
          error
          id="outlined-error"
          label="Username is required"
          defaultValue={username}
          // helperText="Please Enter a Valid Username"
          onChange={handleUsername}
        />
       }
       {usertaken == true && <TextField sx={{minWidth:500,ml:2, mb:2}}
          error
          id="outlined-error"
          label="Username is taken"
          defaultValue={username}
          // helperText="Please Enter a Valid Username"
          onChange={handleUsername}
        /> }

      </ListItem>
      {/* <Divider /> */}
      <ListItem  >
      {Eempty == false && emailtaken==false&& <TextField sx={{minWidth:500,ml:2, mb:2}} id="outlined-basic" label="Email" variant="outlined" onChange={handleEmail} />   }
      {Eempty == true &&  <TextField sx={{minWidth:500,ml:2, mb:2}}
          error
          id="outlined-error"
          label="Email is required "
          defaultValue={email}
          // helperText="Please Enter a Valid Email"
          onChange={handleEmail}
        />
       }
       {emailtaken == true && <TextField sx={{minWidth:500,ml:2, mb:2}}
          error
          id="outlined-error"
          label="Email is taken "
          defaultValue={email}
          // helperText="Please Enter a Valid Email"
          onChange={handleEmail}
        /> }
      </ListItem>
      <ListItem>
      {corpEmpty == false && <TextField sx={{minWidth:500,ml:2, mb:2}} id="outlined-basic" label="Corporate name" variant="outlined" onChange={handleCorp} />   }
      {corpEmpty == true &&  <TextField sx={{minWidth:500,ml:2, mb:2}}
          error
          id="outlined-error"
          label="Corporate name is required "
          defaultValue={corp}
          // helperText="Please Enter a Valid Email"
          onChange={handleCorp}
        />
       }
      </ListItem>
      <ListItem >
      
      
        <FormControl sx={{minWidth:500,ml:2, mb:2}} variant="outlined">
          { Pempty == false && <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel>}
          {Pempty == false && <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            onChange={handlePassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />}
          { Pempty == true && <InputLabel htmlFor="outlined-adornment-password" >Password is required</InputLabel>}
          {Pempty == true && <OutlinedInput
          helperText="Please Enter"
          error
            onChange={handlePassword}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password is required"
          />}
        </FormControl>

      </ListItem>
      <Divider light />
      
    </List>
        
{/* 
        <Typography variant='h5' color="text.secondary" gutterBottom>
          Sign Up
        </Typography> */}

            
             
      </CardContent>
      <CardActions>
      <CustomButton className = 'btns' 
                buttonStyle = 'btn--signin'
                buttonSize= 'btn--largesignin'
                onClick={signup}
                
                
                
                >
                Add Student
                </CustomButton>
                
     
      </CardActions>
    </Card>

    

  );
}

export default CopTrainee;