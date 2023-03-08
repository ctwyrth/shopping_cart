import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="links">
          <Link to="/"> Shop </Link>
          <Link to="cart"><ShoppingCart size={32} /></Link>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar;