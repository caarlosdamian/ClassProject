import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [name, SetName] = useState("");
  const [age, SetAge] = useState(0);
  const [arrayNams, SetArrayName] = useState([]);
  const nameInput = useRef(null);
  const ageInput = useRef(null);

  const addPerson = () => {
    console.log(arrayNams);
    SetArrayName([...arrayNams, { name: name, age: age }]);
    nameInput.current.value=""
    ageInput.current.value=""
    };

  return (
    <div className="form">
      <h1>Formulario de Registro</h1>
      <input
        ref={nameInput}
        type="text"
        placeholder="Nombre"
        onChange={(event) => {
          SetName(event.target.value);
        }}
      ></input>
      <input
        ref={ageInput}
        type="number"
        placeholder="Edad"
        onChange={(event) => {
          SetAge(event.target.value);
        }}
      ></input>
      <button onClick={addPerson}>Agregar Usuario</button>

      {arrayNams.map((val, key) => {
        return (
          <p key={key}>
            Nombre: {val.name} Edad: {val.age}
          </p>
        );
      })}
    </div>
  );
}

export default App;
