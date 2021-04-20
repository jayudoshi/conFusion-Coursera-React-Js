import React from 'react';
import './App.css';
import MainClass from './components/MainComponentClass';
import 'font-awesome/css/font-awesome.css'
import 'bootstrap-social/bootstrap-social.css'
import {BrowserRouter as Router} from 'react-router-dom'
// import Main from './components/Functions/MainComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <MainClass />
        {/* <Main /> */}
      </div>
    </Router>
  );
}

export default App;
