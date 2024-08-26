import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { SocketProvider } from './context/SocketProvider';
import Room from './pages/Room';

export default function App() {
  return (
    <BrowserRouter>
      <SocketProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/room/:roomId' element={<Room/>}/>
      </Routes>
      </SocketProvider>
    </BrowserRouter>
  )
}
