import React from 'react';
import KLUlogo from './klulogo.png';

const Header = () => {
  const headerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    position: 'fixed',
    top: 0,
    zIndex: 1300,
  };

  const lineStyle = {
    height: '2px', 
    backgroundColor: '#B31B1B', 
    width: '100%', 
  };

  const upperBarStyle = {
    backgroundColor: 'lightgrey',
    padding: '5px',
    textAlign: 'center',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', 
  };

  const logoContainerStyle = {
    position: 'absolute', 
    left: '10px', 
    height: '100%', 
    display: 'flex',
    alignItems: 'center', 
  };

  const lowerBarStyle = {
    backgroundColor: '#B31B1B',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
    height: '40px',
  };

  const logoStyle = {
    maxWidth: '150px', 
    maxHeight: '100px', 
    marginRight: '10px', 
  };

  const headingStyle = {
    margin: 0,
    fontSize: '1.5rem',
    color: 'black',
  };

  return (
    <header style={headerStyle}>
      <div style={lineStyle}></div> 
      <div style={upperBarStyle}>
        <div style={logoContainerStyle}>
          <img src={KLUlogo} alt="KLU logo" style={logoStyle} /> 
        </div>
        <h1 style={headingStyle}>Student Portal - <i>ERP</i></h1>
      </div>
      <div style={lowerBarStyle}>
      </div>
    </header>
  );
};

export default Header;
