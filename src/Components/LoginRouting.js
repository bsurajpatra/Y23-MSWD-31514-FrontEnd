import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import PageLayout from './PageLayout';  
function LoginRouting() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin" />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/app" element={<PageLayout />} />
    </Routes>
  );
}


export default LoginRouting;
