import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Reception from './Reception';
import Doctor from './Doctor';
import Patient from './Patient';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 font-sans text-gray-100">
        <Navbar />
        <main className="py-10 px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Navigate to="/reception" replace />} />
            <Route path="/reception" element={<Reception />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/patient" element={<Patient />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
