import React from 'react';
import { useState, useCallback } from 'react';

function UseCallbackExample() {

  const [tasks, setTasks] = useState([]);

  const addTask = useCallback(() => {
    setTasks(prevState => [...prevState, 'Some Task'])
  }, [setTasks]);

  return (
    <div>
      <AnotherComponent></AnotherComponent>
      <Button addTask={addTask}></Button>
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  )
}

// Would re-render if it wasn't because o the useCallback usage
const Button = React.memo(({ addTask }) => {
  console.log('Button Rendered!');

  return <div>
    <button className='btn btn-primary'
      onClick={addTask}>Add Task</button>
  </div>
});

// This doesn't re-render because no parameter is used + React.memo
const AnotherComponent = React.memo(() => {
  console.log('Another component rendered!');
  return <div>Another Component content</div>
});

export default UseCallbackExample
