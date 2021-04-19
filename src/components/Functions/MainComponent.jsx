import React , {useState} from 'react';
import Dishes from '../../shared/dishes'
import DishDetail from './DishDetail';
import Menu from './Menu';
import { Navbar , NavbarBrand } from 'reactstrap'

function Main(){
    const [dishes,setDishes] = useState(Dishes);
    const [selectedDish , setSelectedDish] = useState(null);

    function handleClick(dishId){
        setSelectedDish(dishId);
    }

    function selectDish(){
        return dishes.filter((dish)=>{
            return dish.id === selectedDish;
        })[0];
    }

    return(
        <div className="App">
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
            <Menu dishes={dishes} onClick={handleClick}/>
            <DishDetail dish={selectDish()} />
        </div>
    );

}

export default Main;