import React from 'react'
import {Link} from "react-router-dom"
import "../../../styles/App.css"
import MyButton from '../button/MyButton'


const Navbar = () => {
  return (
        <div className="navbar">
        <MyButton>Exit</MyButton>

        <div className="navbar__link">
      <Link to="/about">About</Link>
      <Link to="/posts">Posts</Link>

   
  </div>
   
    </div>
  )
}

export default Navbar
