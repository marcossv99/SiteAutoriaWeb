import React, { useState } from "react";
import "./edicaoUsuario.css";
const EdicaoUsuario = ({ dadosUsuario, onCancelar }) => {
  const [usuarioEditado, setUsuarioEditado] = useState({
    nome: dadosUsuario.nome,
    senha: dadosUsuario.nome,
    usuario: dadosUsuario.usuario,
    telefone: dadosUsuario.telefone,
  });

  const tratarAlteracao = (e) => {
    const { name, value } = e.target;
    setUsuarioEditado((prev) => ({ ...prev, [name]: value }));
  };
  const tratarEdicao = () => {
    //atualizar os dados do localstorage
    localStorage.setItem("usuario", JSON.stringify(usuarioEditado));

    alert("usuario salvo com sucesso!");

  };

  const tratarCancel = () => {
    //chama a funcao de cancelar para esconder o componenete de edicao
    onCancelar();
  };
  return (
    <div className="container">
      <div className="titulo-edicaoUsuario">
        <h2>Editar Usuário</h2>
      </div>
      <div className="formulario-edicao"> 
      <label>
        Nome:
        <input
          type="text"
          name="nome"
          value={usuarioEditado.nome}
          onChange={tratarAlteracao}
        />
      </label>
      <label>
        Senha:
        <input
          type="password"
          name="senha"
          value={usuarioEditado.senha}
          onChange={tratarAlteracao}
        />
      </label>
      <label>
        Usuário:
        <input
          type="text"
          name="usuario"
          value={usuarioEditado.usuario}
          onChange={tratarAlteracao}
        />
      </label>
      <label>
        Telefone:
        <input
          type="text"
          name="telefone"
          value={usuarioEditado.telefone}
          onChange={tratarAlteracao}
        />
      </label>
      <div className="botoes-edicao">
        <button onClick={tratarEdicao}>Salvar</button>
        <button onClick={tratarCancel}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default EdicaoUsuario;
