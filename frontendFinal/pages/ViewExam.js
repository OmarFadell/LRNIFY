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
import { useEffect } from 'react';
import Select from '@mui/material/Select';


// export default function BasicCard() {
 function ViewExam({Login, error}) {
  const params = new URLSearchParams(window.location.search);
  const ExamID = params.get('examID');
    
    const [ExamInfo,setExamInfo] = useState([])
    const [open, setOpen] = React.useState(false);
    const [Questions,setQuestions] = useState([])
    const [Question,setQuestion] = useState('')
    const [ a1,setA1] = useState('')
    const [ a2,setA2] = useState('')
    const [ a3,setA3] = useState('')
    const [ a4,setA4] = useState('')
    const [ Answer,setAnswer] = useState('')
    const [AddForm,setAddForm] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
   
    async function addQuestion(){

      if (AddForm == false){
        setAddForm(true)
      }else{
        addQ();
        setAddForm(false)
        axios.get(`http://localhost:4000/api/questions/getQuestionsByExamId?examId=${ExamID}`).then(res => {
      
          const quesitons = res.data
          console.log(quesitons)
          setQuestions(quesitons)
          getQuestions();
      })
      .catch(err => {
          console.log(err)
      })
      }

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

    async function getQuestions(){
      axios.get(`http://localhost:4000/api/questions/getQuestionsByExamId?examId=${ExamID}`).then(res => {
      
      const quesitons = res.data
      console.log(quesitons)
      setQuestions(quesitons)
  })
  .catch(err => {
      console.log(err)
  })
    }

    useEffect(() => {
      
          axios.get(`http://localhost:4000/api/exam/getExamsByID?examID=${ExamID}`).then(res => {
      
          const Exams = res.data
          console.log(Exams)
          setExamInfo(Exams)
      })
      .catch(err => {
          console.log(err)
      })

      getQuestions();

    
      
  },[]);


  async function addQ(){
    const res = await axios.post('http://localhost:4000/api/questions/createMCQ', {CreatorId: '6384ac83abbfae05b96a56ab', examId:ExamID,question:Question, correctA:Answer, a1:a1,a2:a2,a3:a3,a4:a4 });

  }
    
      const style = {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      };

  return (
    <Card sx={{ minWidth: 700, minHeight:700, boxShadow: 4, mt:5, alignItems:'center' }} className='login'>
       
      <CardContent>
        {ExamInfo.map( exam => (

      <List>
        <ListItem>
        <Typography component="h1" variant="h4" sx={{ fontFamily:'PT Sans'}}>
            {exam.year}
          </Typography>
        <Typography component="h1" sx={{ml:20, fontFamily:'PT Sans'}} variant="h4">
            {exam.examTitle}
          </Typography>
          <Typography component="h1" sx={{ml:20, fontFamily:'PT Sans'}} variant="h4">
            {exam.courseCode}
          </Typography>

        </ListItem>
        
      </List>

        )




        )}
        
      </CardContent>

      {AddForm==true && <CardContent>
        <List>
          <ListItem>
      <TextField sx={{minWidth:500,ml:2, mt:-2}}
          
          id="outlined"
          label="Question"
           defaultValue={Question}
          // helperText="Please Enter a Valid Username"
           onChange={(e)=>{setQuestion(e.target.value)}}
        />
        <TextField sx={{maxWidth:140,ml:1, mt:-2}}
          
          id="outlined"
          label="Answer"
           defaultValue={Answer}
          // helperText="Please Enter a Valid Username"
           onChange={(e)=>{setAnswer(e.target.value)}}
        />

          </ListItem>
          <ListItem>
      <TextField sx={{maxWidth:150,ml:2, mt:0}}
          
          id="outlined"
          label="A1"
          defaultValue={a1}
          // helperText="Please Enter a Valid Username"
           onChange={(e)=>{setA1(e.target.value)}}
        />
        <TextField sx={{maxWidth:150,ml:2, mt:0}}
          
          id="outlined"
          label="A2"
           defaultValue={a2}
          // helperText="Please Enter a Valid Username"
           onChange={(e)=>{setA2(e.target.value)}}
        />
        <TextField sx={{maxWidth:150,ml:2, mt:0}}
          
          id="outlined"
          label="A3"
           defaultValue={a3}
          // helperText="Please Enter a Valid Username"
           onChange={(e)=>{setA3(e.target.value)}}
        />
        <TextField sx={{maxWidth:150,ml:2, mt:0}}
          
          id="outlined"
          label="A4"
           defaultValue={a4}
          // helperText="Please Enter a Valid Username"
           onChange={(e)=>{setA4(e.target.value)}}
        />
        
          
          </ListItem>
          
          
        </List>







      </CardContent>}




          
      <CardContent>
      <List sx={{ width: '100%', maxWidth: 800, maxHeight:700, mt:-4, mr:-15, bgcolor: 'background.paper',overflow:'auto' }}>
      <ListItem>
          <Button onClick={(e)=>{addQuestion()}}>Add Question</Button>
        </ListItem>
      {Questions.map((question)=>
      
      <ListItem>
        <ListItemText
          primary={
            <React.Fragment>
            <Typography
              sx={{ display: 'inline',fontSize:30 }}
              component="span"
              variant="body2"
              color="text.primary"
            >
            {question.question} 
            </Typography>
            
          </React.Fragment>}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline',fontSize:20 }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               {"a)"} {question.a1} -- {"b)"}{question.a2} -- {"c)"}{question.a3} -- {"d)"}{question.a4}
              </Typography>
              {/* {" — I'll be in your neighborhood doing errands this…"} */}
            </React.Fragment>
            
          }
          
        />
        <Typography
             
            >
             Answer: {question.correctA}
            </Typography>

      </ListItem>
      
      )}

      <ListItem alignItems="flex-start">
       
      <Divider  component="li" />
      </ListItem>
      
    </List>
      </CardContent>
     
    </Card>

    

  );
}

export default ViewExam;