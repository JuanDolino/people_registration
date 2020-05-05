import React from 'react';

import { FiMenu, FiX } from 'react-icons/fi';

import './styles.css';

function Header() {
  function changeToClose() {
    const closeIcon = document.querySelector(".close-icon");
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");

    const peopleContainer = document.querySelector(".people-container");
    
    if(peopleContainer !== undefined && peopleContainer !== null) {
      if(peopleContainer.offsetHeight >= 700)
      {
        menu.style.height = `calc(${peopleContainer.offsetHeight}px + 20px)`;
      }
    }

    menuIcon.classList.add("hide-icon");
    closeIcon.classList.add("show-icon");
    menu.classList.add("show-menu");
  }

  function changeToMenu() {
    const closeIcon = document.querySelector(".close-icon");
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");

    menuIcon.classList.remove("hide-icon");
    closeIcon.classList.remove("show-icon");
    menu.classList.remove("show-menu");
  }

  return (
    <div className="container">
      <header>
        <h1>People Registration</h1>

        <FiMenu onClick={changeToClose} className="menu-icon" />
        <FiX onClick={changeToMenu} className="close-icon" />
      </header>
    </div>
  );
}

export default Header;
