import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import InvoicePage from './pages/InvoicePage';
import AccountPage from './pages/AccountPage';
import SideBar from './components/SideBar';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <AppHeader />
        {/* <div className="main-container"> */}
        <SideBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/invoice' element={<InvoicePage />} />
          <Route path='/account' element={<AccountPage />} />
        </Routes>
        {/* </div> */}
        <AppFooter />
      </BrowserRouter>
    </div>
  );
}


export default App;
