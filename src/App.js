import { useState } from "react";
import './App.css';

function App() {
  // Taulukko pudotusvalikkoja varten
  const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  const [weight, setWeight] = useState('')
  const [gender, setGender] = useState("male")
  const [bottles, setBottles] = useState(1)
  const [time, setTime] = useState(1)
  const [result, setResult] = useState(0)

  // Laskentakaava veren alkoholipitoisuuden laskemiseksi
  const calculate = () => {
    let bloodAlcoholLevel = 0;
    let liters = bottles * 0.33
    let grams = liters * 8 * 4.5
    let burning = weight / 10
    let gramsLeft = grams - (burning * time)

    // Lasketaan veren alkoholipitoisuus riippuen sukupuolesta
    if(gender === "male") {
      bloodAlcoholLevel = gramsLeft / (weight * 0.7)
    } else {
      bloodAlcoholLevel = gramsLeft / (weight * 0.6)
    }

    // Tarkistetaan, ettei alkoholipitoisuus ole negatiivinen
    if(bloodAlcoholLevel < 0) {
      bloodAlcoholLevel = 0;
    }
    setResult(bloodAlcoholLevel)
  }

  return (
    <div id="container">
      <h2>Calculating alcohol blood level</h2>
      <div>
        <label>Weight</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Bottles</label>
        <select value={bottles} onChange={(e) => setBottles(e.target.value)}>
          {
            numbers.map(bottles => (
              <option key={bottles}>{bottles}</option>
            ))
          }
        </select>
      </div>
      <div>
        <label>Time</label>
        <select value={time} onChange={(e) => setTime(e.target.value)}>
          {
            numbers.map(time => (
              <option key={time}>{time}</option>
            ))
          }
        </select>
      </div>
      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" defaultChecked
          onChange={(e) => setGender(e.target.value)}/>
        <label>Male</label>
        <input type="radio" name="gender" value="female" onChange={(e) => setGender(e.target.value)} />
        <label>Female</label>
      </div>
      <div>
        <output>{result.toFixed(2)}</output>
      </div>
      <div>
        <button type="button" onClick={calculate}>Calculate</button>
      </div>
    </div>
  );
}

export default App;
