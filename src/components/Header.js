import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='navbar'>
      <NavLink className='nav-link' to='/'>Home</NavLink>
      <NavLink className='nav-link' to='/search'>Search</NavLink>
    </nav>
  )
}

export default Header