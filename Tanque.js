import React, { useState } from "react";
import "./tanque.css"

const Tanque = (props) => {
  const [identificacao, setIdentificacao] = useState("");
  const [capacidade, setCapacidade] = useState("");

  const salvarTanque = () => {
    const tanque = { identificacao, capacidade };
    const tanquesSalvos = JSON.parse(localStorage.getItem("tanques")) || []
    tanquesSalvos.push(tanque);
    localStorage.setItem("tanques", JSON.stringify(tanquesSalvos))
  };

  return (
    <div className="container">
      <div className="titulo-tanque">
        <h2>Tanque</h2>
      </div>
      <div className="input-tanque"> 
      <input
        type="text"
        value={identificacao}
        onChange={(e) => setIdentificacao(e.target.value)}
        placeholder="identificação"
      ></input>
      <input
        type="text"
        value={capacidade}
        onChange={(e) => setCapacidade(e.target.value)}
        placeholder="capacidade"
      ></input>
      <button onClick={salvarTanque}>Salvar</button>
      <button onClick={props.voltarParaHome}>Cancelar</button>
      </div>
    </div>
  );
};

export default Tanque;
