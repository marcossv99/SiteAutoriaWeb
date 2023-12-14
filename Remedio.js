import React, { useState } from "react";
import "./remedio.css"

const Remedio = (props) => {
  const [nome, setNome] = useState("");
  const [marca, setMarca] = useState("");

  const salvarRemedio = () => {
    const remedio = { nome, marca };
    const remediosSalvos = JSON.parse(localStorage.getItem("remedios"))
    || []
    remediosSalvos.push(remedio)
    localStorage.setItem("remedios", JSON.stringify(remediosSalvos))

     // Adiciona um alerta para indicar que os dados foram salvos com sucesso
     alert("Remédio salvo com sucesso!");

     // Limpa os campos do formulário após salvar
     setNome("");
     setMarca("");
     props.voltarParaHome();
  };

  return (
    <div className="container">
      <div className="titulo">
        <h2>Adicionar Remédio</h2>
      </div>
      <div className="container-input"> 
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome do Remédio"
      />
      <input
        type="text"
        value={marca}
        onChange={(e) => setMarca(e.target.value)}
        placeholder="Marca do Remédio"
      />
      <button onClick={salvarRemedio}>Salvar</button>
      <button onClick={props.voltarParaHome}>Cancelar</button>
      </div>
    </div>
  );
};

export default Remedio;
