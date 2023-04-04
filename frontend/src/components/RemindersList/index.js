import React from 'react'
import { useEffect } from 'react'
import RemindersDetails from '../RemindersDetails'
import { useClientsContext } from '../../hooks/useClientsContext'
import './remindersList.css'

const RemindersList = () => {
  const { clients, dispatch } = useClientsContext()

  useEffect(() => {
    const fetchClients = async () => {
      const response = await fetch('/api/clients')
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_CLIENTS', payload: json })
      }
    }

    fetchClients()
  }, [dispatch])

  const clientsWithReminders = clients.filter(
    (client) => client.reminders && client.reminders.length > 0
  )
  const clientsWithoutReminders = clients.filter(
    (client) => !client.reminders || client.reminders.length === 0
  )

  return (
    <div className='RemindersList'>
      <h2>Clients</h2>
      {clientsWithReminders
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((client) => (
          <RemindersDetails key={client._id} client={client} />
        ))}
      {clientsWithoutReminders
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((client) => (
          <RemindersDetails key={client._id} client={client} />
        ))}
    </div>
  )
}

export default RemindersList
