import { BrowserRouter , Routes , Route } from "react-router-dom";

//pages//
import Home from './pages/Home'
import Reminders from "./pages/Reminders";
import Lists from "./pages/Lists";
import UserGuide from "./pages/UserGuide";

//components//
import Header from "./components/Header";
import ClientList from "./components/ClientList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route 
              path='/'
              element={<Home />}
            />
            <Route 
              path='/clients'
              element={<ClientList />}
            />
            <Route 
              path='/reminders'
              element={<Reminders />}
            />
            <Route 
              path='/lists'
              element={<Lists />}
            />
            <Route 
              path='/userGuide'
              element={<UserGuide />}
            />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
