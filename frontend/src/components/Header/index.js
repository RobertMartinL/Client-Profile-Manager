import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='headerContainer'>
        <div className='welcome'>
            <h1>
                Welcome To OneTrack
            </h1>
            <h2>
                Your companies organizational guide to success
            </h2>
        </div>
        <nav>
           <ul>
            <li><Link to='clients' /><li>
            <li><Link to='reminders' /></li>
            <li><Link to='lists' /></li>
            <li><Link to='userGuide' /></li>
           </ul>
        </nav>
    </div>
  )
}

export default Header