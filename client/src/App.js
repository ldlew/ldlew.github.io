import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import CreateCharacter from './components/CreateNewCharacter/CreateNewCharacter';

const App = () => (
  <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/create" element={<CreateCharacter/>} />
      </Routes>
  </BrowserRouter>
);

export default App;