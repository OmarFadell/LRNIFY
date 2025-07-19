import { height } from '@mui/system';
import React,{useState} from 'react';
import '../App.css';
import { CustomButton } from './CustomButton';
import './HeroSection.css';
import homepage from './homepage.png'
import homevideo from './hmpgbgv.mp4'

function HeroSection() {
   
    
    const[country,setcountry] = useState('')
    console.log(country)
   
    return (
        <div className='hero-container'>


            <h1>    LRN-ing Made Easy</h1>
            <p>LRNIFY is trusted by over 150 corporations across the MENA Region,</p>
            <p>with a variety of 100+ courses to choose from, </p>
            <p>and 50+ certified professors and instructors.</p>
           
            {/* <img style={{width:800, height:800,alignSelf:'flex-end'}} src={homepage}/> */}
            <video src={homevideo} autoPlay loop muted />
           
            <div className='hero-btns'>
                <CustomButton className = 'btns' 
                buttonStyle = 'btn--primary'
                buttonSize= 'btn--large'
                >
                   GET STARTED 
                </CustomButton>
                <CustomButton className = 'btns' 
                buttonStyle = 'btn--primary'
                buttonSize= 'btn--large'
                
                >
                   BROWSE COURSES
                </CustomButton>
            </div>
          
        </div>
    )
}

export default HeroSection
