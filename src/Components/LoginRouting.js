// client/src/Components/LoginRouting.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Dashboard from './Dashboard';

function LoginRouting() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default LoginRouting;