import React from 'react';
import { Navbar , NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/Menu';
import MenuClass from './components/MenuClass'
import Dishes from './shared/dishes'

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={Dishes} />
      <MenuClass dishes={Dishes} />
    </div>
  );
}

export default App;
