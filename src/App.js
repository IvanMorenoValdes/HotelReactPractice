import React from 'react';
//import logo from './logo.svg';
import './App.css';

import {Home} from './Pages/Home'
import Error from './Pages/Error'
import SingleRoom from './Pages/SingleRoom'
import {Rooms} from './Pages/Rooms'

import Navbar from './components/Navbar'
import {Route, Switch} from 'react-router-dom'
import {FaAlignRight} from 'react-icons/fa'
function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/rooms" component={Rooms}/>
      <Route exact path="/rooms/:slug" component={SingleRoom}/>
      <Route component={Error}/>
    </Switch>
    </>

  )
}

export default App;
