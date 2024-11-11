import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginRouting from './Components/LoginRouting'; 

function App() {
  return (
    <Router>
      <LoginRouting />
    </Router>
  );
}

export default App;
