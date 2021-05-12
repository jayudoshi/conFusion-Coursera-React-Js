import React , {Component} from 'react';
import {Card , CardTitle , CardImg , CardBody , CardText , ListGroup , ListGroupItem , Breadcrumb , BreadcrumbItem, Button} from 'reactstrap'
import {Link} from 'react-router-dom';
import CommentForm from './CommentForm';
class DishDetailComponentClass extends Component{

    constructor(props){
        super(props);
    }

    render(){

        function renderDish(dish){
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle className="h5">{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }

        function renderComments(comments){
            return comments.map((comment)=>{
                return(
                    <ListGroupItem className="border-0 p-0" key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </ListGroupItem>
                );
            })
        }

        if(this.props.dish != null){
            console.log(this.props.dish);
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
                            <CommentForm />
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