import React from 'react'
import "./navbar.css"
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate=useNavigate()
  return (
    <nav className='nav-bar'>
        <div className='navbar-content'>
            <label className='title' onClick={()=>{navigate("/home")}}>Blog-Site</label>
            <div className='hcac'>
            <label>Home</label>
            <label>Categories</label>
            <label>About</label>
            <label>Contact</label>
            </div>
        </div>
        <div className='navbar-info'>
          <label className='line'>Let's do it Together</label>
          <label>We Travel and We Experience, Its time Share it.</label>
          <button className='post' onClick={()=>{navigate("/postblog")}}>Post Blog</button>
        </div>
    </nav>
  )
}
