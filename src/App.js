import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, SetName] = useState("");
  const [age, SetAge] = useState(0);
  const [arrayNams, SetArrayName] = useState([]);

  const addPerson = () => {
    console.log(arrayNams);
    SetArrayName([...arrayNams, { name: name, age: age }]);
  };

  return (
    <div className="form">
      <h1>Formulario de Registro</h1>
      <input
        type="text"
        placeholder="Nombre"
        onChange={(event) => {
          SetName(event.target.value);
        }}
      ></input>
      <input
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
