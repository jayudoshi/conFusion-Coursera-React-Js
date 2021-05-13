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
import {addComments,fetchDishes} from '../redux/ActionCreators'

const mapDispatchToProps = (dispatch) => {
    return {
        addComments: (dishId , rating , author , comment)=> { 
            dispatch(addComments(dishId , rating , author , comment)) 
        },

        fetchDishes: () => {dispatch(fetchDishes())}

    }
}

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

    componentDidMount(){
        this.props.fetchDishes();
    }

    dishWithId = ({match})=>{ 
        return (
            <DishDetailComponentClass dish={
                this.props.dishes.dishes.filter( dish => dish.id === parseInt(match.params.dishId))[0]
                }
                isLoading={this.props.dishes.isLoading}
                errMsg={this.props.dishes.errMsg}
                comments={
                    this.props.comments.filter(comment => comment.dishId === parseInt(match.params.dishId))
                    }
                addComments = {this.props.addComments}
            />
        );
    }

    render(){
        return(
            <div className="App">
                <Header />
                <Switch>
                    <Route path='/home' component={()=>{
                        return <Home dish = {this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                            isLoading={this.props.dishes.isLoading}
                            errMsg={this.props.dishes.errMsg}
                            promotion = {this.props.promotions.filter((promotion) => promotion.featured)[0]}
                            leader = {this.props.leaders.filter((leader) => leader.featured)[0]}
                        />
                        }
                    }
                    />
                    <Route exact path='/menu' component={()=>{
                        return <MenuClass dishes={this.props.dishes.dishes} 
                                isLoading={this.props.dishes.isLoading}
                                errMsg={this.props.dishes.errMsg}
                            />;
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainClass)) 