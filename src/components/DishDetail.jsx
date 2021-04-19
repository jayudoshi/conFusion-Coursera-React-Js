import React from 'react';
import { Card , CardBody , CardImg , CardTitle , CardText , ListGroup , ListGroupItem } from 'reactstrap'
function DishDetail(props){

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
                    <p>-- {comment.author} , {comment.date}</p>
                </ListGroupItem>
            );
        })
    }

    return(
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                {renderDish(props.dish)}
            </div>
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ListGroup>
                    {renderComments(props.dish.comments)}
                </ListGroup>
            </div>
        </div>
    );

}

export default DishDetail;