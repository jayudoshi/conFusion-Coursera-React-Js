import React, { useState } from "react";
import { Card , CardTitle , CardText , CardImg , CardImgOverlay , CardBody } from "reactstrap";

function Menu(props) {

  const menu = props.dishes.map((dish) => {
    return (      
        <Card className="col-12 col-md-5 m-2 p-0" key={dish.id} id={dish.name} 
          onClick={()=>props.onClick(dish.id)}>
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
    </div>
  );
}

export default Menu;
