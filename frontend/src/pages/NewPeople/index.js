import React from 'react';

import Header from '../../components/Header';

import Menu from '../../components/Menu';

import { FiPlus, FiArrowLeft } from 'react-icons/fi';

import { Link } from 'react-router-dom';
 
import api from '../../services/api';

import './styles.css';

function NewPeople() {
  async function handleAddPeople() {
    const name = document.querySelector(".input-name").value;

    const age = document.querySelector(".input-age").value;
    
    await api.post("people", {
      name,
      age
    })
  }

  return (
    <>
      <Header/>
      
      <Menu/>

      <div className="new-people-container">
        <div>
          <h1>Register People</h1>
          <div className="group-input">
            <input type="text" placeholder="Name:" className="input-name"/>
            <input type="text" placeholder="Age:" className="input-age"/>
          </div>

          <div className="group-button">
            <button><Link to="/"><FiArrowLeft style={{ width: "20px", height: "20px" }} color={"#6F66D8"} />Back to home</Link></button>
            <button><Link to="/" onClick={handleAddPeople}><FiPlus style={{ width: "20px", height: "20px" }} color={"#6F66D8"}/>Add new people</Link></button>
          </div>

        </div>
      </div>
    </>
  );
}

export default NewPeople;