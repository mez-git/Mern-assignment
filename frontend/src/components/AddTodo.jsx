import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
const navigate=useNavigate()
  const handleAddTodo = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    const newTodo = { title, description };

    await axios.post('http://localhost:5000/api/todos', newTodo, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setTitle('');
    setDescription('');
    
    navigate('/todos')
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add a New Todo</h2>
      <form onSubmit={handleAddTodo} className="space-y-4">
        <input
          type="text"
          placeholder="Todo Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
