import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [ltps, setLtps] = useState('');
  const [credits, setCredits] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get('http://localhost:3001/api/courses/allcourses');
        setCourses(res.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setMessage('Error fetching courses: ' + error.message);
      }
    };
    fetchCourses();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/api/courses/register', { name, code, ltps, credits: parseInt(credits) });
      setMessage(res.data.message);
      if (res.status === 201) {
        setCourses(prevCourses => [...prevCourses, res.data.data]);
        setName('');
        setCode('');
        setLtps('');
        setCredits('');
      }
    } catch (error) {
      console.error('Error details:', error);
      setMessage('Error registering course: ' + (error.response && error.response.data ? error.response.data.message : error.message));
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Register Course</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Course Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input
          type="text"
          placeholder="Course Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
          style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input
          type="text"
          placeholder="LTPS"
          value={ltps}
          onChange={(e) => setLtps(e.target.value)}
          required
          style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input
          type="number"
          placeholder="Credits"
          value={credits}
          onChange={(e) => setCredits(e.target.value)}
          required
          style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '10px', fontSize: '16px', backgroundColor: '#B31B1B', color: '#fff', border: 'none', borderRadius: '4px' }}>
          Register Course
        </button>
      </form>
      {message && <p>{message}</p>}

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <caption><h2>Course Details</h2></caption>
        <thead>
          <tr style={{ backgroundColor: '#B31B1B', color: '#fff' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Name</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Course Code</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>LTPS</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Credits</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{course.name}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{course.code}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{course.ltps}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{course.credits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Courses;