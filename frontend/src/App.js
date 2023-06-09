import { Routes , Route } from "react-router-dom";

//pages//
import Home from './pages/Home';
import ClientPage from './pages/ClientPage'
import RemindersPage from "./pages/RemindersPage";
import Lists from "./pages/Lists";
import UserGuide from "./pages/UserGuide";

//components//
import Header from "./components/Header";
// import ClientList from "./components/ClientList";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
        {/* <div className='pages'> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/ClientPage" element={<ClientPage />} />
            <Route path='/RemindersPage' element={<RemindersPage />} />
            <Route path='/Lists' element={<Lists />} />
            <Route path='/UserGuide' element={<UserGuide />} />
          </Routes>
        {/* </div> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
