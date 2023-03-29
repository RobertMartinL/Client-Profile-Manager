import React from 'react'
import './clientDetails.css'

const ClientDetails = ({ client }) => {

  return (
    <div className='clientDetails'>
        <h3 className='clientName'>{client.name}</h3>
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
        <p className='clientSince'>Client since {client.createdAt}</p>
    </div>
  )
}

export default ClientDetails
