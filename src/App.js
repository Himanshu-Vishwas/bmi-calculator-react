import React, { useState } from "react";

import './index.css'

function App() {

  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')



  let calcBmi = (event) =>{
    event.preventDefault()

    if(weight ==0 || height == 0){
      alert('Enter valid data...')
    }else{
      let bmi = (weight/(height*height)*10000)
      setBmi(bmi.toFixed(1))

      if(bmi<18.5){
        setMessage('You are underweight.')
      }else if(bmi>=18.5 && bmi<25){
        setMessage('You are healthy.')
      }else if(bmi>=25 && bmi<30){
        setMessage('You are overweight.')
      }else{ 
        setMessage('You are obese.')
      }

    }
  }

  let imgSrc;
  if(bmi<1){
    imgSrc = null
  }else{
    if(bmi<18.5){
      imgSrc = require('../src/assets/under.png')
    }else if(bmi>=18.5 && bmi<25){
      imgSrc = require('../src/assets/healthy.png')
    }else{
      imgSrc = require('../src/assets/overweight.png')
    }
  }

  let reset = () =>{
    window.location.reload()
  }

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (in kg) </label>
            <input value={weight} onChange={(event) => setWeight(event.target.value )}/>
          </div>
          <div>
            <label>Height (in cms.) </label>
            <input value={height} onChange={(event)=>setHeight(event.target.value)}/>
          </div>
          <div>
            <button className="btn" type="submit">Submit</button>
            <button className="btn btn-outline" onClick={reset} type="submit">Reset</button>
          </div>
        </form>

        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
        <div className="img-container">
          <img src = {imgSrc} alt=''></img>
        </div>
        </div>
    </div>
  );
}

export default App;
