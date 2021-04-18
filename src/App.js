import React from 'react';
import { Navbar , NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/Menu';
import MenuClass from './components/MenuClass'

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
      <MenuClass/>
    </div>
  );
}

export default App;
