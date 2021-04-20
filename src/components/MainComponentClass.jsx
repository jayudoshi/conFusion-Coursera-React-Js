import React, { Component, useLayoutEffect } from 'react';
import MenuClass from './MenuClass'
import DishDetailComponentClass from './DishDetailComponentClass';
import Header from './HeaderClass';
import Footer from './FooterComponent';
import { Switch , Route , Redirect } from 'react-router-dom'
import Home from './HomeComponent';
import { Collapse } from 'bootstrap';
import Dishes from '../shared/dishes'
import Comments from '../shared/comments';
import Promotions from '../shared/promotions';
import Leaders from '../shared/leader'
import ContactUs from './ContactUs';

class MainClass extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            dishes : Dishes,
            comments : Comments,
            promotions : Promotions,
            leaders : Leaders,
            selectedDish : null
        }
    }

    dishWithId = ({match})=>{        
        return (
            <DishDetailComponentClass dish={
                this.state.dishes.filter( dish => dish.id === parseInt(match.params.dishId))[0]
                }
            comments={
                this.state.comments.filter(comment => comment.dishId === parseInt(match.params.dishId))
                }
            />
        );
    }

    render(){
        return(
            <div className="App">
                <Header />
                <Switch>
                    <Route path='/home' component={()=>{
                        return <Home dish = {this.state.dishes.filter((dish)=> dish.featured)[0]}
                            promotion = {this.state.promotions.filter((promotion)=> promotion.featured)[0]}
                            leader = {this.state.leaders.filter((leader)=> leader.featured)[0]}
                        />
                        }
                    }
                    />
                    <Route exact path='/menu' component={()=>{
                        return <MenuClass dishes={this.state.dishes} />;
                    }}/>
                    <Route path='/menu/:dishId' component={this.dishWithId} />
                    <Route exact path='/contactus' component={ContactUs}/>
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>           
        );
    }

}

export default MainClass