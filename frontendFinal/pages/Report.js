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






export default class Report extends Component {
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
          
           

        }
    }


    refreshList(){
        
        fetch(variables.API_URL+'reportStudent/getRepStu',

        {
            
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': "application/json; charset=utf-8",
            },
            body:JSON.stringify({
                
                "CreatorId":"6384ac83abbfae05b96a56ab"
                
                
              

            })
        })
            .then(response=>response.json())
            .then(data => {
                ///////////
                this.setState({courses:data});
            });
            console.log(this.state.courses);

    }

    componentDidMount(){
        this.refreshList();
    }
    changeCreatorId =(e)=>{
        this.setState({CreatorId:e.target.value});
    } 
    changeReportId =(e)=>{
        this.setState({reportId:e.target.value});
    }
     changereportType =(e)=>{
        this.setState({reportType:e.target.value});
    }

    changebody =(e)=>{
        this.setState({body:e.target.value});
    }
     changestatus =(e)=>{
        this.setState({status:e.target.value});
    }

    changeCourseCode =(e)=>{
        this.setState({CourseCode:e.target.value});
    }



    createReport=()=>{

      

        console.log("Inside func");
        fetch(variables.API_URL+'courses/createReport',
        {
            
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': "application/json; charset=utf-8",
            },
            body:JSON.stringify({
                CreatorId:this.state.CreatorId,
            
                reportId:this.state.reportId,
                reportType:this.state.reportType,
                
                body:this.state.body,
                status:this.state.status,
                CourseCode:this.state.CourseCode,
              

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


    render (){
        const {
            CreatorId,
            
                reportId,
                reportType,
                
                body,
                status,
                CourseCode,
                courses
        } = this.state; 


       return(


<div>

<span className='input-group-text'>Creator Id</span>

<input type='text' className='form-control'
                    onChange={this.changeCreatorId}
                    ></input>




{/* <span className='input-group-text'>Report Id</span>

<input type='text' className='form-control'
                    onChange={this.changeReportId}
                    ></input> */}

<span className='input-group-text'>Report Type </span>
<input type='text' className='form-control'
                    onChange={this.changereportType}
                    ></input>




<span className='input-group-text'>Body of the report </span>
<input type='text' className='form-control'
                    onChange={this.changebody}
                    ></input>

{/* <span className='input-group-text'>Status </span>
<input type='text' className='form-control'
                    onChange={this.changestatus}
                    ></input> */}
                    <span className='input-group-text'>CourseCode </span>
<input type='text' className='form-control'
                    onChange={this.changeCourseCode}
                    ></input>

{/* <span className='input-group-text'>Exam Id</span>
<input type='text' className='form-control'
                    onChange={this.changeExamID}
                    ></input> */}



<button type="button" className='btn btn-primary float-start' onClick={()=>this.createReport()}>

Report
</button>



<table className='table table-striped'>
            <thead>

                <tr>
                    <th>
                    Creator Id
                    </th>
                    {/* <th>
                    Report Id
                    </th> */}
                    
                    <th>
                    Report Type
                    </th>
                    
                    <th>
                    Body of the report
                    </th>

                    <th>
                    Status
                    </th>
                    <th>
                    CourseCode 
                    </th>
                   
                    

                    
                </tr>
            </thead>

        <tbody>
            {
            
            courses.map(
                        dep=> <tr key={dep._id}>
                            
                            <td>
                               {dep.CreatorId}
                            </td>
                           
                  
                            {/* <td>{dep.reportId}</td> */}
                            <td>{dep.reportType}</td>
                            <td>
                                            <Link to={`/EditBody/${dep._id}`}>{dep.body}</Link>
                                        </td>
                           
                            <td>{dep.status}</td>
                            <td>{dep.CourseCode}</td>
                            </tr>
                )}
        </tbody>
        </table>





</div>
       )


    }



}
