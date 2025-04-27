import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SchoolPage from './pages/SchoolPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
     
     { /* pass to the SchoolPage component the prop "course" with the value "3i" */}
      <Route path="/programma-elettorale/3i" element={<SchoolPage school="3i" />} />
      <Route path="/programma-elettorale/AUIC" element={<SchoolPage school="AUIC" />} />
      <Route path="/programma-elettorale/ICAT" element={<SchoolPage school="ICAT" />} />
      <Route path="/programma-elettorale/Design" element={<SchoolPage school="Design" />} />
    
      {/* Add other routes as needed */}
    </Routes>
  );
}

export default App;