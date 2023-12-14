import React from "react";
import "./banco.css";

const Banco = ({ criadouros, setCriadouros, editarCriadouro, voltarParaHome }) => {
  const excluirCriadouro = (index) => {
    //cria um copia do array de criadouros
    const novosCriadouros = [...criadouros];

    //remove o criadouro no indice especificado
    novosCriadouros.splice(index, 1);

    setCriadouros(novosCriadouros);

    //salva o array atualizado de volta para o localStorage
    localStorage.setItem("criadouros", JSON.stringify(novosCriadouros));
  };
  return (
    <div class="container">
        <h1>Espécies</h1>
      {criadouros.map((criadouro, index) => (
        <div key={index} class="container-banco">
          {criadouro.imagem && <img src={criadouro.imagem} alt="Imagem do Criadouro" />}
          <h2>{criadouro.especie}</h2>
          <p>Ambiente: {criadouro.ambiente}</p>
          <p>Tempo: {criadouro.tempo}</p>
          <p>Peso Inicial: {criadouro.pesoInicial}</p>
          <div class='container-btn-banco'>
          <button id="edit" onClick={() => editarCriadouro(index)}>
            Editar
          </button>
          <button id="delete" onClick={() => excluirCriadouro(index)}>
            Excluir
          </button>
          </div>
        </div>
      ))}
      <div className="buttons">
        <button onClick={voltarParaHome} id="volta-home-banco">Voltar</button>
      </div>
    </div>
  );
};

export default Banco;
