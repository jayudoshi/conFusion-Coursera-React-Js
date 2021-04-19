import React, { Component } from 'react';
import { Navbar , NavbarBrand } from 'reactstrap';
import MenuClass from './MenuClass'
import DishDetailComponentClass from './DishDetailComponentClass';
import Dishes from '../shared/dishes'

class MainClass extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            dishes : Dishes,
            selectedDish : null
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(dishId){
        this.setState({ selectedDish: dishId});
    }

    sendDish(){
        const dish = this.state.dishes.filter((dish)=>{
            return dish.id === this.state.selectedDish;
        })[0];
        console.log(dish);
        return dish;
    }

    render(){
        return(
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <MenuClass dishes={this.state.dishes} onClick={this.handleClick} />
                <DishDetailComponentClass dish={this.sendDish()} />
            </div>           
        );
    }

}

export default MainClass