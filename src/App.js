
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
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/cart' element={<CartPage />} />
          <Route path='/products' element={<ProductsPage />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
      </Provider>
   
  );
}

export default App;
