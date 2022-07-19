import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddInput = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState('');
  const addTodo = () => {
    if (!todo) return;
    let newTodo = {
      id: uuidv4(),
      task: todo,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTodo('');
  };
  return (
    <div>
      <input
        placeholder="Add a new todo here..."
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button onClick={addTodo}>Add todo</button>
    </div>
  );
};

export default AddInput;
