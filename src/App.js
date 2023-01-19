
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/common/navbar/Navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Agency from './components/pages/About/our agency/Agency';
import Services from './components/pages/About/our services/Services.jsx';
import Footer from './components/common/footer/Footer';
import Clients from './components/pages/About/clients/Clients';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/agency' element={<Agency />}></Route>
          <Route exact path='/services' element={<Services />}></Route>
          <Route exact path='/clients' element={<Clients />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
