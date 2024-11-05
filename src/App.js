
import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import './App.css';
import Done from './Done';
import { useDispatch,useSelector } from 'react-redux';
import { setCheck, setTodo } from './Slices/Todo';
import { setDone } from './Slices/Done';
function App() {
  const users=useSelector((state)=>state.TodoInfo.Todo);
  const comp=useSelector((state)=>state.DoneInfo.Done);
   const Id=useSelector((state)=>state.TodoInfo.Id);
  const dispatch=useDispatch();
  const [task, setTask] = useState('');
  //const [tasks, setTasks] = useState(localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []);
 // const [Id, setId] = useState(localStorage.getItem('id') ? JSON.parse(localStorage.getItem('id')) : 0);
 // const [done, setDone] = useState(localStorage.getItem('did') ? JSON.parse(localStorage.getItem('did')) : []);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('tasks', JSON.stringify(tasks));
  //   localStorage.setItem('id', JSON.stringify(Id));
  // }, [tasks, Id]);

  // useEffect(() => {
  //   localStorage.setItem('did', JSON.stringify(done));
  // }, [done]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      const newTask = {
        id: Id,
        text: task,
        isChecked: false,
    //    date:Date()
      };
      //setTasks([...tasks, newTask]);
      setTask('');
      //setId(Id + 1);
dispatch(setTodo(newTask));
console.log(users);
    }
  };

  const handleCheck = (id) => {
  //  const check=useSelector((state)=>state.TodoInfo.Todo);

    const updatedTasks = users.map((t) =>
      t.id === id ? { ...t, isChecked: !t.isChecked } : t
    );
    dispatch(setCheck(updatedTasks));
  console.log(users);
  };

  const deleteTasks = () => {
    const updatedTasks = users.filter((task) => !task.isChecked);
    dispatch(setCheck(updatedTasks));
    const tasksDone = users.filter((task) => task.isChecked);
    dispatch(setDone(tasksDone));
console.log(comp);
    // const exist = localStorage.getItem('did') ? JSON.parse(localStorage.getItem('did')) : [];
    // setDone([...exist, ...tasksDone]);
    // localStorage.setItem('did', JSON.stringify([...exist, ...tasksDone]));
    // setTasks(updatedTasks);
  };



  const handleTaskCompletion = () => {
    deleteTasks(); 
  
  };

  return (
    <>
    <BrowserRouter>
    <Routes>  
      <Route path='/' element={
      <div className="todo">
        <h3 className="heading">TO-DO APPLICATION</h3>
        <form onSubmit={handleSubmit} className="TODO">
          <input
            type="text"
            value={task}
            onChange={handleInputChange}
            ref={inputRef}
            placeholder="Enter the event"
            className="Input"
          />
          <button type="submit" className="submit">
            Add Task
          </button>
        </form>

        <ul>
          {users.map((t) => (
            <div key={t.id} className="task-item">
              <input
                className="check-box"
                type="checkbox"
                checked={t.isChecked}
                onChange={() => handleCheck(t.id)}
              />
              <li className="display">{t.text}</li>
            </div>
          ))}
        </ul>

        <button type="button" onClick={handleTaskCompletion} className="delete">
          Task done
        </button>


         <Link to="/done" className="view-completed-tasks">View Completed Tasks</Link>

         </div> 
      }/>

          <Route path="/done" element={<Done />} />



       
      </Routes>  
      </BrowserRouter> 
    </>
  );
}

export default App;
