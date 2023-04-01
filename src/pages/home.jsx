import React, { useEffect, useState } from "react";
import Square from "../components/square";
import "./style.css";
//componentizar 
function Home() {
  const [target, setTarget] = useState();
  const [count, setCount] = useState(0);
  const [jogadasOne, setJogadorOne] = useState(0); //estudar
  const [jogadasTwo, setJogadorTwo] = useState(0);
  const [resultado, setResultado] = useState(false);
  const [jogadas, setJogadas] = useState(["", "", "", "", "", "", "", "", ""])
  let jogada
  const handleClick = (event) => {
    console.log("winner", target, jogadas)
    setTarget(event.target.textContent);
    if (count % 2 === 0) {
      jogadas = jogadas.find(x=> 
         jogada = [...jogadas, jogadas[event.target.id] = "O"], 
         setJogadas(jogada)
        )
      event.target.textContent = "O";
      setJogadorOne(jogadasOne + 1);
    } else {
      event.target.textContent = "X";
      //jogadas = jogadas.find(x=> x[event.target.id]== "O")
      setJogadorTwo(jogadasTwo + 1);
    }
    setCount(count + 1);
  };

  // 123 456 789 147 258 369 159 357

  useEffect(() => {

    if(winner){
      setResultado(true);
    }

  }, [jogadasOne, jogadasTwo]);


  const winner = () => {
    
    return false
  };

  const finish = () => {
    if(jogadasOne + jogadasTwo === 9 || resultado === true){
      jogadasOne = 0;
      jogadasTwo = 0;
      jogadas = ["", "", "", "", "", "", "", "", ""];
    }
      };

  return (
    <div className="container">
      <div className="status">
        <label>Jogador O</label>
        <span>{jogadasOne} jogadas</span>
        <label>Jogador X</label>
        <span>{jogadasTwo} jogadas</span>
        <label>Vencedor</label>
        {resultado && <span>O</span>}
      </div>
      <div className="board">
        {jogadas.map((quadrado, index) => (
          <Square nome={quadrado} key={index} id={index} event={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default Home;
