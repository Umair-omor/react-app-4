import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../component/layouts/Footer'
import Navbar from '../component/layouts/Navbar'
import About from '../component/pages/About'
import Cart from '../component/pages/Cart'
import Contact from '../component/pages/Contact'
import Error from '../component/pages/Error'
import Home from '../component/pages/Home'
import Products from '../component/pages/Products'
import SingleProduct from '../component/pages/SingleProduct'


const Index = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/:id' element={<SingleProduct />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/*' element={<Error />} />
            </Routes>
        </main>
        <Footer />
    </BrowserRouter>
  )
}

export default Index;



// https://api.pujakaitem.com/api/products
