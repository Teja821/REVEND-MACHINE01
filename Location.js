import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LocationPage from '../Pages/LocationPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/locator" element={<LocationPage/>} /> {/* Add route for LocationPage */}
      </Routes>
    </Router>
  );
};

export default App;
