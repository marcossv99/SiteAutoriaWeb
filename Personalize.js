import React, { useEffect, useState } from "react";

const Personalize = (props) => {
  const [tanques, setTanques] = useState([]);
  const [racoes, setRacoes] = useState([]);
  const [remedios, setRemedios] = useState([]);
  const [especies, setEspecies] = useState([]);

  useEffect(() => {
    const tanquesSalvos = JSON.parse(localStorage.getItem("tanques")) || [];
    const especiesSalvos = JSON.parse(localStorage.getItem("especies")) || [];
    const racoesSalvos = JSON.parse(localStorage.getItem("racoes")) || [];
    const remediosSalvos = JSON.parse(localStorage.getItem("remedios")) || [];

    setTanques(tanquesSalvos);
    setEspecies(especiesSalvos);
    setRacoes(racoesSalvos);
    setRemedios(remediosSalvos);
  }, []);

  const atualizarTanque = (index, especie, racao, remedio) => {
    const novosTanques = [...tanques];
    novosTanques[index] = { ...novosTanques[index], especie, racao, remedio };
    setTanques(novosTanques);
    localStorage.setItem("tanques", JSON.stringify(novosTanques));
  };

  return (
    <div className="container">
      <button onClick={props.voltarParaHome}>Voltar</button>
      <div className="titulo">
        <h2>Personalizar Tanques</h2>
      </div>
      {tanques.map((tanque, index) => (
        <div key={index}>
          <h3>{tanque.identificacao}</h3>
          <select
            onChange={(e) =>
              atualizarTanque(
                index,
                e.target.value,
                tanque.racao,
                tanque.remedio
              )
            }
          >
            {especies.map((especie, i) => (
              <option key={i} value={especie.nome}>
                {especie}
              </option>
            ))}
          </select>
          <select
            onChange={(e) =>
              atualizarTanque(
                index,
                tanque.especie,
                e.target.value,
                tanque.remedio
              )
            }
          >
            {racoes.map((racao, i) => (
              <option key={i} value={racao.nome}>
                {racao}
              </option>
            ))}
          </select>
          <select
            onChange={(e) =>
              atualizarTanque(
                index,
                tanque.especie,
                tanque.racao,
                e.target.value
              )
            }
          >
            {remedios.map((remedio, i) => (
              <option key={i} value={remedio.nome}>
                {remedio}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default Personalize;
