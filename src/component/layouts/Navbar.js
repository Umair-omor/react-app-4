import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [nevMenu, setNevMenu] = useState(true);

  return (
    <nav className="main-nav">
      <div>
        <NavLink to="/" className="nav-icon">
          <img src="../img/3.png" className='logo-img' alt="logo" />
          <p className='logo-font'>mair</p>
        </NavLink>
      </div>
      <div className="small-nav" onClick={() => setNevMenu(!nevMenu)} >
        {
          nevMenu ? (
            <GoThreeBars className='small-nav-icn' />
          ) : (
            <CgClose className='small-nav-icn' />
            )
        }  
      </div>
      <div className={nevMenu ? "nav-button" : "nav-button active"}>
        <NavLink to="/" className="font" onClick={() => setNevMenu(!nevMenu)}>Home</NavLink>
        <NavLink to="/about" className="font" onClick={() => setNevMenu(!nevMenu)}>About</NavLink>
        <NavLink to="/products" className="font" onClick={() => setNevMenu(!nevMenu)}>Product</NavLink>
        <NavLink to="/contact" className="font" onClick={() => setNevMenu(!nevMenu)}>Contact</NavLink>
        <NavLink to="/cart"  className="font cart-icon" onClick={() => setNevMenu(!nevMenu)}><AiOutlineShoppingCart /></NavLink>
      </div>
    </nav>
  )
}

export default Navbar
