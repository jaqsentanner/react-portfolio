import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Splash from './pages/Splash';

function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <div>
          <Routes>
            <Route path="/" element={<Splash />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
