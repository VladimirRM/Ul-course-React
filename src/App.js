import React from 'react';
import './index.css'
import About from './pages/About';
import Posts from './pages/Posts';
import Error from './pages/Error';
import "./styles/App.css"
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
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
  <Route path='/error'>
    <Error />
  </Route>
    <Redirect  to='/error'/>
  </Switch>

  </BrowserRouter>

  )
}



export default App ;
