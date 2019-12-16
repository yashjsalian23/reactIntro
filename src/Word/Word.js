import React from "react";

const word = (props) => { //all the data passed inside the tag in app.js can be acessed using props
    const contentLength= props.content;
    return <div>
        <p >{props.content}</p>
        <label>Enter your text here: </label> <input onChange={props.change} type="text" value={props.content}></input>
        <p>
            <label>Length: </label><input type="text" value={contentLength.length} readOnly className="lenghtDisplay"></input>
        </p>
        
    </div>
   

}

export default word; //to export the word component