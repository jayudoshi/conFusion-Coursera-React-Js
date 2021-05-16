import React , {useState} from 'react';
import {BreadcrumbItem,Breadcrumb,Button,Col,Label,Row } from 'reactstrap'
import {Link} from 'react-router-dom'
import {Control , Form , Errors , actions} from 'react-redux-form'

const required = (value)=>{
    return value
}

const maxLength = (length) => {
    return (value) => {
        if(value){
            return value.length <= length
        }
        return true
    }
}

const minLength = (length) => {
    return (value) => {
        if(value){
            return value.length >= length
        }
        return true
    }
}

const isNumber = (value) => {
    if(value){
        return Number.isInteger(parseInt(value))
    }
    return true
}

const isEmail = (value) => {
    if(value){
    const regex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[a-z]{2,4}$/
    const val = regex.test(value)
        return val
    }
    return true
}

function ContactUsTrial(props){

    function handleSubmit(values){
        const feedback = values;
        props.postFeedback(feedback)
        props.resetFeedbackForm()
    }

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Send us Your Feedback</h3>
                </div>
                <div className="col-12 col-md-9">
                    <Form model="feedback" onSubmit={(values)=> handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="fname" className="col-2" size="lg">First Name</Label>
                            <Col md={10}>
                                <Control.text model=".firstname" 
                                    id="fname" name="fname" 
                                    bsSize="lg" placeholder='First Name'
                                    className="form-control"
                                    validators = {
                                        {
                                            required,
                                            maxLength : maxLength(15),
                                            minLength : minLength(3)
                                        }
                                    }
                                />
                                <Errors model=".firstname"
                                    show={{touched:true , focus: false}}
                                    messages={{
                                        required: "Required Field",
                                        maxLength: "Maximum Length can be 15 chars",
                                        minLength: "Minimum Length can be 3 chars"
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="lname" className="col-2" size="lg">Last Name</Label>
                            <Col md={10}>
                                <Control.text model=".lastname" id="lname" name="lname" 
                                    bsSize="lg" placeholder='Last Name' 
                                    className="form-control"
                                    validators ={
                                        {
                                            required,
                                            maxLength : maxLength(15),
                                            minLength : minLength(3)
                                        }
                                    }
                                />
                                <Errors model=".lastname"
                                    show ={{touched:true , focus:false}}
                                    messages = {{
                                        required: "Required Field",
                                        maxLength: "Maximum Length can be 15 chars",
                                        minLength: "Minimum Length can be 3 chars"
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-gorup">
                            <Label htmlFor="telno" className="col-2" size="lg">Tel No.</Label>
                            <Col md={10}>
                                <Control.text id="telno" name="telno" model=".telno"
                                    bsSize="lg" placeholder="Tel No."
                                    className="form-control"
                                    validators={{
                                        required,
                                        isNumber,
                                        maxLength: maxLength(10),
                                        minLength: minLength(9)
                                    }}
                                />
                                <Errors model=".telno"
                                    show={{touched:true , focus:false}}
                                    messages={{
                                        required: "Required Field",
                                        isNumber: "Only Digits are allowed",
                                        maxLength: "Maximum Length can be 10 chars",
                                        minLength: "Minimum Length can be 9 chars"
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-gorup">
                            <Label htmlFor="email" className="col-2" size="lg">Email</Label>
                            <Col md={10}>
                                <Control.text id="email" name="email" 
                                    bsSize="lg" placeholder="Email" model=".email"
                                    className="form-control"
                                    validators={{
                                        required,
                                        isEmail
                                    }}
                                />
                                <Errors model=".email"
                                    show={{touched:true , focus:false}}
                                    messages={{
                                        isEmail: "Invalid Username",
                                        required: "Required Field"
                                    }}
                                />
                            </Col>
                            </Row>
                        <Row className="form-gorup">
                            <Col md={{size: 6, offset:2}}>
                                <div className="form-check">
                                    <Label size="lg" check>
                                        <Control.checkbox model=".checkbox" 
                                        name="agree" /> 
                                        <strong> May we , Contact You ? </strong>
                                    </Label>
                                </div>
                            </Col>
                            <Col md={{size:3 , offset:1}}>
                                <Control.select model=".contactType" 
                                name="contactType" className="form-control">
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="message" className="col-2" size="lg">Your Feedback</Label>
                            <Col md={10}>
                                <Control.textarea model=".message" id="message" rows="4"
                                name="message" bsSize="lg" className="form-control"/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{size:10 , offset:2}}>
                                <Button type="submit" className="btn btn-primary btn-large"> Send Feedback</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default ContactUsTrial;