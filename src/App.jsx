


import React, { useState } from "react";
import './App.css';
import BMI from './assets/image.jpg';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState('');
  const [err, setErr] = useState('');
  

  const clearall=()=>{
    setBmi(null);
    setBmiStatus('');
    setHeight('');
    setWeight('');

  }

  const calculateBmi = () => {
    const validHeight = /^\d+$/.test(height);
    const validWeight = /^\d+$/.test(weight);

    if (validHeight && validWeight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));

      if (bmiValue < 18.5) {
        setBmiStatus('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiStatus('Normal Weight ');
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBmiStatus('Overweight');
      } else if  (bmiValue >= 30 && bmiValue < 34.9) {
        setBmiStatus('Obese');
      }
      else{
        setBmiStatus('Extremely Obese')
      }
      setErr('');
    } else {
      setBmi(null);
      setBmiStatus(''); // Clear the status when there's an error
      setErr('Please enter valid numeric values for height and weight.');
    }
  };

  return (
    <>
      <div className="bmi-container">
        <div className="box">
          <img src={BMI} alt="BMI Chart" />
        </div>
        <div className="data">
          <h1>BMI Calculator</h1>
          {err && <p className="err">{err}</p>}
          <div className="input-container">
            <label htmlFor="height">Height (cm)</label>
            <input
              type="text"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div className="input-container">
            <label htmlFor="weight">Weight (kg)</label>
            <input
              type="text"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <button onClick={calculateBmi}>Calculate BMI</button>
          <button onClick={clearall}>Clear</button>

          {bmi !== null && (
            <div className="result">
              <p>Your BMI is: <span>{bmi}</span></p>
              <p>Status:  <span>{bmiStatus}</span></p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
