import React from 'react';

import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <Sidebar />
            <main className="w-screen">
              <HomePage></HomePage>
            </main>
          </div>
        }
      />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
