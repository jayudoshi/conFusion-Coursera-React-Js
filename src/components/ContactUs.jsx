import React , {useState} from 'react';
import {BreadcrumbItem , Breadcrumb , Form , FormGroup , Input , Button , Col, Label } from 'reactstrap'
import {Link} from 'react-router-dom'
function ContactUs(props){

    

    const [fname , setFname] = useState('');
    const [lname , setLname] = useState('');
    const [telno , setTelno] = useState('');
    const [email , setEmail] = useState('');
    const [agree , setAgree] = useState(false);
    const [contactType , setContactType] = useState('Tel');
    const [message , setMessage] = useState('');

    function handelInputChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.type==='checkbox' ? target.checked : target.value;

        switch(name){
            case 'fname':{
                setFname(value) ;
                break;
            };
            case 'lname':{
                setLname(value) ;
                break;
            };
            case 'email':{
                setEmail(value) ;
                break;
            };
            case 'telno':{
                setTelno(value) ;
                break;
            };
            case 'agree':{
                setAgree(value) ;
                break;
            }
            case 'contactType':{
                setContactType(value) ;
                break;
            };
            case 'message':{
                setMessage(value) ;
                break;
            };
        }
    }

    function handleSubmit(event){
        alert("Submitted Form")
        event.preventDefault();
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
                    <Form onSubmit={handleSubmit}>
                        <FormGroup className="row">
                            <Label htmlFor="fname" className="col-2" size="lg">First Name</Label>
                            <Col md={10}>
                                <Input type="text" id="fname" name="fname" bsSize="lg"
                                    placeholder='First Name' value={fname}
                                    onChange={handelInputChange}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label htmlFor="lname" className="col-2" size="lg">Last Name</Label>
                            <Col md={10}>
                                <Input type="text" id="lname" name="lname" bsSize="lg"
                                    placeholder='Last Name' value={lname}
                                    onChange={handelInputChange}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label htmlFor="telno" className="col-2" size="lg">Tel No.</Label>
                            <Col md={10}>
                                <Input type="number" id="telno" name="telno" bsSize="lg"
                                    placeholder="Tel No." value={telno}
                                    onChange={handelInputChange}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label htmlFor="email" className="col-2" size="lg">Email</Label>
                            <Col md={10}>
                                <Input type="email" id="email" name="email" bsSize="lg"
                                    placevalue={email}
                                    onChange={handelInputChange}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Col md={{size: 6, offset:2}}>
                                <FormGroup check inline>
                                    <Label size="lg" check>
                                        <Input name="agree" type="checkbox" checked={agree}
                                            onChange={handelInputChange}
                                        /> 
                                        <strong> May we , Contact You ? </strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={{size:3 , offset:1}}>
                                <Input type="select" name="contactType" value={contactType}
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
                                    value={message} rows="4" onChange={handelInputChange}
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

export default ContactUs;