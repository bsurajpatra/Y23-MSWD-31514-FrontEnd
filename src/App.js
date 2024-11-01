import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LoginRouting from './Components/LoginRouting';

function App() {
  return (
    <BrowserRouter>
      <LoginRouting />
    </BrowserRouter>
  );
}

export default App;