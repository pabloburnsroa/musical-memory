import React from 'react';
import { Link } from 'react-router-dom';

const TodoFooter = ({ incompleteTasks }) => {
  return (
    <div>
      <p data-testid="p1">
        {incompleteTasks} {incompleteTasks === 1 ? 'task' : 'tasks'} left
      </p>
      <Link to="/followers">Followers</Link>
    </div>
  );
};

export default TodoFooter;
