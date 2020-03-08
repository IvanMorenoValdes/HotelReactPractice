import React from 'react';
//import logo from './logo.svg';
import './App.css';

import {Home} from './Pages/Home'
import Error from './Pages/Error'
import SingleRoom from './Pages/SingleRoom'
import {Room} from './Pages/Room'

import Navbar from './components/Navbar'
import {Route, Switch} from 'react-router-dom'
import {FaAlignRight} from 'react-icons/fa'
function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/single-room" component={SingleRoom}/>
      <Route exact path="/rooms" component={Room}/>
      <Route component={Error}/>
    </Switch>
    </>

  )
}

export default App;
