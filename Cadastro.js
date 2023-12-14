import React, { useState } from "react";
import "./cadastro.css";

const Cadastro = ({ onCadastro, onCancel }) => {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [numeroRegistro, setNumeroRegistro] = useState("");
  const [usuario, setUsuario] = useState("");
  const [telefone, setTelefone] = useState("");



  const uCadastro = () => {
    //salvar no localstorage
    const userDados = {nome, senha, usuario, numeroRegistro, telefone}
    localStorage.setItem("usuario", JSON.stringify(userDados));

    //chamar funcao cadastro
    onCadastro(nome);
  };
  return (
    <div class="container-cadastro">
      <div className="titulo"> 
      <h2>Cadastro</h2>
      </div>
      <div class="cadastro">
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="usuario"
        ></input>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="senha"
        ></input>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          placeholder="nome"
        ></input>
        <input
          type="text"
          value={numeroRegistro}
          onChange={(e) => setNumeroRegistro(e.target.value)}
          placeholder="numero de registro"
        ></input>
        <input
          type="text"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          placeholder="telefone"
        ></input>
        <button onClick={uCadastro} id="cadastro-btn">
          Cadastrar
        </button>
        <button onClick={onCancel} id="cancelar-btn">
          Cancelar
        </button>
      </div>
    </div>
  );
};
export default Cadastro;
