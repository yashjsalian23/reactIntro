import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Word from "./Word/Word"; 
import Validation from "./Validation/Validation"
import Char from "./Char/Char";

class App extends Component { //creating state to store content. By default its empty
  state={
     content: " ",
     //contentLength:0
  };

 
  
  textHandler = (event) => { //used to display text which is typed in the text box.
    this.setState({
      content:event.target.value,
      //contentLength:content.length()
    })
  };

  deleteCharHandler = (charIndex) =>{ //delete charachter handler when clicked
    const dupTextArray = this.state.content.split(''); //converting the string to array using split('')
    dupTextArray.splice(charIndex,1); //deleting the specific charachter using charIndex using splice
    const updatedText=dupTextArray.join(''); //converting the new updated array of chars to string using join
    this.setState({ //setState() is used to change the value of the data present in state
      content: updatedText
    });
    
  };

  render() {
    const texts=this.state.content.split(''); //this section is used to convert the string into array of chars and display them uniquely
    let splitText = (
      <div>
        {
          texts.map((text, index) =>{ //map function to associate the Char component to each element in the array.
            return <Char clicked={()=>this.deleteCharHandler(index,texts)} 
            charachte={text} />
          })
        }
      </div>
    );

    
    return (
      <div className="App">
        <h1>Assignment 2</h1>
        <Word change={this.textHandler} content={this.state.content} /> 
        <Validation  contentLength={this.state.content.length}/>
        {splitText}
      </div>
    );
  }
}

export default App;
