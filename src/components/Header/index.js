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
            <li>Clients</li>
            <li>Reminders</li>
            <li>Lists</li>
            <li>User Guide</li>
           </ul>
        </nav>
    </div>
  )
}

export default Header