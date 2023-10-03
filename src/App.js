import React from 'react';
import './App.scss'
import Login from './pages/Login';
import Faxlist from './pages/Faxlist';
import { Routes, Route,} from "react-router-dom";

function App() {
  return (

    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/fax' element={<Faxlist />} />
    </Routes >







  )
}

export default App
