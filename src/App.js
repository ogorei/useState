import React,{useState} from "react";
import './App.css';

function App() {
const [number, SetNumber]= useState(0);

function IncrementNo(){
SetNumber(number + 1);
}
 function DecrementNo(){
SetNumber(number - 1);
  
 }

  return (
    <div className="counter-container">
      <h1>Simple Counter</h1>
      <p>React-Hook= useState practice</p>
      <h1>{number}</h1>
      <button className="btn1" onClick={IncrementNo}>+</button>
      <button className="btn2" onClick={DecrementNo}>-</button>
      
    </div>
  );
}

export default App;
