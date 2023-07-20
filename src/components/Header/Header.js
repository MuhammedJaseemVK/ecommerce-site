import React from 'react'
import './Header.css';

function Header() {
  return (
    <header className='header'>
        <h1>MJ store</h1>
        <button className='logout-btn'>Logout</button>
    </header>
  )
}

export default Header