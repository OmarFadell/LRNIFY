import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import'./indPayCourse.css'
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import cover from './gradientIns.png'
import creditcard from './card5wlogo.png'
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import PaymentsIcon from '@mui/icons-material/Payments';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { CustomButton } from '../CustomButton';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Unstable_DateField as DateField } from '@mui/x-date-pickers/DateField';
import  { Fragment } from "react";
import { DatePicker, KeyboardDatePicker } from "@material-ui/pickers";

// import CreditCardInputMask from "credit-card-input-mask";
// import {useForm} from "react-use-form";
import Cards from 'react-credit-cards-2';

const IndPayCourse = () => {
  
    const handleClick = () => setClick(!click);
    const[click, setClick] = useState(false);
    const[pagenum,setPageNum] = useState(0);
    const[personalInfo,setPersonalInfo] = useState([])
    const [courseTitle,setCourseTitle] = useState("");
    const [totalHours,setTotalHours] = useState("");
    const [rating,setRating] = useState("");
    const [price,setPrice] = useState();
    const [code,setCode] = useState("");
    const [courseOutline,setCourseOutline] = useState("");
    const [previewVideo,setPreviewVideo] = useState("");
    const [noOfViews,setNoOfViews] = useState("");
    const [CardNum,setCardNum] = useState()
    const [active,setActive] = useState(false);
    const [cvv,setCvv] = useState();
    const [date,setDate] = useState()
    const [holder,setHolder] = useState('')
    //--------------------------------------------------------
    const[country,setCountry] = useState()
    const[wallet,setWallet] = useState()
    const[payWCard,setPayWCard] = useState(false)
    const[insuf,setInsuf] = useState(false)
    const[method,setMethod]=useState()
    const {completeInfo,setCompleteInfo} = useState(false)

    const creds = window.localStorage.getItem('credentials');
    console.log(creds.substring(1,25))
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId');
    const traineetype = window.localStorage.getItem('TraineeType')
    const currency = window.localStorage.getItem('currency')
    const mult = window.localStorage.getItem('mult')

    // const traineetype = window.localStorage.getItem('TraineeType')

    function nextPage(){
        setPageNum(pagenum+1);
        console.log(pagenum)

    }

    function handleCardSubmit(){

        if(CardNum.trim().length == 0 || holder.trim().length == 0 || cvv.trim().length == 0 || date.trim().length == 0){
            setCompleteInfo(true)
        }else{
            nextPage()
            // window.localStorage.setItem('credentials','hi')

        }

    }

   
    useEffect(()=> {
    //     // const search = '';
    //     const params = new URLSearchParams(window.location.search);
    //    const search = params.get('search');
    //     setSearchTerm(search)
    //     console.log(search);
  
                axios.get(`http://localhost:4000/api/courses/getCourse?courseId=${courseId}`).then(res => {
                            
                console.log(res)
                setCourseTitle(res.data.title);
                setTotalHours(res.data.totalHours);
                setRating(res.data.rating);
                const firstprice = res.data.price;
                setCode(res.data.Code);
                setCourseOutline(res.data.courseOutline);
                setPreviewVideo(res.data.previewVideo);
                setNoOfViews(res.data.noOfViews);
                setPrice(res.data.price)
                // axios.get(`http://localhost:4000/api/courses/getPromo?courseId=${courseId}`).then(res => {
                //     setPrice(((res.data.percentage)/100)*firstprice)

                
                // })
                // .catch(err => {
                //     console.log(err)
                // })
                            
            })
            .catch(err => {
                console.log(err)
            })


          
        
          
          axios.get('http://localhost:4000/api/trainee/getTraineeByID', {params: {
            traineeId: creds.substring(1,25)
        
          }}).then(res => {
                  const info = res.data
                  console.log(info)
                   setWallet(res.data.wallet)
                  setPersonalInfo(info)
                  }).catch(err => {
                      console.log(err)
                  })
        
  
  
  
  
  
          },[]);

          async function RequestCourse(){

            const res = await axios.post('http://localhost:4000/api/reportStudent/createRepStu', {CreatorId:creds.substring(1,25),reportType:'courseRequest',title:'Course Request',body:'this corporate trainee wants to access this course',status:'pending',CourseCode:code.toUpperCase()});
            console.log(res);
      
          }


          async function Pay(){

            if(method=='wallet'){
                axios.put(`http://localhost:4000/api/Trainee/payWithWallet?traineeId=${creds.substring(1,25)}&price=${price}`).then(res => {
                        console.log(res)
                          }).catch(err => {
                              console.log(err)
                          })
                        }else{
                            
                            const creditcard={number:CardNum,cvv:cvv,expiryDate:date,holderName:holder}
                
                        const credit = await fetch('/api/IndividualTrainee/creditcard', {
                            method: 'POST',
                            body: JSON.stringify(creditcard),
                            headers: {
                              'Content-Type': 'application/json'
                            }
                          })
                          console.log(credit)
                        }
                            
          const register={CourseId:courseId,TraineeId:creds.substring(1,25),CourseName:courseTitle}
          const pay = await fetch('/api/registeredCourse/createReg', {
            method: 'POST',
            body: JSON.stringify(register),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          const reg2={courseID:courseId,traineeID:creds.substring(1,25)}
          const reg = await fetch('/api/trainee/addingCourseToTrainee', {
            method: 'PUT',
            body: JSON.stringify(reg2),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          const res = await axios.post('http://localhost:4000/api/payments', {TraineeId:creds.substring(1,25),CourseId:courseId,Amount:price});
            console.log(res);
      
          }



          const styles = {
            paperContainer: {
                backgroundImage: `url(${cover})`
            }
        };

        const normalizeCardNumber = (value) =>{
            return value.replace(/\s/g,"").match(/.{1,4}/g).join(" ").substr(0,19) || ""
        }

        // const normalizeDate = (value) =>{
        //     return value.replace(/\s/g,"").match(/.{1,2}/g).join("/").substr(0,7) || ""
        // }

      
return(
   
   <>
   { traineetype != '"corporate"' && <div>
    {/* <h1 style={{marginBottom:-30,marginTop:40}}>Payment</h1> */}
    <Box sx={{mt:5,ml:10}} >
        
       <nav className='navbar1'>
            <div className='navbar-container'>
                
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                
                {/* <li className='nav-item1'>
                  
                <button id='1'  className={pagenum == '0' ? 'selected':'nav-links2'}>Personal Details</button>
                </li> */}
                

                  {/* <li className='nav-item'>
                  <button id='2' className={pagenum == '1' ? 'selected':'nav-links2'} >Course Details</button>
                </li> */}
                <li className='nav-item'>
                <button id='3' className={pagenum == '0' ? 'selected':'nav-links2'} >Payment method </button>
                </li>
                <li className='nav-item'>
                <button id='3' className={pagenum == '1' ? 'selected':'nav-links2'} >Payment </button>
                </li>
                <li className='nav-item'>
                <button id='4' className={pagenum == '2' ? 'selected':'nav-links2'} >Confirmation </button>
                </li>
                
                </ul>
                

                <div>
        
        
      </div>

            </div>


        </nav>
        </Box>

        <div>


              <div className='courseDetails'>
                


            

                { pagenum == 0 &&

                    <Card sx={{minWidth:1650,maxWidth:1650,minHeight:400,mt:5}}>

                        <Box sx={{ml:65}}>
                            <List>
                                <ListItem>
                                    <h1 style={{marginLeft:130}}>Select payment method</h1>
                                </ListItem>
                                <ListItem>
                                <CustomButton className = 'btns' 
                                    buttonStyle = 'btn--outline'
                                    buttonSize= 'btn--balance'
                                    onClick={(e)=>{

                                        if (wallet < price){
                                            setInsuf(true)
                                        }else{
                                            setMethod('wallet')
                                            setPageNum(2)
                                        }



                                    }}
                                    >
                                    <AccountBalanceWalletIcon/> Balance/Wallet   
                                    </CustomButton>
                                </ListItem>
                                <ListItem sx={{mt:0,ml:0.5}}>
                                <CustomButton className = 'btns' 
                                    buttonStyle = 'btn--outline'
                                    buttonSize= 'btn--credit'
                                    onClick={(e)=>{
                                        setMethod('card')
                                        nextPage()
                                    }}
                                    >
                                    <CreditCardIcon/>Credit/Debit Card
                                    </CustomButton>
                                </ListItem>
                                {insuf==true && <ListItem>
                                    <h1 style={{color:'red',marginLeft:40}}>insufficient funds: please pay with card</h1>
                                </ListItem>}
                            </List>
                        </Box>



                    </Card>



                }

              { pagenum==1 && method=='card' && <Card sx={{minWidth:1650,maxWidth:1650,maxHeight:500,mt:0}}>

                    <CardContent>
                    <Stack
                                    direction="row"
                                    divider={<Divider orientation="vertical" flexItem />}
                                    spacing={5}
                                    sx={{ml:10,mt:3,mb:10}}
                                    
                                >

                    <Box sx={{mt:-4}}>
                        <List>
                            <ListItem>
                                <h1 style={{alignItems:'center',marginLeft:25}}>Payment details</h1>
                            </ListItem>

                            <ListItem>

                            <TextField sx={{minWidth:500,ml:2, mb:2}}  type="tel" id="outlined-basic" inputProps={{ style: { textTransform: "uppercase" } }} label="Cardholder" variant="outlined" onChange={(e)=>{

                                    setHolder(e.target.value.toLocaleUpperCase())
                                    }} />



                            </ListItem>
                            <ListItem>
                                 <TextField sx={{minWidth:500,ml:2, mb:2}}   id="outlined-basic"  label="Card Number" variant="outlined" onChange={(e)=>{

                                    const {value} = e.target
                                    e.target.value = normalizeCardNumber(value)
                                    setCardNum(e.target.value)

                                    }} />
                            </ListItem>
                            <ListItem>
                            <TextField sx={{maxWidth:250,ml:2, mb:2}} id="outlined-basic" label="Expiry date" inputProps={{ maxLength: 5 }} variant="outlined" onChange={(e)=>{

                                e.target.value = e.target.value.replace(
                                    /^(0[1-9]|1[0-2])$/g,
                                    "$1/" // 11 > 11/
                                    )
                                    setDate(e.target.value)
                            }} />
                            <TextField sx={{maxWidth:300,minWidth:260 , ml:2, mb:2}} id="outlined-basic" label="CVV" inputProps={{ maxLength: 3 }} variant="outlined" onChange={(e)=>{

                           setCvv(e.target.value)
                            }} /> 
                            </ListItem>
                            <ListItem>
                                <Box sx={{ml:-2}}>
                            <CustomButton className = 'btns' 
                                buttonStyle = 'btn--login'
                                buttonSize= 'btn--largelogin'
                                onClick={(e)=>{handleCardSubmit()}}
                                >
                                Proceed
                                </CustomButton>   
                                </Box>
                            </ListItem>
                        </List>
                    </Box>
                    

                    <Box>

                                <Card sx={{minWidth:600,minHeight:350,ml:20,borderRadius:6,boxShadow:10}} >
                                <CardMedia

                                sx={{ minHeight: 350 }}
                                image={creditcard}
                                title="green iguana"
                            >
                                <Box sx={{position:'absolute',mt:15,ml:8}}>
                                <h1 style={{color:'white',fontFamily:'Inconsolata',fontSize:'40px'}}>{CardNum}</h1>
                                </Box>
                                <Box sx={{position:'absolute',mt:26,ml:35}}>
                                <h1 style={{color:'white',fontFamily:'Inconsolata',fontSize:'30px'}}>{date}</h1>
                                </Box>
                                <Box sx={{position:'absolute',mt:32,ml:8}}>
                                <h1 style={{color:'white',fontFamily:'Inconsolata',fontSize:'30px'}}>{holder}</h1>
                                </Box>


                                    </CardMedia>
                                </Card>
                               
                                 {/* <Button onClick={(e)=>{nextPage()}}>proceed</Button> */}


                    </Box>
                    </Stack>
                    </CardContent>    


                </Card>}

                { pagenum == '2' && <Card sx={{minWidth:1650,maxWidth:1650,maxHeight:500,mt:0}}>
                <CardContent>
                <Stack
                                    direction="column"
                                    divider={<Divider orientation="horizontal" flexItem />}
                                    spacing={0}
                                    sx={{alignItems:'left'}}
                                    
                                >

                                <Box>
                                    <h1>Order summary</h1>

                                </Box>
                                <Box>
                               { method == 'wallet' && <Stack
                                    direction="row"
                                    //divider={<Divider orientation="horizontal" flexItem />}
                                    spacing={170}
                                    sx={{alignItems:'left',ml:3}}
                                    
                                >
                                    <Box>
                                       <h1 style={{fontWeight:400}}>Subtotal:</h1>
                                       </Box>
                                       <Box>
                                        <h1> {price}</h1>

                                       </Box>
                                </Stack>}

                                 
                                </Box>
                                <Box>
                               { method =='wallet' && <Stack
                                    direction="row"
                                    //divider={<Divider orientation="horizontal" flexItem />}
                                    spacing={172.5}
                                    sx={{alignItems:'left',ml:3}}
                                    
                                >
                                    <Box>
                                       <h1 style={{fontWeight:400}}>Wallet:</h1>
                                       </Box>
                                       <Box>
                                        <h1> -{price}</h1>

                                       </Box>
                                </Stack>}

                                 
                                </Box>
                                <Box>
                                { method == 'wallet' && <Stack
                                    direction="row"
                                    //divider={<Divider orientation="horizontal" flexItem />}
                                    spacing={172.5}
                                    sx={{alignItems:'left',ml:-2,mr:-2,mb:-4,backgroundColor:'#DBC9E0'}}
                                    
                                    
                                >
                                    <Box >
                                       <h1 style={{fontWeight:400,marginLeft:40}}>Total:</h1>
                                       </Box>
                                       <Box>
                                        <h1 style={{marginRight:-150}}> 0</h1>

                                       </Box>
                                </Stack>}
                                { method == 'card' && <Stack
                                    direction="row"
                                    //divider={<Divider orientation="horizontal" flexItem />}
                                    spacing={172.5}
                                    sx={{alignItems:'left',ml:-2,mr:-2,mb:-4,backgroundColor:'#DBC9E0'}}
                                    
                                    
                                >
                                    <Box >
                                       <h1 style={{fontWeight:400,marginLeft:40}}>Total:</h1>
                                       </Box>
                                       <Box>
                                        <h1 style={{marginRight:-150}}> {price}</h1>

                                       </Box>
                                </Stack>}

                                 
                                </Box>


                                </Stack>

                </CardContent>



            </Card>}

                <Card sx={{minWidth:1650,maxWidth:1650,minHeight:150,mt:2}}>
            <CardMedia
                                sx={{ minHeight: 150 }}
                                image={cover}
                                title="green iguana"
                            >
                                <Stack
                                    direction="row"
                                    // divider={<Divider orientation="vertical" flexItem />}
                                    spacing={0}
                                    sx={{ml:10}}
                                    
                                >
                                    <Box sx={{minWidth:400,mt:1}}><h1 style={{textAlign:'left'}} >{code}:{courseTitle}</h1></Box>
                                    <Box sx={{minWidth:1300}}>
                                    <Stack
                                    direction="row"
                                    // divider={<Divider orientation="vertical" flexItem />}
                                    spacing={pagenum == '2' ? 15:5}
                                    sx={{ml:20}}
                                    
                                >
                                    <Box>
                                        <h1 style={{fontSize:'60px',textAlign:'left',marginLeft:-50}}><StarIcon sx={{fontSize:40}}/>{rating}</h1>
                                        </Box>

                                        <Box >

                                        { <h1 style={{fontSize:'60px',textAlign:'left',marginLeft:100}}><QueryBuilderIcon sx={{fontSize:40}}/>{totalHours} Hours</h1>}

                                        </Box>
                                        <Box >

                                        {pagenum!='2' && <h1 style={{fontSize:'60px',textAlign:'left',marginLeft:100}}><PaymentsIcon sx={{fontSize:40}}/>{currency.substring(1,2)} {price*mult}</h1>}
                                        {pagenum=='2' && <Link to = '/donePayment'  >
                                         <CustomButton className = 'btns' 
                                            buttonStyle = 'btn--pay'
                                            buttonSize= 'btn--largepay'
                                            onClick={(e)=>{Pay()}}
                                            >
                                            Pay {currency.substring(1,2)} {price*mult}
                                            </CustomButton>
                                            </Link>}
                                           

                                        </Box>

                                        </Stack>
                                        </Box>
                                    {/* <Box sx={{minWidth:400}}>Item 3</Box> */}
                                </Stack>


                            </CardMedia>
                            
            </Card>

            

            </div>




           
        </div>
        </div>}
        { traineetype == '"corporate"' && <div>
        <Card sx={{minWidth:1650,maxWidth:1650,minHeight:800,maxHeight:800,boxShadow:10,mt:5,ml:25}}>
        
        <Link to = '/requestMade'  >
        <button onClick={(e)=>{RequestCourse()}} style={{ backgroundColor:'transparent',borderColor:'#6C63F4',minWidth:500,minHeight:50, fontSize:20,fontFamily:'PT Sans',borderWidth:6,fontWeight:700,marginTop:300,marginLeft:500 }}> Request course</button>
        </Link>



        </Card>
            
            
            
            </div>}
    </>
)

}

export default IndPayCourse;