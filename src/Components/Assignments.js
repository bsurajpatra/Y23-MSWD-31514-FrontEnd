import React from 'react';

const Assignments = () => {
  const assignments = [
    { subject: 'DAA', dueDate: '2024-08-15', grading: 'A+', type: 'Skill' },
    { subject: 'DBMS', dueDate: '2024-08-20', grading: 'A', type: 'ALM' },
    { subject: 'NPS', dueDate: '2024-08-25', grading: 'B+', type: 'Home Assignment' },
    { subject: 'PSQT', dueDate: '2024-08-30', grading: 'A-', type: 'Tutorial' },
    { subject: 'LAA', dueDate: '2024-09-05', grading: 'B', type: 'ALM' }
  ];

  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#FFFFFF',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const tableStyle = {
    minWidth: '150%', // Set minimum width to 150%
    maxWidth: '150%', // Cap the maximum width at 150%
    borderCollapse: 'collapse',
    backgroundColor: '#fff',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px'
  };

  const thStyle = {
    backgroundColor: '#B31B1B',
    color: '#fff',
    padding: '15px',
    textAlign: 'left'
  };

  const tdStyle = {
    padding: '15px',
    borderBottom: '1px solid #ddd'
  };

  const trEvenStyle = {
    backgroundColor: '#f9f9f9'
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Assignments</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Subject</th>
            <th style={thStyle}>Due Date</th>
            <th style={thStyle}>Grading</th>
            <th style={thStyle}>Type</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment, index) => (
            <tr key={index} style={index % 2 === 0 ? trEvenStyle : {}}>
              <td style={tdStyle}>{assignment.subject}</td>
              <td style={tdStyle}>{assignment.dueDate}</td>
              <td style={tdStyle}>{assignment.grading}</td>
              <td style={tdStyle}>{assignment.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Assignments;