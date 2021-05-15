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
import {postComment,fetchDishes,fetchComments,fetchPromos} from '../redux/ActionCreators'
import {actions} from 'react-redux-form'
import {TransitionGroup , CSSTransition} from 'react-transition-group'

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDishes: () => {dispatch(fetchDishes())},

        fetchComments: () => {dispatch(fetchComments())},
        postComment: (dishId , rating , author , comment)=> { 
            dispatch(postComment(dishId , rating , author , comment)) 
        },

        fetchPromos: () => {dispatch(fetchPromos())},

        resetFeedbackForm: () => {dispatch(actions.reset('feedback'))}
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
        this.props.fetchPromos();
        this.props.fetchComments();
    }

    dishWithId = ({match})=>{ 
        return (
            <DishDetailComponentClass dish={ this.props.dishes.dishes.filter( dish => dish.id === parseInt(match.params.dishId))[0]}
                dishLoading={this.props.dishes.isLoading}
                dishErrMsg={this.props.dishes.errMsg}
                comments={ this.props.comments.comments.filter(comment => comment.dishId === parseInt(match.params.dishId))}
                commentsLoading={this.props.comments.isLoading}
                commentsErrMsg={this.props.comments.errMsg}
                postComment = {this.props.postComment}
            />
        );
    }

    render(){
        return(
            <div className="App">
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames='page' timeout={1000}>
                        <Switch>
                            <Route path='/home' component={()=>{
                                return <Home dish = {this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                                    dishLoading={this.props.dishes.isLoading}
                                    dishErrMsg={this.props.dishes.errMsg}
                                    promotion = {this.props.promotions.promos.filter((promotion) => promotion.featured)[0]}
                                    promosLoading={this.props.promotions.isLoading}
                                    promosErrMsg={this.props.promotions.errMsg}
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
                            <Route exact path='/contactus' component={() => <ContactUsTrial resetFeedbackForm={this.props.resetFeedbackForm}/>}/>
                            <Route path='/aboutus' component={()=> <About leaders={this.props.leaders} /> } />
                            <Redirect to='/home' />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>           
        );
    }

}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainClass)) 