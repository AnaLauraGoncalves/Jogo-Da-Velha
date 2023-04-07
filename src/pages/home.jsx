import React, { useEffect, useState } from "react";
import Square from "../components/square";
import "./style.css";
//componentizar
function Home() {
  const [optionStates, setOptionsState] = useState("");
  const [player, setPlayer] = useState("");
  const linha = [];
  const colunas = [];
  const [square, setSquare] = useState(Array(9).fill("")) ;

  const handleClick = (id) => {
    console.log("click");
    let variavel = [...square]
    variavel.splice(id, 1, "X")
    setSquare(variavel)
    console.log(square)
  };

  const handleChangeSelect = (e) => {
    setOptionsState(e.target.value);
    setPlayer(optionStates)
  };
  
  useEffect(() => {
    
  }, [square]);

  return (
    <div className="container">
      <div className="status">
        <select onChange={()=> handleChangeSelect} value={optionStates}>
          <option value="">Esolha o Jogador</option>
          <option value="X">Jogador X</option>
          <option value="O">Jogador O</option>
        </select>
        {optionStates ? <span>Jogador {optionStates} </span> : null}
      </div>
      <div className="board">
        {square.map((quadrado, index) => (
          <Square value={quadrado} key={index} event={()=>handleClick(index)} />
        ))}
      </div>
    </div>
  );
}

export default Home;
