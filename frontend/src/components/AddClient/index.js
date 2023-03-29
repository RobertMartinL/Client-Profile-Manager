import React from "react";
import { useEffect , useState } from 'react'
import { SiHandshake } from "react-icons/si";
import "./addClient.css";

const AddClient = () => {

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
    <div className="addClient">
      <h2>User Business Name</h2>
      <div className="icon-container">
        <  SiHandshake />
        {/* {clients.length} */}
      </div>
      <button className="addClientBtn">Add New Client</button>
    </div>
  );
};

export default AddClient;
