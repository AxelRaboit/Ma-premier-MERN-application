import React from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='rooms/*' element={ <RoomsPage /> } />
        <Route path='about' element={ <h1>À props</h1> } />
        <Route path='contact' element={ <h1>Contact</h1> } />
        <Route path='*' element={ <h1>404 Not Found</h1> } />
      </Routes>
    </Layout>
  );
}

export default App;