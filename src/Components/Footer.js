import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#B31B1B',
      textAlign: 'center',
      padding: '5px 0',
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      height: '20px',
      zIndex: 1100,
      color: 'white',
    }}>
      <h3 style={{ margin: 0, fontSize: '12px', color: 'white' }}>@ Copy Rights Reserved MSWD</h3>
    </footer>
  );
};

export default Footer