import React from 'react';
import { Routes, Route } from 'react-router-dom';

function RoomsPage() {
    return (
        <Routes>
            <Route path='/' element={<h2>Rooms</h2>}></Route>
            <Route path=':id' element={<h2>Room</h2>}></Route>
        </Routes>
    )
}

export default RoomsPage