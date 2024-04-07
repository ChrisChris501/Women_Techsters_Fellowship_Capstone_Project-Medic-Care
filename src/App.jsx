import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Home/Navbar';
import Home from './Components/Home/Home';
import ServicesPage from './Components/ServicesPage/ServicesPage';
import SignUpDoctors from './Components/SignUpDoctors/SignUpDoctors';
import LogIn from './Components/LogIn/LogIn';
import Footer from './Components/Home/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/servicespage" element={<ServicesPage />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUpDoctors" element={<SignUpDoctors />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
