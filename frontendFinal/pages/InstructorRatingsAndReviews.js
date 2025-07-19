import React,{useState} from "react";
import axios from 'axios'
import './courses.css'
import { Link } from 'react-router-dom';


    
// return the courses that instructor gives
const InstructorRatingsAndReviews=()=>{
    const [reviews, setReviews] = useState([]);



        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        //TODO
      const getReviews=async()=>{  
        //when click on view my courses ratings and reviews do this 
        //go to the review page of this specific instructor using his id
        //  onClick={() => window.location.href=`/review?id=${instructor.id}`}
       // key={author._id}

       await  axios.get(`http://localhost:4000/api/instructor/review?id=${id}`).then(
            (res) => {
             const reviews=res.data
             console.log(reviews)

            setReviews(reviews)
            }
            );
            //const reviews= await ReviewCourses.find()

        
        }

return(
        
    <div className="InstructorRatingsAndReviews">
     
<div>
   <button onClick={getReviews}>Load Reviews</button>
   </div>
   
    <table>
        <thead>
            <tr>
            <th>Course ID</th>
            <th>Ratings</th>
            <th>Reviews</th>
            </tr>
        </thead>
        <tbody>
            {reviews.map((review) => (
                <tr>
                    <td>{review.Code}</td>
                    <td>{review.rating}</td>
                    <td>{review.comment}</td>



                </tr>
            ))}
        </tbody>
    </table>
</div>

)





    
   
}
export default InstructorRatingsAndReviews


