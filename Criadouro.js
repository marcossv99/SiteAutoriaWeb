import React, { useState, useEffect } from "react";
import "./criadouro.css";

const Criadouro = ({ criadouro, onSalvar, setOpcao }) => {
  const [especie, setEspecie] = useState(criadouro ? criadouro.especie : "");
  const [ambiente, setAmbiente] = useState(criadouro ? criadouro.ambiente : "");
  const [tempo, setTempo] = useState(criadouro ? criadouro.tempo : "");
  const [pesoInicial, setPesoInicial] = useState(criadouro ? criadouro.pesoInicial : "");
  const [imagem, setImagem] = useState(criadouro ? criadouro.imagem : null);
  const [imagemURL, setImagemURL] = useState(null);

  const tratarClick = () => {
    const novoCriadouro = {
      especie,
      ambiente,
      tempo,
      pesoInicial,
      imagem,
    };
    const criadourosAntigos = JSON.parse(localStorage.getItem("criadouros")) || [];
    const novaListaCriadouros = [...criadourosAntigos, novoCriadouro];
    localStorage.setItem("criadouros", JSON.stringify(novaListaCriadouros));
    onSalvar(novoCriadouro);
    setEspecie("");
    setAmbiente("");
    setTempo("");
    setPesoInicial("");
    setImagem(null);
    setImagemURL(null);
    alert("Dados salvos com sucesso!");
    setOpcao(null);  // Adicionado para voltar ao componente Home

  };

  const tratarImagem = (e) => {
    const file = e.target.files[0];
    setImagem(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagem(reader.result);
      setImagemURL(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImagem(null);
      setImagemURL(null);
    }
  };

  const tratarCancel = () => {
    setEspecie("");
    setAmbiente("");
    setTempo("");
    setPesoInicial("");
    setImagem(null);
    setImagemURL(null);
  };

  return (
    <div class="container">
      <div class="titulo">
        <h1>Criar</h1>
      </div>
      <div class="form-container">
        <form>
          <br></br>
          <div class="imagem">
            <label>
              <img id="add-imagem"></img>
              <input type="file" onChange={tratarImagem} />
            </label>
            {imagemURL && <img src={imagemURL} alt="Imagem do Criadouro" />}
          </div>
          <br></br>
          <label>
            <br></br>
            <input
              type="text"
              value={especie}
              onChange={(e) => setEspecie(e.target.value)}
              placeholder="Nome:"
              required
            />
          </label>
          <br></br>
          <label>
            <br></br>
            <input
              type="text"
              value={ambiente}
              onChange={(e) => setAmbiente(e.target.value)}
              placeholder="Ambiente:"
              required
            />
          </label>
          <br></br>
          <label>
            <br></br>
            <input
              type="text"
              value={tempo}
              onChange={(e) => setTempo(e.target.value)}
              placeholder="Tempo(estimado):"
              required
            />
          </label>
          <br></br>
          <label>
            <br></br>
            <input
              type="text"
              value={pesoInicial}
              onChange={(e) => setPesoInicial(e.target.value)}
              placeholder="Peso Inicial(g):"
              required
            />
          </label>
          <br></br>
          <div class="buttons">
            <button type="button" onClick={tratarClick}>
              Enviar
            </button>
            <button
              type="button"
              onClick={tratarCancel}
            >
              Voltar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Criadouro;
