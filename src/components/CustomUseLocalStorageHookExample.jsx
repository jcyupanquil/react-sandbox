import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

function CustomUseLocalStorageHookExample() {

  const [task, setTask] = useLocalStorage('task', '');
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const onSubmit = (e) => {
    e.preventDefault();

    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString
    };

    setTasks([...tasks, taskObj]);
  }

  return (<>
    <form onSubmit={onSubmit} className='w-25'>
      <div className='mb-3'>
        <label className='form-label'>Task</label>
        <input className='form-control' type='text' value={task} onChange={e => setTask(e.target.value)} />
      </div>

      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>

    {tasks &&
      tasks.map((taskItem, index) => {
        return <h4 key={index} >{taskItem.task}</h4>
      })
    }

  </>)
}

export default CustomUseLocalStorageHookExample
