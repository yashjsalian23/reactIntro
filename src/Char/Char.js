import React from "react";
import "./CHar.css";

const char = (props) => {
const c=props.charachte;
return <input className="char" type="text" onClick={props.clicked} value={c}></input>   
}

export default char;