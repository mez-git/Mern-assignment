import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import './index.css'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/login"
          element={<PublicRoute element={<Login />} />}
        />
        <Route
          path="/signup"
          element={<PublicRoute element={<Signup />} />}
        />
        <Route
          path="/todos"
          element={<PrivateRoute element={<TodoList />} />}
        />
        <Route
          path="/todos/add"
          element={<PrivateRoute element={<AddTodo />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
