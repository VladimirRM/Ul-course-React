import React from 'react';
import './index.css'
import About from './pages/About';
import Posts from './pages/Posts';

import "./styles/App.css"
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './components/UI/Navbar/Navbar';

function App() {
  return (
  <BrowserRouter>
  <Navbar/>
  <Switch>
  <Route path='/about'>
    <About />
  </Route>
  <Route path='/posts'>
    <Posts />
  </Route>
    <Redirect/>
  </Switch>

  </BrowserRouter>

  )
}



export default App ;
