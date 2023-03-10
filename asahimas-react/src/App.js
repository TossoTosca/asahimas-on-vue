import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const requireAuth = (component) => {
    if (isLoggedIn) {
      return component;
    } else {
      return <Navigate to="/login" />;
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path='/product' element={<ProductPage />} />

        </Routes>

      </BrowserRouter>
      <AppFooter />

    </div>
  );
}

export default App;
