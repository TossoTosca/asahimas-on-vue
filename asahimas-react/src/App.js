import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "swiper/swiper.min.css"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AppHeader from './components/AppHeader';
// import AppFooter from './components/AppFooter';
import InvoicePage from './pages/InvoicePage';
import AccountPage from './pages/AccountPage';
import SideBar from './components/SideBar';
import DashBoardPage from './pages/DashBoardPage';
import MyProductPage from './pages/MyProductPage';


function App() {
  const accessToken = localStorage.getItem('accessToken');

  return (
    <div className="App">


      <BrowserRouter>

        <AppHeader />
        {accessToken ? (
          <div className="side-container" style={{ display: 'flex' }}>
            <SideBar />

            <Routes>
              <Route path='/dashboard' element={<DashBoardPage />} />
              <Route path='/product' element={<ProductPage />} />
              <Route path='/history' element={<MyProductPage />} />
              <Route path='/invoice' element={<InvoicePage />} />
              <Route path='/account' element={<AccountPage />} />
            </Routes>
          </div>
        ) : (
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
