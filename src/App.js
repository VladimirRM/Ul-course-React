import React from 'react';
import './index.css'
import About from './pages/About';
import Posts from './pages/Posts';
import Error from './pages/Error';
import "./styles/App.css"
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/UI/AppRouter';

function App() {
  return (
  <BrowserRouter>
  <Navbar/>
<AppRouter/>

  </BrowserRouter>

  )
}



export default App ;
