import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [inputs, setInputs] = useState({ numOne: "", numTwo: "", operation:""});
function handleChange(e) {
  const { name, value } = e.target;
  setInputs((prevInputs) => ({
    ...prevInputs,
    [name]: value,
  }));
}
const [result, setResult] = useState("");
function equation(){
  if (inputs.operation === "+"){
    setResult(Number(inputs.numOne) + Number(inputs.numTwo))
  }
  if (inputs.operation === "-"){
    setResult(Number(inputs.numOne) - Number(inputs.numTwo))
  }
  if (inputs.operation === "*"){
    setResult(Number(inputs.numOne) * Number(inputs.numTwo))
  }
  if (inputs.operation === "/"){
    setResult(Number(inputs.numOne) / Number(inputs.numTwo))
  }
  
}
  return (
    <div className="App">
      <header className="App-header">
       <input name="numOne" placeholder="numOne" onChange={handleChange}/>
       <input name="operation" placeholder="operation"  onChange={handleChange}/>
       <input name="numTwo" placeholder="numTwo"  onChange={handleChange}/>
       <button onClick={equation}>Submit</button>
       {result}
      </header>
    </div>
  );
}

export default App;
