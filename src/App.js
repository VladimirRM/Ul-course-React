import React from 'react';
import './index.css'
import "./styles/App.css"
import {BrowserRouter} from 'react-router-dom'
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
