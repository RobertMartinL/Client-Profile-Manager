import React from "react";
import { useEffect , useState } from 'react'
import { SiHandshake } from "react-icons/si";
// import ClientForm from "../ClientForm";
import Modal from '../../components/Modal'
import "./addClient.css";

const AddClient = (displayedClients) => {

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

  const [isOpen, setIsOpen] = useState(false)

  return (
    
    <div className="addClient">
      <h2>User Business Name</h2>
      <div className="icon-container">
        <div className="test">
        <  SiHandshake />
        <div className="clientLengthMessage">
          {clients && <p>You have {clients.length} clients</p>}
        </div>
        </div>
      </div>
      <button onClick={() => setIsOpen(true)} className="addClientBtn">Add New Client</button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} />

    </div>
    
  );
};

export default AddClient;
