import React, { useState } from "react";
import "./login.css";

const Login = ({ onLogin, onCancel }) => {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  const uLogin = () => {
    //verificar no localstorage se o usuario existe
    const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

    if (
      usuarioSalvo &&
      usuarioSalvo.nome === nome &&
      usuarioSalvo.senha === senha
    ) {
      //chamar a funcao de login
      onLogin(nome);
    } else {
      alert("Usuario não encontrado. Usuario ou senha inválidos...");
    }
  };
  return (
    <div class="container-login">
      <h2>Login</h2>
      <div class="login">
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
        <button onClick={uLogin} id="login-btn">
          Entrar
        </button>
        <button onClick={onCancel} id="cancel-btn">
          Voltar
        </button>
      </div>
    </div>
  );
};

export default Login;
