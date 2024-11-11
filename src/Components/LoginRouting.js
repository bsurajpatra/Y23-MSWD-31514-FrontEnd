import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Dashboard from './Dashboard';  // Assuming you have a dashboard component
import PageLayout from './PageLayout';  // Assuming you have a PageLayout component

function LoginRouting() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin" />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/app/*" element={<PageLayout />} />
    </Routes>
  );
}

export default LoginRouting;
