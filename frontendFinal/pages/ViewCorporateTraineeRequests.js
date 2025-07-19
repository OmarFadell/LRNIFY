import React,{useState} from "react";
import axios from 'axios'
import './courses.css'
import { Link } from 'react-router-dom';


    
// return the courses that instructor gives
const ViewCorporateTraineeRequests=()=>{
    const [reviews, setReviews] = useState([]);


        //TODO
      const getReviews=async()=>{  
        //when click on view my courses ratings and reviews do this 
        //go to the review page of this specific instructor using his id
        //  onClick={() => window.location.href=`/review?id=${instructor.id}`}
       // key={author._id}

       await  axios.get(`http://localhost:4000/api/admin/getCorporateTraineeRequests`).then(
            (res) => {
             const reviews=res.data
             console.log(reviews)

            setReviews(reviews)
            }
            );
            //const reviews= await ReviewCourses.find()

        
        }

return(
        
    <div className="ViewCorporateTraineeRequests">
     
<div>
   <button onClick={getReviews}>CorporateTrainee Requests</button>
   </div>
   
    <table>
        <thead>
            <tr>
            <th>CorporateTrainee asking Request</th>
            <th>Course </th>
            </tr>
        </thead>
        <tbody>
            {reviews.map((review) => (
                <tr>
                    <td>{review.traineeID.email}</td>
                    <td>{review.courseID.Code}</td>



                </tr>
            ))}
        </tbody>
    </table>
</div>

)





    
   
}
export default ViewCorporateTraineeRequests