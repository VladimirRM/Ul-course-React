import React,{useState} from 'react';
import './index.css'
import "./styles/App.css"
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/UI/AppRouter';
import { AuthContext } from './Router/context';

function App() {
  const [isAuth,setIsAuth]= useState(false)
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
  <BrowserRouter>
  <Navbar/>
<AppRouter/>

  </BrowserRouter>
    </AuthContext.Provider>


  )
}



export default App ;
