import React from 'react';

import { FiTrash2 } from 'react-icons/fi';

import Header from '../../components/Header';

import Menu from '../../components/Menu';

import './styles.css';

function People() {
  return(
    <>
      <Header/>

      <div className="people-container">
        <h1>Registered people</h1>

        <ul className="item">
          <li>
            <strong>Id:</strong>
            <p>1</p>
            
            <strong>Name:</strong>
            <p>Teste</p>

            <strong>Age:</strong>
            <p>14</p>

            <button><FiTrash2 style={
              {
                width: "18px",
                height: "18px",
                color: "#76787f"
              }
            }/></button>
          </li>

          <li>
            <strong>Id:</strong>
            <p>1</p>

            <strong>Name:</strong>
            <p>Teste</p>

            <strong>Age:</strong>
            <p>14</p>

            <button><FiTrash2 style={
              {
                width: "18px",
                height: "18px",
                color: "#76787f"
              }
            } /></button>
          </li>

          <li>
            <strong>Id:</strong>
            <p>1</p>

            <strong>Name:</strong>
            <p>Teste</p>

            <strong>Age:</strong>
            <p>14</p>

            <button><FiTrash2 style={
              {
                width: "18px",
                height: "18px",
                color: "#76787f"
              }
            } /></button>
          </li>

          <li>
            <strong>Id:</strong>
            <p>1</p>
            
            <strong>Name:</strong>
            <p>Teste</p>

            <strong>Age:</strong>
            <p>14</p>

            <button><FiTrash2 style={
              {
                width: "18px",
                height: "18px",
                color: "#76787f"
              }
            }/></button>
          </li>

          <li>
            <strong>Id:</strong>
            <p>1</p>
            
            <strong>Name:</strong>
            <p>Teste</p>

            <strong>Age:</strong>
            <p>14</p>

            <button><FiTrash2 style={
              {
                width: "18px",
                height: "18px",
                color: "#76787f"
              }
            }/></button>
          </li>

          <li>
            <strong>Id:</strong>
            <p>1</p>

            <strong>Name:</strong>
            <p>Teste</p>

            <strong>Age:</strong>
            <p>14</p>

            <button><FiTrash2 style={
              {
                width: "18px",
                height: "18px",
                color: "#76787f"
              }
            } /></button>
          </li>
          
          <li>
            <strong>Id:</strong>
            <p>1</p>

            <strong>Name:</strong>
            <p>Teste</p>

            <strong>Age:</strong>
            <p>14</p>

            <button><FiTrash2 style={
              {
                width: "18px",
                height: "18px",
                color: "#76787f"
              }
            } /></button>
          </li>


          <li>
            <strong>Id:</strong>
            <p>1</p>

            <strong>Name:</strong>
            <p>Teste</p>

            <strong>Age:</strong>
            <p>14</p>

            <button><FiTrash2 style={
              {
                width: "18px",
                height: "18px",
                color: "#76787f"
              }
            } /></button>
          </li>

        </ul>

        <Menu/>
      </div>
    </>
  );  
}

export default People;
