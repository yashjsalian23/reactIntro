import React from 'react';


let messageArray =["Too Short" , "Optimum", "Too Long"];
let index=0;
const validation = (props) =>{
    const cl=props.contentLength;
    if(cl<5)
    {index=0;}
    if(cl===5)
    {index=1;}
    if(cl>5)
    index=2;
    
    return <div>
     <p>{messageArray[index]}</p>
    </div>
        
}

export default validation;