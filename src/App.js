import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const Herencia = (props) => {
  console.log(props.lista);
  return (
    <ul>
      {props.lista.map((l, i) => (
        <li key={i}>{l}</li>
      ))}
    </ul>
  );
};

function App() {
  const [lista, setLista] = useState([
    "pedro",
    "luis",
    "andres",
    "roxana",
    "sofia",
    "aracelly",
  ]);

  const [nombre, setNombre] = useState("");

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setNombre(event.target.value);
  };
  const aumentar = () => {
    if(!nombre)return
    setLista([...lista, nombre]);
    setNombre("");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input
          onChange={handleInputChange}
          required="required"
          value={nombre}
          type="text"
          placeholder="ingrese nombre"
        />
        <button onClick={aumentar}>aumentar</button>
        <Herencia name="Pedro" lista={lista} />
      </header>
    </div>
  );
}

export default App;
