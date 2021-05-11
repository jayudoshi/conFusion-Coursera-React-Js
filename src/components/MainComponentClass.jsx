import React, { Component, useLayoutEffect } from 'react';
import MenuClass from './MenuClass'
import DishDetailComponentClass from './DishDetailComponentClass';
import Header from './HeaderClass';
import Footer from './FooterComponent';
import { Switch , Route , Redirect ,withRouter } from 'react-router-dom'
import Home from './HomeComponent';
import { Collapse } from 'bootstrap';
// import ContactUs from './ContactUs';
import About from './AboutUs';
import ContactUsTrial from './ContactUsTrial';
import {connect} from 'react-redux'

const mapStateToProps = (state) =>{
    return {
        dishes: state.dishes,
        comments : state.comments,
        promotions : state.promotions,
        leaders : state.leaders
    }
}

class MainClass extends Component{
    
    constructor(props){
        super(props);
    }

    dishWithId = ({match})=>{ 
        console.log(this.props.dishes)       
        return (
            <DishDetailComponentClass dish={
                this.props.dishes.filter( dish => dish.id === parseInt(match.params.dishId))[0]
                }
            comments={
                this.props.comments.filter(comment => comment.dishId === parseInt(match.params.dishId))
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
                        return <Home dish = {this.props.dishes.filter((dish) => dish.featured)[0]}
                            promotion = {this.props.promotions.filter((promotion) => promotion.featured)[0]}
                            leader = {this.props.leaders.filter((leader) => leader.featured)[0]}
                        />
                        }
                    }
                    />
                    <Route exact path='/menu' component={()=>{
                        return <MenuClass dishes={this.props.dishes} />;
                    }}/>
                    <Route path='/menu/:dishId' component={this.dishWithId} />
                    <Route exact path='/contactus' component={ContactUsTrial}/>
                    <Route path='/aboutus' component={()=> <About leaders={this.props.leaders} /> } />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>           
        );
    }

}

export default withRouter(connect(mapStateToProps)(MainClass)) 