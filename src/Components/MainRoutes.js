import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard'; 
import Faculty from './Faculty';
import Students from './Students';
import Courses from './Courses';
import Feedback from './Feedback';
import TimeTable from './TimeTable';
import Assignments from './Assignments';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/faculty" element={<Faculty />} />
      <Route path="/students" element={<Students />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/timetable" element={<TimeTable />} />
      <Route path="/assignments" element={<Assignments />} />
    </Routes>
  );
}