import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import {Home} from './components/Home';
import {Discover} from './components/Discover';
import {Shop} from './components/Shop';
import {Account} from './components/Account';


function App() {
  return (
    <Router>
        <div className='nav'>
        <nav>
          <ul>
            <li>
              <a href='/'>ARCHVE</a>
            </li>
            <li className='right'>
              <a href='/account'>ACCOUNT</a>
            </li>
            <li className='right'>
              <a href='/shop'>SHOP</a>
            </li>
            <li className='right'>
              <a href='/discover'>DISCOVER</a>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* HomePage*/}
          <Route exact path='/' Component={Home} />
          {/* DISCOVER*/}
          <Route exact path='/discover' Component={Discover} />
          {/* LOOKBOOK*/}
          <Route exact path='/shop' Component={Shop} />
          {/* ACCOUNT*/}
          <Route exact path='/account' Component={Account} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
