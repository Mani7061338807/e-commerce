
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './components/Home';
import Cantact from './components/Cantact';
import Products from './components/Products';

import About from './components/About';
import Login from './components/Login';
import Sinup from './components/Sinup';
import Product from './components/Product';
function App() {
  return (
      <>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Cantact' element={<Cantact/>}/>
        <Route path='/Products.jsx' element={<Products/>}/>
        <Route path='/Products/:id' element={<Product/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Sinup' element={<Sinup/>}/>

      </Routes>
      
       
     
      
      </>
  );
}

export default App;
