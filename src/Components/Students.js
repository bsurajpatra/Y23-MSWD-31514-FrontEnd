import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Attendance from './Attendance';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [branch, setBranch] = useState('');
  const [year, setYear] = useState('');
  const [message, setMessage] = useState('');

  // Fetch students from MongoDB when the component mounts
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get('http://localhost:3001/api/students/allstudents'); // Updated port to 3001
        setStudents(res.data);
      } catch (error) {
        console.error('Error fetching students:', error);
        setMessage('Error fetching students: ' + error.message);
      }
    };
    fetchStudents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked");

    try {
      const res = await axios.post('http://localhost:3001/api/students/register', { id, name, email, branch, year }); // Updated port to 3001
      setMessage(res.data.message);

      if (res.status === 201) {
        // Update the students list with the newly added student
        setStudents(prevStudents => [...prevStudents, res.data.data]);
        // Clear the input fields
        setId('');
        setName('');
        setEmail('');
        setBranch('');
        setYear('');
      }
    } catch (error) {
      console.error('Error details:', error);
      setMessage('Error registering student: ' + (error.response && error.response.data ? error.response.data.message : error.message));
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Register Student</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Student ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
          style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
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
          placeholder="Branch"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          required
          style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input
          type="text"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
          style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '10px', fontSize: '16px', backgroundColor: '#B31B1B', color: '#fff', border: 'none', borderRadius: '4px' }}>
          Register
        </button>
      </form>
      {message && <p>{message}</p>}

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <caption><h2>Student Details</h2></caption>
        <thead>
          <tr style={{ backgroundColor: '#B31B1B', color: '#fff' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Student ID</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Name</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Email</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Branch</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Year</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{student.id}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{student.name}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{student.email}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{student.branch}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{student.year}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}><Attendance studentId={student.id} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
