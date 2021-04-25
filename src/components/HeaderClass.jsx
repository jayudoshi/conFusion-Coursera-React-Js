import React , {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Button ,Navbar , NavbarBrand , Jumbotron, NavItem , NavbarToggler , Collapse , Nav, Modal , ModalHeader, ModalBody,Form , FormGroup, Label, Input, Col } from 'reactstrap';

class Header extends Component{

    constructor(props){
        super(props)
        this.state = {
            isNavOpen : false,
            isModalOpen : false
        };
        this.username = React.createRef();
        this.passsword = React.createRef();
        this.rememberMe = React.createRef();
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen : !this.state.isNavOpen
        })
    }
    
    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.toggleModal();
        alert("Form Submittd")
        alert(this.username.value);
        alert(this.passsword.value);
        alert(this.rememberMe.value);
    }

    render(){
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button type="button" outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup className="row">
                                <Label className="col-md-2" htmlFor="username">Username</Label>
                                <Col md={10}>
                                <Input type="email" id="username" name="username" 
                                    innerRef={(input)=>this.username = input}
                                />
                                </Col>
                            </FormGroup>
                            <FormGroup  className="row">
                                <Label className="col-md-2" htmlFor="password">Password</Label>
                                <Col md={10}>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input)=>this.passsword=input}
                                />
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Col md={{size:5 , offset:2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                innerRef={(input) => this.rememberMe = input}
                                            /> Remember Me
                                        </Label>
                                    </FormGroup>
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Col md={{size : 3 , offset : 2}}>
                                    <Button type="submit"> Submit </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>

            </div>
        );
    }
}

export default Header;