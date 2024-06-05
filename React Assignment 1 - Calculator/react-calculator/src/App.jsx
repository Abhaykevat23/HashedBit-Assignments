import { useState } from 'react'
import './App.css'

function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState()
  const getnumval1 = (e) => {
    setNum1(e.target.value);
  }
  const getnumval2 = (e) => {
    setNum2(e.target.value);
  }
  const add = () => {
    setResult(Number(num1) + Number(num2));
  }
  const sub = () => {
    setResult(Number(num1) - Number(num2));
  }
  const mul = () => {
    setResult(Number(num1) * Number(num2));
  }
  const div = () => {
    setResult(Number(num1) / Number(num2));
  }
  return (
    <>
      <input type="number" name="num1" id="" value={num1} onChange={getnumval1} />
      <input type="number" name="num2" id="" value={num2} onChange={getnumval2} />
      <br />
      <button onClick={add}> + </button>
      <button onClick={sub}> - </button>
      <button onClick={mul}> x </button>
      <button onClick={div}> / </button>
      <h2>Your Answer Is : {result}</h2>
    </>
  )
}

export default App
