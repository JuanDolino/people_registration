import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

function Menu() {
  function changeToMenu() {
    const closeIcon = document.querySelector(".close-icon");
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");

    menuIcon.classList.remove("hide-icon");
    closeIcon.classList.remove("show-icon");
    menu.classList.remove("show-menu");
  }

  return (
    <ul className="menu">
      <li><Link to="/" onClick={changeToMenu}>Home</Link></li>
      <li><Link to="/people/new" onClick={changeToMenu}>Add a people</Link></li>
    </ul>
  );
}

export default Menu;
