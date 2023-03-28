import React from 'react'
import { SiHandshake } from 'react-icons/si'
import './addClient.css'

const AddClient = () => {
    
  return (
    <div className='container'>
        <div className='companyInfo'>
            <h2>Robert Martin Landscaping LLC</h2>
            <div className='icons'>
                < SiHandshake />
                <div className='clientLength'>
                    {/* <p>You have { clientLength } clients</p> */}
                </div>
            </div>
        </div>
        <div className='btnContainer'>
            <button>Add New Client</button>
        </div>
    </div>
  )
}

export default AddClient