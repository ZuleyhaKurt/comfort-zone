
import './App.css';
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import ProductsPage from './pages/ProductsPage';
import { Provider } from 'react-redux';
import store from './app/store';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FavoritePage from './pages/FavoritePage';
import RegisterPage from './pages/RegisterPage';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage/>} />
          
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/cart' element={<CartPage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/favorite' element={<FavoritePage/>} />
        </Routes>
      <Footer/>
      </BrowserRouter>
      </Provider>
   
  );
}

export default App;
