import React , {Component} from 'react';
import {Card , CardTitle , CardImg , CardBody , CardText , ListGroup , ListGroupItem , Breadcrumb , BreadcrumbItem, Button} from 'reactstrap'
import {Link} from 'react-router-dom';
import CommentForm from './CommentForm';
import LoadingComponent from './LoadingComponent'
import {baseUrl} from '../shared/baseURL';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

class DishDetailComponentClass extends Component{

    constructor(props){
        super(props);
    }

    render(){

        function renderDish(dish){
            return(
                <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                    <Card>
                        <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle className="h5">{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </FadeTransform>
            );
        }

        function renderComments(comments){
            return comments.map((comment)=>{
                return(
                    <Stagger in>
                        <ListGroupItem className="border-0 p-0" key={comment.id}>
                            <Fade in>
                                <p><span>{comment.rating}</span> {comment.comment}</p> 
                                <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </Fade>
                        </ListGroupItem>
                    </Stagger>
                );
            })
        }

        if(this.props.dishLoading){
            return <div className="container">
                <div className="row">
                    <LoadingComponent />
                </div>
            </div>
        }else if(this.props.dishErrMsg){
            return <div className="container">
                <div className="row">
                    <h3>{this.props.errMsg}</h3>
                </div>
            </div>
        }else if(this.props.dish != null){
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{this.props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {renderDish(this.props.dish)};
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            <ListGroup>               
                                {renderComments(this.props.comments)}
                            </ListGroup>
                            <CommentForm postComment={this.props.postComment} dishId={this.props.dish.id}/>
                        </div>
                    </div>
                </div>
            );
        }else{
            return (
                <div></div>
            )
        }
    }

}

export default DishDetailComponentClass;