import React from 'react';
import './App.css';
import MainClass from './components/MainComponentClass';
import 'font-awesome/css/font-awesome.css'
import 'bootstrap-social/bootstrap-social.css'
import {BrowserRouter as Router} from 'react-router-dom'
import {ConfigureStore} from './redux/configureStore'
import {Provider} from 'react-redux'
// import Main from './components/Functions/MainComponent';

const store = ConfigureStore()

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <MainClass />
          {/* <Main /> */}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
