import React, { useState } from "react";
import { Card , CardTitle , CardText , CardImg , CardImgOverlay , CardBody } from "reactstrap";
import DishDetail from './DishDetail';

function Menu(props) {
  const [dish, setDishes] = useState(null);

  function handleClick(dish){
    console.log(dish);
    setDishes(dish);
  }

  function renderDish(){
    if(dish != null){
      return (
        <DishDetail dish={dish} />        
      );
    }
  }

  const menu = props.dishes.map((dish) => {
    return (      
        <Card className="col-12 col-md-5 m-1" key={dish.id} id={dish.name} onClick={()=>{
          handleClick(dish);
        }} >
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle tag="h2">{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
    );
  });

  return (
    <div className="container">
      <div className="row">
        {menu}
      </div>
      <div>
        {renderDish()}
      </div>
    </div>
  );
}

export default Menu;
