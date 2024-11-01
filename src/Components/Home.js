import React from 'react';

const Home = () => {
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

  const paragraphStyle = { 
    color: 'black',
    fontSize: '20px',
  };

  return (
    <div style={pageStyle}>
      <p style={paragraphStyle}>
        Welcome 2300031514
      </p>
    </div>
  );
};

export default Home;