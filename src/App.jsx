import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Cardpage } from './pages/Cardpage';
import { Error } from './pages/Error';
import { Homepage } from './pages/Homepage';
import { PageNotFound } from './pages/PageNotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/events/:id" element={<Cardpage />} />
          <Route path="/error/:errorcode" element={<Error />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
