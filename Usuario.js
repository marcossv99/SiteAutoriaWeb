import React, { useEffect, useState } from "react";
import "./usuario.css";
import EdicaoUsuario from "./EdicaoUsuario";

const Usuario = (props) => {
  const [dadosCadastro, setDadosCadastro] = useState({});
  const [editando, setEditando] = useState(false);

  useEffect(() => {
    // Recupera os dados do localStorage no momento da montagem do componente
    const usuarioData = JSON.parse(localStorage.getItem("usuario")) || {};
    setDadosCadastro(usuarioData);
  }, []);

  const tratarEditar = () => {
    setEditando(true);
  };
  const tratarCancelar = () => {
    setEditando(false);
  };

  return (
    <div className="usuario-data">
      {editando && (
        <EdicaoUsuario
          dadosUsuario={dadosCadastro}
          onCancelar={tratarCancelar}
        />
      )}
      <div className="titulo">
        <h2>Dados do Usuário</h2>
      </div>
      <div className="container-data">
        <h5>
          Usuario: <p>{dadosCadastro.nome}</p>
        </h5>
        <h5>
          Senha: <p>{dadosCadastro.senha}</p>
        </h5>
        <h5>
          Nome: <p>{dadosCadastro.usuario}</p>
        </h5>
        <h5>
          Numero de Registro: <p>{dadosCadastro.senha}</p>
        </h5>
        <h5>
          Telefone: <p>{dadosCadastro.telefone}</p>
        </h5>
      </div>
      {!editando && (
        <div className="buttons">
          <button onClick={props.voltarParaHome} id="volta-home"></button>
          <button onClick={tratarEditar} id="editar-usuario"></button>
        </div>
      )}
    </div>
  );
};

export default Usuario;
