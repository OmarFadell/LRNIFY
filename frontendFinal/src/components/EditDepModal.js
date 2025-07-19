import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditDepModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'department',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                DepartmentId:event.target.DepartmentId.value,
                DepartmentName:event.target.DepartmentName.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }
    render(){
        return (
            <div className="container">

<Modal
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            View Course
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
       

                    <Form.Group controlId="DepartmentId">
                        <Form.Label>Course Title</Form.Label>
                        <Form.Control type="text" name="DepartmentId" required
                        disabled
                        defaultValue={this.props.courseTitle} 
                        placeholder="DepartmentName"/>
                    </Form.Group>


                    <Form.Group controlId="DepartmentId">
                        <Form.Label>{"Price"}</Form.Label>
                        <Form.Control type="text" name="DepartmentId" required
                        disabled
                        defaultValue={this.props.CoursePrice} 
                        />
                    </Form.Group>
                    
                    <Form.Group controlId="DepartmentId">
                        <Form.Label>{"Subtitles"}</Form.Label>
                        <Form.Control type="text" name="DepartmentId" required
                        disabled
                        defaultValue={this.props.CourseSubtitles} 
                        />
                    </Form.Group>

                    <Form.Group controlId="DepartmentId">
                        <Form.Label>{"rating"}</Form.Label>
                        <Form.Control type="text" name="DepartmentId" required
                        disabled
                        defaultValue={this.props.rating} 
                        />
                    </Form.Group>
    
                    <Form.Group controlId="DepartmentId">
                        <Form.Label>{"Instructor"}</Form.Label>
                        <Form.Control type="text" name="DepartmentId" required
                        disabled
                        defaultValue={this.props.instructor} 
                        />
                    </Form.Group>

                    <Form.Group controlId="DepartmentId">
                        <Form.Label>{"NO Of Views"}</Form.Label>
                        <Form.Control type="text" name="DepartmentId" required
                        disabled
                        defaultValue={this.props.noOfViews} 
                        />
                    </Form.Group>


                    <Form.Group controlId="DepartmentId">
                        <Form.Label>{"NO Of Buyers"}</Form.Label>
                        <Form.Control type="text" name="DepartmentId" required
                        disabled
                        defaultValue={this.props.noOfBuyers} 
                        />
                    </Form.Group>

                    
                    <Form.Group controlId="DepartmentId">
                        <Form.Label>exercisesDetails</Form.Label>
                        <Form.Control type="text" name="DepartmentId" required
                        disabled
                        defaultValue={this.props.exercisesDetails} 
                        />
                    </Form.Group>


                    <Form.Group controlId="DepartmentId">
                        <Form.Label>{"Subject"}</Form.Label>
                        <Form.Control type="text" name="DepartmentId" required
                        disabled
                        defaultValue={this.props.subject} 
                        />
                    </Form.Group>

                    <Form.Group controlId="DepartmentId">
                        <Form.Label>{"Total Hours"}</Form.Label>
                        <Form.Control type="text" name="DepartmentId" required
                        disabled
                        defaultValue={this.props.totalHours} 
                        />
                    </Form.Group>

                    <Form.Group controlId="DepartmentId">
                        <Form.Label>{"Course Outline"}</Form.Label>
                        <Form.Control type="text" name="DepartmentId" required
                        disabled
                        defaultValue={this.props.courseOutline} 
                        />
                    </Form.Group>





                    
    
    
    
                </Form>
            </Col>
        </Row>
    </Modal.Body>
    
    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

}