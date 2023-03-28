import React from 'react'
import { useEffect , useState } from 'react'
import './clientList.css'

const ClientList = () => {
  const [clients, setClients] = useState(null)

  useEffect(() => {
    const fetchClients = async () => {
      const response = await fetch('http://localhost:4000/api/clients')
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
          <p key={client._id}>{client.name}</p>
        ))}
    </div>
  )
}

export default ClientList