import React, {useState} from 'react'
import {Button, Col, Label, Modal, ModalBody, ModalHeader, Row} from 'reactstrap' 
import { Control, Errors, LocalForm } from 'react-redux-form'

function CommentForm(props){

    const [isModalOpen , setIsModalOpen] = useState(false)

    const toggleModal = () =>{
        setIsModalOpen(!isModalOpen)
    }

    const handleSubmit = (values)=>{
        alert("Name: " + values.name + "\nRating: " + values.rating + "\nComment: " + values.comment);
    }

    const required = (value)=>{
        return value
    }

    const minLength = (length) =>{
        return (value) => {
            if(value){
                return value.length > length
            }
            return true;
        }
    }

    const maxLength = (length) =>{
        return (value) => {
            if(value){
                return value.length <= length
            }
            return true;
        }
    }

    return <div>
        <Button outline color="secondary" size="lg" onClick={toggleModal}>    
            <span class="fa fa-lg fa-pencil"></span> Submit Comment
        </Button>
        <Modal isOpen={isModalOpen} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>
                <h3>Submit Comments</h3>
            </ModalHeader>
            <ModalBody>
                <LocalForm onSubmit={(values)=>{handleSubmit(values)}}>
                    <Row className="form-group">
                        <Label htmlFor="rating" className="col-12">Rating</Label>
                        <Col>
                            <Control.select model=".rating" id="rating" name="rating"
                                className="form-control ">
                                <option>Select</option>
                                <option>5</option>
                                <option>4</option>
                                <option>3</option>
                                <option>2</option>
                                <option>1</option>
                            </Control.select>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="name" className="col-12">Your Name</Label>
                        <Col>
                            <Control.text model=".name" id="name" name="name" placeholder="Your Name"
                            className="form-control" validators={{
                                required,
                                minLength: minLength(3),
                                maxLength: maxLength(15)
                            }}/>
                            <Errors model=".name" className="text-danger" 
                                show={{touched:true}}
                                messages={{
                                    required: "Required Field",
                                    minLength: "Must be greater than 2 characters",
                                    maxLength: "Must be 15 characters or less"
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="comment" className="col-12">Comment</Label>
                        <Col>
                            <Control.textarea model=".comment" id="comment" name="comment"
                            className="form-control" rows="6"/>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col>
                            <Button type="submit" color="primary" className="btn btn-lg">Submit</Button>
                        </Col>
                    </Row>
                </LocalForm>
            </ModalBody>
        </Modal>
    </div>
}

export default CommentForm