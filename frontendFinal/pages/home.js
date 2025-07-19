import React from 'react';
import SearchCardsDeck from '../SearchCardsDeck';
import Modal from '../Modal';
import '../../App.css'
import HeroSection from '../HeroSection'
import Hmpgcomp from '../hmpgcomp';
import { CustomButton } from '../CustomButton';
import { useState } from 'react';
import { useEffect } from 'react';
import TraineeHeroSection from '../TraineeHeroSection';
import MostViewed from '../MostViewed';


function Home(){
    

    const[Usertype,setUsertype]=useState()


  useEffect(() => {
    const user = window.localStorage.getItem('usertype');
    setUsertype(user);
  }, [])
    
    
    
    return(
        <>
        {/* <Modal/> */}
        {/* <button onClick={Modal.toggleModal}>click me</button> */}
        {Usertype!='trainee' && <HeroSection/>}
        {Usertype=='trainee' && <TraineeHeroSection/>}

        <MostViewed/>
        
        
        

        </>
    )
}

export default Home;