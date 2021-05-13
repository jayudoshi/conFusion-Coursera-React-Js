import React, { Component } from "react";
import {
  Card,
  CardImgOverlay,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import DishDetail from "./DishDetailComponentClass";
import { Link, Route } from "react-router-dom";
import LoadingComponent from "./LoadingComponent";
class MenuClass extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Link to={`/menu/${dish.id}`}>
            <Card key={dish.id}>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay>
                <CardTitle className="h3">{dish.name}</CardTitle>
              </CardImgOverlay>
            </Card>
          </Link>
        </div>
      );
    });

    if (this.props.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <LoadingComponent />
          </div>
        </div>
      );
    } else if (this.props.errMsg) {
      return (
        <div className="container">
          <div className="row">
            <h3>{this.props.errMsg}</h3>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Menu</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>Menu</h3>
              <hr />
            </div>
          </div>
          <div className="row">{menu}</div>
        </div>
      );
    }
  }
}

export default MenuClass;
