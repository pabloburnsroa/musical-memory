import React from 'react';
import { useState } from 'react';
import AddInput from '../add-input/AddInput.component';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <h2>Todo App</h2>
      <AddInput todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;
