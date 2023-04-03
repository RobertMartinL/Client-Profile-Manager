import React from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import './clientDetails.css'

const ClientDetails = ({ client }) => {

  return (
    <div className='clientDetails'>
        <h3 className='clientName'>{client.name}</h3>
        <h4>Current Balance: ${client.balance}</h4>
        <div className='clientBody'>
          <div className='clientReminders'>
            <h4>Reminders</h4>
              {client.reminders && client.reminders.length > 0 ? (
                <div>
                  {client.reminders.map((item) => (
                    <p key={item}>
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </p>
                  ))}
                </div>
              ) : (
                <p>No Reminders</p>
              )}
          </div>
          <div className='contactInfo'>
            <h4>Contact Info</h4>
            <p>Primary Contact: {client.primaryContact}</p>
            <p>Phone: {client.phone}</p>
            <p>Email: {client.email}</p>
          </div>
          <div className='editIcon'>
            < AiFillEdit />
          </div>
          <div className='deleteIcon'>
            < AiFillDelete />
          </div>
        </div>
        <p className='clientSince'>Client since {client.createdAt}</p>
    </div>
  )
}

export default ClientDetails

