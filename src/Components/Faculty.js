import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Faculty = () => {
  const [faculties, setFaculties] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [designation, setDesignation] = useState('');
  const [department, setDepartment] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const res = await axios.get('http://localhost:3001/api/faculties/allfaculties');
        setFaculties(res.data);
      } catch (error) {
        console.error('Error fetching faculties:', error);
        setMessage('Error fetching faculties: ' + error.message);
      }
    };
    fetchFaculties();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/api/faculties/register', { name, email, designation, department });
      setMessage(res.data.message);
      if (res.status === 201) {
        setFaculties(prevFaculties => [...prevFaculties, res.data.data]);
        setName('');
        setEmail('');
        setDesignation('');
        setDepartment('');
      }
    } catch (error) {
      console.error('Error details:', error);
      setMessage('Error registering faculty: ' + (error.response && error.response.data ? error.response.data.message : error.message));
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Register Faculty</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input
          type="text"
          placeholder="Designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          required
          style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
          style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '10px', fontSize: '16px', backgroundColor: '#B31B1B', color: '#fff', border: 'none', borderRadius: '4px' }}>
          Register
        </button>
      </form>
      {message && <p>{message}</p>}

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <caption><h2>Faculty Details</h2></caption>
        <thead>
          <tr style={{ backgroundColor: '#B31B1B', color: '#fff' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Name</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Email</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Designation</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Department</th>
          </tr>
        </thead>
        <tbody>
          {faculties.map((faculty, index) => (
            <tr key={index}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{faculty.name}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{faculty.email}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{faculty.designation}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{faculty.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Faculty;