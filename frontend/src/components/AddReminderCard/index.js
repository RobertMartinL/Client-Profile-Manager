import React, { useState } from 'react'
import ReactDom from 'react-dom'
import { useClientsContext } from '../../hooks/useClientsContext'
import './addReminderCard.css'

export default function AddReminderCard({open, onClose}) {
  
    const { dispatch } = useClientsContext()
    
    const [reminders, setReminders] = useState([])
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
      e.preventDefault()

      const reminders = {reminders}

      const response = await fetch('/api/clients', {
        method: 'PATCH',
        body: JSON.stringify(reminders),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()

      if (!response.ok) {
        setError(json.error)
      }

      if (response.ok) {
        setError(null)
        console.log('new reminder added', json)
        dispatch({type: 'ADD_REMINDER', payload: json})
        onClose()
      }
      
    }

    if (!open) return null

  return ReactDom.createPortal(
    <div className='where'>
      <form className='create' onSubmit={handleSubmit}>
      
      <h2 id='addClientH2'>Add A Reminder</h2>
    
    <div className='modalBody'>
    
        <label><br/>New Reminder:</label>
        <input
            type="text"
            onChange={(e) => setReminders(e.target.value)}
            value={reminders}
        />

    </div> 
    <div className='modalBtns'>
      <button id='submitClientBtn'>Submit</button>
      <button id='cancelBtn'  onClick={onClose}>Cancel</button>
    </div>
    {error && <div className='error'>{error}</div>}
    </form>
      
    </div>,
    document.getElementById('portal')
  )
}
