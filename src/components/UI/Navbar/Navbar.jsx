import React from 'react'
import {Link} from "react-router-dom"
import "../../../styles/App.css"


const Navbar = () => {
  return (
    <div>
        <div className="navbar">
        <div className="navbar__link">
      <Link to="/about">About</Link>
      <Link to="/posts">Posts</Link>
    </div>
   
  </div>
   
    </div>
  )
}

export default Navbar
