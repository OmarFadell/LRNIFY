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

import {tsContructorType} from '@babel/types';


import { Button,ButtonToolbar} from 'react-bootstrap';



export default class AdminReport extends Component {
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

          reportId:""
           

        }
    }

    refreshList(){
        
        fetch(variables.API_URL+'admin/getReports')
            .then(response=>response.json())
            .then(data => {
                ///////////
                this.setState({courses:data});
            });


    }

    componentDidMount(){
        this.refreshList();
    }


    changestatus =(e)=>{
        this.setState({status:e.target.value});
    }


    UpdateStatus =(e)=>{

        fetch(variables.API_URL+'reportStudent/ChangeStatus',
        {
            
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': "application/json; charset=utf-8",
            },
            body:JSON.stringify({
                reportId:e
                                    })
        })
        .then(res=>res.json())
        .then((result)=>{
            this.setState({courses:result});

        },(error)=>{
            alert('Failed');
        })
        ;

    }


    UpdateSeen =(e)=>{

        fetch(variables.API_URL+'reportStudent/ChangeSeen',
        {
            
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': "application/json; charset=utf-8",
            },
            body:JSON.stringify({
                reportId:e
                                    })
        })
        .then(res=>res.json())
        .then((result)=>{
            this.setState({courses:result});

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





{/* <button type="button" className='btn btn-primary float-start' onClick={()=>this.createReport()}>

Report
</button> */}



<table className='table table-striped'>
            <thead>

                <tr>
                    <th>
                    Creator Id
                    </th>
                    <th>
                    Report Id
                    </th>
                    
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
                    Seen
                    </th>
                    <th>
                    Change Status
                    </th>

                    <th>
                    CourseCode 
                    </th>
                    <th>
                    Mark as Seen 
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
                           
                  
                            <td>{dep.reportId}</td>
                            <td>{dep.reportType}</td>
                            <td>{dep.body}</td>
                            <td>{dep.status}</td>
                            <td>{dep.seen}</td>
                            <td>
                                        <ButtonToolbar>
                                    <Button className="mr-2" variant="info"
                                       
                                            // })}
                                            onClick={() => this.UpdateStatus(dep._id)}>
                                                ChangeStatus
                                            </Button>

                                    </ButtonToolbar>
                                            
                                        </td>

                                    
                            <td>{dep.CourseCode}</td>
                            <td>
                                        <ButtonToolbar>
                                    <Button className="mr-2" variant="info"
                                       
                                            // })}
                                            onClick={() => this.UpdateSeen(dep._id)}>
                                               Mark as Seen
                                            </Button>

                                    </ButtonToolbar>
                                            
                                        </td>
                            </tr>
                )}
        </tbody>
        </table>





</div>
       )


    }



}





