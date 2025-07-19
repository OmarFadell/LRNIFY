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
import {Route, Routes} from 'react-router-dom';
import { useSearchParams } from "react-router-dom"
import { useParams} from 'react-router-dom';


// function Users() {
//     // 👇️ get ID from url
//     const params = useParams();
//     const { id } = useParams();
//     const {state,setState} = useState({
//         courses:[],

//     });
//     console.log(id); // 👉️ {userId: '4200'}
//     refreshList();
//     console.log(state.courses)
//     return <h2>userId is 👉️ {params.id}</h2>;
//   }

//  function refreshList(){
      
        
//                 fetch(variables.API_URL+'exam/getExams')
//                 .then(response=>response.json()).then(data=>console.log(data))
//                 .then(data => {
//                     setState({courses:data});
//                 });
//         }

//   export default Users;
export default class Exam4 extends Component{

    constructor(props){
        
        super(props);

        // console.log(this.props.match.params);

        this.state = {
            CreatorId:"",
            question:"",
            correctA:"",
            a1:"",
            a2:"",
            a3:"",
            a4:"",
            options:[],
            defaultOption:[],
            dropDownValue:"",
            courses:[],
            exam_ID:""

        }
    }

    refreshList(){
      
 
            fetch(variables.API_URL+'questions/getQuestions')
            .then(response=>response.json())
            .then(data => {
                this.setState({courses:data});
            });
    }
    
    componentDidMount(){
        this.refreshList();
    }
    changeCreatorID =(e)=>{
        this.setState({CreatorId:e.target.value});
    } 
    changeQuestion =(e)=>{
        this.setState({question:e.target.value});
    }
     changeCorrectA =(e)=>{
        this.setState({correctA:e.target.value});
    }
     changeA1 =(e)=>{
        this.setState({a1:e.target.value});
    }
    changeA2 =(e)=>{
        this.setState({a2:e.target.value});
    }
    changeA3 =(e)=>{
        this.setState({a3:e.target.value});
    }
    changeA4 =(e)=>{
        this.setState({a4:e.target.value});
    }

   
  
    createMCQ=()=>{
        const studentId = window.location.href.split('/')[4];
        console.log(studentId);
        
        console.log("Inside func");
        fetch(variables.API_URL+'questions/createMCQ',
        {
            
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': "application/json; charset=utf-8",
            },
            body:JSON.stringify({

                examId:studentId,
                questionsId:"101010",
               // InstructorsIds:"23232",

                CreatorId:this.state.CreatorId,
                question:this.state.question,
                correctA:this.state.correctA,
                
                a1:this.state.a1,
                a2:this.state.a2,
                a3:this.state.a3,
                a4:this.state.a4,


            })
        })
        .then(res=>res.json())
        .then((result)=>{
           alert(result);
           fetch(variables.API_URL+'qex/createQEX',
           {
               
               method:'POST',
               headers:{
                   'Accept':'application/json',
                   'Content-Type': "application/json; charset=utf-8",
               },
               body:JSON.stringify({
   
                   examId:studentId,
   
               })
           })
           .then(res=>res.json())
           .then((result)=>{
              alert(result);
             
           },(error)=>{
               alert('Failed');
           })
           ;
        },(error)=>{
            alert('Failed');
        })
        ;
    }

    createLookUp(){
        const studentId = window.location.href.split('/')[4];
        console.log(studentId);
        
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
        CreatorId,question,correctA,a1,a2,a3,a4,courses,exam_ID
    } = this.state; 
 
    // const { url } = this.props.match.params;
    // console.log(url);
    // console.log(this.props.match.params.id);
return(

                <div>




{/* <Dropdown options={options} onChange={this.handleDropDown()} value={defaultOption} placeholder="Select an option" />; */}



            <span className='input-group-text'>Creator ID</span>

            <input type='text' className='form-control'
                                onChange={this.changeCreatorID}
                                ></input>

            <span className='input-group-text'>The Question</span>
            <input type='text' className='form-control'
                                onChange={this.changeQuestion}
                                ></input>


<span className='input-group-text'>Correct Answer</span>
            <input type='text' className='form-control'
                                onChange={this.changeCorrectA}
                                ></input>

            <span className='input-group-text'>Answer1</span>

            <input type='text' className='form-control'
                                onChange={this.changeA1}
                                ></input>

<span className='input-group-text'>Answer2</span>

<input type='text' className='form-control'
                    onChange={this.changeA2}
                    ></input>
                    

                    <span className='input-group-text'>Answer3</span>

                     <input type='text' className='form-control'
                    onChange={this.changeA3}
                    ></input>


          <span className='input-group-text'>Answer4</span>

          <input type='text' className='form-control'
                    onChange={this.changeA4}
                    ></input>


<button type="button" className='btn btn-primary float-start' onClick={()=>this.createMCQ()}>

            Submit
            </button>



            <table className='table table-striped'>
                        <thead>

                            <tr>
                                <th>
                                Creator ID
                                </th>
                                <th>
                                The Question
                                </th>
                                
                                <th>
                                Correct Answer
                                </th>
                                
                                <th>
                                Answer1
                                </th>
                                <th>
                                Answer2
                                </th>
                                <th>
                                Answer3
                                </th>
                                <th>
                                Answer4
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
                                        <td>{dep.question}</td>
                                        <td>{dep.correctA}</td>
                                        <td>{dep.a1}</td>
                                        <td>{dep.a2}</td>
                                        <td>{dep.a3}</td>
                                        <td>{dep.a4}</td>
                                        

                                        
                                         </tr>
                            )}
                    </tbody>
                    </table>








            </div>
       
            );
}


}