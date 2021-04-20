import React, { Component } from 'react';
import MenuClass from './MenuClass'
import DishDetailComponentClass from './DishDetailComponentClass';
import Dishes from '../shared/dishes'
import Header from './HeaderClass';
import Footer from './FooterComponent';

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
                <Header />
                <MenuClass dishes={this.state.dishes} onClick={this.handleClick} />
                <DishDetailComponentClass dish={this.sendDish()} />
                <Footer />>
            </div>           
        );
    }

}

export default MainClass