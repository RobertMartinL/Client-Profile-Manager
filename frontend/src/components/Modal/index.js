import React, { useState } from 'react'
import ReactDom from 'react-dom'
import { useClientsContext } from '../../hooks/useClientsContext'
import './modal.css'

export default function Modal({open, onClose}) {
  
    const { dispatch } = useClientsContext()
    const [name, setName] = useState('')
    const [primaryContact, setprimaryContact] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [balance, setBalance] = useState('')
    // const [reminders, setReminders] = useState([])
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
      e.preventDefault()

      const client = {name, primaryContact, phone, email, balance}

      const response = await fetch('/api/clients', {
        method: 'POST',
        body: JSON.stringify(client),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()

      if (!response.ok) {
        setError(json.error)
      }

      if (response.ok) {
        setName('')
        setprimaryContact('')
        setPhone('')
        setEmail('')
        setBalance('')
        setError(null)
        console.log('new client added', json)
        dispatch({type: 'CREATE_CLIENT', payload: json})
        onClose()
      }
      
    }

    if (!open) return null

  return ReactDom.createPortal(
    <div className='where'>
      <form className='create' onSubmit={handleSubmit}>
      
      <h2 id='addClientH2'>Add A Client</h2>
    
    <div className='modalBody'>
    
        <label><br/>Client Name:</label>
        <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
        />

        <label><br/>Primary Contact Name:</label>
        <input
            type="text"
            onChange={(e) => setprimaryContact(e.target.value)}
            value={primaryContact}
        />

        <label><br/>Phone Number:</label>
        <input
            type="number"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
        />

        <label><br/>Email:</label>
        <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
        />

        <label><br/>Balance ($):</label>
        <input
            type="number"
            onChange={(e) => setBalance(e.target.value)}
            value={balance}
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
