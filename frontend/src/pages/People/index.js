import React, { useState, useEffect } from 'react';

import { FiTrash2 } from 'react-icons/fi';

import Header from '../../components/Header';

import Menu from '../../components/Menu';

import api from '../../services/api';

import './styles.css';

function People() {
  const [people, setPeople] = useState([]);

  async function handleDeletePeople(id) {
    try {
      const peopleContainer = document.querySelector(".people-container");

      const menu = document.querySelector(".menu");

      await api.delete(`people/${id}`);

      setPeople(people.filter(item => item.id !== id));

      if (peopleContainer.offsetHeight <= 700) {
        menu.style.height = `calc(100vh - 99px)`;
      }

      else {
        menu.style.height = `calc(${peopleContainer.offsetHeight}px + 20px)`;
      }

    } catch {
      alert("Error in delete people");
    }
  }

  useEffect(() => {
    api.get("people").then(res => setPeople(res.data.people));
  }, []) 

  return(
    <>
      <Header/>

      <div className="people-container">
        <h1>Registered people</h1>

        <ul className="item">
          {people.map(item => (
            <li key={item.id}>
              <strong>Id:</strong>
              <p>{item.id}</p>

              <strong>Name:</strong>
              <p>{item.name}</p>

              <strong>Age:</strong>
              <p>{item.age}</p>

              <button onClick={() => {handleDeletePeople(item.id)}}><FiTrash2 onClick={() => {handleDeletePeople(item.id)}} style={
                {
                  width: "18px",
                  height: "18px",
                  color: "#76787f"
                }
              } /></button>
            </li>
          ))}
        </ul>

        <Menu/>
      </div>
    </>
  );  
}

export default People;
