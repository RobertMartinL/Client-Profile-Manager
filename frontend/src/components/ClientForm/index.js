import React, { useState } from 'react'
import ReactDom from 'react-dom'
import './clientForm.css'

const ClientForm = ({open, onClose}) => {
  
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
      }
    }

  if (!open) return null
  return ReactDom.createPortal(
    <>
    <form className='create' onSubmit={handleSubmit}>
      <h3>Add A Client</h3>

    <label>Client Name:</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

    <label>Primary Contact Name:</label>
      <input
        type="text"
        onChange={(e) => setprimaryContact(e.target.value)}
        value={primaryContact}
      />

    <label>Phone Number:</label>
      <input
        type="number"
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
      />

    <label>Email:</label>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

    <label>Balance:</label>
      <input
        type="number"
        onChange={(e) => setBalance(e.target.value)}
        value={balance}
      />

      <button>Submit</button>
      {error && <div className='error'>{error}</div>}
    </form>

    {/* <button onClick={onClose}>close</button> */}

    </>,
    // document.getElementById('portal')
  )
}

export default ClientForm