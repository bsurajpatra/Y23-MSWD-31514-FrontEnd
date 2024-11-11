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
      <Route path="/app/dashboard" element={<Dashboard />} />
      <Route path="/app/faculty" element={<Faculty />} />
      <Route path="/app/students" element={<Students />} />
      <Route path="/app/courses" element={<Courses />} />
      <Route path="/app/feedback" element={<Feedback />} />
      <Route path="/app/timetable" element={<TimeTable />} />
      <Route path="/app/assignments" element={<Assignments />} />
    </Routes>
  );
}
