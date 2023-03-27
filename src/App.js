
import { Routes, Route } from "react-router";
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import ClientList from './components/ClientList'
import Reminders from './components/Reminders'
import Lists from './components/Lists'
import UserGuide from './components/UserGuide'

function App() {
  return (
    <>
      < Header/>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/clients" element={<ClientList/>} />
        <Route path="/reminders" element={<Reminders/>} />
        <Route path="/lists" element={<Lists/>} />
        <Route path="/userGuide" element={<UserGuide/>} />
      </Routes>

      < Footer/>
    </>
  );
}

export default App;
