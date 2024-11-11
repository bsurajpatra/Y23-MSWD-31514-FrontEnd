import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import backgroundImage from './background.png';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userEmail', email);
        navigate('/app'); // Updated redirect path
      
      } else {
        setError(data.message || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Unable to connect to the server. Please try again later.');
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#f4f4f4',
  };

  const formStyle = {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    width: '100%',
    maxWidth: '400px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#B31B1B',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '20px',
  };

  const errorStyle = {
    color: '#B31B1B',
    marginBottom: '10px',
    textAlign: 'center',
  };

  const linkStyle = {
    display: 'block',
    marginTop: '15px',
    textAlign: 'center',
    color: '#B31B1B',
    textDecoration: 'none',
  };

  return (
    <section style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        {error && <div style={errorStyle}>{error}</div>}
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
          />
        </div>
        <button type="submit" style={buttonStyle}>Sign in</button>
        <Link to="/signup" style={linkStyle}>Don't have an account? Sign Up</Link>
      </form>
    </section>
  );
};

export default SignIn;
