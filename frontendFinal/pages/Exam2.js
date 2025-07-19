import { useEffect, useState } from "react"
import axios from 'axios';
import { List,ListItem } from "@mui/material";
import './Exam2.css'


export default function Exam2()
{
    const [userAnswer, submitAnswer] = useState([]);
    const [data, setData] = useState([]);
    const [answerAvailable, changeAnswerState] = useState(false);
    const [answers, setAnswers] = useState({});
    let [grade, setGrade] = useState(0);
    const params = new URLSearchParams(window.location.search);
    const examID = params.get('examID');
    
    useEffect(() => {
        async function getData()
        {
            await axios.get('http://localhost:4000/api/questions/getMCQ',{ params: { examID:examID } })
            .then(res => {

            console.log(res.data);
            const changedData=changeData(res.data);

                setData(changedData);

                console.log(data);

                for(let ansObj of changedData)
                {
                    setAnswers((old) => ({...old, [ansObj.questionHeader]: ansObj.answer
                        .answers[ansObj.answer.answerIndex]}));
                }
            })
        }
        getData();
    }, []);



    function changeData(Info){


        var Questions=[];

        for(var i=0;i<Info.length;i++){
           
            const arr={"answerIndex":Info[i].correctA-1, "answers":[Info[i].a1,Info[i].a2,Info[i].a3,Info[i].a4]};
            Questions[i]={"id":Info[i].questionsId,"questionHeader":Info[i].question ,"answer":arr};

          //  console.log(Questions);
        }

      //  console.log(Questions);
        return Questions;
        
    }



    const submitAnswers = (event) => {
        event.preventDefault();
        console.table(userAnswer);
        changeAnswerState(true);
        for(let answer in userAnswer)
        {
            if (userAnswer[answer] === answers[answer])
            {
                console.log(userAnswer[answer], answers[answer])
                setGrade(++grade);
            }
        }
        console.table(answers);
    }

    const rightAnswerStyle = {color: 'green'}
    const wrongAnswerStyle = {color: 'red'}

    const addAnswer = (event) => {
        submitAnswer((old) => ({...old, [event.target.name]: event.target.value}))
    }

    const isAnswerRight = (userAnswer, realAnswer) => {
        if (userAnswer === realAnswer)
        {
            setGrade(grade + 1);
        }
    }

    
    return (
        <div>
            <form>
                <div className='main' >

               
                <h1>Exam MCQ</h1>


                {answerAvailable && <h1>Grade : {grade} / {data.length}</h1>}

                {data.map((value, index) => {
                    return(
                    <div key={index} className='horizontal'>
                        <h1>{index + 1}. {value.questionHeader}</h1>   

                        <div>
                            {value.answer.answers.map((answer, aindex) => {
                                return (
                                    <div key={aindex + " " + index}>
                                        <h2>
                                            <label htmlFor={value.questionHeader +" "+ answer}
                                                style={
                                                    answerAvailable
                                                    &&
                                                    answers[value.questionHeader] === answer

                                                     ? rightAnswerStyle: 
                                                     ((answer === userAnswer[value.questionHeader])
                                                        &&
                                                        answerAvailable
                                                    )    ? wrongAnswerStyle: null}>{answer}</label>

                                                <input type='radio'
                                                   id={value.questionHeader + " "+ answer}
                                                   name={value.questionHeader}
                                                   onChange={(e) => addAnswer(e)}
                                                   value={answer}
                                                   />

                                        </h2>
                                    </div>
                                )
                            })}
                        </div>
                    </div>)
                })}
                <button type='submit' onClick={(e) => submitAnswers(e)}
                    style={{padding: '9px 12px', color: 'white', background: 'red', border: 'none'}}
                >Submit</button>
                </div>
            </form>

        </div>
    )
}

