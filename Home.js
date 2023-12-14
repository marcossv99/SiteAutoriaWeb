import React, { useEffect, useState } from "react";
import "./home.css";
import Criadouro from "./Criadouro";
import Banco from "./Banco";
import Usuario from "./Usuario";
import Racao from "./Racao";
import Remedio from "./Remedio";
import Tanque from "./Tanque";
import Personalize from "./Personalize";

const Home = ({ usuario }) => {
  const [paginaAtual, setPaginaAtual] = useState("home");
  const [criadouros, setCriadouros] = useState([]);
  const [criadouroEditando, setCriadouroEditando] = useState(null);
  const [opcao, setOpcao] = useState(null);

  useEffect(() => {
    const criadourosSalvos =
      JSON.parse(localStorage.getItem("criadouros")) || [];
    setCriadouros(criadourosSalvos);
  }, []);

  const adicionarCriadouro = () => {
    setOpcao("criadouro");
  };
  const editarCriadouro = (index) => {
    setCriadouroEditando(index);
    setOpcao("criadouro");
  };
  const adicionarRacao = () => {
    setOpcao("racao");
  };

  const adicionarRemedio = () => {
    setOpcao("remedio");
  };
  const personalizarTanque = () => {
    setPaginaAtual("personalizar");
  };
  const salvarCriadouro = (novoCriadouro) => {
    const novosCriadouros = [...criadouros];

    if (criadouroEditando != null) {
      novosCriadouros[criadouroEditando] = novoCriadouro;
    } else {
      novosCriadouros.push(novoCriadouro);
    }

    setCriadouros(novosCriadouros);
    localStorage.setItem("criadouros", JSON.stringify(novosCriadouros));
  };
  const visualizarCriadouros = () => {
    setOpcao("banco");
  };
  const visualizarUsuario = () => {
    setOpcao("usuario");
  };
  const voltarParaHome = () => {
    setPaginaAtual("home");
    setOpcao(null);
  };
  const adicionarTanque = () => {
    setOpcao("tanque");
  };
  
  return (
    <div class="container-home">
      {opcao === "criadouro" && (
        <Criadouro
          criadouro={criadouros[criadouroEditando]}
          onSalvar={salvarCriadouro}
          setOpcao={setOpcao}
        />
      )}

      {opcao === "banco" && (
        <Banco
          criadouros={criadouros}
          setCriadouros={setCriadouros}
          editarCriadouro={editarCriadouro}
          voltarParaHome={voltarParaHome}
        />
      )}
      {opcao === "racao" && <Racao voltarParaHome={voltarParaHome} />}
      {opcao === "remedio" && <Remedio voltarParaHome={voltarParaHome} />}
      {opcao === "tanque" && <Tanque voltarParaHome={voltarParaHome} />}
      {opcao === "usuario" && (
        <Usuario voltarParaHome={voltarParaHome} usuario={usuario} />
      )}
      {paginaAtual === "home" && (
        <div>
          <div class="welcome">
            <h2>Bem vindo, {usuario}.</h2>
          </div>
          <div class="container-menu">
            <button class="menu-op1" onClick={visualizarCriadouros}>
              <h2>Espécies</h2>
            </button>
            <button onClick={adicionarCriadouro} id="add-criadouro">
              <label>+</label>
            </button>
            <div className="add-buttons">
              <button onClick={adicionarRemedio} id="add-remedio"></button>
              <button onClick={adicionarRacao} id="add-racao"></button>
              <button onClick={adicionarTanque} id="add-tanque"></button>
            </div>
            <div class="menu-op2">
              <h2>Personalize</h2>
            </div>
            <button id="personalize-btn" onClick={personalizarTanque}></button>
            <button id="usuario" onClick={visualizarUsuario}></button>
          </div>
        </div>
      )}
      {paginaAtual === "criadouro" && (
        <Criadouro
          criadouro={criadouros[criadouroEditando]}
          onSalvar={salvarCriadouro}
        />
      )}
      {paginaAtual === "banco" && (
        <Banco
          criadouros={criadouros}
          setCriadouros={setCriadouros}
          editarCriadouro={editarCriadouro}
        />
      )}
      {paginaAtual === "personalizar" && (
        <Personalize voltarParaHome={voltarParaHome} />
      )}
      {paginaAtual === "usuario" && <Usuario usuario={usuario} />}
    </div>
  );
};

export default Home;
