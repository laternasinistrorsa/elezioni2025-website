import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SchoolPage from './pages/SchoolPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/programma-elettorale/3i" element={<SchoolPage />} />
      {/* Add other routes as needed */}
    </Routes>
  );
}

export default App;