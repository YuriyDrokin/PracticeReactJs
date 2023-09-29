import { useState } from 'react';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([
    { id: 5432, name: "Record React Lectures", completed: true },
    { id: 8562, name: "Edit React Lectures", completed: false },
    { id: 7546, name: "Watch Lectures", completed: false }
  ]);

  return (
    <div className="App">
      <h1>Task list</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.id} - {task.name}</span>
            <button className='delete'>Delete</button>
          </li>

        ))}
      </ul>
    </div>
  );
}

export default App;
