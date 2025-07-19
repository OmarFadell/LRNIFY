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

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default class Exam3 extends Component{


  

    constructor(props){

        super(props);
        this.state = {

            examId:"",
            instructorId:"",
            courseId:"",
            courseCode:"",
            year:0,
            options:[],
            defaultOption:[],
            dropDownValue:"",
            courses:[]

        }
    }

    refreshList(){
                
        
            fetch(variables.API_URL+'exam/getExams')
            .then(response=>response.json())
            .then(data => {
                this.setState({courses:data});
            });
    }
    
    componentDidMount(){
        this.refreshList();
    }
    changeExamID =(e)=>{
        this.setState({examId:e.target.value});
    } 
    changeInstructorID =(e)=>{
        this.setState({instructorId:e.target.value});
    }
     changeCourseID =(e)=>{
        this.setState({courseId:e.target.value});
    }

    changeCourseCode =(e)=>{
        this.setState({courseCode:e.target.value});
    }
     changeYear =(e)=>{
        this.setState({year:e.target.value});
    }
   
  
    createEx=()=>{

      

        console.log("Inside func");
        fetch(variables.API_URL+'exam/createEx',
        {
            
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': "application/json; charset=utf-8",
            },
            body:JSON.stringify({
                examId:this.state.examId,
            
                instructorId:this.state.instructorId,
                courseCode:this.state.courseCode,
                
                year:this.state.year

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
 Exam() {
    // const [exam, setExam] = useState([])
    // const [query, setQuery] = useState("");
    
    
    // console.log(query)

    // useEffect(() => {
    //     axios.get('http://localhost:4000/api/Exam/createEx').then(res => {
            
    //         console.log(res)
    //         setExam(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // },[]);
 }

render (){
    const {
        examId,instructorId,courseId,year,options,defaultOption,courses,courseCode
    } = this.state; 
  

return(

                <div>




{/* <Dropdown options={options} onChange={this.handleDropDown()} value={defaultOption} placeholder="Select an option" />; */}





<span className='input-group-text'>Exam ID</span>

            <input type='text' className='form-control'
                                onChange={this.changeExamID}
                                ></input>




            <span className='input-group-text'>Course Code</span>

            <input type='text' className='form-control'
                                onChange={this.changeCourseCode}
                                ></input>

            <span className='input-group-text'>Instructor ID</span>
            <input type='text' className='form-control'
                                onChange={this.changeInstructorID}
                                ></input>


{/* <span className='input-group-text'>Exam Id</span>
            <input type='text' className='form-control'
                                onChange={this.changeExamID}
                                ></input> */}
            <span className='input-group-text'>year</span>

            
            <input type='number' max="9999" min="2000" className='form-control'
                                onChange={this.changeYear}
                               
                                ></input>


<button type="button" className='btn btn-primary float-start' onClick={()=>this.createEx()}>

            Submit
            </button>



            <table className='table table-striped'>
                        <thead>

                            <tr>
                                <th>
                                 Exam ID
                                </th>
                                <th>
                                 Instructor ID
                                </th>
                                
                                <th>
                                 Course Code
                                </th>
                                
                                <th>
                                    Year
                                </th>
                               
                                

                                
                            </tr>
                        </thead>

                    <tbody>
                        {
                        
                        courses.map(
                                    dep=> <tr key={dep._id}>
                                        
                                        <td>
                                            <Link to={`/CreateQuestion/${dep._id}`}>{dep.examId}</Link>
                                        </td>
                                       
                                        <td>{dep.instructorId}</td>
                                        <td>{dep.courseCode}</td>
                                        <td>{dep.year}</td>
                                        </tr>
                            )}
                    </tbody>
                    </table>








            </div>
       
            );
}


}