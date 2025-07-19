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
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
// import ChangePassword from './ChangePassword';
import Select from '@mui/material/Select';
import {Link} from 'react-router-dom'
import './adminform.css'

const Adminform = () => {
  const [userId, setId] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
 
    const admin = {userId, username, password}
    
    const response = await fetch('/api/admin', {
      method: 'POST',
      body: JSON.stringify(admin),
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
      setId('')
      setUserName('')
      setPassword('')
      console.log('new admin added:', json)
    }

  }



  const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };


  return (


    <div>
      <div>
      <Card sx={{ minWidth: 600, minHeight:500, boxShadow: 4, alignItems:'center' }} className='login'>


       
<Avatar sx={{ ml: 35, mt:4 , mb:3, bgcolor: 'secondary.main'  }}>
      <PersonAddAltIcon/>
    </Avatar>
    <Typography component="h1" sx={{fontFamily:'PT Sans'}} variant="h4">
      Add new admin
    </Typography>
    
    
  
<CardContent>
<List sx={style} component="nav" aria-label="mailbox folders">
<ListItem>
<TextField sx={{minWidth:500,ml:2, mb:2}} id="outlined-basic" label="Admin ID" variant="outlined" onChange={(e) => setId(e.target.value)} />
</ListItem>

<ListItem>
<TextField sx={{minWidth:500,ml:2, mb:2}} id="outlined-basic" label="Username" variant="outlined" onChange={(e) => setUserName(e.target.value)} />
</ListItem>
<ListItem>
<TextField sx={{minWidth:500,ml:2, mb:2}} id="outlined-basic" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)}  />
</ListItem>


</List>
  
{/* 
  <Typography variant='h5' color="text.secondary" gutterBottom>
    Sign Up
  </Typography> */}

      
       
</CardContent>
  {/* <CardActions> */}
  {/* <Link to='/resetpassword'> */}
  {/* <Button href="http://localhost:3000/changepassword" size="small" style={{marginLeft:'200px',marginBottom:'20px'}}>Forgot Password?</Button> */}
  {/* </Link> */}
  {/* </CardActions> */}
  

{/* <CardActions> */}
  <ListItem>
    
<CustomButton className = 'btns' 
            buttonStyle = 'btn--login'
            buttonSize= 'btn--largelogin'
             onClick={handleSubmit}
            >
            Add Admin
            </CustomButton>   


            
    
{/* <button onClick={login}>log in</button> */}
{/* </CardActions> */}
</ListItem>
</Card>
      </div>

    {/* <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Admin</h3>

      <label>UserID:</label>
      <input 
        type="number" 
        onChange={(e) => setId(e.target.value)} 
        value={userId}
      />

      <label>User Name:</label>
      <input 
        type="String" 
        onChange={(e) => setUserName(e.target.value)} 
        value={username}
      />

      <label>Password:</label>
      <input 
        type="String" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button>Add Admin</button>
      {error && <div className="error">{error}</div>}
    </form> */}
    </div>
  )
}

export default Adminform