import React from "react";
import { useState } from 'react'
import './scss/App.scss'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home.jsx'

function App() {

  return (
      <Router>
        <Route path="/" component={Home} />
      </Router>
  )
}

export default App
