import React from "react";
import AddClient from "../AddClient";
import ClientList from "../ClientList";
import './home.css'

const Home = () => {
  return (
    <>
      <div className='homeContainer'>
        <AddClient />
        < ClientList/>
      </div>
    </>
  );
};

export default Home;
