import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';

export const TaskList = ({ info }) => {

  const [tasks, setTasks] = useState([
    { id: 5432, name: "Record React Lectures", completed: true },
    { id: 8562, name: "Edit React Lectures", completed: false },
    { id: 7546, name: "Watch Lectures", completed: false }
  ]);

  const [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <>
      <h1>Task List </h1>
      <ul>
        <button className='trigger' onClick={() => setShow(!show)}>Toggle</button>
        {show && tasks.map((task) => (
          <TaskCard key={task.id} info={info} task={task} handleDelete={handleDelete} />
        ))}
      </ul>
      <BoxCard result="success">
        <p className='title'>Lorem ipsum dolor sit amet.</p>
        <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt cupiditate reprehenderit iusto modi amet vero fugit tempore, saepe totam doloremque, rem quod corporis voluptatum porro assumenda facere reiciendis inventore.</p>
      </BoxCard>

      <BoxCard result="warning">
        <p className='title'>Lorem ipsum dolor sit.</p>
        <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt cupiditate reprehenderit iusto modi amet vero fugit tempore, saepe totam doloremque, rem quod corporis voluptatum porro assumenda facere reiciendis inventore.</p>
      </BoxCard>

      <BoxCard result="alert">
        <p className='title'>Lorem, ipsum.</p>
        <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt cupiditate reprehenderit iusto modi amet vero fugit tempore, saepe totam doloremque, rem quod corporis voluptatum porro assumenda facere reiciendis inventore.</p>
      </BoxCard>


    </>
  )
}
