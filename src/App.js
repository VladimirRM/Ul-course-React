import React from 'react';
import './index.css'
import About from './pages/About';
import Posts from './pages/Posts';

import "./styles/App.css"
import {BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
  <BrowserRouter>
  <Route path='/about'>
    <About />
  </Route>
  <Route path='/posts'>
    <Posts />
  </Route>
  </BrowserRouter>

  )
}



export default App ;
