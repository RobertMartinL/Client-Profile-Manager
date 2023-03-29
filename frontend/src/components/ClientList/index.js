import React from 'react'
import { useEffect , useState } from 'react'
import ClientDetails from '../ClientDetails'
import './clientList.css'

const ClientList = () => {
  const [clients, setClients] = useState(null)

  useEffect(() => {
    const fetchClients = async () => {
      const response = await fetch('/api/clients')
      const json = await response.json()

      if (response.ok) {
        setClients(json)
      }
    }

    fetchClients()
  }, [])
    
  return (
    <div className='ClientList'>
        <h2>
            Clients
        </h2>
        {clients && clients.map((client) => (
          <ClientDetails key={client._id} client={client} />
        ))}
    </div>
  )
}

export default ClientList