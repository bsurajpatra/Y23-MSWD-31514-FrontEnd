import React, { useState } from 'react';
import FeedBackForm from './FeedBackForm';

const Feedback = () => {
  const [data, setData] = useState([]);

  const handleNewFeedback = (newFeedback) => {
    setData([...data, newFeedback]);
  };

  const pageStyle = { 
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#FFFFFF',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', 
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const tableStyle = {
    minWidth: '150%',
    maxWidth: '150%',
    borderCollapse: 'collapse',
    backgroundColor: '#fff',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    marginTop: '20px'
  };

  const headingStyle = {
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px'
  };

  const thStyle = {
    backgroundColor: '#Black',
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
      <h1 style={headingStyle}>Feedback Collection</h1>
      <FeedBackForm onSubmit={handleNewFeedback} /> 

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Course</th>
            <th style={thStyle}>Speaking Skills Rating</th>
            <th style={thStyle}>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {data.map((feedback, index) => (
            <tr key={index} style={index % 2 === 0 ? trEvenStyle : {}}>
              <td style={tdStyle}>{feedback.name}</td>
              <td style={tdStyle}>{feedback.course}</td>
              <td style={tdStyle}>{feedback.type}</td>
              <td style={tdStyle}>{feedback.suggestion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Feedback;