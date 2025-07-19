import React,{useState, useEffect} from "react";
import axios from 'axios'
import PostRequest from "../PostRequest";
import { Link } from 'react-router-dom';
import {Component} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {variables} from '../Variables'
import Select from 'react-select'
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Routes, useParams} from 'react-router-dom';



export default class EditBody extends Component {
    constructor(props){

        super(props);
        this.state = {
            reports:[],
            CreatorId:"",
            reportId:"",
            reportType:"",
            body:"",
            status:"pending",
            CourseCode:"",
            courses:[],
          
           body:"",
           reportId1:""
        }
    }


    refreshList(){
        
       


    }
    componentDidMount(){
        this.refreshList();
    }


    changebody =(e)=>{
        this.setState({body:e.target.value});
    }



    editBodyForReport=()=>{

        const reportId1 = window.location.href.split('/')[4];
        console.log(reportId1);

        console.log("Inside func");
        fetch(variables.API_URL+'courses/editBodyForReport',
        {
            
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': "application/json; charset=utf-8",
            },
            body:JSON.stringify({
               
                _id:reportId1,
                body:this.state.body
                
              

            })
        })
        .then(res=>res.json())
        .then((result)=>{
           alert(result);

        },(error)=>{
            alert('Failed');
        })
        ;
    }



    createLookUp(){
        const reportId1 = window.location.href.split('/')[4];
        console.log(reportId1);
        
    }

    render (){
        const {
            CreatorId,
            
                reportId,
                reportType,
                
                body,
                status,
                CourseCode,
                courses,
            
        } = this.state; 


        return(


            <div>
            
            <span className='input-group-text'>Edit Body</span>
            
            <input type='text' className='form-control'
                                onChange={this.changebody}
                                ></input>






<button type="button" className='btn btn-primary float-start' onClick={()=>this.editBodyForReport()}>

Edit
</button>


</div>





)
    }





}