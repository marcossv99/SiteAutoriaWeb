import React, { useState } from "react";
import Cadastro from "./Cadastro";
import Login from "./Login";
import Home from "./Home";
import Criadouro from "./Criadouro";
import "./app.css";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const [usuario, setUsuario] = useState("");
  const [opcao, setOpcao] = useState(null);

  const uCadastro = (nome) => {
    setUsuario(nome);
    setOpcao(null);
  };
  const uLogin = (nome) => {
    setUsuario(nome);
    setOpcao(null);
  };

  const opcaoSelecionada = (opcao) => {
    setOpcao(opcao);
  };
  const cancelar = () => {
    setOpcao(null);
  };

  return (
    <Router>
      <div>
        {usuario ? (
          <Home usuario={usuario} />
        ) : (
          <div className="container">
            <div className="wel-container">
              <div className="logo"></div>
              <p>Aquicultura 2.0</p>
            </div>
            <div class="container-button">
              {!opcao && (
                <div>
                  <p className="texto">Se não possuir cadastro</p>
                  <button onClick={() => setOpcao("cadastro")} id="cadastro">
                    Cadastrar
                  </button>
                </div>
              )}
              {!opcao && (
                <div>
                  <p className="texto">Se possuir cadastro</p>
                  <button onClick={() => setOpcao("login")} id="login">
                    Login
                  </button>
                </div>
              )}
              {opcao === "cadastro" && (
                <Cadastro onCadastro={uCadastro} onCancel={cancelar} />
              )}
              {opcao === "login" && (
                <Login onLogin={uLogin} onCancel={cancelar} />
              )}
            </div>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
