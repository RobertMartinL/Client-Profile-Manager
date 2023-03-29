import React from 'react'
import  { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <div className='headerContainer'>
        <div className='welcome'>
            <h1>
            <Link to="/">Welcome To OneTrack</Link>
            </h1>
            <h2>
                Your companies organizational guide to success
            </h2>
        </div>
        <nav>
           <ul>
            <li><Link to="/ClientPage"><p>Clients</p></Link></li>
            <li><Link to='/Reminders'><p>Reminders</p></Link></li>
            <li><Link to='/Lists'><p>Lists</p></Link></li>
            <li><Link to='/UserGuide'><p>User Guide</p></Link></li>
           </ul>
        </nav>
    </div>
  )
}

export default Header