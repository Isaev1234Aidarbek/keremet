import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../Images/logo.jpeg";
import "../style/comp.css";
import { FaCartShopping } from "react-icons/fa6";

export default function Header({ cart, phonesData, searchPhones }) {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (event) => {
    const query = event.target.value;
    setSearch(query);
    if (query.trim() !== '') {
      const results = searchPhones(query);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleProductClick = (id) => {
    setSearchResults([]);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ duration: 4 }}>
      <div className="header">
        <motion.div className="header-logo" whileHover={{ scale: 1.04 }} whileTap={{ scale: 1.1}}>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </motion.div>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? (
            <div className="burger-menu close-icon" onClick={toggleMenu}></div>
          ) : (
            <div className="burger-menu"></div>
          )}
        </div>

        <div className={menuOpen ? 'header-nav header-nav-open' : 'header-nav'}>
          
          {!menuOpen && (
            <input
              type="text"
              placeholder="Что ищем?"
              value={search}
              onChange={handleChange}
            />
          )}

          <div className="result">
            {searchResults.map((phone) => (
              <div key={phone.id} onClick={() => handleProductClick(phone.id)}>
                <p>{phone.title}</p>
              </div>
            ))}
          </div>

          <Link to="/" className="nav-link" onClick={closeMenu}>Главная</Link>
          <Link to="/catalog" className="nav-link" onClick={closeMenu}>Каталог</Link>
          <Link to="/about" className="nav-link" onClick={closeMenu}>О нас</Link>
          <Link to="/contact" className="nav-link" onClick={closeMenu}>Контакт</Link>
          <Link to="/cart" className="nav-link" onClick={closeMenu}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <FaCartShopping />
            </motion.div>
          </Link>
        </div>

        {menuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
      </div>
    </motion.header>
  );
}













