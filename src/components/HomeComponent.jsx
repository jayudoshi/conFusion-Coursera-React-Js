import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import LoadingComponent from './LoadingComponent'
import {baseUrl} from '../shared/baseURL';
import {FadeTransform} from 'react-animation-components'

function RenderCard({isLoading , errMsg , item}) {
    if(isLoading){
        return <div className="conatiner">
            <div className="row">
                <LoadingComponent />
            </div>
        </div>
    }else if(errMsg){
        return <div className="conatiner">
            <div className="row">
                <h3>{errMsg}</h3>
            </div>
        </div>
    }else{
        return(
            <FadeTransform in 
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle><h3>{item.name}</h3></CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
    }
}

function Home(props) {
    
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard  item={props.dish} isLoading={props.dishLoading} errMsg={props.dishErrMsg} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} isLoading = {props.promosLoading} errMsg = {props.promosErrMsg} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leaders} isLoading={props.leadersLoading} errMsg={props.leadersErrMsg} />
                </div>
            </div>
        </div>
    );
 }

export default Home;