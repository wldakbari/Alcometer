import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('')
  const [bottles, setBottles] = useState('')
  const [time, setTime] = useState('')
  const [gender] = useState('male');
  const [alcometer, setAlcometer] = useState(0)
  
  const laske = (e) => {
    e.preventDefault()
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - (burning * time)
    let level = 0;
    if (gender === 'male') {
      level = gramsLeft / (weight * 0.7);
    }
    else {
      level = gramsLeft / (weight * 0.6);
    }
    if (level < 0) {
      setAlcometer(0);
    }
    else {
    setAlcometer(level);
  }
  }

    return (
      <div className='tausta'>
        <h3>Calculating alcohol blood level</h3>
        <form onSubmit={laske}>
          <div>
            <label>Weight</label>
            <input type="number" value={weight} onChange={e => setWeight(e.target.value)}/>
          </div>
          <div>
          <label>Bottles</label>
            <input type="number" value={bottles} onChange={e => setBottles(e.target.value)}/>
          </div>
          <div>
          <label>Time</label>
            <input type="number" value={time} onChange={e => setTime(e.target.value)}/>
          </div>
          <div>
          <label>Gender</label>
            <input type="radio" name='gender' value='Male'/> Male
            <input type="radio" name='gender' value='Female'/> Female
          </div>
          <div>
            <output>{alcometer.toFixed(1)}</output>
          </div>
          <button>Calculate</button>
        </form>
      </div>
    );
  }
  
export default App;
