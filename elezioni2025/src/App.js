import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SchoolPage from "./pages/SchoolPage";
import CentralOrgansPage from "./pages/CentralOrgansPage";
import PhDPage from "./pages/PhDPage"; // Add import for PhD page component
import { useEffect } from 'react';

function ExternalRedirect({ to }) {
  useEffect(() => {
    window.location.href = to;
  }, [to]);
  
  return <div>Redirecting...</div>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* pass to the SchoolPage component the prop "course" with the value "3i" */}
      <Route
        path="/programma-elettorale/organi-centrali"
        element={<CentralOrgansPage />}
      />
      <Route 
      path="/programma-elettorale"
      element={<Navigate to="/" replace />}
      >
        

      </Route>


      {/* School pages */}
      <Route
        path="/programma-elettorale/3i"
        element={<SchoolPage school="3i" />}
      />
      <Route
        path="/programma-elettorale/AUIC"
        element={<SchoolPage school="AUIC" />}
      />
      <Route
        path="/programma-elettorale/ICAT"
        element={<SchoolPage school="ICAT" />}
      />
      <Route
        path="/programma-elettorale/Design"
        element={<SchoolPage school="Design" />}
      />

      {/* PhD page */}
      <Route path="/programma-elettorale/dottorandi" element={<PhDPage />} />

      <Route 
        path="/programma-elettorale/cnsu" 
        element={<ExternalRedirect to="https://linktr.ee/TitoCNSU" />} 
      />

      {/* Add other routes as needed */}
    </Routes>
  );
}

export default App;
