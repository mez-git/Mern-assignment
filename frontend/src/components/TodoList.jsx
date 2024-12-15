import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import TodoItem from './TodoItems';
import { Link } from 'react-router-dom';

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    const fetchTodos = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/todos', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: 'SET_TODOS', payload: response.data });
    };

    fetchTodos();
  }, [dispatch]);

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Todos</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
        <li className="mt-4 text-center">
          <Link to="/todos/add" className="text-blue-500 hover:text-blue-700">
            Add todo
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default TodoList;
