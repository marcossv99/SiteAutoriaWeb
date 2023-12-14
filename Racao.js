import React, { useState } from "react";
import "./racao.css"

const Racao = (props) => {
  const [nome, setNome] = useState("");
  const [marca, setMarca] = useState("");

  const salvarRacao = () => {
    const racao = { nome, marca };
    const racoesSalvos = JSON.parse(localStorage.getItem("racoes"))
    || [] 
    racoesSalvos.push(racao)
    localStorage.setItem("racoes", JSON.stringify(racoesSalvos))

    // Adiciona um alerta para indicar que os dados foram salvos com sucesso
    alert("Ração salva com sucesso!");

    // Limpa os campos do formulário após salvar
    setNome("");
    setMarca("");
    props.voltarParaHome();
  };

  return (
    <div className="container">
        <div className="titulo-racao">
      <h2 className="titulo">Adicionar Ração</h2>
      </div>
      <div className="input-racao">
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome da Ração"
      />
      <input
        type="text"
        value={marca}
        onChange={(e) => setMarca(e.target.value)}
        placeholder="Marca da Ração"
      />
      <button onClick={salvarRacao}>Salvar</button>
      <button onClick={props.voltarParaHome}>Cancelar</button>
      </div>
    </div>
  );
};

export default Racao;