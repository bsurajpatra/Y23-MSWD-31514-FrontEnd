import React from 'react';

const TimeTable = () => {
  const headerRow = ['Slot', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
  const timetable = [
    ['Monday', '***', '***', 'DAA-M202', 'DAA-M202', 'NPS-R301B', 'NPS-R301B', 'MWD-C406', '***', 'DBMS-C423', '***', '***'],
    ['Tuesday', '***', '***', 'DBMS-C318A', 'DBMS-C318A', 'PSQT-C225', 'PSQT-C225', '***', 'LAA-C421B1', 'LAA-C421B1', 'DAA-M121', '***'],
    ['Wednesday', '***', '***', 'NPS-R304A', 'NPS-R304A', 'DBMS-C422', 'DBMS-C422', '***', 'MWD-C017', 'MWD-C017', 'SIL-S101', 'SIL-S101'],
    ['Thursday', '***', '***', 'LAA-M306', 'LAA-M306', 'DAA-R405B', 'DAA-R405B', '***', 'DASS-L615', 'DASS-L615', 'FE-LAB', 'FE-LAB'],
    ['Friday', '***', '***', 'PSQT-C608', 'PSQT-C608', 'LAA-C217', 'LAA-C217', '***', 'DASS-C422', 'DASS-C422', '***', '***']
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
    minWidth: '100%', 
    maxWidth: '100%', 
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
    borderBottom: '1px solid #ddd',
    textAlign: 'center' 
  };

  const trEvenStyle = {
    backgroundColor: '#f9f9f9' 
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Weekly Time Table</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            {headerRow.map((headerCell, index) => (
              <th key={index} style={thStyle}>{headerCell}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timetable.map((row, rowIndex) => (
            <tr key={rowIndex} style={rowIndex % 2 === 0 ? trEvenStyle : {}}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} style={tdStyle}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeTable;
