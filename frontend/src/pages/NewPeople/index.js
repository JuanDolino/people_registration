import React from 'react';

import Header from '../../components/Header';

import Menu from '../../components/Menu';

import { FiPlus, FiArrowLeft } from 'react-icons/fi';

import { Link } from 'react-router-dom';
 
import './styles.css';

function NewPeople() {
  return (
    <>
      <Header/>
      
      <Menu/>

      <div className="new-people-container">
        <div>
          <h1>Register People</h1>
          <div className="group-input">
            <input type="text" placeholder="Name:"/>
            <input type="text" placeholder="Age:"/>
          </div>

          <div className="group-button">
            <button><Link to="/"><FiArrowLeft style={{ width: "20px", height: "20px" }} color={"#6F66D8"} />Back to home</Link></button>
            <button><Link to="/"><FiPlus style={{ width: "20px", height: "20px" }} color={"#6F66D8"}/>Add new people</Link></button>
          </div>

        </div>
      </div>
    </>
  );
}

export default NewPeople;