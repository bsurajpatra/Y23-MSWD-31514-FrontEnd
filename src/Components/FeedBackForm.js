import React, { useState } from 'react';

const FeedBackForm = ({ onSubmit }) => {
  const [cName, setCName] = useState("");
  const [facName, setFacName] = useState("");
  const [commSkills, setCommSkills] = useState("1");
  const [remarks, setRemarks] = useState("NA");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFeedback = {
      name: facName,            
      course: cName,                              
      type: commSkills,          
      suggestion: remarks        
    };
    onSubmit(newFeedback);
    setCName("");
    setFacName("");
    setCommSkills("1");
    setRemarks("NA");
  };

  return (
    <form onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>Course Name:</td>
            <td><input type="text" value={cName} onChange={(e) => setCName(e.target.value)} /></td>
          </tr>
          <tr>
            <td>Faculty Name:</td>
            <td><input type="text" value={facName} onChange={(e) => setFacName(e.target.value)} /></td>
          </tr>
          <tr>
            <td>Communication Skills Rating:</td>
            <td>
              <select value={commSkills} onChange={(e) => setCommSkills(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Remarks:</td>
            <td><input type="text" value={remarks} onChange={(e) => setRemarks(e.target.value)} /></td>
          </tr>
          <tr>
            <td colSpan="2">
              <button type="submit">Submit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default FeedBackForm;
