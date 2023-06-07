import React from 'react';
import Todo from './Todo';
import { useState } from 'react';

function UseRefMemoryLeak() {

  const [showTodo, setShowTodo] = useState(true);

  return (
    <div>
      {showTodo && <Todo></Todo>}

      <button className='btn btn-primary'
      onClick={() => setShowTodo(!showTodo)}>
        Toggle TODO
      </button>
    </div>
  )
}

export default UseRefMemoryLeak
