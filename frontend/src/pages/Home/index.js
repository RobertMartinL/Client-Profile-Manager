import React from "react";
import AddClient from "../../components/AddClient";
import ClientList from "../../components/ClientList";
import './home.css'

const Home = () => {
  return (
    <div className='home'>
          <AddClient />
          <ClientList />
    </div>
  );
};

export default Home;