import React from 'react'
import { useClientsContext } from '../../hooks/useClientsContext'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import './clientDetails.css'

const ClientDetails = ({ client }) => {
  const { dispatch } = useClientsContext()

  const handleDelete = async () => {
    const response = await fetch('/api/clients/' + client._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_CLIENT', payload: json})
    }
  }

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
          <div className='deleteIcon' onClick={handleDelete}>
            < AiFillDelete />
          </div>
        </div>
        <p className='clientSince'>Client added {formatDistanceToNow(new Date(client.createdAt), {addSuffix: true})}</p>
    </div>
  )
}

export default ClientDetails

