import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './signup';
import Login from './login';
// import Dashboard from './dashbord';
import CompanyInfo from './companyInfo';
import Dashboard from './dashbord';

const App = () => {
  return (
    <div>
    <nav>
      <Link to="/">Signup</Link>
      <Link to="/login">Login</Link>
      <Link to="/company-info">Company Info</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/company-info" element={<CompanyInfo />} />
    </Routes>
  </div>
  );
};

export default App;
