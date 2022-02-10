import React from 'react';
import 'antd/dist/antd.css';
import 'aos/dist/aos.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { LoginComponent, RegisterComponent } from './pages/Authentication';
import { Home } from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Authentication */}
        <Route path='/login' element={<LoginComponent />} />
        <Route path='/register' element={<RegisterComponent />} />
        {/* Dashboard Routes */}
        <Route path='/' element={<Home />} />
        {/* 404 Routes */}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  );
}

export default App;
