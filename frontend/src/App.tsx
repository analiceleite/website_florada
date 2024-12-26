import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './containers/home';
import Live from './containers/live';

import { GlobalCss } from './styles/global'

function App() {
  return (
    <>
      <GlobalCss />
      <div className="App">
        <Router>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/live' element={<Live />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
