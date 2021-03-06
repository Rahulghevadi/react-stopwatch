import React, { useEffect, useState } from 'react';
import './App.css';



function App() {
  const [timerOn, setTimeOn] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10);
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [timerOn]);
  return (


    <div className='App' >
      <div className='time'>
        <span>
          {(("0" + Math.floor(time / 60000) % 60).slice(-2))}:
          {(("0" + Math.floor(time / 1000) % 60).slice(-2))}:
          {(("0" + (time / 10) % 100).slice(-2))}
        </span>
      </div>
      <div className='buttons'>
        <button onClick={() => setTimeOn(true)}>Start</button>
        <button onClick={() => setTimeOn(false)}>Stop</button>
        <button onClick={() => setTimeOn(true)}>Resume</button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  )
}

export default App;