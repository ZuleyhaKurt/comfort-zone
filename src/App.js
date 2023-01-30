
import './App.css';
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import ProductsPage from './pages/ProductsPage';
import ErrorPage from './pages/ErrorPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
        <Route path='/cart' element={<CartPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route  element={<ErrorPage />} />
      </Routes>
    
    </BrowserRouter>
   
  );
}

export default App;
