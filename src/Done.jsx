//import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Done.css'; 
import { useSelector } from 'react-redux';

export default function Done() {
  //const [tasks, setTasks] = useState(localStorage.getItem('did') ? JSON.parse(localStorage.getItem('did')) : []);
const done=useSelector((state)=>state.DoneInfo.Done);


  return (
    <div className="done">
      <h1>Completed Tasks</h1>
      <ul>
        {done.map((task, index) => (
          <div key={index} className="completed-task-item">   
            <li className="completed-text">{task.text}</li>
          </div>
        ))}
      </ul>
      <Link to="/" className="back-link">Back</Link>
    </div>
  );
}
