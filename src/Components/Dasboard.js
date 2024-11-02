import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/dashboard/profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error:', error);
        localStorage.removeItem('token');
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <h2>Dashboard</h2>
        <button onClick={handleLogout} style={styles.logoutButton}>
          Logout
        </button>
      </nav>
      
      <div style={styles.content}>
        <div style={styles.welcomeSection}>
          <h1>Welcome, {userData?.firstName} {userData?.lastName}</h1>
          <p>Role: {userData?.role}</p>
        </div>

        <div style={styles.mainContent}>
          <div style={styles.card}>
            <h3>Quick Stats</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5'
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  logoutButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#B31B1B',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  content: {
    padding: '2rem'
  },
  welcomeSection: {
    marginBottom: '2rem'
  },
  mainContent: {
    display: 'grid',
    gap: '2rem'
  },
  card: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }
};

export default Dashboard;