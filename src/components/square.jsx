import React from "react";
import "./style.css";

function Square({nome, event, id}){
   return(
    <button id={id} onClick={event}>
        {nome}
    </button>
   );
}

export default Square;