import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginRouting from './Components/LoginRouting';
import PageLayout from './Components/PageLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<LoginRouting />} />
        <Route path="/app/*" element={<PageLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
