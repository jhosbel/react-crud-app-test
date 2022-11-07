import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import TaskEdit from './components/TaskEdit';
import MainTasks from './components/MainTasks';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='Navbar'>
        <Link className='left' to="/">Inicio</Link>
      </div>
        <Routes>
          <Route path='/' element={<MainTasks/>} exact></Route>
          <Route path='/edit/:id' element={<TaskEdit/>} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
