import React from "react";
import { useState } from 'react'
import './scss/App.scss'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home.jsx'
import HomeHeader from "./components/HomeHeader.jsx";
import OrganizationsHome from "./components/OrganizationsHome.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";

function App() {

  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/organizations" element={<OrganizationsHome />} />
          </Routes>
      </Router>
  )
}

export default App
