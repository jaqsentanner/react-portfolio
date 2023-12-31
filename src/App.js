import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Splash from './pages/Splash';
import Message from './pages/Message';
import Personal from './pages/Personal';
import Bootcamp from './pages/Bootcamp';
// import Resume from './pages/Resume';
import Frequent from './pages/FAQ';

function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <div>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/message" element={<Message />} />
            <Route path="/personalprojects" element={<Personal />} />
            <Route path="/bootcamp" element={<Bootcamp />} />
            <Route path="/faq" element={<Frequent />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
