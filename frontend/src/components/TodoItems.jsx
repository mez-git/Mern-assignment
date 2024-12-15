import React from 'react';
import axios from 'axios';

function TodoItem({ todo }) {
  const handleDelete = async () => {
    const token = localStorage.getItem('token');
    await axios.delete(`http://localhost:5000/api/todos/${todo._id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    window.location.reload();
  };

  const handleToggleComplete = async () => {
    const token = localStorage.getItem('token');
    await axios.put(
      `http://localhost:5000/api/todos/${todo._id}`,
      { completed: !todo.completed },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    window.location.reload();
  };

  return (
    <li className="flex justify-between items-center p-2 border-b">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleComplete}
          className="form-checkbox"
        />
        <span className={todo.completed ? 'line-through' : ''}>{todo.title}</span>
      </div>
      <button onClick={handleDelete} className="text-red-500 hover:text-red-700">
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
