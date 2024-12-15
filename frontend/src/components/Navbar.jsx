import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    dispatch({ type: 'SET_USER', payload: null });
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li><Link to="/login" className="text-white hover:text-gray-400">Login</Link></li>
        <li><Link to="/signup" className="text-white hover:text-gray-400">Signup</Link></li>
        <li><Link to="/todos" className="text-white hover:text-gray-400">Todos</Link></li>
        <li><button onClick={handleLogout} className="text-white hover:text-gray-400">Logout</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
