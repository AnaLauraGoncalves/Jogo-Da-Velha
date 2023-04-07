import React from "react";
import "./style.css";

function Square({value, event}){
   return(
    <button onClick={event}>
        {value}
    </button>
   );
}

export default Square;