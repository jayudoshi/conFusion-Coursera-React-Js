import React , {useState} from 'react';
import {BreadcrumbItem , Breadcrumb , Form , FormGroup , Input , Button , Col, Label , FormFeedback } from 'reactstrap'
import {Link} from 'react-router-dom'
function ContactUsTrial(props){
    const [formDetails , setFormDetails] = useState({
        fname : '', 
        lname : '',
        telno : '',
        email : '',
        agree : false,
        contactType : 'Tel',
        message : '',
        touched : {
            fname : false,
            lname : false,
            telno : false,
            email : false
        }
    })

    function handelOnBlur(event){
        setFormDetails( prevState=> (
            {
                ...prevState,
                touched : {
                    ...(prevState.touched) ,
                    [event.target.name] : true
                }
            }
        ) )
        errors = validate();
    }


    function handelInputChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.type==='checkbox' ? target.checked : target.value;
        setFormDetails(prevState=>({
            ...prevState,
            [name] : value
        }));
 
    }

    function handleSubmit(event){
        alert("Submitted Form")
        console.log(JSON.stringify(formDetails));
        event.preventDefault();
    }

    function validate() {
        const errors = {
            fname : '',
            lname : '',
            telno : '',
            email : ''
        }

        if(formDetails.touched.fname && formDetails.fname.length <= 3 ){
            errors.fname = "First Name should be of minimum 3 characters long";
        }else if(formDetails.touched.fname && formDetails.fname.length > 10 ){
            errors.fname= "First Name can be of maximum of 10 characters long";
        }

        if(formDetails.touched.lname && formDetails.lname.length <=3 ){
            errors.lname = "Last Name should be of minimum 3 characters long";
        }else if(formDetails.touched.lname && formDetails.lname.length > 10 ){
            errors.lname = "Last Name can be maximum of 10 characters long";
        }

        const regx = /^\d+$/;
        if(formDetails.touched.telno && !regx.test(formDetails.telno) ){
            errors.telno = "Tel. Number should contain only numbers"
        }

        if(formDetails.touched.email && formDetails.email.split('').filter(x => x==='@').length !== 1){
            errors.email = 'Email should contain a @';
        }

        return errors;
    }

    let errors = validate()

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
                    <Form onSubmit={handleSubmit}>
                        <FormGroup className="row">
                            <Label htmlFor="fname" className="col-2" size="lg">First Name</Label>
                            <Col md={10}>
                                <Input type="text" id="fname" name="fname" bsSize="lg"
                                    placeholder='First Name' value={formDetails.fname}
                                    onChange={handelInputChange} onBlur={handelOnBlur}
                                    valid={formDetails.touched.fname && errors.fname === ''}
                                    invalid={formDetails.touched.fname && errors.fname !== ''}
                                />
                                <FormFeedback>{errors.fname}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label htmlFor="lname" className="col-2" size="lg">Last Name</Label>
                            <Col md={10}>
                                <Input type="text" id="lname" name="lname" bsSize="lg"
                                    placeholder='Last Name' value={formDetails.lname}
                                    onChange={handelInputChange} onBlur={handelOnBlur}
                                    valid={formDetails.touched.lname && errors.lname === ''}
                                    invalid={formDetails.touched.lname && errors.lname !== ''}
                                />
                                <FormFeedback>{errors.lname}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label htmlFor="telno" className="col-2" size="lg">Tel No.</Label>
                            <Col md={10}>
                                <Input type="number" id="telno" name="telno" bsSize="lg"
                                    placeholder="Tel No." value={formDetails.telno}
                                    onChange={handelInputChange} onBlur={handelOnBlur}
                                    valid={formDetails.touched.telno && errors.telno === ''}
                                    invalid={formDetails.touched.telno && errors.telno !== ''}
                                />
                                <FormFeedback>{errors.telno}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label htmlFor="email" className="col-2" size="lg">Email</Label>
                            <Col md={10}>
                                <Input type="email" id="email" name="email" bsSize="lg"
                                    placeholder="Email" value={formDetails.email}
                                    onChange={handelInputChange} onBlur={handelOnBlur}
                                    valid={formDetails.touched.email && errors.email === ''}
                                    invalid={formDetails.touched.email && errors.email !== ''}
                                />
                                <FormFeedback>{errors.email}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Col md={{size: 6, offset:2}}>
                                <FormGroup check inline>
                                    <Label size="lg" check>
                                        <Input name="agree" type="checkbox" checked={formDetails.agree}
                                            onChange={handelInputChange}
                                        /> 
                                        <strong> May we , Contact You ? </strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={{size:3 , offset:1}}>
                                <Input type="select" name="contactType" value={formDetails.contactType}
                                    onChange={handelInputChange}>
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label htmlFor="message" className="col-2" size="lg">Your Feedback</Label>
                            <Col md={10}>
                                <Input type="textarea" id="message" name="message" bsSize="lg"
                                    value={formDetails.message} rows="4" onChange={handelInputChange}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Col md={{size:10 , offset:2}}>
                                <Button type="submit" className="btn btn-primary btn-large"> Send Feedback</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default ContactUsTrial;